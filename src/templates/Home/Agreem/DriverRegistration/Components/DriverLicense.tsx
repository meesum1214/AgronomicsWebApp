import { NumberInput, TextInput } from "@mantine/core"
import { DatePicker } from "@mantine/dates"
import { Dropzone, FileWithPath, IMAGE_MIME_TYPE } from '@mantine/dropzone';
import Image from "next/legacy/image";
import { useState } from "react";
import { AiFillPlusCircle } from "react-icons/ai";
import Btn from "../../../../../components/Btn";

export default () => {

  const [file, setFile] = useState<FileWithPath[]>([]);
  const [licenseData, setLicenseData] = useState({
    lisenceNumber: '',
    expiryDate: '',
  })

  const [state, setState] = useState(false)

  return (
    <div className="py-4 flex justify-center">
      {
        !state ?
          <div className="w-[80%]">
            <TextInput
              label="Driver license number"
              withAsterisk
              value={licenseData.lisenceNumber}
              onChange={(e: any) => {
                if(e.target.value.length <= 8){
                  setLicenseData({
                    ...licenseData,
                    lisenceNumber: e.target.value
                  })
                }
              }}
            />

            {
              file.length > 0 ?
                <div className="my-4">
                  <Image
                    src={`/${file[0].path}`}
                    alt="License Image"
                    width={400}
                    height={200}
                    className="rounded-md"
                    priority
                  />
                </div>
                :
                <div className="my-4">
                  <Dropzone
                    onDrop={setFile}
                    accept={IMAGE_MIME_TYPE}
                    sx={(theme) => ({
                      height: 200,
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

                  <ul className="list-disc text-sm text-gray-400 ml-5">
                    <li>Picture should be clear</li>
                    <li>Face & License number should be visible</li>
                  </ul>
                </div>
            }

            <DatePicker
              label="Expiry date"
              withAsterisk
              onChange={(e: any) => setLicenseData({ ...licenseData, expiryDate: e?.getDate() + '-' + (e?.getMonth()) + 1 + '-' + e?.getFullYear() })}
            />
            {/* setDate(e?.getDate() + '-' + (e?.getMonth()) + 1 + '-' + e?.getFullYear()) */}

            <div className="flex justify-center mt-4">
              <div className="w-44">
                <Btn color="bg-secondary" onClick={() => {
                  if (licenseData.lisenceNumber && licenseData.expiryDate && file.length > 0) {
                    if (licenseData.lisenceNumber.toString().length === 8) {
                      console.log('license Data: ', licenseData)
                      console.log(file[0])
                      setState(true)
                    } else {
                      alert('License number should be 8 digits')
                    }
                  } else {
                    alert('Please fill all feilds!')
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