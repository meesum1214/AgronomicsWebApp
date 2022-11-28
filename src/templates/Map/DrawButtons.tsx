import { MdAdd } from 'react-icons/md'
import Btn from '../../components/Btn'
import { showNotification, updateNotification } from '@mantine/notifications';
import { memo, useState } from 'react'
import { openConfirmModal, openModal } from '@mantine/modals'
import dynamic from 'next/dynamic';
import { useDidUpdate } from '@mantine/hooks';
import AddLandModal from './AddLandModal';
const DrawPoly = dynamic(import('./DrawPoly'), { ssr: false })
const Setup = () => {
  const [Draw, setDraw] = useState(false)
  const [drawn, setDrawn] = useState({})
  const startDrawer = () => {
    showNotification({
      message: 'Draw Your Land Boundary On Map',
      autoClose: 1500,
      color: 'green',
      disallowClose: true,
    });
    setDraw(true)
  }

  const stopDrawer = () => {
    setDraw(false)
  }

  const submitPoly = () => {
    openModal({
      title: <b>Add Your Land</b>,
      children: (<AddLandModal closeDraw={setDraw} feature={Object.values(drawn)?.[0]} />),
      onClose: () => stopDrawer(),
    });

  }

  useDidUpdate(() => {
    if (Object.keys(drawn).length > 0) {
      submitPoly()
    }
  }, [drawn])




  return (
    <>{Draw && <DrawPoly setDrawn={setDrawn} />}
      <div className='absolute bottom-6 right-6 z-30 flex'>
        {
          !Draw ?
            <Btn shadow green onClick={() => {
              startDrawer()
            }}>
             <b className='flex mx-4 font-bold tracking-wide'> <MdAdd className=' mx-2' size={15}/>Add Land </b>
            </Btn>
            :
            <Btn shadow red onClick={() => {
              stopDrawer()
            }}>
              <b className='mx-4 tracking-wide'>Cancel</b>
            </Btn>
        }
        {
          Draw &&
          <Btn shadow onClick={() => {
            submitPoly()
          }}>
            <b className='mx-4 tracking-wide'>Submit</b>
          </Btn>
        }

      </div>
    </>
  )
}


export default memo(Setup);