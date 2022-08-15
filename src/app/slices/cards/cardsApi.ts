import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { BASE_URL_CARDS } from '../../../constants';
import {
    CardsSuccessResult
} from './types';

export const cardsApi = createApi({
    reducerPath: 'cardsApi',
    baseQuery: fetchBaseQuery({
        baseUrl: BASE_URL_CARDS,
    }),
    tagTypes: ['cards'],
    endpoints: (builder) => ({
        getAllCards: builder.query<CardsSuccessResult[], void>({
            query: () => ({
                url: '/',
                method: 'GET',
            })
        }),
    }),
});

export const {
    useGetAllCardsQuery
} = cardsApi;