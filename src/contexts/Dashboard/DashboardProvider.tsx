
import React, { useState } from 'react';
import { useApi } from "../../hooks/useApi";
import { DashboardContext } from "./DashboardContext";
import type { ILastAppEvent } from '../../interfaces/dashboard/last-app-event.interface';

export const DashboardProvider = ({ children }: { children: React.ReactNode }) => {
    const [appLastEventData, setAppLastEventData] = useState<ILastAppEvent>();
    const api = useApi();

    const addHeader = () => {
        api.setHeader("Authorization", `Bearer ${localStorage.getItem('access_token')}`);
    }

    const fetchLastAppEventData = async () => {
        addHeader();
        const response = await api.get('/dashboard/last-events')
        setAppLastEventData(response);
    }

    const fetchAvgAppEventsData = async () => {
        addHeader();
        return await api.get('/dashboard/avg-events')
    }

    return (
        <DashboardContext.Provider value={{ fetchLastAppEventData, fetchAvgAppEventsData, appLastEventData }}>
            {children}
        </DashboardContext.Provider>
    );
};
