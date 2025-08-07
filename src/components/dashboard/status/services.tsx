import { useEffect, useState } from 'react';
import Alert from "../../../components/page/alert";
import AlertEnum from "../../../constants/alert/alert.enum";

function Services() {
    const [internalServices, setInternalServices] = useState([] as any);
    const [externalServices, setExternalServices] = useState([] as any);

    useEffect(() => {
        const serverResponse = {
            internalServices: [{ id: 1, name: "Auth Service", status: "error" }, { id: 2, name: "Payment Service", status: "success" }, { id: 3, name: "User Service", status: "warning" }],
            externalServices: [{ id: 1, name: "Auth Service", status: "error" }, { id: 2, name: "Payment Service", status: "success" }, { id: 3, name: "User Service", status: "warning" }]
        }
        setInternalServices(serverResponse.internalServices)
        setExternalServices(serverResponse.externalServices)
    }, [])

    function showAlert(services: any[]) {
        const type = services.some(service => service.status === "error") ? "error" : internalServices.some((service: any) => service.status === "warning") ? "warning" : "success";
        const message = type === "error" ? AlertEnum.ERROR : type === "warning" ? AlertEnum.WARNING : AlertEnum.SUCCESS;
        return (
            <div className="">
                <Alert 
                    message={message} 
                    type={type}
                />
            </div>
        );
    }

    function listServices(services: any[]) {
        return services.filter(service => service.status === "warning" || service.status === "error").map(service => (
            <div className='p-5' key={service.id}>
                <div className='font-semibold text-gray-600'>
                    {service.status === "error" ? <span>Queda total do {service.name}</span> : <span>Queda parcial do {service.name}</span>}
                </div>
                <div className='text-[13px] text-gray-500'>
                    Afetando {service.name} • {new Date().toLocaleTimeString()}
                </div>
            </div>
        ));
    }

    return (
        <>
        <div>
            <div className="border border-gray-200 p-5">
                <h1 className='text-[20px] font-semibold text-gray-600 pb-3'>Serviços internos</h1>
                {showAlert(internalServices)}
            </div>
            <div className="border-l border-r border-b border-gray-200 mb-4">
                {listServices(internalServices)}
            </div>
        </div>
        <div>

        </div>
             <div className="border-l border-r border-t border-gray-200 p-5">
                <h1 className='text-[20px] font-semibold text-gray-600 pb-3'>Serviços externos</h1>
                {showAlert(externalServices)}
            </div>
            <div className="border-l border-r border-b border-gray-200 mb-4">
                {listServices(externalServices)}
            </div>
        </>
    )
}

export default Services