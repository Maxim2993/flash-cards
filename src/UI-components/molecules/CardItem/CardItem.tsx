import React from 'react';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import { CardsSuccessResult } from '../../../app/slices/cards/types';

export type CardProps = {
    card: CardsSuccessResult;
};

export const CardItem: React.VFC<CardProps> = ({ card }) => {
    return (
        <Grid item xs={12} sm={6} lg={3} md={4}>
            <Card variant="outlined" sx={{ pr: 1, pl: 1, minHeight: 170 }}>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    Word of the Day
                </Typography>
                <Typography variant="h5" component="div">
                    {card.word_en}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    adjective
                </Typography>
                <Typography variant="body2">
                    {card.example_en}
                    <br />
                    {'"a benevolent smile"'}
                </Typography>
                <Button size="small">Learn More</Button>
            </Card>
        </Grid>
    )
};