import Image from "next/legacy/image"
import Btn from "../../Btn"
import { useState } from "react"
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'

export default () => {

  const [phone, setPhone] = useState('+92')

  return (
    <div className="md:h-[280px] md:w-full flex md:flex-row flex-col justify-evenly font-tahoma">

      <div className="w-full h-full flex justify-center items-center md:py-auto py-2">
        <div className="h-[70%] flex flex-col justify-between items-center">
          <div className="font-bold text-center text-base md:block hidden">Enter your mobile <br /> number</div>
          <div className="font-bold text-center text-base md:hidden block">Enter your mobile number</div>
          <div className="w-[90%] my-6">
            <PhoneInput
              inputStyle={{ width: '100%' }}
              country={'pk'}
              value={phone}
              onChange={setPhone}
            />
          </div>
          <a href="https://play.google.com/store/apps/details?id=com.agronomics.app&hl=en_US&gl=US" target='_blank'>
            <div className="w-44">
              <Btn color="bg-secondary" textColor="text-white" onClick={() => { }}>Send Link by SMS</Btn>
            </div>
          </a>
        </div>
      </div>

      <div className="md:h-full md:w-3 w-full flex md:flex-col flex-row items-center md:justify-center justify-between">
        <div className="bg-black md:h-[45%] h-1 md:w-1 w-[44%]" />
        <div className="w-6">OR</div>
        <div className="bg-black md:h-[45%] h-1 md:w-1 w-[44%]" />
      </div>

      <div className="w-full h-full flex justify-center items-center md:py-auto py-2">
        <div className="h-[70%] flex flex-col justify-between items-center">
          <div className="font-bold text-center text-base md:block hidden">Scan this QR <br /> Code</div>
          <div className="font-bold text-center text-base md:hidden block md:m-auto mb-2">Scan this QR Code</div>
          <div className="relative w-24 h-24">
            <Image
              src="/qr-code transparent.png"
              objectFit="contain"
              layout="fill"
              priority
            />
          </div>
        </div>
      </div>

      <div className="md:h-full md:w-3 w-full flex md:flex-col flex-row items-center md:justify-center justify-between">
        <div className="bg-black md:h-[45%] h-1 md:w-1 w-[44%]" />
        <div className="w-6">OR</div>
        <div className="bg-black md:h-[45%] h-1 md:w-1 w-[44%]" />
      </div>

      <div className="w-full h-full flex justify-center items-center  md:py-auto py-2">
        <div className="h-[70%] flex flex-col justify-between items-center">
          <div className="font-bold text-center text-base md:block hidden">Visit on your mobile <br /> device</div>
          <div className="font-bold text-center text-base md:hidden block">Visit on your mobile device</div>
          <div className="w-full h-full flex md:flex-col flex-row items-center justify-end">
            <a href="https://play.google.com/store/apps/details?id=com.agronomics.app&hl=en_US&gl=US" target='_blank'>
              <div className="relative md:w-36 w-32 h-14 md:mr-auto mr-2 cursor-pointer">
                <Image
                  src="/play-store.png"
                  objectFit="contain"
                  layout="fill"
                  priority
                />
              </div>
            </a>
            <div className="relative md:w-36 w-28 h-[57px] cursor-pointer">
              <Image
                src="/app-store.png"
                objectFit="contain"
                layout="fill"
                priority
              />
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}