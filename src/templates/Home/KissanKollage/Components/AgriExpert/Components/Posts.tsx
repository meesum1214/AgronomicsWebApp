import { Divider, Modal, TextInput } from "@mantine/core"
import Image from 'next/legacy/image';
import { useState } from "react"
import { BsFillShareFill } from "react-icons/bs"
import { FaCommentAlt } from "react-icons/fa"
import { IoSendSharp } from "react-icons/io5"
import {
  FacebookShareButton,
  FacebookIcon,
  PinterestShareButton,
  PinterestIcon,
  TwitterShareButton,
  TwitterIcon,
  WhatsappShareButton,
  WhatsappIcon,
  LinkedinShareButton,
  LinkedinIcon,
  TelegramShareButton,
  TelegramIcon,
  EmailShareButton,
  EmailIcon,
} from 'next-share';
import { name } from "@mapbox/mapbox-gl-draw"
export default ({ image, post, comments }: { image: string, post: string, comments: any }) => {

  const [opened, setOpened] = useState(false);
  const [shareOpened, setShareOpened] = useState(false);

  return (
    <div className='w-full h-[350px] bg-white rounded-md shadow-3xl flex flex-col justify-between'>
      <div className="relative w-full h-[260px]">
        <Image
          src={image}
          layout='fill'
          objectFit='contain'
          className="rounded-t-md"
          priority
        />
      </div>
      <div className="p-3">
        <div className="pb-4">{post}</div>
        <div className="w-full flex justify-between items-center">
          {/* <AiOutlineLike className="cursor-pointer" size={20} /> */}
          <FaCommentAlt className="cursor-pointer" onClick={() => setOpened(true)} />
          <BsFillShareFill className="cursor-pointer" onClick={() => setShareOpened(true)} />
        </div>

      </div>

      {/* Comments Modal */}
      <Modal
        opened={opened}
        onClose={() => setOpened(false)}
        withCloseButton={false}
        centered
        size='lg'
      >
        <div className="w-full">
          <div className="mb-2">COMMENTS</div>
          {
            comments.length > 0 ?
              comments.map(({ id, name, comment }: { id: number, name: string, comment: string }) => (
                <div key={id + 'sdfdsf'}>
                  <div className="font-tahoma flex items-center mb-4">
                    <div className="w-14 h-14 bg-gray-400 text-xl text-gray-700 rounded-full flex justify-center items-center">{name[0]?.toUpperCase()}</div>
                    <div className="pl-4 flex flex-col justify-center">
                      <div className="font-semibold">{name}</div>
                      <div>{comment}</div>
                    </div>
                  </div>

                  <Divider />
                </div>
              ))
              :
              <div className="w-full flex justify-center my-4 text-gray-400">No comments yet!</div>
          }
          <div>
            <TextInput
              placeholder="Enter your comment"
              // label="Full name"
              rightSection={<IoSendSharp size={23} onClick={() => console.log('clicked!')} className='cursor-pointer' />}
            />
          </div>
        </div>
      </Modal>





      <Modal
        opened={shareOpened}
        onClose={() => setShareOpened(false)}
        withCloseButton={false}
        centered
        size='lg'
      >
        <div className="flex flex-col items-center">
          <div className="mb-4 text-gray-500 text-3xl font-tahoma font-semibold">Share on Social Media</div>

          <div className="w-full flex justify-between items-center">
            <FacebookShareButton
              url={'https://github.com/next-share'}
              quote={'next-share is a social share buttons for your next React apps.'}
              hashtag={'#nextshare'}
            >
              <FacebookIcon size={50} round />
            </FacebookShareButton>

            <PinterestShareButton
              url={'https://github.com/next-share'}
              media={'next-share is a social share buttons for your next React apps.'}
            >
              <PinterestIcon size={50} round />
            </PinterestShareButton>

            <TwitterShareButton
              url={'https://github.com/next-share'}
              title={'next-share is a social share buttons for your next React apps.'}
            >
              <TwitterIcon size={50} round />
            </TwitterShareButton>

            <WhatsappShareButton
              url={'https://github.com/next-share'}
              title={'next-share is a social share buttons for your next React apps.'}
              separator=":: "
            >
              <WhatsappIcon size={50} round />
            </WhatsappShareButton>

            <LinkedinShareButton url={'https://github.com/next-share'}>
              <LinkedinIcon size={50} round />
            </LinkedinShareButton>

            <TelegramShareButton
              url={'https://github.com/next-share'}
              title={'next-share is a social share buttons for your next React apps.'}
            >
              <TelegramIcon size={50} round />
            </TelegramShareButton>

            <EmailShareButton
              url={'https://github.com/next-share'}
              subject={'Next Share'}
              body="body"
            >
              <EmailIcon size={50} round />
            </EmailShareButton>
          </div>
        </div>
      </Modal>
    </div>
  )
}