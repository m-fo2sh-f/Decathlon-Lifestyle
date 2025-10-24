import { Box, Stack, Typography } from '@mui/material';
import React, { useEffect, useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import SplitingText from './SplitText';
import { useNavigate, useLocation } from 'react-router-dom';

export default function CategoriesNavigation() {

    const navItems = [
        { id: 'Homme', label: <SplitingText text={"Homme"} horizontalIndices={[2]} verticalIndices={[4]} />, path: '/' },
        { id: 'Femme', label: <SplitingText text={"Femme"} horizontalIndices={[2]} verticalIndices={[4]} />, path: '/womans' },
    ];

    const navRef = useRef(null);
    const underlineRef = useRef(null);
    const linkRefs = useRef([]);
    const navigate = useNavigate();
    const location = useLocation();

    const moveUnderline = (target) => {
        if (!target) return;
        gsap.to(underlineRef.current, {
            width: target.offsetWidth,
            left: target.offsetLeft,
            duration: 0.4,
            ease: 'power3.out',
        });
    };

    useEffect(() => {
        const activeIndex = navItems.findIndex(item => item.path === location.pathname);
        const activeLinkEl = linkRefs.current[activeIndex];

        if (activeLinkEl) {
            gsap.set(underlineRef.current, {
                width: activeLinkEl.offsetWidth,
                left: activeLinkEl.offsetLeft,
            });
        }
    }, [location.pathname]);

    const handleMouseEnter = (index) => {
        moveUnderline(linkRefs.current[index]);
    };

    const handleMouseLeave = () => {
        const activeIndex = navItems.findIndex(item => item.path === location.pathname);
        const activeLinkEl = linkRefs.current[activeIndex];
        moveUnderline(activeLinkEl);
    };

    const animateChars = (targetElement) => {
        if (!targetElement) return;
        const chars = targetElement.querySelectorAll('.char');
        const tl = gsap.timeline();

        tl.to(chars, {
            y: -20,
            duration: 0.3,
            ease: 'power2.out',
            stagger: 0.04,
        });

        tl.to(chars, {
            y: 0,
            duration: 0.8,
            ease: 'back.out(2)',
            stagger: 0.04,
        }, '>-0.2');
    };

    const handleClick = (itemPath, index) => {
        if (location.pathname === itemPath) return;
        animateChars(linkRefs.current[index]);
        navigate(itemPath);
    };

    return (
        <Box sx={{ textAlign: 'center', mt: 5 }}>
            <Box
                ref={navRef}
                onMouseLeave={handleMouseLeave}
                sx={{
                    position: 'relative',
                    py: 2,
                    borderBottom: '1px solid #eee',
                    display: 'inline-block',
                    mx: 'auto',
                }}
            >
                <Stack direction="row" spacing={4} sx={{ display: 'inline-flex' }}>
                    {navItems.map((item, index) => (
                        <Typography
                            key={item.id}
                            component="div"
                            ref={(el) => (linkRefs.current[index] = el)}
                            onMouseEnter={() => handleMouseEnter(index)}
                            onClick={() => handleClick(item.path, index)}
                            sx={{
                                cursor: 'pointer',
                                fontSize: '30px',
                                fontWeight: 'bold',
                                color: location.pathname === item.path ? 'black' : 'gray',
                                transition: 'color 0.3s'
                            }}
                        >
                            {item.label}
                        </Typography>
                    ))}
                </Stack>
                <Box
                    ref={underlineRef}
                    sx={{
                        position: 'absolute',
                        bottom: 0,
                        height: '4px',
                        backgroundColor: 'black',
                        borderRadius: '2px',
                    }}
                />
            </Box>
        </Box>
    )
}