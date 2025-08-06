import type { ReactNode } from "react"
import { LightInfo } from "../../../assets/icons"

function Services({ title, icon, services }: { title: string, icon: ReactNode, services: { total: number, percent: string } } ) {
    return (
        <div className="flex flex-row items-center my-10 border border-gray-200 rounded-[0.6vw] p-5">
            <div>{icon}</div>
            <div className="flex flex-col">
                <div className="flex flex-row items-center">
                    <div className="flex flex-row text-[24px] mx-3">{title}</div>
                    <div><LightInfo /></div>
                </div>
                <div className="flex flex-row text-[16px]">
                    <div className="text-[#747474] mx-3">{services.total} services •</div>
                    <div className="bg-[#E6F5E8] rounded-[2vw] px-2 ml-1 text-[#285E31]">{services.percent}% operacional</div>
                </div>
                </div> 
        </div>
    )
}

export default Services