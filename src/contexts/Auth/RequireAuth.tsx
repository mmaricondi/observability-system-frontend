import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from "./AuthContext";

export const RequireAuth = ({ children }: { children: React.ReactNode }) => {
    const auth = useContext(AuthContext);
    if (!auth.user?.validatedEmail) {
        return <Navigate to="/signin" replace />;
    } else {
        return <>{children}</>;
    }
}