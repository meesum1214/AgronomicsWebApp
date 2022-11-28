import { Drawer, ScrollArea } from '@mantine/core';
import Link from 'next/link';
import { useState } from 'react';
import Btn from './Btn'
import { Footer } from './Footer';

const drawer = () => {
    const [opened, setOpened] = useState(false);

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
    
        },
        {
          text: 'Agripedia',
          link: '/agripedia'
    
        },
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

return(
<Drawer
        opened={opened}
        onClose={() => setOpened(false)}
        size='full'
        className='bg-gray-800'
      >
        <div className="md:w-1/2 w-full h-screen overflow-y-auto">
            <h2 className="font-extrabold text-white tracking-widest text-lg mb-3 text-center">Categories</h2>
            {
              categories.map(({ text, link }) => (
                <div key={text+link}>
                  <Link href={link}>
                    <p className='text-white cursor-pointer text-center py-2'>{text}</p>
                  </Link>
                </div>
              ))
            }
            <h2 className="font-extrabold text-white tracking-widest text-lg mb-3 text-center py-4">Another</h2>
            {
              categories2.map(({ text, link }) => (
                <div key={text+link}>
                  <Link href={link}>
                    <p className='text-white cursor-pointer text-center py-4'>{text}</p>
                  </Link>
                </div>
              ))
            }

            <h2 className="font-extrabold text-white tracking-widest text-lg mb-3 text-center py-4">agronomics</h2>
            {
              agronomics.map(({ text, link }) => (
                <div key={text}>
                  <Link href={link}>
                    <p className='text-white cursor-pointer text-center py-4'>{text}</p>
                  </Link>
                </div>
              ))
            }
        </div>
      </Drawer>
)
};
    export {Drawer};