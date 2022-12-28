import Image from 'next/legacy/image'

export default () => (
  <div className='flex justify-center items-center min-h-screen'>
    <Image
      src="/404_page.png"
      alt='404 Page'
      width={700}
      height={700}
    />
  </div>
)