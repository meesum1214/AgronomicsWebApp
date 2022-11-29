import { useState } from "react"
import { RecaptchaVerifier, signInWithPhoneNumber, } from "firebase/auth";
import { authentication } from "../../firebase-config";
import createAppState from "../../preact/Auth";
import Btn from "../../components/Btn";
import { CheckPhone } from "../../WebServices/Login";
import { login } from "../../states/userState";
import { useRouter } from "next/router";
import { BackgroundImage } from "@mantine/core";
import { MdSend, MdVerified } from "react-icons/md";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaLinkedin, FaTwitterSquare, FaWhatsappSquare } from "react-icons/fa";
import { ImFacebook2 } from "react-icons/im";
import { LoadingAG } from "../../components/Loading";
import Image from "next/image";


export default () => {

  const [phoneNumber, setPhoneNumber] = useState('+92')
  const [OTP, setOTP] = useState('')
  const [isVerified, setIsVerified] = useState(false)
  const [state, setState] = useState(false)

  const router = useRouter()

  const global = createAppState()

  const generateRecaptcha = () => {
    window.recaptchaVerifier = new RecaptchaVerifier('recaptcha-container', {
      "size": "invisible",
      "callback": (response: any) => {
        console.log("response of captcha", response)
      }
    }, authentication);
  }

  const sendOtp = () => {
    if (phoneNumber.length === 13) {
      LoadingAG(true)
      console.log(phoneNumber)
      generateRecaptcha()
      let appVerifier = window.recaptchaVerifier
      signInWithPhoneNumber(authentication, phoneNumber.toString(), appVerifier)
        .then(confirmationResult => {
          window.confirmationResult = confirmationResult;
          setState(!state)
          LoadingAG(false)
        }).catch((error) => {
          LoadingAG(false)
          console.log(error)
        })
    }
    else {
      alert('Please enter valid phone number')
    }
  }

  const sendHandleKeyDown = (e: any) => {
    if (e.key === 'Enter') {
      sendOtp()
    }
  }


  const verifyOTP = (e: any) => {
    if (OTP.length === 6) {
      LoadingAG(true)
      let confirmationResult = window.confirmationResult
      confirmationResult.confirm(OTP).then((result: any) => {
        // User signed in successfully.

        CheckPhone(parseInt(phoneNumber.split('+92')[1])).then((res) => {
          login(res)
          // console.log('res>>>>>', res)
          localStorage.setItem('ag-token-7878p', res.taccessToken)
          localStorage.setItem('ag-user-app-web', JSON.stringify(res.user))
          global.phoneNumber.value = phoneNumber
          setTimeout(() => {
            router.push('/').then(() => router.reload())
            LoadingAG(false)
          }, 1000)
        })

        // const user = result.user;
        // console.log('User Verified', user)

        // alert('User Verified!')
        setIsVerified(true)
        // ...
      }).catch((error: any) => {
        LoadingAG(false)
        alert(error.message)
        // User couldn't sign in (bad verification code?)
        // ...
        console.log(error)
      });
    }
  }

  const verifyHandleKeyDown = (e: any) => {
    if (e.key === 'Enter') {
      verifyOTP(e)
    }
  }

  return (
    <BackgroundImage src="/bg-login2.jpg" className="flex">

      {/* <LoadingOverlay visible={loading} /> */}

      <div className="w-1/2 flex flex-col justify-center items-center">
        <Image
          src="/laptop.png"
          width={700}
          height={700}
          className="w-auto h-auto"
          alt="Picture of the author"
          quality={100}
          priority
        />
      </div>

      <div className="w-1/2 min-h-screen flex flex-col">
        <div className="w-full h-[7vh] flex justify-end pt-2">
          <div className="w-64 flex justify-evenly items-center">
            <ImFacebook2 size={45} className='cursor-pointer text-facebook' />
            <FaWhatsappSquare size={50} className='cursor-pointer text-whatsapp' />
            <FaLinkedin size={50} className='cursor-pointer text-linkedin' />
            <FaTwitterSquare size={50} className='cursor-pointer text-twitter' />
          </div>
        </div>

        <div className="w-full h-[93vh] flex flex-col justify-center items-center">




          <div className="font-tahoma flex flex-col justify-around items-center h-[55vh]">
            <Image
              src="/2000x2000logo.png"
              alt="Picture of the author"
              width={350}
              height={350}
              className="w-auto h-auto"
              quality='80'
              priority
            />

            <div className="w-full flex flex-col items-center">
              <div className="text-primary text-6xl font-semibold">Welcome</div>
              <div className="text-primary text-lg ">Login with mobile number</div>
            </div>

            <div className="w-[70%] flex flex-col items-center">

              {
                !state ?
                  <div className="w-full flex flex-col items-center">
                    <div className="w-[300px] py-4">

                      <div className="text-gray-600">Mobile Number</div>
                      <div className="flex items-center">
                        <BsFillTelephoneFill size={25} className='text-primary' />
                        <input
                          type="tel"
                          className="w-full border-primary border-b-2 bg-muted p-2 mb-2 ml-2 focus:outline-none"
                          placeholder="Enter Here"
                          value={phoneNumber}
                          onChange={(e) => setPhoneNumber(e.target.value)}
                          onKeyDown={sendHandleKeyDown}
                        />
                      </div>
                    </div>
                    <div className="w-44 mt-6">
                      <Btn
                        color="bg-secondary"
                        textColor="text-white"
                        onClick={sendOtp}
                        rightIcon={<MdSend size={20} />}
                      >Send OTP</Btn>
                    </div>
                  </div>
                  :
                  !isVerified ?
                    <div className="w-full flex flex-col items-center">
                      <div className="w-[300px]">
                        <div className="text-gray-600">Verify your number</div>
                        <div className="flex items-center">
                          <BsFillTelephoneFill size={25} className='text-primary' />
                          <input
                            type="tel"
                            className="w-full border-primary border-b-2 bg-muted p-2 mb-2 ml-2 focus:outline-none"
                            placeholder="Enter Code"
                            value={OTP}
                            onChange={(e) => setOTP(e.target.value)}
                            onKeyDown={verifyHandleKeyDown}
                          />
                        </div>
                      </div>
                      <div className="w-44 mt-6">
                        <Btn
                          color="bg-secondary"
                          textColor="text-white"
                          onClick={verifyOTP}
                          rightIcon={<MdVerified size={20} />}
                        >Verify</Btn>
                      </div>
                    </div>
                    :
                    <div className="flex justify-center text-gray-500 mt-4">Verified</div>
              }

            </div>

          </div>

          <div id="recaptcha-container"></div>

        </div>
      </div>
    </BackgroundImage>
  )
}