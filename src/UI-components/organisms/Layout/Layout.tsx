import React from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from '../../molecules/Header';
import { Footer } from '../../molecules/Footer';


export const Layout: React.FC = () => (
    <>
        <Header />
        <Outlet />
        <Footer text='textFooter' />
    </>
); 