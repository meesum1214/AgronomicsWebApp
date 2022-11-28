import { useRouter } from "next/router";
import Btn from "../../../../../components/Btn";

export default () => {
  const router = useRouter();
  return (
    <div className="flex justify-center min-h-screen py-8">
      <div className="flex md:flex-row flex-col justify-center w-full max-w-[1100px] rounded-md shadow-3xl bg-white font-tahoma">

        <div className="flex flex-col justify-between items-center w-full max-w-[1100px] font-tahoma py-4">
          <div className="text-2xl font-semibold text-primary">Results</div>
          <div className="font-semibold text-red-500">No Data Fund!</div>
          <div className="self-end px-2">
            <div className="w-44">
              <Btn color="bg-secondary" textColor="text-white" onClick={() => router.back()}>Back</Btn>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}