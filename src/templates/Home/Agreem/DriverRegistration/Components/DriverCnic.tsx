import { TextInput } from "@mantine/core";
import { Dropzone, FileWithPath, IMAGE_MIME_TYPE } from "@mantine/dropzone";
import Image from "next/legacy/image";
import { useState } from "react";
import { AiFillPlusCircle } from "react-icons/ai";
import Btn from "../../../../../components/Btn";

export default () => {

  const [driverCnic, setDriverCnic] = useState('')
  const [frontSide, setFrontSide] = useState<FileWithPath[]>([]);
  const [backSide, setBackSide] = useState<FileWithPath[]>([]);

  const [state, setState] = useState(false)

  // function formatString(a) {
  //   if(a.length == 13){
  //     return a.slice(0,5) + '-' + a.slice(5,12) + '-' + a.slice(12,13)}
  //   if(a.length == 5){
  //     return a.slice(0,5)+'-'+ a.slice(5);

  //   }
  //   if( a.length == 13 ){
  //     if(a.includes('-')){
  //       return a.slice(0,13) + '-' + a.slice(13,15);
  //     }
  //     else{
  //       return a.slice(0,5) + '-' + a.slice(5,12) + '-' + a.slice(12,13);
  //     }
  //   }
  //   else if(a.length > 12){
  //     return a.slice(0,14)
  //   }
  //   else return a;
  // }

  return (
    <div className="py-4 flex justify-center">
      {
        !state ?
          <div className="w-[80%]">
            <TextInput
              label="CNIC Number"
              pattern="[0-9]{5}-[0-9]{7}-[0-9]{1}"
              placeholder="XXXXX-XXXXXXX-X"
              withAsterisk
              value={driverCnic}
              onChange={(e: any) => {
                if(e.target.value.length <= 15){
                  setDriverCnic(e.target.value)
                }
              }}
            />

            {
              frontSide.length > 0 ?
                <div className="my-4">
                  <Image
                    src={`/${frontSide[0].path}`}
                    alt="CNIC Image"
                    width={400}
                    height={250}
                    className="rounded-md"
                    priority
                  />
                </div>
                :
                <div className="my-4">
                  <label className="text-sm font-semibold">CNIC Picture <span className="text-xs text-gray-500 ml-2">(Front Side)</span> </label>
                  <Dropzone
                    onDrop={setFrontSide}
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

            {
              backSide.length > 0 ?
                <div className="my-4">
                  <Image
                    src={`/${backSide[0].path}`}
                    alt="CNIC Image"
                    width={400}
                    height={250}
                    className="rounded-md"
                    priority
                  />
                </div>
                :
                <div className="my-4">
                  <label className="text-sm font-semibold">CNIC Picture <span className="text-xs text-gray-500 ml-2">(Back Side)</span> </label>
                  <Dropzone
                    onDrop={setBackSide}
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

            <ul className="list-disc text-sm text-gray-400 ml-5">
              <li>Picture should be clear</li>
              <li>Face & CNIC number should be visible</li>
            </ul>

            <div className="flex justify-center mt-4">
              <div className="w-44">
                <Btn color="bg-secondary" onClick={() => {
                  if (driverCnic && frontSide.length > 0 && backSide.length > 0) {
                    if (driverCnic.toString().length === 15) {
                      console.log('Driver Cnic: ', driverCnic)
                      console.log(frontSide[0])
                      console.log(backSide[0])
                      setState(true)
                    } else {
                      alert('CNIC number format should be xxxxx-xxxxxxx-x')
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