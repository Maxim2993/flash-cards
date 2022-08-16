import React from 'react';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';
import SentimentDissatisfiedIcon from '@mui/icons-material/SentimentDissatisfied';

import { CardList } from '../UI-components/molecules/CardList';
import { useGetAllCardsQuery } from '../app/slices/cards/cardsApi';
import { INFO_MESSAGES } from '../constants';

export const CardsPage = () => {
    const { data, error, isLoading } = useGetAllCardsQuery();
    console.log(error)
    return (
        <Box
            component='main'
            sx={{
                width: '100vw',
                height: '100vh',
                overflow: 'scroll',
                pt: 10,
                pb: 4,

            }}>
            {isLoading &&
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        height: '100%'
                    }}>
                    <CircularProgress />
                </Box>}
            {data && <CardList cards={data} />}
            {error && <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '100%'
                }}>
                <Typography variant="h3" color='#d32f2f'>
                    {INFO_MESSAGES.SERVER_ERROR}
                </Typography>
                <SentimentDissatisfiedIcon sx={{ color: '#d32f2f', fontSize: 60 }} />
            </Box>}
        </Box >
    )
};