import Image from "next/legacy/image"
import { useRouter } from "next/router"
import Btn from "../../../../../components/Btn"
import Instructions from "./Components/instructions"

export default () => {
  const router = useRouter()
  return (
    <div className="flex justify-center bg-neutral-100 py-8">
      <div className="w-full rounded-md shadow-3xl bg-white max-w-[1100px] p-2 flex flex-col justify-between items-center">

        <Instructions />

        <br />

        <div className="relative w-full h-[620px]">
          <Image
            src='/soil-sample.png'
            layout="fill"
            objectFit="contain"
            priority
          />
        </div>

        <br />

        <div className="w-44">
          <Btn onClick={() => router.back()} color='bg-secondary' textColor="text-white">Back</Btn>
        </div>
      </div>
    </div>
  )
}