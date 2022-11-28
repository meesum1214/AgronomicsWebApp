import MyCard from "../../components/MyCard"
import BottomNavigation from "./components/BottomNavigation";
import dynamic from "next/dynamic";
const HomeCarousel = dynamic(import('./components/HomeCarousel'), { ssr: false })
import myCards, { bottomNavigation } from "../../interface/homePage"


export default () => {

  return (
    <div className="flex flex-col items-center pb-10 min-h-screen">

      <div className="flex flex-col max-w-[1100px] w-full">
        <div className="w-full flex items-center justify-center">
          <div className="shadow-3xl my-5 rounded-xl w-full">
            <HomeCarousel />
          </div>
        </div>

        <div className="h-14 flex flex-col justify-around items-center">
          <div className="text-red-500 font-bold flex justify-center">Service Available for Pakistan only, Soon will be global.</div>

          <marquee direction="left" height="30" width="100%" scrollamount='5' className='font-semibold'>
            The minimum support price of Wheat crop for 2021-22 is PKR. 2,200/- per 40kg
          </marquee>
        </div>
      </div>

      <div className="flex flex-col max-w-[1100px]">

        <div className="w-full grid md:grid-cols-3 grid-cols-1 gap-4">
          {
            myCards.map(({ id, src, imgUrl, heading, description, onClick }: { id: number, src: string, imgUrl: string, heading: string, description: string, onClick: Function }) => (
              <div key={id}>
                <MyCard src={src} imgUrl={imgUrl} heading={heading} description={description} onClick={onClick} />
              </div>
            ))
          }
        </div>
      </div>

      <div className="py-6 my-6 flex justify-center rounded-xl w-full max-w-[1100px]">
        <div className="w-full grid md:grid-cols-4 grid-cols-2">
          {
            bottomNavigation.map(({ id, src, iconUrl, title }: { id: number, src: string, iconUrl: string, title: string }) => (
              <div key={id}>
                <BottomNavigation src={src} iconUrl={iconUrl} title={title} />
              </div>
            ))
          }
        </div>
      </div>


    </div>
  )
}