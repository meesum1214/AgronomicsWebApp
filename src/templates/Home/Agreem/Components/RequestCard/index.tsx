import Image from "next/legacy/image"

export default () => {
  return (
    <div className="bg-white shadow-2sm w-full px-4 py-2 rounded-md flex flex-col items-center border-2 border-secondary">
      <div className="w-full flex items-center">
        <Image
          src="/hero-img.png"
          width={100}
          height={100}
          priority
        />

        <div className="flex-1 flex justify-around text-sm">
          <div className="font-semibold">
            <div>Machine</div>
            <div>Horse Power</div>
            <div>Tool</div>
            <div>Cost</div>
            <div>Time</div>
          </div>

          <div>
            <div>Tractor (35HP)</div>
            <div>85 HP</div>
            <div>Rotavator</div>
            <div>4500 PKR</div>
            <div>1 Day</div>
          </div>
        </div>
      </div>

      <div className="text-sm font-semibold my-4">BG-5, Mid City Appartments, Express Highway</div>

      <div className="w-full flex justify-between">
        <button className="hover:scale-105 transition-all px-3 py-[2px] font-semibold rounded-full border-2 border-red-500 text-red-500">Decline</button>
        <button className="hover:scale-105 transition-all px-3 py-[2px] font-semibold rounded-full border-2 border-secondary text-white bg-primary">Accept</button>
      </div>
    </div>
  )
}