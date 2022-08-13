import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { CardsPage, LoginPage, MainPage, ProfilePage } from './pages';
import { ProtectedRoute } from './routes/ProtectedRoute';

function App() {
  return (
    <Routes>
      <Route path='/' element={<MainPage />} />
      <Route path='/login' element={<LoginPage />} />
      <Route path='/cards' element={<CardsPage />} />
      <Route
        path='/profile'
        element={
          <ProtectedRoute authenticationPath='/login' outlet={<ProfilePage />} />}
      />
      <Route path='*' element={<Navigate to={'/'} replace />} />
    </Routes>
  )
}

export default App;
