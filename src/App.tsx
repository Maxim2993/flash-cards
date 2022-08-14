import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { CardsPage, LoginPage, MainPage, ProfilePage } from './pages';
import { ProtectedRoute } from './routes/ProtectedRoute';
import { Layout } from './UI-components/organisms/Layout'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<MainPage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/cards' element={<CardsPage />} />
        <Route
          path='/profile'
          element={
            <ProtectedRoute authenticationPath='/login' outlet={<ProfilePage />} />}
        />
        <Route path='*' element={<Navigate to={'/'} replace />} />
      </Route>
    </Routes>
  )
}

export default App;
