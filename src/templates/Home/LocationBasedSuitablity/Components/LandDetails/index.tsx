import dynamic from 'next/dynamic';
import { Divider } from "@mantine/core"
import { useSelectedLand } from '../../../../../states/selectedLand';
// import WeatherDetails from '../WeatherDetails';
import SelectedLand from './Components/SelectedLand';
import Btn from '../../../../../components/Btn';
// import WeatherDetails from '../WeatherDetails';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { deleteLand } from '../../../../../API/add';
// import Chart from '../../../../../components/Chart';
const Map = dynamic(() => import('./Components/Map'), {});
// const Chart = dynamic(import('../../../../../components/Chart'), { ssr: false });

export default () => {
  const [userId, setUserId] = useState(null)

  
  useEffect(() => {
    let userId = JSON.parse(localStorage.getItem("ag-user-app-web"))
    setUserId(userId)
  }, [])
  

  const land = useSelectedLand()
  const router = useRouter()

  // console.log('userId: ', userId.id)
  // console.log('Land: ', land?.selectedLand)

  return (
    <div className="flex w-[795px] flex-col">
      <div className='flex justify-between items-center'>
        <div className="m-2 text-2xl font-semibold font-tahoma w-full">
          {land.selectedLand ? land.selectedLand?.name : 'Please Select a Land'}
        </div>

        <div className="w-44">
          <Btn color="bg-secondary" textColor="text-white" onClick={() => router.push('/map')}>Add New Land</Btn>
        </div>
      </div>
      <Divider size='md' className="mb-2 rounded-full" />

      <div className='w-full flex justify-between my-2'>

        <div className="w-[49%] h-96 rounded-lg bg-white shadow-2sm">
          {land.selectedLand ? <SelectedLand /> : <div className='w-full h-96 flex justify-center items-center'>No Land selected!</div>}
        </div>

        <div className='flex w-[49%]'>
          <div className="w-full h-96 rounded-lg bg-white shadow-2sm flex justify-center items-center">
            {/* <WeatherDetails /> */}
            Weather Data will appear here!
          </div>
        </div>

      </div>

      <div className="w-full rounded-lg bg-white shadow-2sm h-96 my-2">
        <Map />
      </div>
      {/* <div className=" rounded-lg bg-white shadow-2sm h-96 m-2">
        <Chart />
      </div> */}
      <div className="w-44 self-end">
        <Btn color="bg-secondary" textColor="text-white" onClick={() => {
          if (land.selectedLand) {
            deleteLand(land.selectedLand.id, userId.id).then((res) => {
              alert(res.data)
              console.log(res.data)
              router.reload()
            }).catch((err) => {
              alert(err.message)
            })
          } else {
            alert('Please Select a Land')
          }
        }}>Delete Land</Btn>
      </div>
    </div>
  )
}