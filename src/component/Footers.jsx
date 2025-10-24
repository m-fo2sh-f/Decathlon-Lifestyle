import { Box, Typography } from '@mui/material'
import React from 'react'

export default function Footer() {
    return (
        <Box sx={{ bgcolor: '#222', color: '#fff', textAlign: 'center', py: 2, mt: '100px' }}>
            <Typography variant="h6">© 2025 Fo2sh. All rights reserved.</Typography>
        </Box>
    )
}
