import { Divider } from "@mantine/core"
import { useRouter } from "next/router"
import agripediaVideos from "../../../../interface/agripediaVideos"

export default () => {
  const router = useRouter()
  return (
    <div className="min-h-screen flex justify-center py-4">
      <div className="max-w-[1100px] w-full bg-white rounded-md shadow-3xl p-2">

        {
          agripediaVideos.map(({ src, title, date, description }, i) => (
            <div key={i}>
              <div className="flex">
                <iframe width="300" height="150" src={src} title={title} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                <div className="pl-2 flex flex-col justify-center cursor-pointer" onClick={() => router.push(src)}>
                  <div className="text-2xl font-bold">{title}</div>
                  <p className="text-sm">{date}</p>
                  <p className="text-sm"> <strong>Description:</strong> {description}</p>
                </div>
              </div>
              <Divider className="my-4" />
            </div>
          ))
        }

      </div>
    </div>
  )
}