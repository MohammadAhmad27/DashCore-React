import React from 'react'
import { Box, Typography, useTheme } from '@mui/material'
import { tokens } from '../theme'
import ProgressCircle from './ProgressCircle';

export default function Statbox({ title, subtitle, icon, progress, increase }) {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return (
        <Box width="100%" m="0 30px">
            <Box display="flex" justifyContent="space-between">
                {/* 1st */}
                <Box>
                    {icon}
                    <Typography variant="h4" fontWeight="bold" sx={{ color: colors.grey[100] }}>
                        {title}
                    </Typography>
                </Box>
                {/* 2nd */}
                <Box>
                    <ProgressCircle progress={progress} />
                </Box>
            </Box>
            {/* 3rd */}
            <Box display="flex" justifyContent="space-between" mt="15px">
                <Typography variant="h5" sx={{ color: colors.greenAccent[500] }}>
                    {subtitle}
                </Typography>
                <Typography variant="h5" fontStyle="italic" sx={{ color: colors.greenAccent[600] }}>
                    {increase}
                </Typography>
            </Box>
        </Box>
    )
}
