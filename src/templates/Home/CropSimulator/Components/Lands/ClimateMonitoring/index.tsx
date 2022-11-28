import { Tabs } from "@mantine/core";
import Chart from "../../../../../../components/Chart";

export default () => (
  <div className="w-full">
    <div className="w-full flex justify-center text-primary font-tahoma font-semibold p-4">Climate Monitoring</div>
    <Tabs variant="outline" defaultValue="temperature" className="w-full">
      <Tabs.List>
        <Tabs.Tab value="temperature">Temperature</Tabs.Tab>
        <Tabs.Tab value="humidity">Humidity</Tabs.Tab>
        <Tabs.Tab value="rainfall">Rainfall</Tabs.Tab>
        <Tabs.Tab value="wind_speed">Wind Speed</Tabs.Tab>
      </Tabs.List>

      <Tabs.Panel value="temperature" pt="xs">
        <div className="h-[400px]">
          <Chart />
        </div>
      </Tabs.Panel>

      <Tabs.Panel value="humidity" pt="xs">
        <div className="h-[400px]">
          <Chart />
        </div>
      </Tabs.Panel>

      <Tabs.Panel value="rainfall" pt="xs">
        <div className="h-[400px]">
          <Chart />
        </div>
      </Tabs.Panel>

      <Tabs.Panel value="wind_speed" pt="xs">
        <div className="h-[400px]">
          <Chart />
        </div>
      </Tabs.Panel>
    </Tabs>
  </div>
)