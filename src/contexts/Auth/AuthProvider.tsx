import { useEffect, useState } from "react"
import { AuthContext } from "./AuthContext"
import type { User } from '../../types/User';
import { useApi } from "../../hooks/useApi";

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
    const [user, setUser] = useState<User | null>(null);
    const api = useApi();
 


    useEffect(() => {
        // updateUser();
    }, [])

    const updateUser = async () => {
        const token = getToken();
        if (token) {
            const token = {
                email: 'test@example.com',
                name: 'Test'
            }
            if (token) {
                const userData = {
                    email: token.email,
                    name: token.name,
                    validatedEmail: true,
                    validatedCode: true
                };
                setUser(userData);
            }
        }
    }

    const signinMail = async (email: string) => {
        const data = await api.post('/auth/login', { email })
        setUser({...data, validatedEmail: true });
    }
    const signinCode = async (code: string) => {
        const data = await api.post('/auth/code', { code })
        console.log(user, data);
        let isValidated = false;
        if(data.jwt) {
            setToken(data.jwt);
            isValidated = true;
        }
        return isValidated;
    }
    const signout = async () => {
        await api.get('/logout')
        setUser(null);
    }

    const setToken = (token: string) => {
        localStorage.setItem('token', token);
    }

    const getToken = () => {
        return localStorage.getItem('token');
    }

    return (
        <AuthContext.Provider value={{ user, signinMail, signinCode, signout }}>
            {children}
        </AuthContext.Provider>
    );
}