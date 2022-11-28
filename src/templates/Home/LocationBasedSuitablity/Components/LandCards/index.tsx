import { Divider } from "@mantine/core"
import { setSelectedLand } from "../../../../../states/selectedLand";

export default ({ selected, land }: { selected: boolean, land: any }) => {
  return (
    <div
      className={`w-full h-54 pt-1 px-2 rounded-lg text-sm font-tahoma cursor-pointer transition-all ${selected ?
        'bg-primary hover:bg-primaryDark text-white'
        :
        'hover:bg-gray-100'
        }`}
      onClick={() => setSelectedLand(land)}
    >
      <div className="py-2">
        <div className="flex justify-between">
          <div className={`text-2xs tracking-wider text-white px-6 py-0.5 rounded-full font-bold cursor-pointer transition-transform flex justify-center border-white border-2 bg-${land.crop_records.length > 0 ? 'primary' : 'secondary'}`}>
            {land.crop_records.length > 0 ? 'Cultivated' : 'Non-Cultivated'}
          </div>
        </div>
        <div className="py-1 font-semibold text-lg">{land.name}</div>
        <div className="flex justify-between items-center">
          <div className={`${selected ? 'text-white' : 'text-gray-500'}`}>{land?.tehsil} </div>
          <div className={`text-base font-semibold ${selected ? 'text-white' : 'text-gray-500'}`}>{land.size}</div>
        </div>
      </div>
      <Divider/>
    </div>
  )
}