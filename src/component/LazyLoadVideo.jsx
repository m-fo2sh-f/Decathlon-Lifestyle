import React, { useRef, useEffect } from 'react';
import { Box } from '@mui/material';

const LazyLoadVideo = ({ src, poster = null, height = '100%', width = '100%', zIndex = 1 }) => {
    const videoRef = useRef(null);

    useEffect(() => {
        const videoElement = videoRef.current;
        const observer = new IntersectionObserver(
            (entries, observerInstance) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const element = entry.target;
                        element.src = element.dataset.src;
                        element.load();
                        observerInstance.unobserve(element);
                    }
                });
            },
            {
                rootMargin: "200px",
            }
        );
        if (videoElement) {
            observer.observe(videoElement);
        }
        return () => {
            if (videoElement) {
                observer.unobserve(videoElement);
            }
        };
    }, []);

    return (
        <Box
            component="video"
            ref={videoRef}
            data-src={src}
            poster={poster}
            preload="none"
            autoPlay
            loop
            muted
            playsInline
            sx={{
                width: width,
                height: height,
                objectFit: 'cover',
                zIndex: zIndex,
                backgroundPosition: 'center',
                flexShrink: 0,

            }}
        />
    );
};

export default LazyLoadVideo;