import Image from "next/legacy/image";
import { MouseEventHandler } from "react";

export default ({ title, imgSrc, desc, onClick }: { title: string, imgSrc: string, desc: string, onClick: MouseEventHandler }) => (
  <div onClick={onClick} className="w-[290px] h-[300px] rounded-5xl bg-secondary p-1 flex flex-col items-center cursor-pointer hover:scale-105 transition-all">
    <div className="w-full h-[280px] rounded-t-5xl bg-primary flex flex-col justify-evenly items-center">
      <div className="w-[130px] h-[130px] flex justify-center items-center bg-white rounded-full border-secondary border-4 mt-2">
        <div className="relative w-[100px] h-[100px]">
          <Image
            src={imgSrc}
            alt="Picture of the author"
            layout="fill"
            objectFit="contain"
            priority
            quality={100}
          />
        </div>
      </div>
      <div className="w-[90%] text-center text-white">{desc}</div>
    </div>

    <div className="w-full h-[100px] flex justify-center items-center text-xl text-white font-semibold">{title}</div>
  </div>
)