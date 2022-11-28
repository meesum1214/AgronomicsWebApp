import { Select } from "@mantine/core"
import { useEffect, useState } from "react"
import { getCategories, getCrops, getQuestions } from "../../../API/add"
import parse from 'html-react-parser';

export default () => {

  const [crops, setCrops] = useState([])
  const [category, setCategory] = useState([])

  const [question, setQuestion] = useState([])

  const [selectedInfo, setSelectedInfo] = useState({
    crop: "",
    cat_id: ""
  })

  useEffect(() => {

    getCrops().then((data) => {
      // console.log(data)
      setCrops(data)
    })

  }, [])


  useEffect(() => {
    if (selectedInfo.cat_id) {
      getQuestions(selectedInfo).then((data) => {
        // console.log(data)
        setQuestion(data)
      })
    }
  }, [selectedInfo])


  return (
    <div className="min-h-screen flex justify-center py-4">
      <div className="min-w-[1100px] bg-white rounded-md shadow-3xl p-4">

        <div className="grid grid-cols-2 gap-4 min-w-[1100px] mb-4">
          <Select
            label="Select Crop"
            placeholder="Pick one"
            data={crops?.map(({ crop }) => ({ label: crop, value: crop }))}
            styles={(theme) => ({
              item: {
                // applies styles to selected item
                '&[data-selected]': {
                  '&, &:hover': {
                    backgroundColor: theme.colors.dark[0],
                    color: theme.colors.dark,
                  },
                },

                // applies styles to hovered item (with mouse or keyboard)
                '&[data-hovered]': {},
              },
            })}

            onChange={(value) => {
              getCategories(value as string).then((data) => {
                // console.log(data)
                setSelectedInfo({ ...selectedInfo, crop: value as string })
                setCategory(data)
              })
            }}
          />

          <Select
            label="Select Category"
            placeholder="Pick one"
            data={category?.map((crop, i) => ({ label: crop.category, value: crop.id }))}
            styles={(theme) => ({
              item: {
                // applies styles to selected item
                '&[data-selected]': {
                  '&, &:hover': {
                    backgroundColor: theme.colors.dark[0],
                    color: theme.colors.dark,
                  },
                },

                // applies styles to hovered item (with mouse or keyboard)
                '&[data-hovered]': {},
              },
            })}
            onChange={(value) => {
              setSelectedInfo({ ...selectedInfo, cat_id: value as string })
            }}

          />
        </div>


        {/* create a card to show many question and aswers in detail tag of html */}
        <div className="max-w-[1100px]">
          {
            selectedInfo.cat_id ?
              question?.map((q, i) => (
                <div key={i} className="bg-gray-100 rounded-md p-4 mb-4">
                  <h1 className="text-xl font-bold text-right">{parse(q.urdu_question)}</h1>
                  <div className="text-gray-500 text-right font-semibold">{parse(q.urdu_answer)}</div>
                </div>
              ))
              :
              <div className="font-bold text-gray-500 flex justify-center items-center h-[60vh]">Please Select Crop and Category!</div>
          }
        </div>
      </div>
    </div>
  )
}