import Image from 'next/legacy/image';
import { useState } from 'react';
import Drawer1 from '../Drawer1';

import { ImFacebook2, ImLinkedin } from 'react-icons/im';
import { FaInstagramSquare, FaTwitterSquare } from 'react-icons/fa';
import ListItems from './ListItems';
import { useRouter } from 'next/router';

export default () => {

  const [opened, setOpened] = useState(false);
  const router = useRouter();

  return (
    <footer className="text-gray-600 bg-gray-800 flex flex-col items-center z-50">
      <div className="max-w-[1100px] py-7 md:px-0 px-10 w-full flex flex-col items-center">

        <div onClick={() => router.push('/home')} className='cursor-pointer'>
          <Image
            src="/Agronomics-logo.png"
            width={288}
            height={96}
            alt="logo"
            priority
            className='cursor-pointer w-auto h-auto'
          />
        </div>

        <ListItems />

      </div>

      <Drawer1 opened={opened} setOpened={setOpened} />

      <div className='bg-gray-300 w-full flex justify-center py-4 px-10'>
        <div className="w-full max-w-[1100px] flex justify-between">
          <p className="text-gray-500 text-sm text-center sm:text-left">© 2022 All Rights Reserved</p>
          <div className='grid grid-cols-4 gap-4'>
            <ImFacebook2 size={25} className='cursor-pointer' />
            <a href="https://twitter.com/agronomics_pk" target="_blank"><FaTwitterSquare size={27} className='cursor-pointer' /></a>
            <a href="https://www.instagram.com/agronomics_pk/?igshid=YmMyMTA2M2Y%3D" target="_blank"><FaInstagramSquare size={25} className='cursor-pointer' /></a>
            <a href="https://www.linkedin.com/company/agronomics-private-limited/" target="_blank"><ImLinkedin size={25} className='cursor-pointer' /></a>
          </div>
        </div>
      </div>

    </footer>
  )
};
