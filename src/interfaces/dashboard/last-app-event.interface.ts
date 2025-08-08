export type ILastAppEvent = {
    internal: IAppication[];
    external: IAppication[];
}

export type IAppication = {
    name: string;
    updatedAt: Date;
    events: IEvent;
}

type IEvent = {
    id: number;
    createdAt: Date;
    description: string;
    status: string;
}