import { Tabs } from "@mantine/core"
import Alerts from "./Alerts"
import Notification from "./Notification"

export default () => {
  return (
    <div className="min-h-screen flex justify-center py-4">
      <div className="bg-white max-w-[1100px] w-full rounded-md shadow-3xl p-2">
        <Tabs defaultValue="alert" color="yellow">
          <Tabs.List grow>
            <Tabs.Tab value="alert">Alert</Tabs.Tab>
            <Tabs.Tab value="notifications">Notificaions</Tabs.Tab>
          </Tabs.List>

          <Tabs.Panel value="alert" pt="xs">
            <Alerts />
          </Tabs.Panel>

          <Tabs.Panel value="notifications" pt="xs">
            <Notification />
          </Tabs.Panel>
        </Tabs>
      </div>
    </div>
  )
}