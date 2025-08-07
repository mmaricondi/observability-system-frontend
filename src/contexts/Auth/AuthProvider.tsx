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

    const validateTokenExp = async () => {
        const token = getToken();
        if (token) {
            const data = await validateToken(token);
            if(!data.isValidToken) {
                setToken("");
                setUser(null);
                console.log(data.message);
            }
        }
    }

    const signinMail = async (email: string) => {
        const data = await api.post('/auth/login', { email })
        setUser({...data, validatedEmail: true });
    }
    const signinCode = async (code: string) => {
        const data = await api.post('/auth/code', { code })
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
        await api.get('/signin')
    }

    const setToken = (access_token: any) => {
        localStorage.setItem('access_token', access_token);
    }

    const getToken = () => {
        return localStorage.getItem('access_token');
    }

    const validateToken = async (token: string) => {
        return await api.post('/auth/validate', { token })
    }

    return (
        <AuthContext.Provider value={{ user, signinMail, signinCode, signout, getToken }}>
            {children}
        </AuthContext.Provider>
    );
}