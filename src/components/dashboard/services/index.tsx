import { useState } from 'react'
import { InternalIcon, ExternalIcon } from '../../../assets/icons'
import Services from './services'
import Top from './top'

function AllServices({data}: {data: any}) {
  const [service, setServices] = useState({internal: {online: 2, offline: 1}, external: {online: 3, offline: 0}})

  const { internal, external } = calculateService()

  const renderServiceContainer = () => {
    return (
      <div className='mx-5'>
        <Services icon={<InternalIcon />} title="Serviços Internos" services={{ total: internal.total, percent: internal.percent }}  />
        <Services icon={<ExternalIcon />} title="Serviços Externos" services={{ total: external.total, percent: external.percent }} />
      </div>
    )
  }

  function calculateService() {
    const totalInternal: any = service.internal.online + service.internal.offline
    const totalExternal: number = service.external.online + service.external.offline
    const percentInternal: string = ((service.internal.online * 100) / totalInternal).toPrecision(3)
    const percentExternal: string = ((service.external.online * 100) / totalExternal).toPrecision(3)

    return { internal: { total: totalInternal, percent: percentInternal }, external: { total: totalExternal, percent: percentExternal } }
  }

  return (
    <div className='px-10 py-5'>
      <Top />
      {renderServiceContainer()}
    </div>
  )
}

export default AllServices
