import Image from 'next/image';
import React, { useEffect, useState } from 'react';
// import Button from '../Button';
import { useRouter } from 'next/router';

const Header = () => {
  // const router = useRouter();




  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const router = useRouter();

  useEffect(() => {
    // Check if user is logged in
    setIsLoggedIn(localStorage.getItem('role') != null);
  }, []);


  const handleAuthClick = () => {
    if (isLoggedIn) {
      // Handle logout
      localStorage.removeItem('role');
      localStorage.removeItem('userId'); // Assuming userId is also stored
      setIsLoggedIn(false);
      router.push('/Invester/login');
    } else {
      // Redirect to login
      router.push('/Invester/login');
    }
  };
  return (
    <div className="flex  w-full justify-between px-3 md:px-8 sm:py-1  shadow-lg sticky top-0 z-20 bg-white items-center">
      <span className='text-[#092C4C] text-2xl font-bold py-2'>
      𝒜𝒢𝑅𝒪𝐹𝑅𝒜𝑀      </span>
      {/* <button
        onClick={() => router?.push('/Invester/investerHistroy')}
        className=" px-4 md:px-8  sm:py-1 text-white bg-[#092C4C] rounded-md cursor-pointer"
      >
       your plan History
      </button> */}
      {/* <button
        onClick={() => router?.push('/Invester/login')}
        className=" px-4 md:px-8  sm:py-1 text-white bg-[#092C4C] rounded-md cursor-pointer"
      >
        Login
      </button> */}
       <button
        onClick={handleAuthClick}
        className="px-4 md:px-8 sm:py-1 text-white bg-[#092C4C] rounded-md cursor-pointer"
      >
        {isLoggedIn ? "Logout" : "Login"}
      </button>

    
    </div>
  );
};

export default Header;
