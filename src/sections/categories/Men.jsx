
import React, { useRef } from 'react'
import img1 from '../../assets/men/img1.jpg'
import img2 from '../../assets/men/img2.jpg'
import img3 from '../../assets/men/img3.jpg'
import img4 from '../../assets/men/img4.jpg'
import img5 from '../../assets/men/img5.jpg'
import img6 from '../../assets/men/img6.jpg'
import img7 from '../../assets/men/img7.jpg'
import s1img1 from '../../assets/men/slider-img1.jpg'
import s1img2 from '../../assets/men/slider-img2.jpg'
import s1btn1 from '../../assets/men/slider-btn1.jpg'
import s1btn2 from '../../assets/men/slider-btn2.jpg'
import logo1 from '../../assets/men/sliderLogo1.webp'

import s2img1 from '../../assets/men/slider2-img1.jpg'
import s2img2 from '../../assets/men/slider2-img2.jpg'
import s2btn1 from '../../assets/men/slide2r-btn1.jpg'
import s2btn2 from '../../assets/men/slider2-btn2.jpg'
import logo2 from '../../assets/men/sliderLogo2.webp'

import p1img1 from '../../assets/men/p1img1.jpg'
import p1img2 from '../../assets/men/p1img2.jpg'
import p1img3 from '../../assets/men/p1img3.jpg'
import p2img1 from '../../assets/men/p2img1.jpg'
import p2img2 from '../../assets/men/p2img2.jpg'
import p2img3 from '../../assets/men/p2img3.jpg'

import c1 from '../../assets/men/casc1.jpg'
import c2 from '../../assets/men/casc2.jpg'
import c3 from '../../assets/men/casc3.jpg'
import c4 from '../../assets/men/casc4.jpg'
import c5 from '../../assets/men/casc5.jpg'
import c6 from '../../assets/men/casc6.jpg'
import c7 from '../../assets/men/casc7.jpg'
import c8 from '../../assets/men/casc8.jpg'
import c9 from '../../assets/men/casc9.jpg'
import CategorySection from '../../component/CategorySection'
import DualSlider from '../../component/sliderButtons'
import { Box, Divider, Stack, Typography } from '@mui/material'
import SplitingText from '../../component/SplitText'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import ProductCard from '../../component/ProductCard'

const product1 = {
    name: 'Dynamic T-Shirt',
    price: '$30.00',
    colors: [
        { name: 'Red', hex: '#c1f4ffff', image: p1img1 },
        { name: 'Blue', hex: '#457B9D', image: p1img2 },
        { name: 'Green', hex: '#ffe3c8ff', image: p1img3 },
    ]
};
const product2 = {
    name: 'Dynamic T-Shirt',
    price: '$30.00',
    colors: [
        { name: 'Red', hex: '#00e3b6ff', image: p2img1 },
        { name: 'Blue', hex: '#810000ff', image: p2img2 },
        { name: 'Green', hex: '#f9f000ff', image: p2img3 },
    ]
};

