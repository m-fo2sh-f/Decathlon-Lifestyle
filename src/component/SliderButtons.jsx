import React, { useRef, useState } from 'react';
import { Box, Typography } from '@mui/material';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import LazyImage from './LazyImage';

gsap.registerPlugin(useGSAP);

export default function DualSlider({ S1Images, S2Bgcolor, btnImgaes, logo, reversed = false }) {
    const leftRef = useRef(null);
    const rightRef = useRef(null);
    const leftTlRef = useRef(null);
    const rightTlRef = useRef(null);
    const [currentIndex, setCurrentIndex] = useState(0);

    // يبني الـtimeline
    const buildTimeline = (containerRef, tlStoreRef, setIndexCb) => {
        const total = S1Images.length;
        const tl = gsap.timeline({ repeat: -1, defaults: { ease: 'power2.inOut' } });
        const filmStrip = containerRef.current.querySelector('.film-strip');
        tlStoreRef.current = tl;

        // label البداية
        tl.addLabel('slide-0', 0);

        // باقي السلايدز
        for (let i = 1; i < total; i++) {
            tl.to(filmStrip, { xPercent: -100 * i, duration: 1.2 }, '+=3')
                .add(() => setIndexCb(i))
                .addLabel(`slide-${i}`);
        }

        // بيرجع لأول سلايد
        tl.to(filmStrip, { xPercent: 0, duration: 1.2 }, '+=3')
            .add(() => setIndexCb(0))
            .addLabel('slide-0-loop');

        return tl;
    };

    // تشغيل الـtimelines
    useGSAP(() => {
        // تحقق من تطابق أطوال المصفوفات
        if (S1Images.length !== S2Bgcolor.length || S1Images.length !== btnImgaes.length) {
            console.error('Mismatch in array lengths: S1Images, S2Bgcolor, and btnImgaes must have the same length.');
            return;
        }

        leftTlRef.current = buildTimeline(leftRef, leftTlRef, (i) => setCurrentIndex(i));
        rightTlRef.current = buildTimeline(rightRef, rightTlRef, () => { });

        return () => {
            leftTlRef.current?.kill();
            rightTlRef.current?.kill();
        };
    }, [S1Images, S2Bgcolor]);

    // التنقل بين السلايدز (معدل)
    const goToSlide = (index) => {
        const leftTl = leftTlRef.current;
        const rightTl = rightTlRef.current;

        if (!leftTl || !rightTl || index === currentIndex) return;

        const label = `slide-${index}`;
        const timeForSlide = leftTl.labels[label];
        if (timeForSlide === undefined) return;

        // Pause الاتنين مؤقتًا
        leftTl.pause();
        rightTl.pause();

        // انقل مباشرة للسلايد المطلوب
        leftTl.seek(timeForSlide);
        rightTl.seek(timeForSlide);

        // أعد تشغيل الاتنين
        leftTl.play();
        rightTl.play();

        setCurrentIndex(index);
    };

    // JSX
    return (
        <Box
            sx={{
                cursor: 'pointer',
                width: '100%',
                height: '80vh',
                position: 'relative',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: reversed
                    ? { md: 'row-reverse', xs: 'column-reverse' }
                    : { md: 'row', xs: 'column' },
            }}
        >
            {/* السلايدر الشمال */}
            <Box
                className={reversed ? 'right-side' : 'left-side'}
                ref={leftRef}
                sx={{
                    width: 'auto',
                    height: '100%',
                    position: 'relative',
                    overflow: 'hidden',
                    flexGrow: 1,
                }}
            >
                <Box className="film-strip" sx={{ width: '100%', height: '100%', display: 'flex', position: 'absolute' }}>
                    {S1Images.map((src, i) => (
                        <Box key={`L-${i}`} className="slide" sx={{ width: '100%', height: '100%', flexShrink: 0 }}>
                            <LazyImage src={src} alt={`left-${i}`} sx={undefined} />
                        </Box>
                    ))}
                </Box>
            </Box>

            {/* السلايدر اليمين */}
            <Box
                className={reversed ? 'left-side' : 'right-side'}
                ref={rightRef}
                sx={{
                    flexGrow: 1,
                    width: 'auto',
                    height: '100%',
                    position: 'relative',
                    overflow: 'hidden',
                }}
            >
                <Box className="film-strip" sx={{ width: '100%', height: '100%', display: 'flex', position: 'absolute' }}>
                    {S2Bgcolor.map((bgcolor, i) => (
                        <Box key={`R-${i}`} className="slide" sx={{ width: '100%', height: '100%', flexShrink: 0, bgcolor }} />
                    ))}
                </Box>

                {/* اللوجو */}
                <Box sx={{ position: 'absolute', top: { md: '50%', xs: '70%' }, left: '50%', transform: 'translate(-50%,-50%)' }}>
                    <LazyImage src={logo} alt="logo" sx={undefined} />
                </Box>

                {/* الأزرار */}
                <Box
                    sx={{
                        position: 'absolute',
                        top: 20,
                        right: reversed ? '' : { md: 20, xs: '50%' },
                        left: reversed ? { md: 20, xs: '50%' } : '',
                        transform: { md: 'none', xs: reversed ? 'translateX(-50%)' : 'translateX(50%)' },
                        display: 'flex',
                        gap: '10px',
                        zIndex: 10,
                    }}
                >
                    {btnImgaes.map((src, index) => (
                        <Box key={index}>
                            <Box
                                onClick={() => goToSlide(index)}
                                component="img"
                                src={src}
                                sx={{
                                    zIndex: 5000,
                                    width: '80px',
                                    height: '100px',
                                    objectFit: 'cover',
                                    cursor: 'pointer',
                                }}
                            />
                            <Box sx={{ color: 'white', textAlign: 'center' }}>0{index + 1}</Box>
                        </Box>
                    ))}
                </Box>

                {/* النص */}
                <Box
                    sx={{
                        position: 'absolute',
                        bottom: 20,
                        left: '50%',
                        transform: 'translateX(-50%)',
                        color: 'white',
                        cursor: 'pointer',
                        transition: 'all .4s',
                        '&:hover': { textDecoration: 'underline' },
                    }}
                >
                    <Typography>Découvrir la gamme</Typography>
                </Box>
            </Box>
        </Box>
    );
}
