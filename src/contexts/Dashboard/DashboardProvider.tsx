
import React, { useEffect, useState } from 'react';
import { useApi } from "../../hooks/useApi";
import { DashboardContext } from "./DashboardContext";
import type { ILastAppEvent } from '../../interfaces/dashboard/last-app-event.interface';

export const DashboardProvider = ({ children }: { children: React.ReactNode }) => {
    const [appLastEventData, setAppLastEventData] = useState<ILastAppEvent>();
    const [appAvgEventData, setAppAvgEventData] = useState<any>();

    const api = useApi();

    useEffect(() => {
        fetchLastAppEventData();
        fetchAvgAppEventsData();
    }, []);

    const addHeader = () => {
        api.setHeader("Authorization", `Bearer ${localStorage.getItem('access_token')}`);
    }

    const fetchLastAppEventData = async () => {
        addHeader();
        const response: any = await api.get('/dashboard/last-events')
        setAppLastEventData(response);
    }

    const fetchAvgAppEventsData = async () => {
        addHeader();
        const response = await api.get('/dashboard/avg-events')
        setAppAvgEventData(response);
    }

    return (
        <DashboardContext.Provider value={{ fetchLastAppEventData, fetchAvgAppEventsData, appLastEventData, appAvgEventData }}>
            {children}
        </DashboardContext.Provider>
    );
};
