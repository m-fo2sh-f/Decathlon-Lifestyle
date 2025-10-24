import React, { useRef, useEffect } from 'react';
import { Box } from '@mui/material';

export default function LazyImage({ src, alt, sx }) {
    const imageRef = useRef(null);

    useEffect(() => {
        const element = imageRef.current;
        if (!element) return;

        const observer = new IntersectionObserver(
            (entries, observerInstance) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const target = entry.target;
                        target.src = target.dataset.src;
                        observerInstance.unobserve(target);
                    }
                });
            },
            {
                rootMargin: "100px",
            }
        );

        observer.observe(element);

        return () => {
            if (element) {
                observer.unobserve(element);
            }
        };
    }, [src]);

    return (
        <Box
            component="img"
            ref={imageRef}
            data-src={src}
            alt={alt}
            sx={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                ...sx
            }}
        />
    );
}