import { Box, Button, Stack, Typography } from '@mui/material'
import React, { useEffect, useRef, useState } from 'react' // ✨ استيراد useState و useEffect
import SplitingText from '../component/SplitText'; // تأكد إن المسار ده صح
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';


gsap.registerPlugin(ScrollTrigger);

export default function Section3() {
    const Container = useRef()
    useGSAP(() => {
        const TL = gsap.timeline({
            scrollTrigger: {
                trigger: Container.current,
                start: 'top 65%',
                toggleActions: 'play none none none',
            }
        })
        TL.from(".text1 ,.text2", {
            opacity: 0,
            y: 50,
            duration: 1,
            ease: 'power3.out',
        }
        ).fromTo(
            ".horizontal-slider",
            { xPercent: 0 },
            {
                xPercent: -52,
                duration: 1,
                ease: "power3.inOut",
                stagger: 0.5,
            }, "<50%"
        ).fromTo(
            ".vertical-slider",
            { yPercent: 0 },
            {
                yPercent: -50,
                duration: 1,
                ease: "power3.inOut",
                stagger: 0.5,
            },
            "<10%"
        ).from('.text', {
            opacity: 0,
            y: 50,
            duration: .3
        }, '<5%')
    }, { scope: Container })



    return (
        <Box ref={Container} sx={{ height: 'auto', width: '96%', mx: 'auto' }}>
            <Box>
                <Box sx={{ overflow: 'hidden' }}>
                    <Box
                        className='text1'
                        component="h1"
                        sx={{
                            zIndex: 500,
                            fontFamily: 'monospace',
                            fontSize: { xl: '70px', lg: '60px', md: '50px', sm: '35px', xs: '20px', },
                            fontWeight: 'bolder',
                            whiteSpace: 'nowrap',
                        }}>
                        <SplitingText text={"Nouvelle Collection"} horizontalIndices={[3, 9]} verticalIndices={[5, 7]} coloring={true} />
                    </Box>
                </Box>
                <Box sx={{ overflow: 'hidden' }}>
                    <Box
                        className='text2'
                        component="h1"
                        sx={{
                            zIndex: 500,
                            fontFamily: 'monospace',
                            fontSize: { xl: '70px', lg: '60px', md: '50px', sm: '35px', xs: '20px', },
                            fontWeight: 'bold',
                            whiteSpace: 'nowrap',
                            ml: { lg: '20%', xs: '0' }
                        }}>
                        <SplitingText text={"Lifestyle pour tous les jour"} horizontalIndices={[6, 12, 16, 25]} verticalIndices={[3, 8, 22]} coloring={true} />
                    </Box>
                </Box>
            </Box>

            <Box my={5} sx={{ width: '96%', mx: 'auto' }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', flexDirection: { md: 'row', xs: 'column' }, alignItems: 'start', mb: 3 }}>
                    <Typography className='text' sx={{ ml: { lg: '20%', xs: '0' }, fontWeight: 'bold', fontSize: '2rem' }}>Edito</Typography>
                    <Typography className='text' sx={{ width: { md: '50%', xs: '100%' }, fontSize: '1.2rem' }}>
                        Fidèle à ses engagements, Decathlon lance une ligne de vêtements sportswear confortables pour le quotidien. Des pièces essentielles et intemporelles de qualité, pour tous les jours et pour tout le monde. À cela viennent s’ajouter trois paires de baskets rétros inspirées par nos meilleures archives. Découvrez les RR2K, RR70 et RL70.</Typography>
                </Box>
            </Box>



        </Box>
    )
}