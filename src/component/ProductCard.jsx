import React, { useState, useRef, useEffect, useCallback } from 'react';
import { Card, CardContent, Typography, Box, Button, Stack } from '@mui/material';
import { gsap } from 'gsap';




function ProductCard({ product, delay = 0 }) {
    const [activeIndex, setActiveIndex] = useState(0);
    const imageRefs = useRef([]);
    const timeoutRef = useRef(null);
    const goToSlide = useCallback((index) => {
        gsap.to(imageRefs.current[activeIndex], { opacity: 0, duration: 0.5 });
        gsap.to(imageRefs.current[index], { opacity: 1, duration: 0.5 });
        setActiveIndex(index);
    }, [activeIndex]);
    useEffect(() => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }

        timeoutRef.current = setTimeout(() => {
            setTimeout(() => {

                const nextIndex = (activeIndex + 1) % product.colors.length;
                goToSlide(nextIndex);
            }, delay);

        }, 4000);

        return () => {
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current);
            }
        };
    }, [activeIndex, goToSlide]);
    const handleColorClick = (index) => {
        if (index === activeIndex) return;
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
        goToSlide(index);
    };

    return (
        <Box sx={{ width: '100%', height: '100%', cursor: 'pointer' }} >
            <Box sx={{ position: 'relative', height: '100%' }} >
                {product.colors.map((color, index) => (
                    <Box
                        key={color.name}
                        ref={(el) => (imageRefs.current[index] = el)}
                        component="img"
                        src={color.image}
                        alt={`${product.name} in ${color.name}`}
                        sx={{
                            position: 'absolute',
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                            opacity: index === 0 ? 1 : 0,
                        }}
                    />
                ))}
            </Box>
            <Box sx={{ p: '0 20px ', mt: 2 }} >
                <Stack direction={'row'} alignItems={'center'} justifyContent={'space-between'} >
                    <Typography gutterBottom variant="body1" component="div" sx={{ fontWeight: 'bold' }}>
                        {product.name}
                    </Typography>
                    <Typography variant="body1" sx={{ fontWeight: 'bold' }} >
                        {product.price}
                    </Typography>
                </Stack>
                <Box sx={{ mt: .5, display: 'flex', gap: 1 }}>
                    {product.colors.map((color, index) => (

                        <Box
                            onClick={() => handleColorClick(index)}
                            key={color.name}

                            sx={{
                                cursor: 'pointer',
                                display: 'flex', justifyContent: 'center', alignItems: 'center',
                                borderRadius: '50%', width: 'fit-content', height: 'fit-content',
                                border: activeIndex === index ? `.5px solid black` : '1px solid transparent',
                                p: .3
                            }}
                        >
                            <Box
                                sx={{
                                    minWidth: '15px',
                                    height: '15px',
                                    borderRadius: '50%',
                                    backgroundColor: color.hex,
                                    transition: 'border 0.2s',
                                    '&:hover': { backgroundColor: color.hex, opacity: 0.8 }
                                }}>
                            </Box>
                        </Box>
                    ))}
                </Box>
            </Box>
        </Box >
    );
}

export default ProductCard;