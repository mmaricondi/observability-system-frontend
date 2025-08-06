import { useState } from 'react';
import Alert from "../../../components/page/alert";
import AlertEnum from "../../../constants/alert/alert.enum";

function Services() {
    const [internalServices, setInternalServices] = useState([{ id: 1, name: "Auth Service", status: "error" }, { id: 2, name: "Payment Service", status: "success" }, { id: 3, name: "User Service", status: "warning" }]);
    const [externalServices, setExternalServices] = useState([{ id: 1, name: "Canna bull", status: "success" }, { id: 2, name: "Chat guru", status: "success" }]);

    function showInternalAlert() {
        const type = internalServices.some(service => service.status === "error") ? "error" : internalServices.some(service => service.status === "warning") ? "warning" : "success";
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

    function showExternalAlert() {
        const type = externalServices.some(service => service.status === "error") ? "error" : externalServices.some(service => service.status === "warning") ? "warning" : "success";
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

    function listUnstableInternalServices() {
        return internalServices.filter(service => service.status === "warning" || service.status === "error").map(service => (
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

    function listUnstableExternalServices() {
        return externalServices.filter(service => service.status === "warning" || service.status === "error").map(service => (
             <div className='p-5' key={service.id}>
                <div className='font-normal'>
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
                {showInternalAlert()}
            </div>
            <div className="border-l border-r border-b border-gray-200 mb-4">
                {listUnstableInternalServices()}
            </div>
        </div>
        <div>

        </div>
             <div className="border-l border-r border-t border-gray-200 p-5">
                <h1 className='text-[20px] font-semibold text-gray-600 pb-3'>Serviços externos</h1>
                {showExternalAlert()}
            </div>
            <div className="border-l border-r border-b border-gray-200 mb-4">
                {listUnstableExternalServices()}
            </div>
        </>
    )
}

export default Services