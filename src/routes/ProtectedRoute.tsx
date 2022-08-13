import React from 'react';
import { Navigate } from 'react-router-dom'


export type ProtectedRouteProps = {
    authenticationPath: string;
    outlet: JSX.Element;
};

export const ProtectedRoute = ({ authenticationPath, outlet }: ProtectedRouteProps) => {
    const isAuth = false;
    if (isAuth) {
        return outlet;
    } else {
        return <Navigate to={{ pathname: authenticationPath }} />;
    }
};
