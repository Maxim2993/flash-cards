import React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { MAIN_PAGE_DATA } from '../constants'

export const MainPage = () => {
    return (
        <Container component='main'
            sx={{
                display: 'flex',
                justfyContent: 'center',
                alignItems: 'center',
                width: '100vw',
                height: '100vh',
                overflow: 'scroll',
                pt: 10,
                pb: 4,

            }}>
            <Typography variant='h4' sx={{ color: '#dae0f0', WebkitTextStroke: '1px #6486de', textAlign: 'center' }}>
                {MAIN_PAGE_DATA}
            </Typography>
        </Container>
    )
};
