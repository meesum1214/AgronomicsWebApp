import Image from "next/legacy/image"
import Link from "next/link"

export default ({ iconUrl, title, src }: { iconUrl: string, title: string, src: string }) => {
  return (
    <div className="flex flex-col items-center text-base font-tahoma font-bold">
      <Link href={src}>
        <div className="flex flex-col items-center hover:scale-105 transition-all">
          <Image
            src={`/${iconUrl}.png`}
            alt='bottom-logo'
            width={139}
            height={98}
            className='cursor-pointer w-auto h-auto'
            priority
          />
          <div className="mt-2">{title}</div>
        </div>
      </Link>
    </div>
  )
}