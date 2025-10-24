import React, { useRef } from 'react';
import { Box } from '@mui/material';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import LazyImage from './LazyImage';

export default function ImageSlider({ images }) {
    const sliderRef = useRef(null);

    useGSAP(() => {
        const slides = gsap.utils.toArray('.slide');
        const tl = gsap.timeline({
            repeat: -1,
        });

        slides.forEach((slide, index) => {
            if (index === 0) return;
            tl.to('.film-strip', {
                xPercent: -100 * index,
                duration: 1,
                ease: 'power4.Out',
                delay: 2
            }, "+=1")
        });
        tl.to('.film-strip', {
            xPercent: 0,
            duration: .8,
            ease: 'power2.inOut',
        }, '>100%')
    }, { scope: sliderRef, dependencies: [images] });

    return (
        <Box
            ref={sliderRef}
            sx={{
                width: '100%',
                height: '100%',
                position: 'relative',
                overflow: 'hidden',
            }}
        >
            <Box
                className="film-strip"
                sx={{
                    width: '100%',
                    height: '100%',
                    display: 'flex',

                    position: 'absolute',
                }}
            >
                {images.map((imgUrl, index) => (
                    <Box
                        key={index}
                        className="slide"
                        sx={{
                            width: '100%',
                            height: '100%',
                            flexShrink: 0,

                        }}
                    >
                        <Box sx={{ width: '100%', height: '100%' }} >
                            <LazyImage src={imgUrl} alt={index} sx={undefined} />
                        </Box>
                    </Box>
                ))}
            </Box>
        </Box>
    );
}