import React from 'react';
import Box from '@mui/material/Box';

import { CardList } from '../UI-components/molecules/CardList';
import { useGetAllCardsQuery } from '../app/slices/cards/cardsApi';

export const CardsPage = () => {
    const { data } = useGetAllCardsQuery();
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
            {data && <CardList cards={data} />}
        </Box>
    )
};