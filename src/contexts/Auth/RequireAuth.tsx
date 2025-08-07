import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from "./AuthContext";
import { DashboardProvider } from '../Dashboard/DashboardProvider';

export const RequireAuth = ({ children }: { children: React.ReactNode }) => {
    const auth = useContext(AuthContext);
    const token = auth.getToken();
    if (!token) {
        return <Navigate to="/signin" replace />;
    } else {
        return <DashboardProvider>{children}</DashboardProvider>;
    }
}