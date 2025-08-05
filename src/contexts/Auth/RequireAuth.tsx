import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from "./AuthContext";
import { DashboardProvider } from '../Dashboard/DashboardProvider';

export const RequireAuth = ({ children }: { children: React.ReactNode }) => {
    const auth = useContext(AuthContext);
    const token = auth.getToken();
    console.log("RequireAuth token:", token);
    if (!token) {
        console.log("RequireAuth token login");
        return <Navigate to="/signin" replace />;
    } else {
        console.log("RequireAuth token dashboard");
        return <DashboardProvider>{children}</DashboardProvider>;
    }
}