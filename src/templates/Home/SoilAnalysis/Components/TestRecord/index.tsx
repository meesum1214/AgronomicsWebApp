import Image from "next/legacy/image"
import { useEffect, useState } from "react"
import { getReport } from "../../../../../API/add"

export default () => {

  let record = [
    {
      id: 1,
      img: 'imagebasedanalysis',
      name: 'Salman',
      sampleCode: 'AG-16-99',
      testType: 'Advance',
      status: 'active'
    },
    {
      id: 2,
      img: 'imagebasedanalysis',
      name: 'Ali',
      sampleCode: 'AG-18-86',
      testType: 'Advance',
      status: 'pending'
    },
    {
      id: 3,
      img: 'imagebasedanalysis',
      name: 'Farhan',
      sampleCode: 'AG-26-89',
      testType: 'Basic',
      status: 'active'
    },
    {
      id: 4,
      img: 'imagebasedanalysis',
      name: 'Farhan',
      sampleCode: 'AG-26-89',
      testType: 'Basic',
      status: 'pending'
    },
    {
      id: 5,
      img: 'imagebasedanalysis',
      name: 'Farhan',
      sampleCode: 'AG-26-89',
      testType: 'Basic',
      status: 'active'
    },
    {
      id: 6,
      img: 'imagebasedanalysis',
      name: 'Farhan',
      sampleCode: 'AG-26-89',
      testType: 'Basic',
      status: 'pending'
    },
    {
      id: 7,
      img: 'imagebasedanalysis',
      name: 'Farhan',
      sampleCode: 'AG-26-89',
      testType: 'Basic',
      status: 'pending'
    },
    {
      id: 8,
      img: 'imagebasedanalysis',
      name: 'Farhan',
      sampleCode: 'AG-26-89',
      testType: 'Basic',
      status: 'active'
    },
    {
      id: 9,
      img: 'imagebasedanalysis',
      name: 'Farhan',
      sampleCode: 'AG-26-89',
      testType: 'Basic',
      status: 'active'
    },
    {
      id: 10,
      img: 'imagebasedanalysis',
      name: 'Farhan',
      sampleCode: 'AG-26-89',
      testType: 'Basic',
      status: 'pending'
    },
    {
      id: 11,
      img: 'imagebasedanalysis',
      name: 'Salman',
      sampleCode: 'AG-16-99',
      testType: 'Advance',
      status: 'active'
    },
    {
      id: 12,
      img: 'imagebasedanalysis',
      name: 'Ali',
      sampleCode: 'AG-18-86',
      testType: 'Advance',
      status: 'pending'
    },
    {
      id: 13,
      img: 'imagebasedanalysis',
      name: 'Farhan',
      sampleCode: 'AG-26-89',
      testType: 'Basic',
      status: 'active'
    },
    {
      id: 14,
      img: 'imagebasedanalysis',
      name: 'Farhan',
      sampleCode: 'AG-26-89',
      testType: 'Basic',
      status: 'pending'
    },
    {
      id: 15,
      img: 'imagebasedanalysis',
      name: 'Farhan',
      sampleCode: 'AG-26-89',
      testType: 'Basic',
      status: 'active'
    },
    {
      id: 16,
      img: 'imagebasedanalysis',
      name: 'Farhan',
      sampleCode: 'AG-26-89',
      testType: 'Basic',
      status: 'pending'
    },
    {
      id: 17,
      img: 'imagebasedanalysis',
      name: 'Farhan',
      sampleCode: 'AG-26-89',
      testType: 'Basic',
      status: 'pending'
    },
    {
      id: 18,
      img: 'imagebasedanalysis',
      name: 'Farhan',
      sampleCode: 'AG-26-89',
      testType: 'Basic',
      status: 'active'
    },
    {
      id: 19,
      img: 'imagebasedanalysis',
      name: 'Farhan',
      sampleCode: 'AG-26-89',
      testType: 'Basic',
      status: 'active'
    },
    {
      id: 20,
      img: 'imagebasedanalysis',
      name: 'Farhan',
      sampleCode: 'AG-26-89',
      testType: 'Basic',
      status: 'pending'
    },
    {
      id: 21,
      img: 'imagebasedanalysis',
      name: 'Salman',
      sampleCode: 'AG-16-99',
      testType: 'Advance',
      status: 'active'
    },
    {
      id: 22,
      img: 'imagebasedanalysis',
      name: 'Ali',
      sampleCode: 'AG-18-86',
      testType: 'Advance',
      status: 'pending'
    },
    {
      id: 23,
      img: 'imagebasedanalysis',
      name: 'Farhan',
      sampleCode: 'AG-26-89',
      testType: 'Basic',
      status: 'active'
    },
    {
      id: 24,
      img: 'imagebasedanalysis',
      name: 'Farhan',
      sampleCode: 'AG-26-89',
      testType: 'Basic',
      status: 'pending'
    },
    {
      id: 25,
      img: 'imagebasedanalysis',
      name: 'Farhan',
      sampleCode: 'AG-26-89',
      testType: 'Basic',
      status: 'active'
    },
    {
      id: 26,
      img: 'imagebasedanalysis',
      name: 'Farhan',
      sampleCode: 'AG-26-89',
      testType: 'Basic',
      status: 'pending'
    },
    {
      id: 27,
      img: 'imagebasedanalysis',
      name: 'Farhan',
      sampleCode: 'AG-26-89',
      testType: 'Basic',
      status: 'pending'
    },
    {
      id: 28,
      img: 'imagebasedanalysis',
      name: 'Farhan',
      sampleCode: 'AG-26-89',
      testType: 'Basic',
      status: 'active'
    },
    {
      id: 29,
      img: 'imagebasedanalysis',
      name: 'Farhan',
      sampleCode: 'AG-26-89',
      testType: 'Basic',
      status: 'active'
    },
    {
      id: 30,
      img: 'imagebasedanalysis',
      name: 'Farhan',
      sampleCode: 'AG-26-89',
      testType: 'Basic',
      status: 'pending'
    },
    {
      id: 31,
      img: 'imagebasedanalysis',
      name: 'Salman',
      sampleCode: 'AG-16-99',
      testType: 'Advance',
      status: 'active'
    },
    {
      id: 32,
      img: 'imagebasedanalysis',
      name: 'Ali',
      sampleCode: 'AG-18-86',
      testType: 'Advance',
      status: 'pending'
    },
    {
      id: 33,
      img: 'imagebasedanalysis',
      name: 'Farhan',
      sampleCode: 'AG-26-89',
      testType: 'Basic',
      status: 'active'
    },
    {
      id: 34,
      img: 'imagebasedanalysis',
      name: 'Farhan',
      sampleCode: 'AG-26-89',
      testType: 'Basic',
      status: 'pending'
    },
    {
      id: 35,
      img: 'imagebasedanalysis',
      name: 'Farhan',
      sampleCode: 'AG-26-89',
      testType: 'Basic',
      status: 'active'
    },
    {
      id: 36,
      img: 'imagebasedanalysis',
      name: 'Farhan',
      sampleCode: 'AG-26-89',
      testType: 'Basic',
      status: 'pending'
    },
    {
      id: 37,
      img: 'imagebasedanalysis',
      name: 'Farhan',
      sampleCode: 'AG-26-89',
      testType: 'Basic',
      status: 'pending'
    },
    {
      id: 38,
      img: 'imagebasedanalysis',
      name: 'Farhan',
      sampleCode: 'AG-26-89',
      testType: 'Basic',
      status: 'active'
    },
    {
      id: 39,
      img: 'imagebasedanalysis',
      name: 'Farhan',
      sampleCode: 'AG-26-89',
      testType: 'Basic',
      status: 'active'
    },
    {
      id: 40,
      img: 'imagebasedanalysis',
      name: 'Farhan',
      sampleCode: 'AG-26-89',
      testType: 'Basic',
      status: 'pending'
    },
    {
      id: 41,
      img: 'imagebasedanalysis',
      name: 'Salman',
      sampleCode: 'AG-16-99',
      testType: 'Advance',
      status: 'active'
    },
    {
      id: 42,
      img: 'imagebasedanalysis',
      name: 'Ali',
      sampleCode: 'AG-18-86',
      testType: 'Advance',
      status: 'pending'
    },
    {
      id: 43,
      img: 'imagebasedanalysis',
      name: 'Farhan',
      sampleCode: 'AG-26-89',
      testType: 'Basic',
      status: 'active'
    },
    {
      id: 44,
      img: 'imagebasedanalysis',
      name: 'Farhan',
      sampleCode: 'AG-26-89',
      testType: 'Basic',
      status: 'pending'
    },
    {
      id: 45,
      img: 'imagebasedanalysis',
      name: 'Farhan',
      sampleCode: 'AG-26-89',
      testType: 'Basic',
      status: 'active'
    },
    {
      id: 46,
      img: 'imagebasedanalysis',
      name: 'Farhan',
      sampleCode: 'AG-26-89',
      testType: 'Basic',
      status: 'pending'
    },
    {
      id: 47,
      img: 'imagebasedanalysis',
      name: 'Farhan',
      sampleCode: 'AG-26-89',
      testType: 'Basic',
      status: 'pending'
    },
    {
      id: 48,
      img: 'imagebasedanalysis',
      name: 'Farhan',
      sampleCode: 'AG-26-89',
      testType: 'Basic',
      status: 'active'
    },
    {
      id: 49,
      img: 'imagebasedanalysis',
      name: 'Farhan',
      sampleCode: 'AG-26-89',
      testType: 'Basic',
      status: 'active'
    },
    {
      id: 50,
      img: 'imagebasedanalysis',
      name: 'Farhan',
      sampleCode: 'AG-26-89',
      testType: 'Basic',
      status: 'pending'
    },
  ]

  const [report, setReport] = useState([])


  useEffect(() => {
    getReport().then((res) => {
      setReport(res.data)
    }).catch((err) => {
      console.log(err)
    })
  }, [])




  return (
    <div className="min-h-screen flex justify-center items-center bg-neutral-100 py-4">

      <div className="w-full rounded-md shadow-3xl bg-white max-w-[1100px] flex flex-col items-center h-screen">

        <Image
          src="/textRecordImg.jpg"
          objectFit="contain"
          width={1100}
          height={200}
          className="rounded-t-md z-0"
        />

        <div className="z-50 w-full -mt-20 font-tahoma flex justify-center">
          <div className="w-full flex flex-col items-center">
            <div className="w-[80%] grid grid-cols-4 text-center text-lg text-white font-semibold mb-4">
              <div>Name</div>
              <div>Sample Code</div>
              <div>Test Type</div>
              <div>Status</div>
            </div>

            <div className="w-full flex justify-center h-[81vh] overflow-scroll">
              <div className="w-[80%]">
                {
                  record.map(({ id, name, sampleCode, testType, status }) => (
                    <div key={id} className="grid grid-cols-4 text-sm text-gray-500 text-center bg-white py-4 rounded-md shadow-3xl mb-4">
                      <div>{name}</div>
                      <div>{sampleCode}</div>
                      <div>{testType}</div>
                      <div>{status}</div>
                    </div>
                  ))

                  // report?.map(({ user_id, test_type, testing_id, date }, i) => (
                  //   <div key={i} className="grid grid-cols-4 text-sm text-gray-500 text-center bg-white py-4 rounded-md shadow-3xl mb-4">
                  //     <div>{user_id}</div>
                  //     <div>{test_type}</div>
                  //     <div>{testing_id}</div>
                  //     <div>{date}</div>
                  //   </div>
                  // ))
                }
              </div>
            </div>
          </div>
        </div>

      </div>


    </div >
  )
}