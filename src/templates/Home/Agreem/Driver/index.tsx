import { useState } from "react";
import { HiOutlineHome } from "react-icons/hi";
import { HiOutlineClipboardDocumentList } from "react-icons/hi2";
import { BsCalendar2Week } from "react-icons/bs";
import TopBar from "../Components/TopBar";
import DriverCard from "../Components/DriverCard";
import RequestCard from "../Components/RequestCard";


import { Calendar, dateFnsLocalizer } from 'react-big-calendar'
import "react-big-calendar/lib/css/react-big-calendar.css";
import format from 'date-fns/format'
import parse from 'date-fns/parse'
import startOfWeek from "date-fns/startOfWeek";
import getDay from "date-fns/getDay";

const locales = {
  'en-US': require('date-fns/locale/en-US'),
}

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
})

const events = [
  {
    title: 'All Day Event very long title',
    allDay: true,
    start: new Date(2022, 10, 1),
    end: new Date(2022, 10, 1),
  },
  {
    title: 'Long Event',
    start: new Date(2022, 10, 7),
    end: new Date(2022, 10, 10),
  },
]


export default () => {

  const [selected, setSelected] = useState("Home");
  // const localizer = momentLocalizer(moment)

  return (
    <div className="flex flex-col items-center pb-20 min-h-screen">

      <TopBar />

      <div className="flex justify-between max-w-[1100px] w-full mt-4">
        <div className="w-1/6 bg-white rounded-md shadow-2sm mr-3 h-40 sticky top-0">
          <div onClick={() => setSelected('Home')} className={`transition-all flex items-center justify-evenly py-4 w-full ${selected === 'Home' ? 'bg-primary rounded-md text-white hover:bg-primaryDark' : 'bg-white rounded-md text-black hover:bg-gray-400'}`}>
            <HiOutlineHome size={25} className={`${selected == 'Home' ? 'text-white' : 'text-black'}`} /> Home
          </div>

          <div onClick={() => setSelected('Requests')} className={`transition-all flex items-center justify-evenly py-4 w-full ${selected === 'Requests' ? 'bg-primary rounded-md text-white hover:bg-primaryDark' : 'bg-white rounded-md text-black hover:bg-gray-400'}`}>
            <HiOutlineClipboardDocumentList size={25} className={`${selected == 'Requests' ? 'text-white' : 'text-black'}`} /> Requests
          </div>

          <div onClick={() => setSelected('Schedule')} className={`transition-all flex items-center justify-evenly py-4 w-full ${selected === 'Schedule' ? 'bg-primary rounded-md text-white hover:bg-primaryDark' : 'bg-white rounded-md text-black hover:bg-gray-400'}`}>
            <BsCalendar2Week size={25} className={`${selected == 'Schedule' ? 'text-white' : 'text-black'}`} /> Schedule
          </div>
        </div>

        {
          selected === 'Home' && (
            <div className="w-5/6 grid grid-cols-2 gap-x-3 gap-y-16">
              <DriverCard machine="Machine 1" tool="Tool 1" hp="25-30 HP" region="Mianwali" />
              <DriverCard machine="Machine 1" tool="Tool 1" hp="25-30 HP" region="Mianwali" />
              <DriverCard machine="Machine 1" tool="Tool 1" hp="25-30 HP" region="Mianwali" />
              <DriverCard machine="Machine 1" tool="Tool 1" hp="25-30 HP" region="Mianwali" />
              <DriverCard machine="Machine 1" tool="Tool 1" hp="25-30 HP" region="Mianwali" />
              <DriverCard machine="Machine 1" tool="Tool 1" hp="25-30 HP" region="Mianwali" />
            </div>
          )
        }

        {
          selected === 'Requests' && (
            <div className="w-5/6 grid grid-cols-2 gap-3">
              <RequestCard />
              <RequestCard />
              <RequestCard />
              <RequestCard />
              <RequestCard />
              <RequestCard />
              <RequestCard />
              <RequestCard />
            </div>
          )
        }

        {
          selected === 'Schedule' && (
            <div className="w-5/6 bg-white rounded-md shadow-3xl border-2 border-secondary p-1">
              <Calendar
                localizer={localizer}
                events={events}
                startAccessor="start"
                endAccessor="end"
                style={{ height: 500 }}
              />
            </div>
          )
        }
      </div>
    </div>
  )
}