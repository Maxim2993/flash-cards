import React from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from '../../molecules/Header';
import { Footer } from '../../molecules/Footer';

import { FOOTER_DATA } from '../../../constants';


export const Layout: React.FC = () => (
    <>
        <Header />
        <Outlet />
        <Footer text={FOOTER_DATA} />
    </>
); 