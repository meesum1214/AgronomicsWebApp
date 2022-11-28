import { Divider, ScrollArea } from "@mantine/core";
import Image from "next/image";
import { useEffect, useState } from "react";
import ClimateMonitoring from "./ClimateMonitoring";
import DatesBar from "./DatesBar";
import HealthMonitoring from "./HealthMonitoring";

export default ({ land }: { land: any }) => {


  const [cropSimulation, setCropSimulation] = useState([])


  useEffect(() => {
    setCropSimulation(land.cropwaters.length > 0 ? JSON.parse(land.cropwaters[0].simulation) : [])
  }, [])

  return (
    <div className="flex h-full w-full">

      <div className="w-2/5 border-gray-300 p-4">
        <div className="border-gray-300 h-32 flex justify-between items-center px-2">
          <div>
            <Image
              src='/broccoli.png'
              width={50}
              height={50}
              priority
              className="w-auto h-auto"
            />
          </div>

          <div className="text-primary font-tahoma font-semibold text-right">
            <div>Crop: {land?.cropwaters[0]?.crop}</div>
            <Divider size='sm' />
            <div>Variety: {land?.crop_records[0]?.variety_name}</div>
          </div>
        </div>

        <Divider size='xs' label='Current Stage' labelPosition="center" />

        <div className="w-full flex justify-around py-10">
          <div className="flex">
            <div className="text-2xl font-semibold text-secondary">40</div>
            <div className="-rotate-90">Day to sow</div>
          </div>
          <div className="text-primary">
            <div className="text-lg font-bold">My Land</div>
            <div className="font-bold">Jhehlum</div>
          </div>
        </div>

        <Divider size='xs' label='Crop Stage' labelPosition="center" />

        <ScrollArea className="text-sm py-4" type="always" scrollbarSize={6}>
          <div className='flex w-80 py-4'>
            {
              cropSimulation.length === 0 ?
                <div className="flex justify-center">
                  No simulation Found!
                </div>
                :
                cropSimulation.map((item: any, i: number) => (
                  <div className="flex" key={i}>
                    <div className="flex flex-col justify-between items-center w-28 h-56 px-6">
                      <div className="flex flex-col items-center">
                        <div className="-rotate-45">{item['crop stage']}</div>
                      </div>
                      <div>
                        <Image
                          src={item['stage image']}
                          width={50}
                          height={50}
                          priority
                        />
                      </div>
                      <div>Day 1</div>
                    </div>
                    <Divider orientation="vertical" size='sm' className='rounded-full' />
                  </div>
                ))
            }
          </div>
        </ScrollArea>

        <div className="w-full flex flex-col items-center pt-4">
          <div className="text-lg font-semibold">Water Dates</div>

          <DatesBar day1='22' day2='64' />

          <div className="text-lg font-semibold -mt-6">Urea Dates</div>

          <DatesBar day1='10' day2='12' />
        </div>

        <div className='w-full font-tahoma text-center font-semibold h-20 flex flex-col justify-between'>
          <div>Dap Dates</div>
          <Divider size="lg" color='red' />
          <div>Sop Dates</div>
          <Divider size="lg" color='red' />
        </div>

      </div>

      <Divider size='xs' orientation="vertical" />

      <div className="w-[58.5%] p-4">
        <ScrollArea className="h-full" scrollbarSize={6}>
          <HealthMonitoring />
          <ClimateMonitoring />
        </ScrollArea>
      </div>
    </div>
  )
}