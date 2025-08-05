import { createContext } from 'react';
import type { User } from '../../types/User';

export type AuthContextType = {
    user: User | null;
    signinMail: (email: string) => Promise<void>;
    signinCode: (code: string) => Promise<boolean>;
    signout: () => void;
    getToken: () => string | null;
}

export const AuthContext = createContext<AuthContextType>(null!);