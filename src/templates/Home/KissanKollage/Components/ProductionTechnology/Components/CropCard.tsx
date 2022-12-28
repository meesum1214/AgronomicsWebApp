import Image from "next/legacy/image"
import { MouseEventHandler } from "react"

export default ({ name, selected, setSelected, onClick }: { name: string, selected: boolean, setSelected: Function, onClick: MouseEventHandler }) => {

  const imgOBJ = {
    'Seed Plants': '/seed  plants.png',
    'Fiber Crop': '/fibre crops.png',
    'Oil Seed Crops': '/oil seed crops.png',
    'Cereal Crops': '/cereal crops.png',
    'Vegetables': '/vegetables.png'
  }


  return (
    <div
      className={`w-full h-28 px-2 rounded-lg text-sm font-tahoma cursor-pointer transition-all flex items-center border-gray-400 border-b ${selected ?
        'bg-primary hover:bg-primaryDark text-white'
        :
        'hover:bg-gray-100'
        }`}
      onClick={onClick}
    >
      <div className="w-full flex justify-between items-center">
        <Image
          src={imgOBJ[name]}
          width={55}
          height={55}
          priority
        />

        <div className="py-4">
          <div className={`text-base font-semibold ${selected ? 'text-white' : 'text-gray-500'}`}>{name}</div>
        </div>
      </div>
    </div>
  )
}