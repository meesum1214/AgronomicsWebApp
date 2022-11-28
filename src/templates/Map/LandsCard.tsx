import { useLandStore } from "../../states/landState"
import { Divider, Input, ScrollArea } from "@mantine/core"
import { setSelectedLand, unselectLand, useSelectedLand } from "../../states/selectedLand";
import {  MdSearch,  } from "react-icons/md";
import { FcFilledFilter , FcSettings } from "react-icons/fc";
export default () => {
  const selected = useSelectedLand()?.selectedLand
  const lands = useLandStore()?.lands

  return (
    <div className="pl-2 bg-white">
      {/* <div className="flex cursor-pointer justify-center items-center text-center ">
        <MdChevronLeft size={26} className="rotate-90" />
      </div> */}
      <div className="flex items-center  p-2">
        <Input variant="filled" className="flex-1 mr-2" rightSection={<MdSearch size={26} className="text-gray-500" />} placeholder="Search Land" />
        <div className="hover:scale-105 transition-all cursor-pointer"><FcSettings size={26} className="text-gray-500"/> </div>
        <div className="hover:scale-105 transition-all cursor-pointer"><FcFilledFilter size={26} className="text-gray-500"/> </div>
      </div>
      <ScrollArea className={`${selected?.id ? 'h-[50vh]' : 'h-[90vh]'} relative w-96 transition-all`} offsetScrollbars>
        <div className="flex  overflow-hidden flex-col w-full">
          {
            lands?.map((land) => {
              return (

                <div className=" hover:scale-[1.02] transition-all hover:shadow-3xl rounded-lg flex-1 m-1" style={{ minWidth: '210px' }} key={land.createdat}>
                  <div
                    className={`w-full h-54 pt-1 px-2 rounded-lg text-xs font-tahoma cursor-pointer transition-all ${selected?.id == land?.id ?
                      'bg-gradient-to-r from-emerald-900 to-emerald-800 hover:from-green-900 hover:to-emerald-700 text-white'
                      :
                      'hover:bg-white'
                      }`}
                    onClick={() => selected?.id !== land.id ?  setSelectedLand(land) : unselectLand()}
                  >
                    <div className="py-2">
                      <div className="flex justify-start">
                        <div className="py-1 font-semibold text-lg">{land.name}</div>
                        <div className="flex-1" />
                        <div className={`text-2xs h-6 tracking-wider text-white px-3 py-0.5 rounded-full font-bold cursor-pointer transition-transform flex justify-center border-white border-2 bg-${land?.crop_records?.length > 0 ? 'primary' : 'secondary'}`}>
                          {land?.crop_records?.length > 0 ? 'Cultivated' : 'Non-Cultivated'}
                        </div>
                      </div>


                      
                      <div className="flex justify-between items-center">

                        <div className={`${selected?.createdat == land?.createdat ? 'text-white' : 'text-gray-500'}`}>{land?.tehsil} </div>
                        <div className={`text-xs font-semibold ${selected?.createdat == land?.createdat ? 'text-white' : 'text-gray-500'}`}>{land.size}</div>
                      </div>
                    </div>
                    <Divider className="my-1" />
                  </div>
                </div>

              )
            })
          }
        </div>
      </ScrollArea>
      {/* <div className="flex cursor-pointer justify-center items-center text-center ">
        <MdChevronLeft size={26} className="-rotate-90" />
      </div> */}

    </div>
  )
}

