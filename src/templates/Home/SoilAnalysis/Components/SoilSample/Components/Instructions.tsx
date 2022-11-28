import Image from "next/legacy/image";

export default () => (
  <div className="w-[852px]">
    <div className="w-full flex">
      <div className="relative w-1/2 h-[287px] hover:scale-105 transition-all hover:shadow-3xl hover:z-50 cursor-pointer">
        <Image
          src='/I1.png'
          objectFit="contain"
          layout="fill"
          className="rounded-tl-md"
        />
      </div>
      <div className="relative w-1/2 h-[287px] hover:scale-105 transition-all hover:shadow-3xl hover:z-50 cursor-pointer">
        <Image
          src='/I2.png'
          objectFit="contain"
          layout="fill"
          className="rounded-tr-md"
        />
      </div>
    </div>

    <div className="w-full flex">
      <div className="relative w-1/2 h-[287px] hover:scale-105 transition-all hover:shadow-3xl hover:z-50 cursor-pointer">
        <Image
          src='/I3.png'
          objectFit="contain"
          layout="fill"
          className="rounded-bl-md"
        />
      </div>
      <div className="relative w-1/2 h-[287px] hover:scale-105 transition-all hover:shadow-3xl hover:z-50 cursor-pointer">
        <Image
          src='/I4.png'
          objectFit="contain"
          layout="fill"
          className="rounded-br-md"
        />
      </div>
    </div>
  </div>
)