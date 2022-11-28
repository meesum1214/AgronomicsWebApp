import dynamic from "next/dynamic"
import { useState } from "react"
import Btn from "../../../components/Btn"
import { useLandStore } from "../../../states/landState"
import LandCardArea from "./Components/LandCardArea"
import LandDetails from "./Components/LandDetails"
const LandOptions = dynamic(import('./Components/LandOptions'), { ssr: false })

export default () => {

  const lands = useLandStore()

  const cultivated = lands?.lands?.filter(land => land?.crop_records.length > 0).length
  const nonCultivated = lands?.lands?.filter(land => land?.crop_records.length === 0).length
  const total = cultivated + nonCultivated


  const [state, setState] = useState('')

  const landOptions = [
    {
      id: 1,
      onClick: () => setState(''),
      title: 'Total',
      color: 'bg-gradient-to-b from-dark to-neutral-900',
      length: total
    },
    {
      id: 2,
      onClick: () => setState('0'),
      title: 'Cultivated',
      color: 'bg-gradient-to-b from-primary to-green-900',
      length: cultivated
    },
    {
      id: 3,
      onClick: () => setState('1'),
      title: 'Non-Cultivated',
      color: 'bg-gradient-to-b from-secondary to-amber-600',
      length: nonCultivated
    }
  ]

  return (
    <div className="flex justify-center bg-neutral-100">
      <div className="flex w-full justify-between py-8 max-w-[1100px]">
        <div className="flex flex-col w-[295px] z-50">
          <div className='w-full flex justify-between'>
            {
              landOptions.map(({ id, onClick, title, color, length }) => (
                <LandOptions key={id} onClick={onClick} color={color}>
                  <div className="flex flex-col items-center text-center">
                    <div>{title}</div>
                    <div>{length}</div>
                  </div>
                </LandOptions>
              ))
            }
          </div>

          <LandCardArea state={state} />
        </div>

        <div className="z-0">
          <LandDetails />
        </div>

      </div>
    </div>
  )
}