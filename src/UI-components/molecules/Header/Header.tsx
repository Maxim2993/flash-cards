import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import HomeIcon from '@mui/icons-material/Home';
import LoginIcon from '@mui/icons-material/Login';

import { Link } from '../../atoms/Link';

export const Header: React.FC = () => (
    <Box component='header' sx={{ background: 'grey', width: '100vw', position: 'absolute', top: 0 }}>
        <Container sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            pt: 2,
            pb: 2
        }}
        >
            <Link to='/'>
                <HomeIcon sx={{ color: 'white', fontSize: 40 }} />
            </Link>
            <Box sx={{ display: 'flex' }}>
                <Link to='cards' sx={{ color: 'white', mr: 8 }}>
                    <Typography variant="h6"  >
                        Cards
                    </Typography>
                </Link>
                <Link to='profile' sx={{ color: 'white' }}>
                    <Typography variant="h6" >
                        Profile
                    </Typography>
                </Link>
            </Box>
            <Button variant="contained" sx={{ textTransform: 'none' }} startIcon={<LoginIcon />}>
                Войти
            </Button>
        </Container >
    </Box>

);