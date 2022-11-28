import ProceedCard from "../../../components/ProceedCard"
import { SoilAnalysisData } from "../../../interface/SoilCardData"

export default () => {
  return (
    <div className="flex justify-center items-center bg-neutral-100 min-h-screen">
      <div className="w-full max-w-[1100px] grid md:grid-cols-3 grid-cols-1 gap-3">
        {
          SoilAnalysisData.map(({id, img, title, desc, src}) => (
            <ProceedCard key={id} width='w-full' height='h-[450px]' img={img} title={title} desc={desc} src={src} btnText='Proceed' />
          ))
        }
      </div>
    </div>
  )
}