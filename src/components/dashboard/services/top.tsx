

function Infos() {
    return (
        <div className="flex flex-row justify-between my-5">
            <div className="text-[#333333] text-[28px] px-5">Todos os serviços</div>
            <div className="flex flex-row justify-end px-5">
                <div className="flex flex-row flex items-center m-3">
                    <div className="border-2 bg-[#F7FAF7] border-[#285E31] px-8 h-4"></div>
                    <div className="text-[14px] ml-1 text-gray-600">Serviços operante</div>
                </div>
                <div className="flex flex-row flex items-center m-3">
                    <div className="border-2 bg-[#FFF8E1] border-[#8F731A] px-8 h-4"></div>
                    <div className="text-[14px] ml-1 text-gray-600">Performance instável</div>
                </div>
                <div className="flex flex-row flex items-center m-3">
                    <div className="border-2 bg-[#FFF0EB] border-[#CC0404] px-8 h-4"></div>
                    <div className="text-[14px] ml-1 text-gray-600">Interrupção temporária</div>
                </div>
            </div>
        </div>
    )
}

export default Infos