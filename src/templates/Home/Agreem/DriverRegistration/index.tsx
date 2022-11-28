import { Accordion, NumberInput } from "@mantine/core"
import Image from "next/legacy/image"
import { useRouter } from "next/router";
import { useState } from "react";
import { useDispatch } from "react-redux";
import Btn from "../../../../components/Btn"
import { switchDriverMode } from "../../../../slices/driverSlice";
import BasicInformation from "./Components/BasicInformation";
import DriverCnic from "./Components/DriverCnic";
import DriverLicense from "./Components/DriverLicense";
import MachineryTools from "./Components/MachineryTools";

export default () => {

  const [referalCode, setReferalCode] = useState('')
  const router = useRouter()
  const dispatch = useDispatch()

  return (
    <div className="flex flex-col items-center pb-20 min-h-screen">

      <div className="mt-4">
        <Image
          src="/driver.svg"
          alt="Picture of the author"
          width={500}
          height={200}
          priority
        />
        <div className="flex justify-center font-tahoma text-2xl font-semibold text-primary py-4">Registration</div>

        <div className="w-[500px] font-tahoma">
          <Accordion variant="separated" defaultValue="basic">
            <Accordion.Item value="basic">
              <Accordion.Control> <div className="font-semibold">Basic Information</div> </Accordion.Control>
              <Accordion.Panel>

                <BasicInformation />

              </Accordion.Panel>
            </Accordion.Item>

            <Accordion.Item value="driver">
              <Accordion.Control> <div className="font-semibold">Driver License</div></Accordion.Control>
              <Accordion.Panel>

                <DriverLicense />

              </Accordion.Panel>
            </Accordion.Item>

            <Accordion.Item value="cnic">
              <Accordion.Control> <div className="font-semibold">CNIC</div></Accordion.Control>
              <Accordion.Panel>

                <DriverCnic />

              </Accordion.Panel>
            </Accordion.Item>

            <Accordion.Item value="machinary">
              <Accordion.Control> <div className="font-semibold">Machinery & Tools</div></Accordion.Control>
              <Accordion.Panel>

                <MachineryTools />

              </Accordion.Panel>
            </Accordion.Item>

            <Accordion.Item value="referal">
              <Accordion.Control>
                <div>
                  <div className="font-semibold">Referal Code</div>
                  <div className="text-xs text-gray-400 mt-1">Enter if you have referral Code</div>
                </div>
              </Accordion.Control>
              <Accordion.Panel>

                <div className="flex justify-center">
                  <div className="w-[80%] my-2 flex justify-between items-center">
                    <NumberInput
                      placeholder="Referel Code"
                      hideControls
                      onChange={(e: any) => {
                        setReferalCode(e)
                      }}
                    />

                    <div className="w-44">
                      <Btn
                        color="bg-secondary"
                        onClick={() => {
                          console.log(referalCode)
                        }}
                      >Done</Btn>
                    </div>
                  </div>
                </div>

              </Accordion.Panel>
            </Accordion.Item>
          </Accordion>

        </div>

        <div className="flex justify-center mt-4">
          <div className="w-44">
            <Btn
              color="bg-secondary"
              onClick={() => {
                dispatch(switchDriverMode())
                router.push('/home/agreem/driver')
              }}
            >Submit</Btn>
          </div>
        </div>
      </div>

    </div>
  )
}