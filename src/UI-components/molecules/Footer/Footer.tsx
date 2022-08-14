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
        <Container >
            <Typography variant="body2" sx={{ textTransform: 'none' }} >
                {text}
            </Typography>
        </Container>
    </Box>
);
