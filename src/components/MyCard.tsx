import { Divider } from "@mantine/core"
import Image from "next/legacy/image"
import Link from "next/link"
import { MouseEventHandler } from "react"

export default ({ heading, src, imgUrl, description, onClick }: { heading?: string, src: string, imgUrl: string, description?: string, onClick?: MouseEventHandler }) => {
  return (
    <Link href={src}>
      <div onClick={onClick} className='bg-white shadow-2sm w-full md:h-40 h-32 px-2 transition-all rounded-md cursor-pointer hover:scale-105 flex items-center'>
        <div className="w-[20%]">
          <Image
            src={`/${imgUrl}.png`}
            width={60}
            height={60}
            priority
            className="w-auto h-auto"
            alt="image not available"
          />
        </div>
        <div className="ml-2 w-[75%]">
          <h3 className='md:text-lg text-xs font-bold'>{heading}</h3>
          <Divider className="w-full" />
          <div className="md:text-lg text-xs">{description}</div>
        </div>
      </div>
    </Link>
  )
}