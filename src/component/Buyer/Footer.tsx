import React from 'react'
import { FaSquareFacebook } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { FaSquareTwitter } from "react-icons/fa6";
import { FaSquareYoutube } from "react-icons/fa6";
import { TbBrandTiktok } from "react-icons/tb";
import Link from 'next/link';
import Image from 'next/image';
interface Props {
  className: string;
}
function Footer({ className }: Props) {
  return (
    <>  <div className={`w-full flex justify-center items-center bg-[#465975] sticky bottom-0 left-0 px-0 xxs:px-4 ${className}`}>
      <div className='w-full sm:flex sm:flex-row flex-col md:py-4 justify-between items-center text-base sm:text-[10px] md:text-sm lg:text-base'>
        <div className='hidden sm:flex w-full py-4 sm:py-0 gap-7 sm:gap-0 sm:w-1/6 flex justify-center items-center sm:justify-between'>
          <Link href={''}><FaSquareFacebook className=' text-white m-x-1' /></Link>
          <Link href={''}><FaInstagramSquare className='text-white' /></Link>
          <Link href={''}><FaSquareTwitter className='text-white' /></Link>
          <Link href={''}><FaSquareYoutube className='text-white' /></Link>
          <Link href={''}><TbBrandTiktok className='text-white' /></Link>
        </div>
        <div className='w-full sm:hidden flex justify-center '>
          <Link href={''}>
            <p className='py-4 sm:py-0 sm:text-base md:text-lg font-bold'> ℝ𝕆𝕐𝔸𝕃𝔸𝔾ℝ𝕆𝔽𝔸ℝ𝕄</p>
          </Link>

        </div>
        <ul className="flex justify-center items-center text-nowrap mb-6 text-[8px] xxs:text-[12px] sm:text-xs lg:text-sm font-medium text-white sm:mb-0 dark:text-gray-400">
          <li className='pl-6 sm:pl-0 md:px-[8px] lg:px-[50px] '>
            <Link href="/" className="hover:underline font-bold me-2 md:me-6 pl-4 ">©  ℝ𝕆𝕐𝔸𝕃𝔸𝔾ℝ𝕆𝔽𝔸ℝ𝕄</Link>
          </li>
          <li className='flex'>
            <div className='w-2 sm:w-3 lg:w-10 block sm:hidden'>|</div>
            <Link href="/" className="hover:underline font-extrabold me-2 md:me-6">
              Home</Link>
          </li>
          <li className='flex'>
            <div className='w-2 sm:w-3 lg:w-10'>|</div>
            <Link href="/Buyer/products" className="hover:underline font-extrabold me-2 md:me-6">Prodcuts</Link>
          </li>
          <li className='flex'>

          </li>
          <li className='flex'>
            <div className='w-2 sm:w-3 lg:w-10'>|</div>
            <Link href="/Buyer/contact" className="hover:underline font-extrabold me-2 md:me-6">Contact us</Link>
          </li>

        </ul>
        <div className='hidden sm:flex w-full sm:w-1/5 flex justify-center sm:justify-end text-white'>
          <Link href={'/'}>
            <p className='py-4 sm:py-0 sm:text-base md:text-lg  font-bold '> ℝ𝕆𝕐𝔸𝕃𝔸𝔾ℝ𝕆𝔽𝔸ℝ𝕄</p>
          </Link>
        </div>

        <div className='block sm:hidden sm:flex w-full py-4 sm:py-0 gap-7 sm:gap-0 sm:w-1/6 flex justify-center items-center sm:justify-between'>
          <Link href={''}><FaSquareFacebook className='text-white' /></Link>
          <Link href={''}><FaInstagramSquare className='text-white' /></Link>
          <Link href={''}><FaSquareTwitter className='text-white' /></Link>
          <Link href={''}><FaSquareYoutube className='text-white' /></Link>
          <Link href={''}><TbBrandTiktok className='text-white' /></Link>
        </div>
      </div>
    </div>
      <div className='w-full text-center text-xs flex justify-center text-white bg-[#465975]'>
        <p>© Copyright 2012 - 2024 All rights reserved Royal Agro Farm</p>
      </div>

    </>

  )
}

export default Footer;