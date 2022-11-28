import { Divider } from "@mantine/core";
import Image from "next/image";
import { useRouter } from "next/router";
import { IoChevronForwardCircle } from "react-icons/io5";
import { getAgripediaPDF } from "../API/add";
import { LoadingAG } from "./Loading";

export default ({ img, title, desc, src, width, height, btnText }: { img: string, title: string, desc: string, src: string, width: string, height: string, btnText: string }) => {

  const router = useRouter()

  return (

    <div className={`${width} ${height} md:mx-auto mx-4 rounded-md shadow-3xl bg-white px-6 py-14 font-tahoma flex justify-center`}>

      <div className="w-[85%] flex flex-col justify-between">
        <div className="w-full flex justify-center">
          <div className="bg-white rounded-full border-muted border-[20px] shadow-3xl">
            <Image
              src={`/${img}.png`}
              width={100}
              height={100}
              priority
              alt="Agripedia-img"
            />
          </div>
        </div>

        <div className="py-6">
          <div className="text-center text-xl text-primary font-bold pb-2">{title}</div>
          <div className="text-center text-lg text-secondaryDark">{desc}</div>
        </div>

        <Divider />

        <div className="w-full flex justify-center pt-6">
          <div className="w-full">
            <button
              onClick={() => {
                LoadingAG(true)
                if (src === 'bk') {
                  getAgripediaPDF(src).then((res) => {
                    router.push(res.data[0].link)
                    setTimeout(() => {
                      LoadingAG(false)
                    }, 1000);
                  })
                } else if (src === 'art') {
                  getAgripediaPDF(src).then((res) => {
                    router.push(res.data[0].link)
                    setTimeout(() => {
                      LoadingAG(false)
                    }, 1000);
                  })
                } else if (src === 'rp') {
                  getAgripediaPDF(src).then((res) => {
                    router.push(res.data[0].link)
                    setTimeout(() => {
                      LoadingAG(false)
                    }, 1000);
                  })
                } else {
                  router.push(src)
                }
              }}
              className="hover:scale-105 w-full h-10 flex text-white justify-center items-center rounded-full font-bold cursor-pointer transition-all duration-200 bg-secondary"
            >
              <div className="pr-2">{btnText}</div>
              <IoChevronForwardCircle size={25} />
            </button>
          </div>
        </div>
      </div>

    </div>

  )
}