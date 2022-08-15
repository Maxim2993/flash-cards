import { configureStore } from '@reduxjs/toolkit'
import { authReducer } from './slices/auth/authSlice';
import { cardsApi } from './slices/cards/cardsApi';

export const store = configureStore({
    reducer: {
        [cardsApi.reducerPath]: cardsApi.reducer,
        auth: authReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(
            cardsApi.middleware,
        ),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch