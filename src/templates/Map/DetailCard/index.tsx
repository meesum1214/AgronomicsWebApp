import { Paper, SegmentedControl, Transition } from "@mantine/core"
import { useClickOutside, useDidUpdate } from "@mantine/hooks"
import { useState } from "react"
import { useSelectedLand } from "../../../states/selectedLand"
import CropInfo from "./CropInfo"
import LocationDetails from "./LocationDetails"
import MarketInfo from "./MarketInfo"
import Notifications from "./Notifications"
import { useResizeObserver } from '@mantine/hooks';
import dynamic from "next/dynamic"
const ResizePanel = dynamic(import("react-resize-panel"), { ssr: false });
export default () => {
  const [ref, rect] = useResizeObserver();
  const [segment, setsegment] = useState('LandDetails')
  const selected = useSelectedLand()?.selectedLand
  const [opened, setOpened] = useState(true);
  // const clickOutsideRef = useClickOutside(() => setOpened(false));

  useDidUpdate(() => {
    if (selected) {
      setOpened(true)
    } else {
      setOpened(false)
    }
  }, [selected])

  return (
    <>
      {
        selected && (
          <Transition mounted={opened} transition={'slide-up'} duration={200} timingFunction="ease">
            {(styles) => (
              
                <Paper
                  ref={ref}
                  shadow="md"
                  style={{ ...styles }}
                  className="bg-white relaive z-50  h-full w-screen shadow-heavy p-2"
                // ref={clickOutsideRef}
                >
                  <div className="justify-center">
                  <SegmentedControl
                    data={[
                      { value: 'LandDetails', label: 'Location Details' },
                      { value: 'CropMonitoring', label: 'Crop Monitoring' },
                      { value: 'MarketDetails', label: 'Market Info' },
                      { value: 'Notifications', label: 'Notifications' },

                    ]}
                    onChange={(value) => setsegment(value)}
                    value={segment}
                    color="pink"
                    radius={'xl'}
                    size="xs"
                  />
                  </div>
                  {
                    segment === 'CropMonitoring' ? <CropInfo selected={selected} /> :
                      segment === 'LandDetails' ? <LocationDetails selected={selected} /> :
                        segment === 'MarketDetails' ? <MarketInfo selected={selected} /> :
                          segment === 'Notifications' ? <Notifications selected={selected} /> :
                            <></>
                  }

                </Paper>
             
            )}
          </Transition>
        )
      }
    </>

  )
}