import { useState } from 'react';
import { LightInfo } from "../../../assets/icons"

export function Collapse({children, infos, color, services, icon, title, subtitle}: {children: (props: { open: boolean }) => React.ReactNode, infos: boolean, color: string, services: { total: number, percent: string }, icon: React.ReactNode, title?: string, subtitle?: string}) {
    const [open, setOpen] = useState(false);

    return (
        <div className={` ${open && subtitle ? "bg-gray-50 border border-gray-200" : ""}`}>
            <button
                onClick={services.total > 0 ? () => setOpen(!open) : undefined}
                className="flex w-full items-center justify-between p-3 text-left" 
            >
                <div className="flex flex-row items-center">
                    {icon && <div>{icon}</div>}
                    <div className="flex flex-col">
                        <div className="flex flex-row items-center">
                            <div className="flex flex-row text-[24px] mx-3">{title}</div>
                            {infos && <div><LightInfo /></div>}
                        </div>
                        <div className="flex flex-row text-[16px]">
                            {title ? <div className="text-[#747474] mx-3">{services.total ? `${services.total} services` : "" }</div> : <div className="text-[#747474] mx-3">{subtitle}</div>}
                            { (!open || subtitle) && (
                                <>
                                    {services.total && infos ? <div>•</div> : <noscript />}
                                    <div className="bg-[#E6F5E8] rounded-[2vw] px-2 ml-1" style={{ backgroundColor: color }}>{services.total ? `${services.percent}% operacional` : services.percent }</div>
                                </>
                            )}
                        </div>
                    </div>
                </div>
                <svg
                    className={`h-4 w-4 transform transition-transform duration-200 ${
                        open ? "rotate-90" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
            </button>
            {children({ open })}
        </div>
    )
}