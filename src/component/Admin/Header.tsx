import Image from 'next/image';
import React from 'react';
// import Button from '../Button';
import { useRouter } from 'next/router';

const Header = () => {
  const router = useRouter();
  return (
    <div className="flex  w-full justify-between px-3 md:px-8 sm:py-1  shadow-lg sticky top-0 z-20 bg-white items-center">
      <span className='text-[#092C4C] text-2xl font-bold py-2'>
        G1 Garlic
      </span>
      <button
        onClick={() => router?.push('/admin/login')}
        className=" px-4 md:px-8  sm:py-1 text-white bg-[#092C4C] rounded-md cursor-pointer"
      >
        Login
      </button>
    </div>
  );
};

export default Header;
