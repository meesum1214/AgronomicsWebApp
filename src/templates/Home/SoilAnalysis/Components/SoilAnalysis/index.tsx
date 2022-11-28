import Image from "next/legacy/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { postSampleAnalysis } from "../../../../../API/add";
import Btn from "../../../../../components/Btn"
import Instructions from "../SoilSample/Components/instructions";

export default () => {
  const router = useRouter()

  const [test, setTest] = useState('basic')

  const [location, setLocation] = useState('')

  useEffect(() => {
    window.navigator.geolocation.getCurrentPosition((e) => {
      setLocation(`${e.coords.latitude},${e.coords.longitude}`)
    })
  }, [])



  return (

    <div className="min-h-screen flex justify-center py-4">
      <div className="max-w-[1100px] w-full flex justify-between">

        <div className="w-[20%] h-56 sticky top-0">
          <div className="w-full h-24 bg-white rounded-md shadow-3xl mb-3 text-primary text-lg text-center font-tahoma font-semibold flex justify-center items-center">Select test type:</div>
          <div className="w-full h-48 bg-white rounded-md shadow-3xl font-tahoma">
            <div
              onClick={() => setTest('basic')}
              className={`w-full h-24 px-2 rounded-lg text-sm font-tahoma font-semibold cursor-pointer transition-all flex items-center border-gray-400 border-b ${test === 'basic' ? 'bg-primary hover:bg-primaryDark text-white' : 'hover:bg-gray-100 text-gray-500'}`}
            >Basic</div>
            <div
              onClick={() => setTest('advance')}
              className={`w-full h-24 px-2 rounded-lg text-sm font-tahoma font-semibold cursor-pointer transition-all flex items-center border-gray-400 border-b ${test === 'advance' ? 'bg-secondary hover:bg-secondaryDark text-white' : 'hover:bg-gray-100 text-gray-500'}`}
            >Advance</div>
          </div>
        </div>

        <div className="w-[79%] min-h-screen">
          {
            test === '' ?
              <div className="w-full h-full bg-white rounded-md shadow-3xl flex justify-center items-center text-xl text-gray-500 font-semibold">No Test Type Selected!</div>
              :
              <div className="w-full">

                <div className={`${test === '' ? 'hidden' : 'block'} w-full rounded-md shadow-3xl bg-white max-w-[1100px] flex flex-col justify-between mb-3`}>

                  <div className={`${test === 'basic' ? 'block' : 'hidden'} py-4 px-8`}>
                    <div className="w-full text-2xl text-white bg-primary flex justify-center items-center rounded-md">Basic soil quality test:</div>
                    <div className="mt-4">
                      <ul className="list-disc ml-6">
                        <li>Soil PH</li>
                        <li>Soil EC</li>
                        <li>Organic Matter</li>
                        <li>Soil Moisture</li>
                        <li>Soil Extractable Phosphorus(P)</li>
                        <li>Soil Extractable Potasswium(K)</li>
                        <li>Soil Nitrate Nitrogen(N)</li>
                        <li>Soil Texture</li>
                      </ul>
                    </div>
                  </div>

                  <div className={`${test === 'advance' ? 'block' : 'hidden'} py-4 px-8`}>
                    <div className="w-full text-2xl text-white bg-secondary flex justify-center items-center rounded-md">Advance soil quality test:</div>
                    <div className="mt-4">
                      <ul className="list-disc ml-6">
                        <li>Organic Matter</li>
                        <li>Soil Extractable Phosphorus(P)</li>
                        <li>Soil Extractable Potassium(K)</li>
                        <li>Soil Nitrate Nitrogen(N)</li>
                        <li>Iron</li>
                        <li>Manganese</li>
                        <li>Zinc</li>
                        <li>Copper</li>
                        <li>Mg</li>
                        <li>Boron</li>
                        <li>Soil PH</li>
                        <li>Soil EC</li>
                        <li>Soil Texture</li>
                      </ul>
                    </div>
                  </div>

                </div>

                <div className={`${test === '' ? 'hidden' : 'block'} w-full rounded-md shadow-3xl bg-white max-w-[1100px] min-h-screen p-2 flex flex-col justify-between`}>
                  <Instructions />

                  <div className="relative w-full h-[620px] mt-8">
                    <Image
                      src='/soil-sample.png'
                      objectFit="contain"
                      layout="fill"
                    />
                  </div>

                  <div className="mt-4 flex justify-between">
                    <div className="w-44">
                      <Btn onClick={() => router.back()} color='bg-secondary' textColor="text-white">Back</Btn>
                    </div>
                    <div className="w-44">
                      <Btn onClick={() => {
                        let sampleData = {
                          userId: 17,
                          location: location,
                          status: 0,
                          test_type: test === 'basic' ? 0 : 1,
                        }
                        console.log('Submitted Data >>>> ', sampleData)
                        postSampleAnalysis(sampleData).then((res) => {
                          console.log('Response Against sample >>>>>> ', res.data)
                          alert('Your sample has been submitted successfully')
                        }).catch((err) => {
                          console.log(err)
                        })
                      }} color='bg-secondary' textColor="text-white">Generate Code</Btn>
                    </div>
                  </div>
                </div>

              </div>
          }
        </div>

      </div>
    </div>
  )
}