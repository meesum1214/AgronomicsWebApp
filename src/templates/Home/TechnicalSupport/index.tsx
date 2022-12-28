import { FileInput, Input, LoadingOverlay, Textarea, TextInput } from "@mantine/core"
import { MdAlternateEmail, MdSend } from "react-icons/md"
import PhoneInput from "react-phone-input-2"
import Btn from "../../../components/Btn"
import { ImFacebook2 } from "react-icons/im";
import { FaInstagramSquare, FaTwitterSquare } from "react-icons/fa";
import { useInputState } from "@mantine/hooks"
import { postSupportTicket } from "../../../API/add";
import { useEffect, useState } from "react";

export default () => {

  const [loading, setLoading] = useState(false)

  const [data, setData] = useInputState({
    userid: null,
    name: '',
    phone: '',
    email: '',
    text: '',
    file: '',
    location: ''
  })

  useEffect(() => {
    setData({
      ...data,
      location: `${window.navigator.geolocation.getCurrentPosition((e) => {
        return `${e.coords.latitude},${e.coords.longitude}`
      })}`,
      userid: JSON.parse(localStorage.getItem('ag-user-app-web')).id
    })
  }, [])
  

  const onSubmit = () => {
    if (data.name && data.phone && data.email && data.text && data.file) {
      setLoading(true)
      // console.log('Submitted Data: >>', data)
      postSupportTicket(data).then((res) => {
        // console.log('Response from Data: >>>', res.data)
        setData({name: '', phone: '', email: '', text: '', file: '', location: ''})
        alert('Ticket Added Successfully')
        setLoading(false)
      }).catch((err) => {
        console.log(err)
        setLoading(false)
      })
    }
    else {
      alert('Please fill all fields')
    }
  }


  return (
    <div className="flex justify-center items-center bg-neutral-100 py-8 min-h-[92vh]">
      <LoadingOverlay visible={loading} />
      <div className="w-full rounded-md shadow-3xl bg-white max-w-[1100px] min-h-[70vh] flex md:flex-row flex-col items-center justify-center py-4">

        <div className="md:w-[60%] w-[95%] flex justify-center items-center">
          <div className="font-tahoma w-[80%] flex flex-col justify-between">
            <div className="text-secondary text-3xl font-bold">Get in touch!</div>
            <div>We are always happy to make valuable new contacts.</div>
            <TextInput
              placeholder="Your name"
              withAsterisk
              required
              value={data.name}
              onChange={(e) => setData({ ...data, name: e.currentTarget.value })}
              className="my-2"
            />
            <PhoneInput
              inputStyle={{ width: '100%' }}
              country={'pk'}
              value={data.phone}
              onChange={(e) => setData({ ...data, phone: e })}
            />
            <Input
              icon={<MdAlternateEmail />}
              placeholder="Your email"
              value={data.email}
              onChange={(e: any) => setData({ ...data, email: e.currentTarget.value })}
              className="my-2"
            />
            <Textarea
              placeholder="Message"
              withAsterisk
              value={data.text}
              onChange={(e) => setData({ ...data, text: e.currentTarget.value })}
              className="mb-2"
            />
            <FileInput
              label="Upload Image"
              multiple={false}
              accept="image/*"
              placeholder="Choose Image"
              withAsterisk
              value={data.file as any}
              onChange={(file: any) => setData({ ...data, file })}
            />
            <div className="h-10 mt-4">
              <Btn onClick={onSubmit} color='bg-secondary' textColor='text-white' rightIcon={<MdSend size={15} />} >Submit</Btn>
            </div>
          </div>
        </div>

        <div className="md:w-[40%] w-[95%] flex justify-center items-center md:pt-0 pt-8">
          <div className="font-tahoma w-[80%] text-gray-500 flex flex-col justify-between md:items-start items-center md:text-left text-center md:pt-0 pt-6">
            <div className="text-secondary text-3xl font-bold pb-4">Contact Information</div>
            <div className="text-lg">Address of our company</div>
            <div className="text-lg">Call Us: +92 3345264952</div>
            <div className="text-lg">We are open from Monday - Friday 09:00 AM - 05:00 PM</div>
            <div className="text-secondary text-3xl font-bold md:pt-0 pt-6">Follow Us</div>
            <div className="flex justify-between items-center w-[50%]">
              <div className="cursor-pointer"><ImFacebook2 size={36} /></div>
              <div className="cursor-pointer"><FaInstagramSquare size={40} /></div>
              <div className="cursor-pointer"><FaTwitterSquare size={40} /></div>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}