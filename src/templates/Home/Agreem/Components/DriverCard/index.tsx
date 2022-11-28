import Image from "next/legacy/image"

export default ({ machine, tool, hp, region }: { machine: string, tool: string, hp: string, region: string }) => {
  return (
    <div className="bg-white shadow-2sm w-full px-2 transition-all rounded-md cursor-pointer hover:scale-105 flex flex-col items-center border-2 border-secondary">
      <div className="w-full flex justify-between">
        <Image
          src="/tractor.png"
          width={180}
          height={180}
          priority
        />

        <Image
          src="/tractor.png"
          width={180}
          height={180}
          priority
        />
      </div>

      <div className="w-2/3 h-32 bg-primary p-4 rounded-md grid grid-cols-2 gap-4 items-center text-white text-sm text-center -mb-10">
        <div>{machine}</div>
        <div>{tool}</div>
        <div>{hp}</div>
        <div>{region}</div>
      </div>
    </div>
  )
}