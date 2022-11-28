import axios from "axios"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
// import Stories from "../../interface/Stories"
import { setStory, useStory } from "../../states/storystate"
import StoryCard from "./StoryCard"

export default () => {

  const route = useRouter()

  const story = useStory()

  const [stories, setStories] = useState([])


  const convertToSlug = (Text: string) => {
    return Text.toLowerCase()
      .replace(/ /g, '-')
      .replace(/[^\w-]+/g, '');
  }

  useEffect(() => {
    axios.get('https://agronomics.pk/blogs/api/v1/blog').then((res) => {
      // console.log(res.data.blogs.rows)
      setStories(res.data.blogs.rows)
    }).catch((err) => {
      console.log(err)
    })

  }, [])



  return (
    <div className="flex flex-col items-center pb-10 min-h-screen my-5">
      <div className="max-w-[1100px] bg-white shadow-3xl rounded-md p-2">

        <div className="flex flex-col items-center w-full">

          <div className="w-full grid grid-cols-3 gap-3 items-center py-8">
            {
              stories.map(({ title, attachement, text }, i) => {

                return (
                  <div key={i} className='w-[349.8px]'>
                    <StoryCard
                      image={attachement.replace('www.greenageservices.pk', 'agronomics.pk')}
                      title={title}
                      text={text}
                      onClick={() => {
                        setStory({ ...story, title, image: attachement, description: text })
                        route.push(`/stories/${convertToSlug(title)}`)
                      }} />
                  </div>
                )
              })
            }
          </div>
        </div>

      </div>
    </div>
  )

}