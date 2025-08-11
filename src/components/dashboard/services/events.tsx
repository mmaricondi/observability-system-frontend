
export function Events({ open, events }: { open: boolean, events: any[] }) {
    return (
        <div>
            {open && (
                <ul className="space-y-2 px-6 py-4 pl-10">
                    {events.map((event, index) => {
                        const colorEventStatus = event.status == "up" ? "#E6F5E8" : "#FFF0EB";
                        const date = new Date(event.created_at).toLocaleString()
    
                        return (
                            <div className="py-3 text-[14px] text-[#333333] flex flex-col justify-start text-gray-700" key={index}>
                                <li className="flex flex-row">
                                    <div className="px-2">•</div>
                                    <div>Evento em - {date}</div>
                                    <div className="rounded-[2vw] px-2 ml-1" style={{ backgroundColor: colorEventStatus }}>Status: {event.status.toUpperCase()}</div>
                                </li>
                                <span className="px-2">Descrição - {event.description}</span>
                            </div>
                        )
                    })}
                </ul>
            )}
        </div>
    );
}