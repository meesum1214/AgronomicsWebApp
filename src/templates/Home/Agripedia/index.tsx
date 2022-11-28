import ProceedCard from "../../../components/ProceedCard"
import Agripedia from "../../../interface/Agripedia"

export default () => {

  return (
    <div className="flex justify-center bg-neutral-100 py-8">

      <div className="max-w-[1100px] w-full grid md:grid-cols-2 grid-cols-1 gap-4">
        {
          Agripedia.map(({ id, img, title, desc, src, btnText }) => (
            <div  key={id + 'sfsdgfsg'}>
              <ProceedCard width='w-[100%]' height='h-[480px]' img={img} title={title} desc={desc} src={src} btnText={btnText} />
            </div>
          ))
        }
      </div>
    </div>
  )
}