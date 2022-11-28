import Link from "next/link";
import categories, { another, agronomics, contact } from '../../../interface/footer';

export default () => (
  <div className="w-full flex md:flex-row md:justify-between flex-col">

    <div className="w-full flex flex-col md:items-start items-center pt-6">
      <h2 className="md:w-full font-extrabold text-white tracking-widest text-lg md:text-center mb-3">CATEGORIES</h2>
      {
        categories.map(({ id, text, link }) => (
          <div key={id} className='md:w-full md:text-center text-white text-center cursor-pointer transition-all hover:text-base hover:text-secondary my-3'>
            <Link href={link}>
              {text}
            </Link>
          </div>
        ))
      }
    </div>

    <div className="w-full flex flex-col md:items-start items-center pt-6">
      <h2 className="md:w-full md:text-center font-extrabold text-white tracking-widest text-lg mb-3">ANOTHER</h2>
      {
        another.map(({ id, text, link }) => (
          <div key={id} className='md:w-full md:text-center text-white cursor-pointer transition-all hover:text-base hover:text-secondary my-3'>
            <Link href={link}>
              <div >{text}</div>
            </Link>
          </div>
        ))
      }
    </div>

    <div className=" w-full flex flex-col md:items-start items-center pt-6">
      <h2 className="font-extrabold text-white tracking-widest text-lg mb-3 md:w-full md:text-center">AGRONOMICS</h2>
      {
        agronomics.map(({ id, text, link }) => (
          <div key={id} className='md:w-full md:text-center text-white cursor-pointer transition-all hover:text-base hover:text-secondary my-3'>
            <a href={link} target='_blank'>
              <div>{text}</div>
            </a>
          </div>
        ))
      }
    </div>

    <div className="flex flex-col md:items-start items-center pt-6">
      <h2 className="font-extrabold text-white tracking-widest text-lg mb-3 md:w-full md:text-center">Contact Us</h2>
      {
        contact.map(({ id, text, onClick }) => (

          <div key={id} onClick={onClick} className='md:w-full md:text-center'>
            <div className='text-white text-center py-2 w-[280px] flex justify-center'>{text}</div>
          </div>
        ))
      }
    </div>

  </div>
)