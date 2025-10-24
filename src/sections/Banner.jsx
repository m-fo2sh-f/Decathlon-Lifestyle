import React, { useRef } from 'react'
import vid1 from '../assets/Piscine-F0e2c172.mp4'
import vid2 from '../assets/Ciel-6E58a0b1.mp4'
import vid3 from '../assets/Granderoue-9198F8ce.mp4'
import vid4 from '../assets/Piscine2-78Cc8ecb.mp4'
import vid5 from '../assets/Plage-176427B4.mp4'
import vid6 from '../assets/Voiture-9Caaa5eb.mp4'
import LazyLoadVideo from '../component/LazyLoadVideo'
import { Box } from '@mui/material'

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);
export default function Banner() {
    const Container = useRef()

    useGSAP(() => {
        const videosY = gsap.utils.toArray('.scale-y');
        const videosX = gsap.utils.toArray('.scale-x');
        const TL = gsap.timeline({
            scrollTrigger: {
                trigger: Container.current,
                start: 'top 70%',
                end: 'bottom 20%',
                toggleActions: 'play none none none',
            }
        })
        const videosBg = gsap.utils.toArray('.videoBg')

        TL.from(videosBg, {
            scaleY: 0,
            transformOrigin: 'top',
            duration: .6,
            ease: 'power3.inOut',
            stagger: 0.15,
        }).from(videosY, {
            scaleY: 0,
            transformOrigin: 'top', // عشان يكبر من فوق لتحت
            duration: .8,
            ease: "none",
            // scrollTrigger: triggerOptions // بنستخدم نفس الـ trigger
        }).from(videosX, {
            scaleX: 0,
            transformOrigin: 'left', // ✨ مهم: عشان يكبر من الشمال لليمين
            duration: .8,
            ease: "none",
            // scrollTrigger: triggerOptions // بنستخدم نفس الـ trigger
        }, "<"); // ✨ الحل كله في العلامة دي
    }, { scope: Container });

    return (
        <Box ref={Container} sx={{ width: '100%', height: { md: '500px', sm: '400px', xs: '250px' }, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Box sx={{ display: 'flex', justifyContent: 'center', width: '96%', height: '85%' }}>
                <Box className='videoBg' sx={{ bgcolor: 'rgb(104, 116, 129)', width: '16.5%', height: '90%', flexGrow: 1 }}>
                    <Box className='scale-y' sx={{ width: '100%', height: '100%' }}>
                        <LazyLoadVideo src={vid4} />
                    </Box>
                </Box>
                <Box className='videoBg' sx={{ bgcolor: 'rgb(196, 186, 185)', width: '16.5%', height: '82%', flexGrow: 1 }}>
                    <Box className='scale-x' sx={{ width: '100%', height: '100%' }}>
                        <LazyLoadVideo src={vid1} />
                    </Box>
                </Box>
                <Box className='videoBg' sx={{ bgcolor: 'rgb(181, 171, 156)', width: '16.5%', height: '100%', flexGrow: 1 }}>
                    <Box className='scale-y' sx={{ width: '100%', height: '100%' }}>
                        <LazyLoadVideo src={vid2} />
                    </Box>
                </Box>
                <Box className='videoBg' sx={{ bgcolor: '#413533ff', width: '16.5%', height: '93%', flexGrow: 1 }}>
                    <Box className='scale-y' sx={{ width: '100%', height: '100%' }}>
                        <LazyLoadVideo src={vid3} />
                    </Box>
                </Box>
                <Box className='videoBg' sx={{ display: { md: 'block', xs: 'none' }, bgcolor: 'rgb(65, 53, 51)', width: '16.5%', height: '100%', flexGrow: 1 }}>
                    <Box className='scale-y' sx={{ width: '100%', height: '100%' }}>
                        <LazyLoadVideo src={vid6} />
                    </Box>
                </Box>
                <Box className='videoBg' sx={{ display: { md: 'block', xs: 'none' }, bgcolor: 'rgb(196, 186, 185)', width: '16.5%', height: '86%', flexGrow: 1 }}>
                    <Box className='scale-x' sx={{ width: '100%', height: '100%' }}>
                        <LazyLoadVideo src={vid5} />
                    </Box>
                </Box>


            </Box>
        </Box >
    )
}
