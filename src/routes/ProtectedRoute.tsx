import React from 'react';
import { Navigate, useLocation } from 'react-router-dom'
import { useAppSelector } from '../app/hooks';

export type ProtectedRouteProps = {
    authenticationPath: string;
    outlet: JSX.Element;
};

export const ProtectedRoute = ({ authenticationPath, outlet }: ProtectedRouteProps) => {
    const location = useLocation();
    const isAuth = useAppSelector((state) => state.auth.isAuth)
    if (isAuth) {
        return outlet;
    } else {
        return (
            <Navigate
                to={{ pathname: authenticationPath }}
                state={{ from: location }}
                replace
            />
        );
    }
};
