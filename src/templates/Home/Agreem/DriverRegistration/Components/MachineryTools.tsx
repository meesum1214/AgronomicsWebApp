import { NumberInput, Select } from "@mantine/core"
import { Dropzone, FileWithPath, IMAGE_MIME_TYPE } from "@mantine/dropzone"
import Image from "next/legacy/image"
import { useState } from "react"
import { AiFillPlusCircle } from "react-icons/ai"
import Btn from "../../../../../components/Btn"

export default () => {

  const [state, setState] = useState(false)

  const [machineryData, setMachineryData] = useState({
    machinery: '',
    vehicleNumber: '',
    horsePower: '',
    model: '',
    category: '',
    toolName: '',
  })
  const [machinePicture, setMachinePicture] = useState<FileWithPath[]>([]);
  const [toolPicture, setToolPicture] = useState<FileWithPath[]>([]);

  return (
    <div className="py-4 flex justify-center">
      {
        !state ?
          <div className="w-[80%]">
            <div className="grid grid-cols-2 gap-4">
              <Select
                label="Machinery"
                placeholder="Select One"
                withAsterisk
                data={[
                  { label: 'Tractor', value: 'tractor' },
                  { label: 'Truck', value: 'truck' },
                  { label: 'Harvestor', value: 'harvestor' },
                ]}
                onChange={(e: any) => {
                  setMachineryData({ ...machineryData, machinery: e })
                }}
                styles={(theme) => ({
                  item: {
                    // applies styles to selected item
                    '&[data-selected]': {
                      '&, &:hover': {
                        backgroundColor: '#cc9441',
                        color: 'white',
                      },
                    },

                    // applies styles to hovered item (with mouse or keyboard)
                    '&[data-hovered]': {},
                  },
                })}
              />

              <NumberInput
                label="Vehicle No."
                placeholder="Enter Vehicle No."
                withAsterisk
                hideControls
                onChange={(e: any) => {
                  setMachineryData({
                    ...machineryData,
                    vehicleNumber: e
                  })
                }}
              />

              <NumberInput
                label="Horse Power"
                placeholder="Enter Horse Power"
                withAsterisk
                hideControls
                onChange={(e: any) => {
                  setMachineryData({
                    ...machineryData,
                    horsePower: e
                  })
                }}
              />

              <NumberInput
                label="Model"
                placeholder="Enter Model"
                withAsterisk
                hideControls
                onChange={(e: any) => {
                  setMachineryData({
                    ...machineryData,
                    model: e
                  })
                }}
              />
            </div>

            {
              machinePicture.length > 0 ?
                <div className="my-4">
                  <Image
                    src={`/${machinePicture[0].path}`}
                    alt="CNIC Image"
                    width={400}
                    height={250}
                    className="rounded-md"
                    priority
                  />
                </div>
                :
                <div className="my-4">
                  <label className="text-sm font-semibold">Machine Picture</label>
                  <Dropzone
                    onDrop={setMachinePicture}
                    accept={IMAGE_MIME_TYPE}
                    sx={(theme) => ({
                      width: '100%',
                      height: 250,
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      fontWeight: 600,
                      border: '1px solid #cc9441',
                      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],

                      '&[data-accept]': {
                        color: theme.white,
                        backgroundColor: theme.colors.blue[6],
                      },

                      '&[data-reject]': {
                        color: theme.white,
                        backgroundColor: theme.colors.red[6],
                      },
                    })}
                  >
                    <AiFillPlusCircle size={30} className="text-secondary" />
                  </Dropzone>
                </div>
            }

            <div>
              <Select
                label="Select Category"
                placeholder="Select One"
                withAsterisk
                data={[
                  { label: 'Tractor', value: 'tractor' },
                  { label: 'Truck', value: 'truck' },
                  { label: 'Harvestor', value: 'harvestor' },
                ]}
                onChange={(e: any) => {
                  setMachineryData({ ...machineryData, category: e })
                }}
                className="my-4"
                styles={(theme) => ({
                  item: {
                    // applies styles to selected item
                    '&[data-selected]': {
                      '&, &:hover': {
                        backgroundColor: '#cc9441',
                        color: 'white',
                      },
                    },

                    // applies styles to hovered item (with mouse or keyboard)
                    '&[data-hovered]': {},
                  },
                })}
              />

              <Select
                label="Tool Name"
                placeholder="Select One"
                withAsterisk
                data={[
                  { label: 'Tractor', value: 'tractor' },
                  { label: 'Truck', value: 'truck' },
                  { label: 'Harvestor', value: 'harvestor' },
                ]}
                onChange={(e: any) => {
                  setMachineryData({ ...machineryData, toolName: e })
                }}
                styles={(theme) => ({
                  item: {
                    // applies styles to selected item
                    '&[data-selected]': {
                      '&, &:hover': {
                        backgroundColor: '#cc9441',
                        color: 'white',
                      },
                    },

                    // applies styles to hovered item (with mouse or keyboard)
                    '&[data-hovered]': {},
                  },
                })}
              />
            </div>

            {
              toolPicture.length > 0 ?
                <div className="my-4">
                  <Image
                    src={`/${toolPicture[0].path}`}
                    alt="CNIC Image"
                    width={400}
                    height={250}
                    className="rounded-md"
                    priority
                  />
                </div>
                :
                <div className="my-4">
                  <label className="text-sm font-semibold">Tool Picture</label>
                  <Dropzone
                    onDrop={setToolPicture}
                    accept={IMAGE_MIME_TYPE}
                    sx={(theme) => ({
                      width: '100%',
                      height: 250,
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      fontWeight: 600,
                      border: '1px solid #cc9441',
                      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],

                      '&[data-accept]': {
                        color: theme.white,
                        backgroundColor: theme.colors.blue[6],
                      },

                      '&[data-reject]': {
                        color: theme.white,
                        backgroundColor: theme.colors.red[6],
                      },
                    })}
                  >
                    <AiFillPlusCircle size={30} className="text-secondary" />
                  </Dropzone>
                </div>
            }

            <div className="flex justify-center mt-4">
              <div className="w-44">
                <Btn color="bg-secondary" onClick={() => {
                  if (!machineryData.machinery || !machineryData.vehicleNumber || !machineryData.horsePower || !machineryData.model || !machineryData.category || !machineryData.toolName) {
                    alert('Please fill all the fields')
                  } else {
                    setState(true)
                    console.log('Machine Data: ', machineryData)
                    console.log('Machine Picture: ', machinePicture[0])
                    console.log('Tool Picture: ', toolPicture[0])
                  }
                }}>Done</Btn>
              </div>
            </div>

          </div>
          :
          <div className="text-primary font-semibold">Submitted!</div>
      }
    </div>
  )
}