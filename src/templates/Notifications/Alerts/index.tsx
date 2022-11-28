import { useEffect, useState } from "react"
import { getAlerts } from "../../../API/add"
import Image from 'next/legacy/image'

export default () => {

  const [alerts, setAlerts] = useState([])

  useEffect(() => {
    getAlerts().then((res) => {
      console.log(res.data)
      setAlerts(res.data)
    })
  }, [])


  return (
    alerts ?
      <div className="w-full flex flex-col items-center pt-4">
        {
          alerts?.map(({ attachment, created, description, title }, i) => (
            <div key={i} className='w-[95%] py-2 px-6 mb-2 font-tahoma border rounded-md shadow-2sm flex justify-between items-center'>
              <Image
                src='/t support.png'
                alt={title}
                width={70}
                height={70}
                objectFit='contain'
                className='rounded-full w-auto h-auto'
                priority
              />
              <div className="w-[70%]">
                <div className="text-lg font-semibold text-primary">{title}</div>
                <div className="text-sm text-gray-400 font-semibold">{description}</div>
              </div>
              <div>{created}</div>
            </div>
          ))
        }
      </div>
      :
      <div className="flex justify-center items-center h-[20vh] text-primary font-tahoma">No Alerts Found at this time!</div>
  )
}