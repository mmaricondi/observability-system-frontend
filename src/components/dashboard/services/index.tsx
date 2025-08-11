import { useState, useEffect, useContext } from 'react'
import { InternalIcon, ExternalIcon } from '../../../assets/icons'
import Services from './services'
import { DashboardContext } from '../../../contexts/Dashboard/DashboardContext';
import Top from './top'

function AllServices() {
  const [applicationAvgEventData, setApplicationsAvgEventData] = useState<any>({ internal: [], external: [] });
  const [infoAvgEventData, setInfoAvgEventData] = useState<any>({ internal: [], external: [] });
  const dashboardCtxt = useContext(DashboardContext);
  

  useEffect(() => {
    if(!dashboardCtxt.appAvgEventData) return;
      setApplicationsAvgEventData(dashboardCtxt.appAvgEventData.applications);
      setInfoAvgEventData(dashboardCtxt.appAvgEventData.infos);
    }, [dashboardCtxt.appAvgEventData]);

  const renderServiceContainer = () => {
    return (
      <div className='mx-5'>
        <Services icon={<InternalIcon />} title="Serviços Internos" services={{ total: infoAvgEventData.internal ? infoAvgEventData.internal.totalServices : 0, percent: infoAvgEventData.internal ? infoAvgEventData.internal.avgPercent : "Sem serviços" }} apps={applicationAvgEventData.internal} />
        <Services icon={<ExternalIcon />} title="Serviços Externos" services={{ total: infoAvgEventData.external ? infoAvgEventData.external.totalServices : 0, percent: infoAvgEventData.external ? infoAvgEventData.external.avgPercent : "Sem serviços" }} apps={applicationAvgEventData.external} />
      </div>
    )
  }

  return (
    <div className='px-10 py-5'>
      <Top />
      {renderServiceContainer()}
    </div>
  )
}

export default AllServices
