
import { useApi } from "../../hooks/useApi";
import { DashboardContext } from "./DashboardContext";

export const DashboardProvider = ({ children }: { children: React.ReactNode }) => {
    const api = useApi();

    const addHeader = () => {
        api.setHeader("Authorization", `Bearer ${localStorage.getItem('access_token')}`);
    }

    const getDashboardData = async () => {
        addHeader();
        return await api.get('/dashboard/all')
    }

    return (
        <DashboardContext.Provider value={{ getDashboardData }}>
            {children}
        </DashboardContext.Provider>
    );
};
