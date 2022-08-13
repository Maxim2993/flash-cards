import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type AuthState = {
    isAuth: boolean;
};

const initialState: AuthState = {
    isAuth: false,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login: (
            state,
            { payload: { isAuth } }: PayloadAction<AuthState>
        ) => {
            state.isAuth = isAuth;
        },
        logout: (state) => {
            state.isAuth = false;
        }
    },
});

export const { login, logout } = authSlice.actions;
export const authReducer = authSlice.reducer;