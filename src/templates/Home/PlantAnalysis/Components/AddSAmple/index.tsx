import Btn from "../../../../../components/Btn";
import { Textarea } from '@mantine/core';
import { useEffect, useState } from "react";
import DropZone from "./Components/DropZone";
import { AiFillCloseCircle } from "react-icons/ai";
import { useRouter } from "next/router";
import { postSample } from "../../../../../API/add";
import { useInputState } from "@mantine/hooks";
import Image from "next/legacy/image";


export default () => {

  const route = useRouter()

  const [location, setLocation] = useState('')

  const [sampleData, setSampleData] = useInputState({
    message: '',
    image: '',
    userId: 17
  })

  const onSubmit = () => {
    if (!sampleData.message) {
      alert('Please Enter Message')
    }
    else if (!sampleData.image) {
      alert('Please Select Image')
    }
    else {
      console.log('Sample Data', sampleData)
      console.log('Location :', location)
      postSample(location, sampleData)
      .then((res) => {
        console.log('Response >>>>>>>>>>>', res.data)
        if (res.data.status === 200) {
          alert('Sample Added Successfully')
          route.push('/home/PlantAnalysis')
        }
      }).catch((err) => {
        console.log(err)
        alert('Please reduce the image size')
      })
    }
  }

  useEffect(() => {
    window.navigator.geolocation.getCurrentPosition((e) => {
      setLocation(`${e.coords.latitude},${e.coords.longitude}`)
    })
  }, [])


  return (
    <div className="flex justify-center min-h-screen py-8">
      <div className="flex justify-center w-full max-w-[1100px] rounded-md shadow-3xl bg-white font-tahoma">

        <div className="flex flex-col justify-between items-center w-full max-w-[1100px] font-tahoma py-4">
          <div className="text-2xl font-semibold text-primary">Add Sample</div>
          <div className="md:w-4/6 w-5/6 h-full">
            <Textarea
              placeholder="Enter message here!"
              label="Message"
              withAsterisk
              className="my-4"
              value={sampleData.message}
              onChange={(e) => setSampleData({ ...sampleData, message: e.target.value })}
            />

            {
              sampleData.image ?
                <div className="w-full flex flex-col items-center">
                  <div onClick={() => setSampleData({ ...sampleData, image: '' })} className="self-end cursor-pointer">
                    <AiFillCloseCircle size={20} color={'red'} />
                  </div>
                  <div className="border-secondary border-2 rounded-md flex justify-center items-center">
                    <Image
                      src={`/${sampleData.image}`}
                      width={300}
                      height={300}
                      priority
                      className="rounded-md"
                    />
                  </div>
                </div>
                :
                <div className="w-full">
                  <DropZone sampleData={sampleData} setSampleData={setSampleData} />
                  <div className='relative w-full h-96 my-4'>
                    <Image
                      src='/image based analysis transparent.png'
                      objectFit="contain"
                      layout="fill"
                      priority
                      className="rounded-md border-secondary border-2"
                    />
                  </div>
                </div>
            }


            <div className="w-full flex justify-center mt-10">
              <div className="w-44">
                <Btn onClick={onSubmit} color='bg-secondary' textColor="white">Submit</Btn>
                {/* <Btn onClick={() => {console.log(location)}} color='bg-secondary' textColor="white">Submit</Btn> */}
              </div>
            </div>
          </div>
          <div className="self-end px-2">
            <div className="w-44">
              <Btn color="bg-secondary" onClick={() => route.back()} textColor="white">Back</Btn>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}