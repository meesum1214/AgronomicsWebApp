import { useRouter } from "next/router"
import { useSelector } from "react-redux"
import { selectedDriverMode } from "../../../slices/driverSlice"

export default () => {
  const router = useRouter()
  const driverState = useSelector(selectedDriverMode)
  driverState ? router.push('/home/agreem/driver') : router.push('/home/agreem/farmer')
}