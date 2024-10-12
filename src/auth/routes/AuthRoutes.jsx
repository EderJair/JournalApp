import React from 'react'
import { LoginPage, RegisterPage } from '../pages'
import { Navigate, Route, Routes } from 'react-router-dom'

export const AuthRoutes = () => {
  return (

    <Routes>
        <Route path="login" element={<LoginPage />} />
        <Route path="register" element={<RegisterPage />} />
        <Route path="/*" element={<Navigate to="/auth/login" />} />
    </Routes>








  )
}