const product3 = {
    name: 'Bob rond',
    price: '$20.00',
    colors: [
        { name: 'Red', hex: '#cfcfcfff', image: c1 },
        { name: 'Blue', hex: '#d3009fff', image: c2 },
        { name: 'Green', hex: '#006c0bff', image: c3 },
    ]
};
const product4 = {
    name: 'Casquette 5 Panels',
    price: '$19.99',
    colors: [
        { name: 'Red', hex: '#cfcfcfff', image: c4 },
        { name: 'Blue', hex: '#00b542ff', image: c5 },
    ]
};
const product5 = {
    name: 'Casquette 6 Panels',
    price: '$55.00',
    colors: [
        { name: 'Red', hex: '#cfcfcfff', image: c7 },
        { name: 'Blue', hex: '#000281ff', image: c3 },
        { name: 'Green', hex: '#f97400ff', image: c8 },
    ]
};
const product6 = {
    name: 'Dynamic T-Shirt',
    price: '$30.00',
    colors: [
        { name: 'Red', hex: '#cfcfcfff', image: c9 },
        { name: 'Blue', hex: '#000281ff', image: c5 },
        { name: 'Green', hex: '#f9f000ff', image: c5 },
    ]
};
export default function Men() {
    const Container = useRef()
    useGSAP(() => {
        const TL = gsap.timeline({
            scrollTrigger: {
                trigger: Container.current,
                start: 'top 70%',
                end: 'bottom 20%',
                toggleActions: 'play none none none',
            }
        })
        TL.from(".category", {
            opacity: 0,
            y: 50,
            duration: .5,
            ease: 'power3.out',
            stagger: 0.1
        }).fromTo(
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
        ).from('.left-side', {
            x: -400,
            opacity: 0,
            duration: .8,
            delay: .2
        }, 0).from('.right-side', {
            x: 400,
            opacity: 0,
            duration: .8,
            delay: .3

        }, 0)
    }, { scope: Container })

    return (
        <Box ref={Container}>
            <CategorySection cNumber={'01'} categoryName={'T-Shirts'} imgs1={[img1, img2, img3]} imgs2={[img4, img5, img6, img7]} />
            <Box sx={{ width: '100%', height: 'auto', mt: 10, }}>
                <Box sx={{ width: '96%', mx: 'auto', my: 5 }}>
                    <Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'} >
                        <Typography sx={{ fontWeight: 'bold', fontSize: '15px', }}>02</Typography>
                        <Box sx={{ width: '40%' }}>
                            <Box className={'category'} sx={{ fontWeight: 'bold', fontSize: '30px', }}>
                                <SplitingText text={'Baskets'} horizontalIndices={[2]} verticalIndices={[5]} coloring={true} />
                            </Box>
                        </Box>
                        <Typography sx={{ fontWeight: 'bold', fontSize: '15px', display: 'flex', alignItems: 'center', cursor: 'pointer' }}>Voir tout <ArrowForwardIosIcon sx={{ ml: 1, fontSize: '.8rem' }} /> </Typography>
                    </Stack>
                </Box>

                <DualSlider S1Images={[s1img1, s1img2]} S2Bgcolor={['rgb(141, 158, 165)', 'rgb(40, 55, 118)']} btnImgaes={[s1btn1, s1btn2]} logo={logo1} />
                <DualSlider S1Images={[s2img1, s2img2]} S2Bgcolor={['rgb(34, 43, 60)', 'rgb(14, 67, 62)']} btnImgaes={[s2btn1, s2btn2]} logo={logo2} reversed={true} />

            </Box>

            <Box sx={{ mt: 5, width: '100%', height: { md: '150vh', xs: '60vh' }, position: 'relative' }}>
                <Box sx={{ width: '96%', mx: 'auto', my: 5 }}>
                    <Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'} >
                        <Typography sx={{ fontWeight: 'bold', fontSize: '15px', }}>03</Typography>
                        <Box sx={{ width: '40%' }}>
                            <Box className={'category'} sx={{ fontWeight: 'bold', fontSize: '30px', }}>
                                <SplitingText text={'Sweats'} horizontalIndices={[2]} verticalIndices={[5]} coloring={true} />
                            </Box>
                        </Box>
                        <Typography sx={{ fontWeight: 'bold', fontSize: '15px', display: 'flex', alignItems: 'center', cursor: 'pointer' }}>Voir tout <ArrowForwardIosIcon sx={{ ml: 1, fontSize: '.8rem' }} /> </Typography>
                    </Stack>
                </Box>
                <Divider></Divider>
                <Box sx={{
                    height: '100%',
                    width: '100%',
                    display: 'flex',
                    flexDirection: { md: 'row', xs: 'row' },
                    // gap: '80px',
                }}>
                    <Box sx={{
                        width: { md: '20%', xs: '50%' }, height: { md: '350px', xs: '80%' },
                        position: { md: 'absolute', xs: 'block' }, top: '10%', right: { md: '10%', xs: '0%' },
                    }}>
                        <ProductCard product={product1} />
                    </Box>
                    <Box sx={{
                        width: '50%', height: { md: '80%', xs: '80%' },
                        position: { md: 'absolute', xs: 'block' }, top: '10%', left: { md: '10%', xs: '0%' },
                    }}>
                        <ProductCard product={product2} />
                    </Box>
                </Box>
            </Box >
            <Box sx={{ mt: '100px' }} >
                <Box sx={{ width: '96%', mx: 'auto', my: 5 }}>
                    <Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'} >
                        <Typography sx={{ fontWeight: 'bold', fontSize: '15px', }}>04</Typography>
                        <Box sx={{ width: '40%' }}>
                            <Box className={'category'} sx={{ fontWeight: 'bold', fontSize: '30px', }}>
                                <SplitingText text={'Headwear'} horizontalIndices={[2]} verticalIndices={[5]} coloring={true} />
                            </Box>
                        </Box>
                        <Typography sx={{ fontWeight: 'bold', fontSize: '15px', display: 'flex', alignItems: 'center', cursor: 'pointer' }}>Voir tout <ArrowForwardIosIcon sx={{ ml: 1, fontSize: '.8rem' }} /> </Typography>
                    </Stack>
                </Box>
                <Box sx={{ width: { lg: '76%', xs: '100%' }, mx: 'auto', height: { md: '80vh', xs: '120vh' }, display: 'flex', justifyContent: 'center', alignItems: 'center' }} >
                    <Stack direction={{ md: 'row', xs: 'column' }} sx={{ width: '100%', height: '100%' }} >
                        <Stack direction={'row'} sx={{ width: { md: '50%', xs: '100%' }, height: '100%' }}>
                            <Box sx={{ width: '50%', height: '80%' }} >
                                <ProductCard product={product3} />
                            </Box>
                            <Divider orientation="vertical" flexItem sx={{ height: '100%' }} />
                            <Box sx={{ width: '50%', height: '80%' }} >
                                <ProductCard delay={350} product={product4} />
                            </Box>
                        </Stack>
                        <Divider orientation="vertical" flexItem sx={{ height: '100%', display: { md: 'block', xs: 'none' } }} />
                        <Stack direction={'row'} sx={{ width: { md: '50%', xs: '100%' }, height: '100%' }}>
                            <Box sx={{ width: '50%', height: '80%' }} >
                                <ProductCard delay={700} product={product5} />
                            </Box>
                            <Divider orientation="vertical" flexItem sx={{ height: '100%' }} />
                            <Box sx={{ width: '50%', height: '80%' }} >
                                <ProductCard delay={1050} product={product6} />
                            </Box>
                        </Stack>
                    </Stack>
                </Box>

            </Box>
            <Box sx={{ mt: 5, width: '100%', height: { md: '150vh', xs: '60vh' }, position: 'relative' }}>
                <Box sx={{ width: '96%', mx: 'auto', my: 5 }}>
                    <Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'} >
                        <Typography sx={{ fontWeight: 'bold', fontSize: '15px', }}>05</Typography>
                        <Box sx={{ width: '40%' }}>
                            <Box className={'category'} sx={{ fontWeight: 'bold', fontSize: '30px', }}>
                                <SplitingText text={'Sweats'} horizontalIndices={[2]} verticalIndices={[5]} coloring={true} />
                            </Box>
                        </Box>
                        <Typography sx={{ fontWeight: 'bold', fontSize: '15px', display: 'flex', alignItems: 'center', cursor: 'pointer' }}>Voir tout <ArrowForwardIosIcon sx={{ ml: 1, fontSize: '.8rem' }} /> </Typography>
                    </Stack>
                </Box>
                <Divider></Divider>
                <Box sx={{
                    height: '100%',
                    width: '100%',
                    display: 'flex',
                    flexDirection: { md: 'row', xs: 'row' },
                    // gap: '80px',
                }}>
                    <Box sx={{
                        width: { md: '20%', xs: '50%' }, height: { md: '350px', xs: '80%' },
                        position: { md: 'absolute', xs: 'block' }, top: '10%', left: { md: '10%', xs: '0%' },
                    }}>
                        <ProductCard product={product1} />
                    </Box>
                    <Box sx={{
                        width: '50%', height: { md: '80%', xs: '80%' },
                        position: { md: 'absolute', xs: 'block' }, top: '10%', right: { md: '10%', xs: '0%' },
                    }}>
                        <ProductCard product={product2} />
                    </Box>
                </Box>
            </Box >
        </Box >
    )
}

