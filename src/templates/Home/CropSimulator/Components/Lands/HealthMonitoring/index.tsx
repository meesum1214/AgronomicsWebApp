import { Tabs } from "@mantine/core";
import Chart from "../../../../../../components/Chart";

export default () => (
  <div className="w-full">
    <div className="w-full flex justify-center text-primary font-tahoma font-semibold p-4">Health Monitoring</div>
    <Tabs variant="outline" defaultValue="ndvi">
      <Tabs.List>
        <Tabs.Tab value="ndvi">NDVI</Tabs.Tab>
        <Tabs.Tab value="ndre">NDRE</Tabs.Tab>
        <Tabs.Tab value="msavi">MSAVI</Tabs.Tab>
        <Tabs.Tab value="recl">ReCL</Tabs.Tab>
      </Tabs.List>

      <Tabs.Panel value="ndvi" pt="xs">
        <div className="h-[400px]">
          <Chart />
        </div>
      </Tabs.Panel>

      <Tabs.Panel value="ndre" pt="xs">
        <div className="h-[400px]">
          <Chart />
        </div>
      </Tabs.Panel>

      <Tabs.Panel value="msavi" pt="xs">
        <div className="h-[400px]">
          <Chart />
        </div>
      </Tabs.Panel>

      <Tabs.Panel value="recl" pt="xs">
        <div className="h-[400px]">
          <Chart />
        </div>
      </Tabs.Panel>
    </Tabs>
  </div>
)