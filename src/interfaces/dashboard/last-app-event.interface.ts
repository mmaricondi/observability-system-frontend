export type ILastAppEvent = {
    internal: IAppication[];
    external: IAppication[];
}

export type IAppication = {
    name: string;
    updated_at: Date;
    events: IEvent;
}

type IEvent = {
    id: number;
    created_at: string;
    description: string;
    status: string;
}