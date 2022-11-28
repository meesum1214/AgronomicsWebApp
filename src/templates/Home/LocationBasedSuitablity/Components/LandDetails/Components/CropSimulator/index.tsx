import { Divider, ScrollArea } from "@mantine/core"
import Image from "next/legacy/image"

export default ({ selectedLand }: { selectedLand: any }) => {

  const cropsSimulation = JSON.parse(selectedLand.cropwaters[0].simulation)

  return (
    <div className="w-full flex flex-col items-center p-2">
      <div className="font-tahoma font-semibold text-lg py-2">Simultion Forecast</div>
      {/* <div className="h-1 w-56 bg-gray-200 rounded-full"></div> */}
      <Divider size='lg' className='rounded-full' />
      <div className="w-full p-4">
        <div className="font-semibold">Wheat</div>
        <ScrollArea className="text-sm py-4">
          <div className='flex w-80'>
            {
              cropsSimulation?.map((item: any, index: number) => (
                <div className="flex" key={'rhgehe' + index}>
                  <div className="flex flex-col justify-between items-center h-56 px-6">
                    <div className="flex flex-col items-center">
                      <div>{item['crop stage']}</div>
                      {/* <div>{item['crop stage']}</div> */}
                    </div>
                    <div>
                      <Image
                        src={item['stage image']}
                        // alt="Simulated Crop"
                        width={50}
                        height={50}
                        priority
                      />
                    </div>
                    <div>Day 1</div>
                  </div>
                  <Divider orientation="vertical" size='lg' className='rounded-full' />
                </div>
              ))
            }
          </div>
        </ScrollArea>
        {/* <Btn color="bg-secondary" textColor="text-white" onClick={() => console.log('cropsSimulation>>>>', cropsSimulation)}>crop water</Btn> */}
      </div>
    </div>
  )
}