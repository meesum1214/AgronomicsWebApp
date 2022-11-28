import Image from 'next/legacy/image'
import Link from 'next/link'
import React, { useState } from 'react'
import navigation from '../../config/navigation'
import Btn from '../Btn'
import { Burger, Modal, Drawer, HoverCard, Divider } from '@mantine/core';
import { useRouter } from 'next/router'
import AppModal from './AppModal'
import { CgProfile } from "react-icons/cg";
import { FiLogOut } from "react-icons/fi";
import { LoadingAG } from '../Loading'

const NavBar = () => {


  const path = useRouter()?.pathname
  const [opened, setOpened] = useState(false);
  const [appModalOpened, setAppModalOpened] = useState(false);

  const router = useRouter()

  return (
    <nav className='flex justify-center bg-white shadow-3xl'>

   

      <div className='flex items-center justify-around h-20 w-full max-w-[1100px]'>


        <Link href='/home'>
          {/* <div className='relative w-44 h-14'> */}
            <Image
              src="/Agronomics-logo.png"
              width={176}
              height={56}
              alt='Agronomics-logo'
              className='cursor-pointer w-auto h-auto'
              priority
            />
          {/* </div> */}
        </Link>
        <div className='md:items-center md:justify-center w-4/6 md:flex hidden'>
          <div className='flex justify-between text-primary font-bold font-tahoma w-2/6 text-base md:w-2/4'>
            {
              navigation.map(({ id, title, src }) => (
                <Link href={src} key={id}>
                  <div className={`${path == src && 'border-b-primary border-b-4 '} py-1 cursor-pointer hover:text-secondary md:m-2 transition-all text-base`}>{title}</div>
                </Link>
              ))
            }
          </div>
        </div>

        <div className='md:block hidden md:mr-6 w-44'>
          <Btn onClick={() => setAppModalOpened(true)} color='bg-secondary' textColor='text-white'>Get Mobile App</Btn>
        </div>
        <HoverCard width={280} shadow="md">
          <HoverCard.Target>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 md:block hidden" fill="#cc9441" viewBox="0 0 24 24" stroke="#cc9441" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          </HoverCard.Target>
          <HoverCard.Dropdown>
            <div className='font-tahoma'>
              <div className='flex items-center'>
                <CgProfile size={20} />
                <div className='pl-2'>Your Profile</div>
              </div>
              <Divider className='my-4' />
              <Btn
                color="bg-secondary"
                textColor="text-white"
                onClick={() => {
                  LoadingAG(true)
                  localStorage.removeItem('ag-token-7878p')
                  localStorage.removeItem('ag-user-app-web')
                  setTimeout(() => {
                    router.reload()
                    LoadingAG(false)
                  }, 1200)
                }}
                rightIcon={<FiLogOut size={15} />}
              >Logout</Btn>
            </div>
          </HoverCard.Dropdown>
        </HoverCard>

        <div className='block items-center md:hidden'>
          <Burger
            color="#cc9441"
            opened={opened}
            size={23}
            onClick={() => setOpened((o) => !o)}
          />
        </div>
      </div>


      <Drawer
        opened={opened}
        onClose={() => setOpened(false)}
        size='full'
        className='bg-muted'
      >
        <div className='flex flex-col justify-between items-center bg-white shadow-3xl' style={{ height: '418px', borderRadius: '0px 0px 30px 30px' }}>
          <div className='flex flex-col items-center w-full border-t-2 font-semibold text-sm font-tahoma'>
            {
              navigation.map(({ id, title, src }) => (
                <Link href={src} key={id}>
                  <div className='flex items-center cursor-pointer text-primary w-full h-16 hover:text-accent border-b-2 pl-4'>{title}</div>
                </Link>
              ))
            }
            <button className='text-black flex items-center w-full h-16 pl-4 border-gray border-b-2'>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="#cc9441" viewBox="0 0 24 24" stroke="#cc9441" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              <div className='text-primary text-sm ml-2'>Logout</div>
            </button>
          </div>
          
          <div className='mb-6 w-44'>
            <Btn onClick={() => setAppModalOpened(true)} color='bg-secondary' textColor='text-white'>Get Mobile App</Btn>
          </div>

        </div>
      </Drawer>


      <Modal
        opened={appModalOpened}
        onClose={() => setAppModalOpened(false)}
        size='75vw'
        centered
        withCloseButton={false}
      >
        <AppModal />
      </Modal>


    </nav>
  )
}

export default NavBar