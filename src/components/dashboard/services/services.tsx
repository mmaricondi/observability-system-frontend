import type { ReactNode } from "react"
import { Apps } from "./apps";
import { Collapse } from "./collapse";

function Services({ title, icon, services, apps }: { title: string, icon: ReactNode, services: { total: number, percent: string}, apps: any[]} ) {
    const colorAppPercent = parseFloat(services.percent) > 85 ? "#E6F5E8" : parseFloat(services.percent) > 65 ? "#FBF2CB" : "#FFF0EB";

    return (
        <div className="my-10 border border-gray-200 rounded-lg p-2">
            <Collapse infos={true} color={colorAppPercent} services={services} icon={icon} title={title}>
                {({ open }) => <Apps open={open} apps={apps} />}
            </Collapse>
        </div>
    );
}

export default Services