import { useEffect, useState, useContext } from 'react';
import Alert from "../../../components/page/alert";
import { AlertMessage, AlertType, StatusService } from "../../../constants/alert/alert.enum";
import { DashboardContext } from '../../../contexts/Dashboard/DashboardContext';
import type { IAppication } from '../../../interfaces/dashboard/last-app-event.interface';


function Services() {
    const [internalServices, setInternalServices] = useState([] as IAppication[]);
    const [externalServices, setExternalServices] = useState([] as IAppication[]);
    const dashboardCtxt = useContext(DashboardContext);


    useEffect(() => {
        if(!dashboardCtxt.appLastEventData) return;
        setInternalServices(dashboardCtxt.appLastEventData?.internal || []);
        setExternalServices(dashboardCtxt.appLastEventData?.external || []);
    }, [dashboardCtxt.appLastEventData]);

    function showAlert(services: IAppication[]) {
        const servicesLength = services.length;
        if(servicesLength) {
            const { message, type } = calculateAlertType(services);
            return (
                <Alert 
                    message={message} 
                    type={type}
                />
            );
        }else return (  <div>No services to display</div> );
    }

    function calculateAlertType(services: IAppication[]) {
        const servicesLength = services.length;
        let numUpServices = 0;
        services.forEach(service => {
            if(service.events.status == "up") numUpServices++;
        })
        const percentageUp = (numUpServices / servicesLength) * 100;
        if(percentageUp == 100) {
            return { message: AlertMessage.SUCCESS, type: AlertType.SUCCESS };
        }else if(percentageUp >= 70) {
            return { message: AlertMessage.WARNING, type: AlertType.WARNING };
        }else {
            return { message: AlertMessage.ERROR, type: AlertType.ERROR };
        }
    }

    function listServices(services: IAppication[]) {
        return services.filter(service => service.events.status == StatusService.DOWN).map(service => (
            <div className='p-5' key={service.events.id}>
                <div className='font-semibold text-gray-600'>
                    {service.events.status === StatusService.DOWN && <span>Servico {service.name} fora do ar</span>}
                </div>
                <div className='text-[13px] text-gray-500'>
                    Afetando {service.name} • {service.events.description}
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