import { useEffect, useState } from "react"
import { AuthContext } from "./AuthContext"
import type { User } from '../../types/User';
import { useApi } from "../../hooks/useApi";

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
    const [user, setUser] = useState<User | null>(null);
    const api = useApi();


    useEffect(() => {
        validateTokenExp();
    }, [])

    const addHeader = () => {
        api.setHeader("Authorization", `Bearer ${getToken()}`);
    }
    const validateTokenExp = async () => {
        if(!getToken()) return;
        const data: any = await validateToken();
        if(!data) signout();
    }

    const signinMail = async (email: string) => {
        const isSentEmail = await api.post('/auth/login', { email })
        if(isSentEmail) {
            setUser({...isSentEmail, validatedEmail: true });
        }
        return isSentEmail
    }
    const signinCode = async (email: string | undefined, code: string) => {
        const data = await api.post('/auth/code', { email, code })
        let isValidated = false;
        if(data.access_token) {
            setToken(data.access_token);
            isValidated = true;
        }
        return isValidated;
    }
    const signout = async () => {
        setToken('')
        setUser(null);
    }

    const setToken = (access_token: any) => {
        localStorage.setItem('access_token', access_token);
    }

    const getToken = () => {
        return localStorage.getItem('access_token');
    }

    const validateToken = async () => {
        addHeader();
        await api.get('/auth/validate').then((response) => {
            return response;
        }).catch((error) => {
            return error;
        });
    }

    return (
        <AuthContext.Provider value={{ user, signinMail, signinCode, signout, getToken }}>
            {children}
        </AuthContext.Provider>
    );
}