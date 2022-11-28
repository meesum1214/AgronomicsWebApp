import { Input, ScrollArea } from "@mantine/core"
import { useInputState } from "@mantine/hooks";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react"
import { FaSearch } from "react-icons/fa"
import { getCItyNames, getCropsByCityName, getMandiRates } from "../../../API/add";
const Chart = dynamic(import('../../../components/Chart'), { ssr: false });

export default () => {

  const [selectedCityCrop, setSelectedCityCrop] = useState([])
  const [selectedCityAndCrop, setSelectedCityAndCrop] = useState({ city: '', crop: '' })

  const [cities, setCities] = useState([])

  const [rates, setRates] = useState([])

  const [searchCity, setSearchCity] = useInputState('')
  const [searchCrop, setSearchCrop] = useInputState('')

  useEffect(() => {

    getCItyNames().then((res) => {
      setCities(res.data)
    })
  }, [])

  return (
    <div className="min-h-screen flex justify-center py-4">
      <div className="max-w-[1100px] w-full flex justify-between">


        <div className="w-[20%] h-[558px] px-1 bg-white rounded-md shadow-3xl sticky top-0">
          <Input
            icon={<FaSearch />}
            placeholder="Search City"
            className="my-1"
            value={searchCity}
            onChange={setSearchCity}
          />
          <div className="h-[513px] overflow-scroll">
            {
              cities
                .filter((city: any) => city.toLowerCase().includes(searchCity.toLowerCase()))
                .map((city, i) => (
                  <div
                    key={i}
                    className={`w-full h-12 px-2 rounded-lg text-sm font-tahoma cursor-pointer transition-all flex items-center border-gray-400 border-b ${selectedCityAndCrop.city === city ?
                      'bg-primary hover:bg-primaryDark text-white'
                      :
                      'hover:bg-gray-100 text-gray-500'
                      }`}
                    onClick={() => {
                      setSelectedCityAndCrop({ ...selectedCityAndCrop, city: city })
                      getCropsByCityName(city).then((res) => {
                        setSelectedCityCrop(res)
                      })

                    }}
                  >
                    <div className="w-full py-4">
                      <div className={`text-base font-semibold`}>{city}</div>
                    </div>
                  </div>
                ))
            }
          </div>
        </div>

        <div className="w-[79%]">
          <Input
            icon={<FaSearch />}
            placeholder="Search Crop"
            className="w-full my-1 shadow-3xl"
            value={searchCrop}
            onChange={(e: any) => {
              selectedCityAndCrop.city ? setSearchCrop(e.target.value) : alert('Please select a city first!')
            }}
          />

          <div className="w-[869px] h-36 bg-white rounded-md shadow-3xl my-3">
            <ScrollArea className="w-full">

              {
                selectedCityAndCrop.city !== '' ?
                  <div className="w-full flex items-center h-36">
                    {
                      selectedCityCrop
                        .filter((city: any) => city.toLowerCase().includes(searchCrop.toLowerCase()))
                        .map((crop, i) => (

                          <div
                            key={i}
                            className={`flex justify-evenly items-center w-44 h-24 border mx-2 rounded-md transition-all cursor-pointer
                      ${selectedCityAndCrop.crop === crop ? 'bg-primary text-white hover:bg-primaryDark' : 'bg-white text-gray-500 hover:bg-gray-100'}
                      `}

                            onClick={() => {
                              setSelectedCityAndCrop(prev => ({ ...prev, crop: crop }))
                              getMandiRates(selectedCityAndCrop.city, crop).then((res) => setRates(prev => res))
                            }}
                          >
                            <div className="w-full text-center">{crop}</div>
                          </div>

                        ))
                    }
                  </div>
                  :
                  <div className="w-full h-36 text-lg text-gray-500 flex justify-center items-center font-semibold">Please select a Crop!</div>
              }

            </ScrollArea>
          </div>

          <div className={`flex justify-center ${selectedCityAndCrop.crop !== '' ? '' : 'items-center'} w-full h-[75vh] bg-white rounded-md shadow-3xl mt-3 p-2`}>
            {
              selectedCityAndCrop.crop !== '' ?
                <div className="w-full h-[450px] flex flex-col justify-between ">
                  <div className="w-full flex justify-center"><strong>City: &nbsp; &nbsp;</strong>{rates[0]?.city}</div>
                  <div className="w-full h-96">
                    <Chart rates={rates} />
                  </div>
                </div>
                :
                <div>Please Select Item</div>
            }
          </div>
        </div>

      </div>
    </div>
  )
}