// HeroSection.js (أو App.js)

import React, { useRef } from 'react';
import { Box, Typography } from '@mui/material';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import heroImg from '../assets/header-5d9c286f.jpg';
import heroVideo from '../assets/Master-31B7b0a8.mp4';
import LazyLoadVideo from '../component/LazyLoadVideo';
import SplitingText from '../component/SplitText';

const HeroSection = () => {
    const containerRef = useRef(null); // Ref على الحاوية كلها




    useGSAP(() => {
        // بنعرف الـ timeline هنا
        const heroTl = gsap.timeline();

        // 1. الأنيميشن الأول: الصورة (هيشتغل الأول)
        heroTl.from('.heroimage', {
            opacity: 0.2,
            scale: 1.5,
            duration: .5,
        }).from(".videoBg", {
            scaleY: 0,
            duration: .8,
            ease: 'power3.out',
        }).from(".video", {
            opacity: 0,
            delay: .15,
            duration: .8,
            ease: 'power3.out',
        },
            "<10%"
        ).from(".char", {
            opacity: 0,
            y: 50,
            duration: .5,
            ease: 'power3.out',
            stagger: 0.1
        },
            "<50%"
        ).fromTo(
            ".horizontal-slider",
            { xPercent: 0 },
            {
                xPercent: -52,
                duration: 1,
                ease: "power3.inOut",
                stagger: 0.5,
            }
        ).fromTo(
            ".vertical-slider",
            { yPercent: 0 },
            {
                yPercent: -50,
                duration: 1,
                ease: "power3.inOut",
                stagger: 0.5,
            },
            "<50%"
        );

    }, { scope: containerRef });

    return (
        <Box ref={containerRef}>
            <Box sx={{ height: '100vh', width: '100%', position: 'relative', overflow: 'hidden' }}>
                <Box
                    className='heroimage'
                    component="img"
                    src={heroImg}
                    sx={{ objectFit: 'cover', height: '100%', width: '100%', position: 'absolute', zIndex: -50 }}
                />
                <Box className="full-text-container" sx={{ color: 'white', width: '100%', textAlign: 'center', position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)' }} >
                    <Box component="h1"
                        sx={{
                            zIndex: 500,
                            fontFamily: 'monospace',
                            fontSize: { xl: '255px', lg: '200px', md: '160px', sm: '100px', xs: '62px' },
                            fontWeight: 'bold',
                            whiteSpace: 'nowrap'
                        }}>
                        <SplitingText text={'SPORTSWEAR'} horizontalIndices={[2, 8]} verticalIndices={[3, 6]} />
                    </Box>
                </Box>
                <Box sx={{ zIndex: -10, position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: '250px', height: '480px', }}>
                    <Box className='videoBg' sx={{ bgcolor: '#e2c3bcff', height: '90%', width: '100%' }}>
                        <Box className='video'>
                            <Typography sx={{ position: 'absolute', top: '-13px', left: '50%', transform: 'translateX(-50%)', whiteSpace: 'nowrap', color: 'white', letterSpacing: 1 }} >NOUVELLE COLLECTION</Typography>

                            <LazyLoadVideo src={heroVideo} height={'100%'} width={'100%'} zIndex={-10} />
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box >
    );
};

export default HeroSection;