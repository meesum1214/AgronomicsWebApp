import DriverCard from "../Components/DriverCard";
import TopBar from "../Components/TopBar";

export default () => {

  return (
    <div className="flex flex-col items-center pb-20 min-h-screen">

      <TopBar />

      <div className="max-w-[1100px] grid grid-cols-3 gap-x-3 gap-y-16 mt-4">
        <DriverCard machine="Machine 1" tool="Tool 1" hp="25-30 HP" region="Mianwali" />
        <DriverCard machine="Machine 2" tool="Tool 2" hp="31-40 HP" region="Rawalpindi" />
        <DriverCard machine="Machine 3" tool="Tool 3" hp="41-55 HP" region="Islamabad" />
        <DriverCard machine="Machine 4" tool="Tool 4" hp="56-85 HP" region="Rawalpindi" />
        <DriverCard machine="Machine 4" tool="Tool 4" hp="56-85 HP" region="Rawalpindi" />
        <DriverCard machine="Machine 4" tool="Tool 4" hp="56-85 HP" region="Rawalpindi" />
        <DriverCard machine="Machine 4" tool="Tool 4" hp="56-85 HP" region="Rawalpindi" />
        <DriverCard machine="Machine 4" tool="Tool 4" hp="56-85 HP" region="Rawalpindi" />
        <DriverCard machine="Machine 4" tool="Tool 4" hp="56-85 HP" region="Rawalpindi" />
        <DriverCard machine="Machine 4" tool="Tool 4" hp="56-85 HP" region="Rawalpindi" />
      </div>

    </div>
  )
}