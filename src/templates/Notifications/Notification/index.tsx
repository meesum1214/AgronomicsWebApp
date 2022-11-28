import { useEffect, useState } from "react"
import { getNotifications } from "../../../API/add"
import Image from 'next/image'

export default () => {

  const [notifications, setNotifications] = useState([])

  useEffect(() => {
    getNotifications({user_id: 17}).then((res) => {
      console.log(res)
      setNotifications(res.data)
    })
  }, [])


  return (
    notifications === [] ?
      <div className="w-full flex flex-col items-center pt-4">
        {
          notifications?.map(({ attachment, created, description, title }, i) => (
            <div key={i} className='w-[95%] py-2 px-6 mb-2 font-tahoma border rounded-md shadow-2sm flex justify-between items-center'>
              <Image
                src='/t support.png'
                alt={title}
                width={60}
                height={60}
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
      <div className="flex justify-center items-center h-[20vh] text-primary font-tahoma">No Notifications Found at this time!</div>
  )
}