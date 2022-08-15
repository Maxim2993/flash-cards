import React from 'react';
import Box from '@mui/material/Box';
import { LoginForm } from '../UI-components/molecules/LoginForm';

export const LoginPage = () => {
    return (
        <Box
            component='main'
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                width: '100vw',
                height: '100vh'
            }}>
            <LoginForm />
        </Box>
    )
};
