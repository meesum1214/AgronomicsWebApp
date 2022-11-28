import { Input, ScrollArea } from "@mantine/core"
import Image from "next/image"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import { BsArrowRight } from "react-icons/bs"
import { getCropInfo, getCropNormGategories, getPDF } from "../../../../../API/add"
import Btn from "../../../../../components/Btn"
import CropCard from "./Components/CropCard"
import parse from 'html-react-parser';
import { FaSearch } from "react-icons/fa"

export default () => {

  const [selected, setSelected] = useState([])
  const [selectedItem, setSelectedItem] = useState()

  const [cropNormCategories, setCropNormCategories] = useState([])
  const [allPDFs, setAllPDFs] = useState([])

  const [searchCrop, setSearchCrop] = useState('')

  const router = useRouter()

  useEffect(() => {
    const promises = [
      getCropNormGategories(),
      getPDF()
    ]

    Promise.all(promises).then((res) => {
      setCropNormCategories(res[0])
      setAllPDFs(res[1])
    })
  }, [])



  return (
    <div className="min-h-screen flex justify-center p-4">
      <div className="min-w-[1100px] flex justify-between">
        <div className="w-[25%] h-[558px] bg-white rounded-md shadow-3xl sticky top-0">
          {
            cropNormCategories?.map(({ crop_family }, i) => (
              <div key={i}>
                <CropCard
                  onClick={() => {
                    getCropInfo(crop_family).then((res) => {
                      setSelected(res)
                      return res
                    }).then((res) => {
                      console.log('CropInfo >>> ', res)
                    })
                  }}
                  setSelected={setSelected}
                  name={crop_family}
                  selected={selected?.[0]?.crop_family === crop_family}
                />
              </div>
            ))
          }
        </div>
        <div className="w-[74%]">
          <Input
            icon={<FaSearch />}
            placeholder="Search Crop"
            className="w-full mb-2 shadow-3xl"
            value={searchCrop}
            onChange={(e) => {
              selected.length > 0 ? setSearchCrop(e.target.value) : alert('Please select a crop first!')
            }}
          />

          <div className="w-[814px] h-36 bg-white rounded-md shadow-3xl mb-3">
            <ScrollArea className="w-full">

              {
                selected?.[0] ?
                  <div className="w-full flex items-center h-36">
                    {
                      selected
                      .filter((crop) => crop.crop.toLowerCase().includes(searchCrop.toLowerCase()))
                      .map((item, i) => (

                        <div
                          key={i}
                          className={`flex justify-evenly items-center w-44 h-24 border mx-2 rounded-md hover:bg-gray-100 transition-all cursor-pointer
                      ${selectedItem?.crop === item.crop ? 'bg-primary text-white hover:bg-primaryDark' : 'bg-white text-gray-500'}
                      `}
                          onClick={() => { setSelectedItem(item); console.log('Selected Crop: >>>', item) }}
                        >
                          {/* <Image
                            src={img}
                            width={50}
                            height={50}
                            layout='fixed'
                          /> */}
                          <div>
                            <div>{item.crop}</div>
                            <div>{item.crop_urdu}</div>
                          </div>
                        </div>

                      ))
                    }
                  </div>
                  :
                  <div className="w-full h-36 text-lg text-gray-500 flex justify-center items-center font-semibold">Please select a Crop!</div>
              }

            </ScrollArea>
          </div>

          <div className="w-[814px] h-[80vh] bg-white rounded-md shadow-3xl p-2">
            {
              selectedItem ?
                <div className={`flex flex-col items-center`}>
                  {/* <Image
                    src="/quinoa.jpg"
                    width={800}
                    height={245}
                    layout='fixed'
                    className="rounded-t-md w-auto h-auto"
                    priority
                  /> */}

                  <div className="w-full grid grid-cols-2 gap-3 mt-4 font-tahoma">
                    <div><strong>Scientific Family: </strong>{selectedItem.scientific_family}</div>
                    <div><strong>Season: </strong>{selectedItem.season}</div>
                    <div><strong>Water Logged: </strong>{selectedItem.water_logged}</div>
                    <div><strong>Scientific Name: </strong>{selectedItem.scientific_name}</div>
                    <div><strong>Seed Rate: </strong>{selectedItem.seedrate}</div>
                  </div>

                  <div className="w-full mt-4 text-gray-500 font-tahoma">
                    {
                      parse(selectedItem.importance)
                    }
                  </div>

                  <div className="w-full h-44 flex items-end justify-end">
                    <div className="w-44">
                      <Btn
                        color="bg-secondary"
                        textColor="text-white"
                        onClick={() => allPDFs.filter((item: any) => item.name === selectedItem.crop ? router.push(item.link) : null)}
                      >
                        Show PDF &nbsp; &nbsp; <BsArrowRight size={20} />
                      </Btn>
                    </div>
                  </div>
                </div>
                :
                <div className="w-full h-[65vh] text-lg text-gray-500 flex justify-center items-center font-semibold">Please select an item!</div>
            }
          </div>

        </div>
      </div>
    </div>
  )
}