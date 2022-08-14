import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import HomeIcon from '@mui/icons-material/Home';
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';

import { Link } from '../../atoms/Link';
import { logout } from '../../../app/slices/auth/authSlice';
import { useAppSelector, useAppDispatch } from '../../../app/hooks';

export const Header: React.FC = () => {
    const isAuth = useAppSelector((state) => state.auth.isAuth);
    const dispatch = useAppDispatch()
    const handleClick = () => {
        dispatch(logout());
    }
    return (
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
                {isAuth ?
                    (<Button
                        variant="contained"
                        onClick={handleClick}
                        sx={{ textTransform: 'none' }}
                        startIcon={<LogoutIcon />}
                    >
                        Выйти
                    </Button>) :
                    (<Link to='login' underline='none'>
                        <Button
                            variant="contained"
                            sx={{ textTransform: 'none' }}
                            startIcon={<LoginIcon />}
                        >
                            Войти
                        </Button>
                    </Link>)}
            </Container >
        </Box>
    );
};
