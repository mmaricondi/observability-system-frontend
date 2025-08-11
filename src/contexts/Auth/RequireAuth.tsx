import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from "./AuthContext";
import { DashboardProvider } from '../Dashboard/DashboardProvider';

export const RequireAuth = ({ children }: { children: React.ReactNode }) => {
    const auth = useContext(AuthContext);
    const token = auth.getToken();
    const navigate = useNavigate();

    useEffect(() => {
        if(!token) navigate('/signin');
    }, [token]);

    return <DashboardProvider>{children}</DashboardProvider>;
}