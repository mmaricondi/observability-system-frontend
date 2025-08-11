import { createContext } from 'react';
import type { ILastAppEvent } from '../../interfaces/dashboard/last-app-event.interface';

export type DashboardContextType = {
    fetchLastAppEventData: () => Promise<any>;
    fetchAvgAppEventsData: () => Promise<any>;
    appLastEventData?: ILastAppEvent;
    appAvgEventData?: any;
}

export const DashboardContext = createContext<DashboardContextType>(null!);