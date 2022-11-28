import { Carousel } from '@mantine/carousel';
import Image from 'next/legacy/image';

export default () => {

    const img = [
        { src: '/banners-01.png' },
        { src: '/banners-02.png' },
        { src: '/banners-03.png' },
        { src: '/banners-04.png' },
    ]


    return (
        <Carousel slideSize="100%" className=" h-[380px]"  slideGap="xs" loop>
            {
                img.map(({ src }) => (
                    <Carousel.Slide key={src} className='rounded-xl'>
                        <div className="relative w-screen mb-4 shadow-2sm h-[380px]">
                            <Image
                                src={src}
                                alt='logo'
                                layout='fill'
                                objectFit='contain'
                                className='cursor-pointer'
                                priority
                            />
                        </div>
                    </Carousel.Slide>
                ))
            }
        </Carousel>
    )
}