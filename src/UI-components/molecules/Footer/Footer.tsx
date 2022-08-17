import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

type FooterProps = {
    text: string;
};

export const Footer: React.VFC<FooterProps> = ({ text }) => (
    <Box component='footer' sx={{
        position: 'absolute',
        bottom: 0,
        width: '100vw',
        background: 'grey'
    }}
    >
        <Container sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            mt: 2,
            mb: 2
        }}>
            <Typography variant="body2" sx={{ textTransform: 'none', color: 'white' }} >
                {text}
            </Typography>
        </Container>
    </Box>
);
