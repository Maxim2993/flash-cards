import React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

import { CardItem } from '../CardItem';
import { CardsSuccessResult } from '../../../app/slices/cards/types';

export type CardListProps = {
    cards: CardsSuccessResult[];
};

export const CardList: React.VFC<CardListProps> = ({ cards }) => {
    return (
        <Container>
            <Grid container spacing={2} direction="row" alignItems='stretch' >
                {cards.map((item) => <CardItem card={item} key={item.id} />)}
            </Grid>
        </Container>
    )
};