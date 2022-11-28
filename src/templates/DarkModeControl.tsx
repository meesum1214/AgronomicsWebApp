import { Center, SegmentedControl } from "@mantine/core"
import { MdDarkMode, MdLightMode } from "react-icons/md"

export default () => {
  return(
    <div className='container'>
    <SegmentedControl className='mx-3 w-36 text-sm '
      radius={'lg'}

      data={[
        {
          label: (
            <Center>
              <MdDarkMode />

            </Center>
          ),
          value: 'dark'
        },
        {
          label: (
            <Center>
              <MdLightMode />

            </Center>
          ),
          value: 'light'
        }
      ]} />
  </div>
  )
    }