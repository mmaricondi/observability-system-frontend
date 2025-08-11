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
    created_at: Date;
    description: string;
    status: string;
}