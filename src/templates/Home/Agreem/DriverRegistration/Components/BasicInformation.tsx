import { TextInput } from "@mantine/core";
import { Dropzone, FileWithPath, IMAGE_MIME_TYPE } from "@mantine/dropzone";
import Image from "next/legacy/image";
import { useState } from "react";
import PhoneInput from "react-phone-input-2";
import Btn from "../../../../../components/Btn";

export default () => {

  const [files, setFiles] = useState<FileWithPath[]>([]);

  const [driverData, setDriverData] = useState({
    fname: '',
    lname: '',
    phone: '',
    email: '',
    serviceRegion: '',
  })

  const [state, setState] = useState(false)

  return (
    <div className="py-4">

      {
        !state ?
          <div>
            <div className="w-full flex justify-center mb-4">
              {
                files.length > 0 ? <div>
                  <Image
                    src={`/${files[0].path}`}
                    alt="Driver Image"
                    width={150}
                    height={150}
                    className="rounded-full"
                    priority
                  />
                </div>
                  :
                  <Dropzone
                    onDrop={setFiles}
                    accept={IMAGE_MIME_TYPE}
                    sx={(theme) => ({
                      width: 150,
                      height: 150,
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      borderRadius: 100,
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
                    <div>Upload Image</div>
                  </Dropzone>
              }
            </div>
            <div className="grid grid-cols-2 gap-5">
              <TextInput
                label={
                  <div className="font-semibold">First Name <span className="text-xs text-gray-500 ml-2">(as per CNIC)</span> </div>
                }
                onChange={(e) => setDriverData({ ...driverData, fname: e.currentTarget.value })}
              />

              <TextInput
                label={
                  <div className="font-semibold">Last Name <span className="text-xs text-gray-500 ml-2">(as per CNIC)</span> </div>
                }
                onChange={(e) => setDriverData({ ...driverData, lname: e.currentTarget.value })}
              />
              <div>
                <label className="text-sm font-semibold">Contact No.</label>
                <PhoneInput
                  inputStyle={{ width: '100%' }}
                  country={'pk'}
                  onChange={(e) => setDriverData({ ...driverData, phone: e })}
                />
              </div>

              <TextInput
                label={
                  <div className="font-semibold">Email Address <span className="text-xs text-gray-500 ml-2">(optional)</span> </div>
                }
                onChange={(e) => setDriverData({ ...driverData, email: e.currentTarget.value })}
              />

              <TextInput
                label={
                  <div className="font-semibold">Service Region</div>
                }
                onChange={(e) => setDriverData({ ...driverData, serviceRegion: e.currentTarget.value })}
              />
            </div>

            <div className="flex justify-center mt-4">
              <div className="w-44">
                <Btn color="bg-secondary" onClick={() => {
                  if (driverData.fname && driverData.lname && driverData.phone && driverData.serviceRegion && files.length > 0) {
                    console.log('Driver Data: ', driverData)
                    console.log(files[0])
                    setState(true)
                  } else {
                    alert('Please fill all the fields')
                  }
                }}>Done</Btn>
              </div>
            </div>
          </div>
          :
          <div className="text-primary font-semibold text-center">Submitted!</div>
      }

    </div>
  )
}