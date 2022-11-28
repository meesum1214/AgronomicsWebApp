import { BackgroundImage } from "@mantine/core"
import Image from "next/legacy/image"
import { useRouter } from "next/router"
import Card from "./Components/Card"

export default () => {

  const router = useRouter()

  return (
    <div>
      <BackgroundImage src='/BG.jpg' className="min-h-screen lg:flex hidden lg:justify-center lg:items-center">
        <div className="min-w-[1100px] h-[700px] flex">
          <div className="lg:pl-2 w-[60%] flex justify-evenly items-start font-tahoma">

            <Card onClick={() => router.push('/home/PlantAnalysis/addsample')} title='Add Sample' imgSrc='/add sample.png' desc='Send affected plant part images with a proper description.' />

            <Card onClick={() => router.push('/home/PlantAnalysis/results')} title='Results' imgSrc='/result.png' desc='Get the respective solutions against diseases, weeds, insects & pests attack.' />

          </div>

          <div className="w-[40%] flex justify-center items-end">
            <Image
              src="/LAPTOP(2).png"
              alt="Picture of the author"
              width={350}
              height={350}
              priority
              quality={100}
              className="mb-10"
            />
          </div>
        </div>
      </BackgroundImage>



      <BackgroundImage src='/bgPlantAnalysis.jpg' className="lg:hidden flex flex-col min-h-screen">
        <div className="w-full h-[50vh] flex justify-center items-center font-tahoma">

          <Card onClick={() => router.push('/home/PlantAnalysis/addsample')} title='Add Sample' imgSrc='/add sample.png' desc='Send affected plant part images with a proper description.' />

        </div>

        <div className="w-full h-[50vh] flex justify-around items-center">
          <Card onClick={() => router.push('/home/PlantAnalysis/results')} title='Results' imgSrc='/result.png' desc='Get the respective solutions against diseases, weeds, insects & pests attack.' />
          <Image
            src="/LAPTOP(2).png"
            alt="Picture of the author"
            width={290}
            height={290}
            priority
            quality={100}
            className="mb-10"
          />
        </div>
      </BackgroundImage>

    </div>
  )
}