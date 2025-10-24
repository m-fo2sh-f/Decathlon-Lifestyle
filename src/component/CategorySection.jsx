import React, { useRef } from 'react'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Box, Stack, Typography } from '@mui/material'
import ImageSlider from '../component/ImageSlider'
import SplitingText from '../component/SplitText'
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
export default function CategorySection({ cNumber, categoryName, imgs1, imgs2 }) {


    return (
        <Box sx={{ width: '100%', cursor: 'pointer' }}>
            <Box sx={{ width: '96%', mx: 'auto', my: 2 }}>
                <Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'} >
                    <Typography sx={{ fontWeight: 'bold', fontSize: '15px', }}>{cNumber}</Typography>
                    <Box sx={{ width: '40%' }}>
                        <Box className={'category'} sx={{ fontWeight: 'bold', fontSize: '30px', }}>
                            <SplitingText text={categoryName} horizontalIndices={[2]} verticalIndices={[5]} coloring={true} />
                        </Box>
                    </Box>
                    <Typography sx={{ fontWeight: 'bold', fontSize: '15px', display: 'flex', alignItems: 'center', cursor: 'pointer' }}>Voir tout <ArrowForwardIosIcon sx={{ ml: 1, fontSize: '.8rem' }} /> </Typography>
                </Stack>
            </Box>
            <Box sx={{ display: 'flex', width: '100%', flexDirection: { md: 'row', xs: 'column' } }}>
                <Box className='left-side' sx={{ width: { md: '50%', xs: '100%' }, height: '100vh' }}>
                    <ImageSlider images={imgs1} />
                </Box>
                <Box className='right-side' sx={{ width: { md: '50%', xs: '100%' }, height: '100vh' }}>
                    <ImageSlider images={imgs2} />
                </Box >
            </Box>
        </Box >
    )
}

