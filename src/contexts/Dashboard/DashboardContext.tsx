import { createContext } from 'react';

export type DashboardContextType = {
    getDashboardData: () => Promise<any>;
}

export const DashboardContext = createContext<DashboardContextType>(null!);