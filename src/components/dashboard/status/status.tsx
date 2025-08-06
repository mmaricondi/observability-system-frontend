import { UpdateIcon } from "../../../assets/icons"

function Status() {
  return (
    <div className="flex flex-row items-center justify-between mb-6 px-5 pt-5">
        <div>
            <div className="text-[30px]">Status dos serviços</div>
            <div className="text-[16px] text-gray-500">Acompanhe como estão os serviços internos e externos da Click.</div>
        </div>
        <div className="flex items-center gap-2 mt-10">
            <UpdateIcon />
            <div className="text-[14px] text-gray-400">Última atualização há {new Date().toLocaleTimeString()}</div>
        </div>
    </div>
  )
}

export default Status