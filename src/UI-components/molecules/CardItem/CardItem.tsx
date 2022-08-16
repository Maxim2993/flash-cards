import React, { useState } from 'react';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import { CardsSuccessResult } from '../../../app/slices/cards/types';

export type CardProps = {
    card: CardsSuccessResult;
};

export const CardItem: React.VFC<CardProps> = ({ card }) => {
    const [reverse, setReverse] = useState(false);
    const handleClick: React.MouseEventHandler = () => {
        setReverse((prev) => !prev);
    }
    return (
        <Grid item xs={12} sm={6} lg={3} md={4}>
            <Box sx={{
                transformStyle: 'preserve-3d',
                transform: reverse ? 'rotateY(180deg)' : '',
                position: 'relative',
                minHeight: 170,
                transition: '.4s linear'
            }}
            >
                <Card variant="outlined"
                    sx={{
                        pr: 1,
                        pl: 1,
                        width: '100%',
                        height: '100%',
                        backfaceVisibility: 'hidden',
                        position: 'absolute',
                        zIndex: 2,
                        transform: 'rotateY(0deg)'
                    }}
                >
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
                    <Button size="small" onClick={handleClick}>Learn More</Button>
                </Card>
                <Card variant="outlined"
                    sx={{
                        width: '100%',
                        height: '100%',
                        position: 'absolute',
                        backfaceVisibility: 'hidden',
                        transform: 'rotateY(-180deg)',
                        top: 0,
                        left: 0,
                        background: 'linear-gradient(70deg, #6486de, #dae0f0)'
                    }}
                >
                    <Typography
                        variant="h4"
                        color='white'
                        sx={{
                            position: 'absolute',
                            top: '50%',
                            left: '50%',
                            transform: 'translate(-50%, -50%)'
                        }}
                    >
                        {card.word_ru}
                    </Typography>
                    <Button
                        size="small"
                        onClick={handleClick}
                        sx={{
                            position: 'absolute',
                            bottom: '4px',
                            left: '5px',
                            color: 'white'
                        }}
                    >
                        Назад
                    </Button>
                </Card>
            </Box>
        </Grid >
    )
};