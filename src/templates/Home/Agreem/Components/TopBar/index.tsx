import { Select } from "@mantine/core"
import { useRouter } from "next/router";
import { FaUser } from "react-icons/fa";
import { GoSettings } from "react-icons/go"
import Btn from "../../../../../components/Btn"
import { useSelector } from "react-redux";
import { selectedDriverMode } from "../../../../../slices/driverSlice";

export default () => {

  const driverState = useSelector(selectedDriverMode)
  const router = useRouter();

  return (
    <div className="bg-white flex justify-between items-center max-w-[1100px] w-full mt-4 p-2 rounded-md">
      <div className="flex items-center">
        <Select
          placeholder="Search"
          searchable
          clearable
          nothingFound="No options"
          className="mr-1"
          data={[]}
        />

        <GoSettings size={26} className="text-primary" />
      </div>

      <div>
        {
          driverState ?
            <div className="w-28 h-9 bg-secondary rounded-full flex items-center justify-evenly text-white font-semibold hover:scale-105 transition-all cursor-pointer">
              Driver <FaUser size={17} className="text-white cursor-pointer" />
            </div>
            :
            <Btn color='bg-secondary' onClick={() => router.push('/home/agreem/driverregistration')}>Become Driver</Btn>
        }
      </div>
    </div>
  )
}