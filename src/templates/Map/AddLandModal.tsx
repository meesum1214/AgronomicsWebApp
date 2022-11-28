import { Divider, Input } from '@mantine/core';
import { useInputState } from '@mantine/hooks';
import { closeAllModals } from '@mantine/modals';
import { showNotification } from '@mantine/notifications';
import area from '@turf/area';
import { centroid } from '@turf/turf';
import { MdLocationOn } from 'react-icons/md';
import Btn from '../../components/Btn';
import { addLand } from '../../states/landState';
import { useUserState } from '../../states/userState';
import { addLandRecord } from '../../WebServices/UserRecord';
export default ({ feature,closeDraw }) => {
  const user = useUserState()?.data
  const acres = (area(feature) / 4046.86).toFixed(2)

  const [name, setname] = useInputState('')
  const geometry = JSON.stringify(feature?.geometry?.coordinates[0])
  const location = JSON.stringify(centroid(feature))
  const [address, setaddress] = useInputState('')

  const submit = () => {
    addLandRecord(user?.user?.id.toString(), name,acres,'','','','',location, geometry)
    .then(res => {
      showNotification({
        message: 'Land Record Added Successfully',
        autoClose: 1500,
        color: 'green',
        disallowClose: true,
      });
      closeAllModals()
      closeDraw()
      addLand(res?.data)
    })
    .catch(err => {
      showNotification({
        message: 'Error Adding Land Record',
        autoClose: 1500,
        color: 'red',
        disallowClose: true,
      });
    })
  }
  return (
    <div className='flex flex-col w-full'>
      <div className='flex'><b className='flex-1 py-1 px-3 bg-gray-100'>Area</b><b className='flex-1 text-right py-1 px-3 bg-gray-100'>{acres} Acres</b></div>
      
      <Input.Wrapper >
      
        <Input
        icon={<MdLocationOn />}
        placeholder="Enter The Name Of Your Land"
        radius="sm"
        onChange={setname} value={name}/>
      </Input.Wrapper>
      
      <div className='my-2'/>
      <div className='flex items-end justify-end'>
      <Btn onClick={()=>submit()}>
        Add Land
      </Btn>
      </div>
    </div>
  )
}