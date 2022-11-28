import { Carousel } from '@mantine/carousel';
import dynamic from "next/dynamic"
import { useLandStore } from '../../../states/landState'
const Lands = dynamic(import('./Components/Lands'), { ssr: false })

export default () => {

  const lands = useLandStore()

  return (
    <div className="flex justify-center bg-neutral-100 py-8">
      <div className="w-full rounded-md shadow-3xl bg-white h-[95vh] max-w-[1100px]">
        {
          lands.lands.length > 0 ? (
            <Carousel height={'95vh'} slideGap="md" controlSize={21} draggable={false}>
              {
                lands?.lands?.map((item, index) => (
                  item.crop_records.length > 0 && <Carousel.Slide key={index}>
                    <Lands land={item} />
                  </Carousel.Slide>
                ))
              }
            </Carousel>
          ) : (
            <div className="flex justify-center items-center h-full">
              <h1 className="text-2xl font-bold text-neutral-600">No Lands Found!</h1>
            </div>
          )

        }
      </div>
    </div>
  )
}