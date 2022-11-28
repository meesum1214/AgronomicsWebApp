import { Divider } from "@mantine/core"
export default ({selected}) => {
 
  return(
    <div className="flex flex-col">
      <h3 className="my-3 font-bold text-primary text-xl">Crop Info</h3>
      <Divider />
      {
        selected?.crop_records?.[0]?.crop
      }
    </div>
  )
}