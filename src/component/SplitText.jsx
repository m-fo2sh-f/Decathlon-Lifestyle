import { Box } from '@mui/material';
import React, { useMemo } from 'react';


const myColors = ['#f8baacff', '#6d372eff', '#008a7cff', '#8fc5d5ff', '#263987ff', '#b29a78ff'];
function getRandomItem(arr) {
    const randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex];
}

export default function SplitingText({ text, horizontalIndices, verticalIndices, coloring = false }) {
    const txt = text;
    const characters = txt.split('');

    const charColors = useMemo(() => {
        return characters.map(() => getRandomItem(myColors));
    }, [characters.length]);
    return (
        <>
            {characters.map((char, index) => {
                const safeChar = char === ' ' ? '\u00A0' : char;

                return (
                    <span key={index} className="char" style={{ display: 'inline-block' }}>
                        {(() => {
                            if (horizontalIndices.includes(index)) {
                                return (
                                    <Box component="span" sx={{ display: 'inline-block', position: 'relative', verticalAlign: 'baseline', lineHeight: 1 }}>
                                        <Box component="span" sx={{ opacity: 0 }}>{safeChar}</Box>
                                        <Box sx={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', overflow: 'hidden' }}>
                                            <Box className="horizontal-slider" sx={{ display: 'flex', width: '230%', position: 'absolute', justifyContent: 'space-around' }}>
                                                <Box component="span" sx={{ width: '50%', color: coloring ? charColors[index] : 'inherit', textAlign: 'center' }}>{safeChar}</Box>
                                                <Box component="span" sx={{ width: '50%', textAlign: 'center' }}>{safeChar}</Box>
                                            </Box>
                                        </Box>
                                    </Box>
                                );
                            }
                            if (verticalIndices.includes(index)) {
                                return (
                                    <Box component="span" sx={{ display: 'inline-block', position: 'relative', verticalAlign: 'baseline', lineHeight: 1 }}>
                                        <Box component="span" sx={{ opacity: 0 }}>{safeChar}</Box>
                                        <Box sx={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', overflow: 'hidden' }}>
                                            <Box className="vertical-slider" sx={{ display: 'flex', flexDirection: 'column', height: '200%', position: 'absolute', width: '100%' }}>
                                                <Box component="span" sx={{ height: '50%', color: coloring ? charColors[index] : 'inherit', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{safeChar}</Box>
                                                <Box component="span" sx={{ height: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{safeChar}</Box>
                                            </Box>
                                        </Box>
                                    </Box>
                                );
                            }
                            return safeChar;
                        })()}
                    </span>
                );
            })}
        </>
    )
}