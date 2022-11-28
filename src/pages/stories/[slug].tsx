import Image from 'next/legacy/image'
import { useRouter } from 'next/router'
import React from 'react'
import Btn from '../../components/Btn'
import { setStory, useStory } from '../../states/storystate'

const slug = () => {
  const story = useStory()
  const router = useRouter()

  if (story.title !== '') {
    return (
      <div className='flex justify-center min-h-screen py-4'>
        <div className="w-full flex flex-col items-center max-w-[1100px]">
          <div className="relative w-full h-[700px]">
            <Image
              src={story.image.replace('www.greenageservices.pk','agronomics.pk')}
              objectFit="contain"
              alt='logo'
              layout='fill'
              className='rounded-lg'
              priority
            />
          </div>
          <div className="text-3xl text-secondary font-tahoma font-semibold mb-4">{story.title}</div>
          <div className="text-justify">{story.description}</div> <br />
          <div className="w-full mt-4 flex justify-end">
            <div className='w-44'>
              <Btn onClick={() => {
                router.push('/stories')
                setStory({ ...story, title: '', image: '', description: '' })
                // console.log(story)
              }} color="bg-secondary" textColor="text-white">Back</Btn>
            </div>
          </div>
        </div>
      </div>
    )
  }
  else {
    router.push('/stories')
    return <div className='hidden'></div>
  }
}

export default slug