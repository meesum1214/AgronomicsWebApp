import { Input, Modal, TextInput } from "@mantine/core"
import { useState } from "react"
import { MdOutlineAlternateEmail } from "react-icons/md"
import PhoneInput from "react-phone-input-2"
import Btn from "../../../components/Btn"
import ProceedCard from "../../../components/ProceedCard"
import SoilCardData from "../../../interface/SoilCardData"
import 'react-phone-input-2/lib/style.css'
import { IoChevronForwardCircle } from "react-icons/io5"

export default () => {

  const [opened, setOpened] = useState(false);

  const [expertData, setExpertData] = useState({
    name: '',
    email: '',
    phone: '',
    specialization: '',
    destination: ''
  })

  return (
    <div className="flex justify-center items-center bg-neutral-100 py-8 min-h-screen">

      <div className="max-w-[1100px]">

        <div className="w-full grid md:grid-cols-2 grid-cols-1 gap-4">
          {
            SoilCardData.map(({ id, img, title, desc, src }, i) => (
              <div key={i}>
                <ProceedCard width='w-[100%]' height='h-[480px]' img={img} title={title} desc={desc} src={src} btnText="Proceed" />
              </div>
            ))
          }
        </div>

        <div className="w-full bg-primary flex items-center justify-center py-4 cursor-pointer rounded-md mt-4 shadow-3xl hover:scale-105 transition-transform" onClick={() => setOpened(true)} >
          <div className="text-3xl text-white font-tahoma font-bold mr-2">Become Agri Expert</div>
          <div><IoChevronForwardCircle size={35} color='white' /></div>
        </div>

        <div className="flex justify-end py-4">
          <Modal
            opened={opened}
            onClose={() => {
              setExpertData({ ...expertData, name: '', email: '', phone: '', specialization: '', destination: '' })
              setOpened(false)
            }}
            withCloseButton={false}
            centered
          >
            <div className="font-tahoma w-full flex flex-col items-center">
              <div className="text-xl text-primary font-semibold">Become an Expert</div>
              <div className="w-full h-[250px] flex flex-col justify-evenly">
                <TextInput
                  placeholder="Enter your name"
                  required
                  className="w-full"
                  value={expertData.name}
                  onChange={(e) => setExpertData({ ...expertData, name: e.currentTarget.value })}
                />
                <Input
                  placeholder="Enter your email"
                  icon={<MdOutlineAlternateEmail />}
                  required
                  className="w-full"
                  value={expertData.email}
                  onChange={(e: any) => setExpertData({ ...expertData, email: e.currentTarget.value })}
                />
                <PhoneInput
                  country={'pk'}
                  value={expertData.phone}
                  onChange={(e) => setExpertData({ ...expertData, phone: e })}
                  inputStyle={{ width: '100%' }}
                />
                <TextInput
                  placeholder="Enter your specialization"
                  required
                  className="w-full"
                  value={expertData.specialization}
                  onChange={(e) => setExpertData({ ...expertData, specialization: e.currentTarget.value })}
                />
                <TextInput
                  placeholder="Enter your destination"
                  required
                  className="w-full"
                  value={expertData.destination}
                  onChange={(e) => setExpertData({ ...expertData, destination: e.currentTarget.value })}
                />
              </div>
              <div className="w-44">
                <Btn color="bg-secondary" textColor="text-white" onClick={() => {
                  if (expertData.name && expertData.email && expertData.phone && expertData.specialization && expertData.destination) {
                    console.log(expertData)
                    setExpertData({ ...expertData, name: '', email: '', phone: '', specialization: '', destination: '' })
                    setOpened(false)
                  }
                  else {
                    alert('Please fill all the fields')
                  }
                }}>Submit Form</Btn>
              </div>
            </div>
          </Modal>
        </div>

      </div>


    </div>
  )
}