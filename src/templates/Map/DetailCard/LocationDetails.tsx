import { Divider, ScrollArea, Tabs } from "@mantine/core"
import { useEffect, useState } from "react";
import { MdLocationOn, MdThermostat, MdWbSunny } from "react-icons/md";
import { LANDRECORD } from "../../../interface/LandRecord"
import useSWR from 'swr'
import WeatherChart from "./WeatherChart";

export default ({ selected }: { selected: LANDRECORD }) => {
  const [activeTab, setActiveTab] = useState('1');

  const { data, error } = useSWR(`/api/farmWeather/?farmid=${selected?.id}`, (...args) => fetch(...args).then(res => res.json()))
  const {soildata , err} = useSWR(`/api/soilInfo/?location=${selected?.location}`, (...args) => fetch(...args).then(res => res.json()))


  return (
    <div className="flex flex-col">
      <h3 className="my-3 font-bold text-primary text-lg">Land Details</h3>
      <Divider />
      <Tabs defaultValue="Address" >
        <Tabs.List >
          <Tabs.Tab value="Address" icon={<MdLocationOn size={14} />}>Address</Tabs.Tab>
          <Tabs.Tab value="SoilInfo" icon={<MdThermostat size={14} />}>Soil Info</Tabs.Tab>
          <Tabs.Tab value="Weather" icon={<MdWbSunny size={14} />}>Weather</Tabs.Tab>
        </Tabs.List>

        <Tabs.Panel value="Address" pt="xs">
          <div>
            <div className="flex">
              <b className="flex-1">Land Name</b><b className="flex-1 text-right">{selected?.name}</b>
            </div>
            <Divider />
            <div className="flex">
              <b className="flex-1">Tehsil</b><b className="flex-1 text-right">{selected?.tehsil}</b>
            </div>
            <Divider />
            <div className="flex">
              <b className="flex-1">District</b><b className="flex-1 text-right">{selected?.district}</b>
            </div>
            <Divider />
            <div className="flex">
              <b className="flex-1">Province</b><b className="flex-1 text-right">{selected?.province}</b>
            </div>
          </div>
        </Tabs.Panel>

        <Tabs.Panel value="SoilInfo" pt="xs">
          <div> {JSON.stringify(soildata)}</div>
        </Tabs.Panel>

        <Tabs.Panel value="Weather" pt="xs">
          {
            !data ? <div className="text-center">Loading...</div> :
              <ScrollArea className="w-full">
                <div className=" w-full">

                  <WeatherChart data={data} />
                </div>
              </ScrollArea>
          }

        </Tabs.Panel>
      </Tabs>



    </div>
  )
}