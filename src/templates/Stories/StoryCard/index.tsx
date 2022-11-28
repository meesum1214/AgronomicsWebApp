import Image from "next/legacy/image"
import { MouseEventHandler } from "react"

export default ({ title, image, text, onClick }: { title: string, image: string, text:string, onClick: MouseEventHandler }) => {
  return (
    <div onClick={onClick} className="h-[400px] cursor-pointer flex items-center flex-col">
      <div className="relative w-full h-[250px] top-0">
        <Image
          src={image}
          objectFit="contain"
          alt='logo'
          layout='fill'
          priority
        />
      </div>
      <div className="p-2 font-tahoma text-gray-500">{title}</div>
      <div className="px-2 pb-2 ">{text.slice(0, 135)}...</div>
    </div>
  )
}