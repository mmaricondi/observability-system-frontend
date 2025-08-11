import { Collapse } from "./collapse";
import { Events } from "./events";

export function Apps({ open, apps }: { open: boolean, apps: any[] }) {
    return (
        <div>
            {open && (
                <ul className="space-y-2 px-6">
                    {apps.map((app, index) => {
                        const colorEventPercent = parseFloat(app.percentage) > 85 ? "#E6F5E8" : parseFloat(app.percentage) > 65 ? "#FBF2CB" : "#FFF0EB";
    
                        return (
                            <Collapse key={index} infos={false} color={colorEventPercent} services={{ total: app.total_events, percent: app.percentage }} icon={null} subtitle={app.name}>
                                {({ open }) => <Events open={open} events={app.events} />}
                            </Collapse>
                        )
                    })}
                </ul>
            )}
        </div>
    );
}