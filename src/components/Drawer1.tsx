import { Drawer, ScrollArea, Divider } from '@mantine/core';
import Link from 'next/link';
import { useState } from 'react';
import Btn from './Btn'
import { Footer } from './Footer';

const Drawer1 = (props: any) => {
  // const [drawerOpened, setDrawerOpened] = useState(props.opened);

  const categories = [
    {
      text: 'Home',
      link: '/home'
    },
    {
      text: 'Map',
      link: '/map'

    },
    {
      text: 'Stories',
      link: '/stories'

    },
    {
      text: 'Notifications',
      link: '/notifications'

    }
  ];

  const categories2 = [
    {
      text: 'Location Base Suitability',
      link: '/lbc'
    },
    {
      text: 'Crop Simulator',
      link: '/cropsim'

    },
    {
      text: 'Image Base Analysis',
      link: '/imageanalysis'

    },
    {
      text: 'Soil Analysis',
      link: '/soilanalysis'

    }
  ];

  const agronomics = [
    {
      text: 'Profile',
      link: 'http://agronomics.pk/'
    },
    {
      text: 'About',
      link: 'http://agronomics.pk/about/'

    },
    {
      text: 'Services',
      link: 'http://agronomics.pk/services/'

    },
    {
      text: 'Objectives',
      link: 'http://agronomics.pk/objectives/'

    }
  ];

  return (

    <Drawer
      opened={props.opened}
      onClose={() => props.setOpened(false)}
      size='full'
      className='bg-gray-800'
    >
      <div className="md:w-1/2 w-full h-screen text-center overflow-y-auto">

        <Divider />
        <h2 className="font-extrabold text-white tracking-widest text-lg mb-3 py-2 h-9">Categories</h2>
        <Divider />
        {
          categories.map(({ text, link }) => (
            <div key={text}>
              <Link href={link}>
                <p className='text-white py-2'>{text}</p>
              </Link>
            </div>
          ))
        }

        <Divider />
        <h2 className="font-extrabold text-white tracking-widest text-lg mb-3 py-2 h-9">Another</h2>
        <Divider />
        {
          categories2.map(({ text, link }) => (
            <div key={text}>
              <Link href={link}>
                <p className='text-white py-4'>{text}</p>
              </Link>


            </div>
          ))
        }

        <Divider />
        <h2 className="font-extrabold text-white tracking-widest text-lg mb-3 py-2 h-9">agronomics</h2>
        <Divider />
        {
          agronomics.map(({ text, link }) => (
            <div key={text}>
              <Link href={link}>
                <p className='text-white py-4'>{text}</p>
              </Link>
            </div>
          ))
        }

      </div>

    </Drawer>

  )

}

export default Drawer1