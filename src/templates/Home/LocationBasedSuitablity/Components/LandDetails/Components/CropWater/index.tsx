import { Checkbox, Divider, ScrollArea, Stepper } from "@mantine/core"
import axios from "axios"
import Router, { useRouter } from "next/router"
import { useEffect, useState } from "react"
import { postCheckbox } from "../../../../../../../API/add"
import Btn from "../../../../../../../components/Btn"
import { LoadingAG } from "../../../../../../../components/Loading"

export default ({ list, cropRecordId }: { list: any, cropRecordId: any }) => {

  const [active, setActive] = useState(0);
  const nextStep = () => setActive((current) => (current < 3 ? current + 1 : current));
  const prevStep = () => setActive((current) => (current > 0 ? current - 1 : current))

  const router = useRouter()

  // console.log('active: ', active+1)
  // console.log('List: ', list?.[0]?.crop_land_preparation)

  return (
    <div className="p-2 w-full h-96">
      <div className="h-[370px] flex flex-col justify-between">
        {
          list?.map(({ crop, variety_name, crop_land_preparation }: any, i: any) => {
            return (
              <div key={i} className="w-full">
                <div className="w-full flex justify-around">
                  <div className="font-semibold"> <span className="text-primary">CROP NAME: </span> <span>{crop} </span></div>
                  <div className="font-semibold"> <span className="text-primary">SEED NAME: </span> <span>{variety_name} </span></div>
                </div>

                <div>
                  <Divider className="my-4" />

                  <Stepper active={active} onStepClick={setActive} breakpoint="sm" color="primary">

                    {
                      crop_land_preparation?.map(({ checked, land_preparation, day, step, step_urdu }: any, i: any) => {
                        return (
                          <Stepper.Step disabled key={i}>
                            {
                              active + 1 < crop_land_preparation.length ?
                                checked === 'Checked' ?
                                  setActive(active + 1) : (
                                    <div className="w-full h-[250px] flex flex-col justify-between">
                                      <div>
                                        <div className="text-primary font-bold flex justify-center">Day {day}:</div>
                                        <div className="text-sm w-2/3">{step}</div>
                                        <div className="text-sm text-right w-full flex justify-end">
                                          <div className="w-2/3">{step_urdu}</div>
                                        </div>
                                      </div>

                                      <div className="w-full flex justify-center mt-4">
                                        <div className="w-44">
                                          {
                                            active + 1 < crop_land_preparation.length ? (
                                              <Btn color="secondary" textColor="text-white" onClick={() => {
                                                LoadingAG(true)
                                                postCheckbox(cropRecordId, `${land_preparation}`)
                                                  .then((res) => {
                                                    console.log('First Step Response: ', res)
                                                    setTimeout(() => {
                                                      nextStep()
                                                      LoadingAG(false)
                                                    }, 1000)
                                                  })
                                                  .catch((err) => {
                                                    console.log('Error: ', err)
                                                  })
                                              }}>Next</Btn>
                                            )
                                              :
                                              (
                                                <Btn color="secondary" textColor="text-white" onClick={() => {
                                                  LoadingAG(true)
                                                  postCheckbox(cropRecordId, `${land_preparation}`)
                                                    .then((res) => {
                                                      console.log('First Step Response: ', res)
                                                      setTimeout(() => {
                                                        nextStep()
                                                        LoadingAG(false)
                                                      }, 1000)
                                                    })
                                                    .catch((err) => {
                                                      console.log('Error: ', err)
                                                    })
                                                }}>Done</Btn>
                                              )
                                          }

                                        </div>
                                      </div>
                                    </div>
                                  )
                                :
                                router.reload()
                            }
                          </Stepper.Step>
                        )
                      })
                    }











                    {/* <Stepper.Step disabled>
                      <div className="w-full">
                        <div className="text-primary font-bold flex justify-center">Day {list[i].crop_land_preparation[0].day}:</div>
                        <div className="text-sm w-2/3">{list[i].crop_land_preparation[0].step}</div>
                        <div className="text-sm text-right w-full flex justify-end">
                          <div className="w-2/3">{list[i].crop_land_preparation[0].step_urdu}</div>
                        </div>

                        <div className="w-full flex justify-center mt-4">
                          <div className="w-44">
                            <Btn color="secondary" textColor="text-white" onClick={() => {
                              LoadingAG(true)
                              postCheckbox(cropRecordId, list[i].crop_land_preparation[0].land_preparation)
                                .then((res) => {
                                  console.log('First Step Response: ', res)
                                  setTimeout(() => {
                                    nextStep()
                                    LoadingAG(false)
                                  }, 1000)
                                })
                                .catch((err) => {
                                  console.log('Error: ', err)
                                })
                              // console.log('Crop Record Id: ', cropRecordId)
                              // console.log('preparation id:', list[i].crop_land_preparation[0].land_preparation)
                            }}>Next</Btn>
                          </div>
                        </div>
                      </div>
                    </Stepper.Step>
                    <Stepper.Step disabled>
                      <div className="w-full">
                        <div className="text-primary font-bold">Day {list[i].crop_land_preparation[1].day}:</div>
                        <div className="text-sm w-2/3">{list[i].crop_land_preparation[1].step}</div>
                        <div className="w-full text-sm text-right flex justify-end">
                          <div className="w-2/3">{list[i].crop_land_preparation[1].step_urdu}</div>
                        </div>

                        <div className="w-full flex justify-center mt-4">
                          <div className="w-44">
                            <Btn color="secondary" textColor="text-white" onClick={() => {
                              LoadingAG(true)
                              postCheckbox(cropRecordId, list[i].crop_land_preparation[1].land_preparation)
                                .then((res) => {
                                  console.log('Second Step Response: ', res)
                                  setTimeout(() => {
                                    nextStep()
                                    LoadingAG(false)
                                  }, 1000)
                                })
                                .catch((err) => {
                                  console.log('Error: ', err)
                                })
                              // console.log('Crop Record Id: ', cropRecordId)
                              // console.log('preparation id:', list[i].crop_land_preparation[1].land_preparation)
                            }}>Next</Btn>
                          </div>
                        </div>
                      </div>
                    </Stepper.Step>
                    <Stepper.Step disabled>
                      <div className="w-full">
                        <div className="text-primary font-bold">Day {list[i].crop_land_preparation[2].day}:</div>
                        <div className="text-sm w-2/3">{list[i].crop_land_preparation[2].step}</div>
                        <div className="w-full text-sm text-right flex justify-end">
                          <div className="w-2/3">{list[i].crop_land_preparation[2].step_urdu}</div>
                        </div>

                        <div className="w-full flex justify-center mt-4">
                          <div className="w-44">
                            <Btn color="secondary" textColor="text-white" onClick={() => {
                              LoadingAG(true)
                              postCheckbox(cropRecordId, list[i].crop_land_preparation[2].land_preparation)
                                .then((res) => {
                                  console.log('Second Step Response: ', res)
                                  nextStep()
                                  setTimeout(() => {
                                    router.reload()
                                    LoadingAG(false)
                                  }, 1500)
                                })
                                .catch((err) => {
                                  console.log('Error: ', err)
                                })
                              // console.log('Crop Record Id: ', cropRecordId)
                              // console.log('preparation id:', list[i].crop_land_preparation[2].land_preparation)
                            }}>Done</Btn>
                          </div>
                        </div>
                      </div>
                    </Stepper.Step> */}
                    <Stepper.Completed>
                      <div className="h-[199px] flex justify-center items-center text-lg text-primary font-bold">
                        Crop Water Added!
                      </div>
                    </Stepper.Completed>
                  </Stepper>

                </div>
              </div>
            )
          })
        }


        {/* <div className="w-full flex justify-center mt-4">

            {
              active === 2 && (
                <div className="w-44">
                  <Btn color="secondary" textColor="text-white" onClick={() => {
                    nextStep()
                    LoadingAG(true)
                    setTimeout(() => {
                      router.reload()
                    }, 1500)
                  }}>Done</Btn>
                </div>
              )
            }
          </div> */}


      </div>
    </div>
  )
}