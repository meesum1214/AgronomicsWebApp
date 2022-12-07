import { useLandStore } from "../../../../../states/landState"
import { useSelectedLand } from "../../../../../states/selectedLand"
import LandCards from "../LandCards"

export default ({ state }: { state: string }) => {

  const lands = useLandStore()
  const selectedland = useSelectedLand()?.selectedLand
  return (
    <div className="w-full font-semibold rounded-lg bg-white shadow-2sm my-2 py-1 sticky top-3">
      {/* <ScrollArea className="w-full pb-4 h-[540px] "> */}
        {
          lands?.lands?.map(land => {
            if (state === '0' && land?.crop_records.length > 0) {
              return (
                <div key={land.id} className='w-full'>
                  <LandCards selected={selectedland === land ? true : false} land={land} />
                </div>
              )
            }
            else if (state === '1' && land?.crop_records.length == 0) {
              return (
                <div key={land.id} className='w-full'>
                  <LandCards selected={selectedland === land ? true : false} land={land} />
                </div>
              )
            }
            else if (state === '') {
              return (
                <div key={land.id} className='w-full'>
                  <LandCards selected={selectedland === land ? true : false} land={land} />
                </div>
              )
            }
          })
        }

      {/* </ScrollArea> */}
    </div>
  )
}