import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const router=useRouter()

 const hanldeclick=()=>{
  router.push("/")
 }

 const [isLoggedIn, setIsLoggedIn] = useState(false);

 useEffect(() => {
   // Check if user is logged in
   setIsLoggedIn(localStorage.getItem('token') != null);
 }, []);


 const handleAuthClick = () => {
   if (isLoggedIn) {
     // Handle logout
     localStorage.removeItem('token');
     localStorage.removeItem('userId'); // Assuming userId is also stored
     setIsLoggedIn(false);
     router.push('/Buyer/login');
   } else {
     // Redirect to login
     router.push('/Buyer/login');
   }
 };

  return (
    <div className="w-full flex fixed z-50 items-center justify-center bg-[#465975] py-2">
      <div className="w-[95%] md:w-full flex px-2 md:px-10">
        <div className="w-full flex items-center justify-between">
          <div className="w-[20%] sm:w-[40%] md:w-[40%] text-white flex items-center font-extrabold">
            <span className=' text-2xl font-bold py-2 cursor-pointer' onClick={hanldeclick}>
            𝒜𝒢𝑅𝒪𝐹𝑅𝒜𝑀
      </span>
          </div>
          <div className="hidden md:flex md:w-[60%] lg:w-[60%]">
            <div className="w-full flex justify-end">
              <div className="w-full  flex justify-between text-white font-medium">
                <div className='w-1/2 flex justify-between'>
                <Link className="teal-link borderYtoX" href={"/"}>Home</Link>
                <Link className="teal-link borderYtoX" href={"/Buyer/products"}>Product</Link>
                
                <Link className="teal-link borderYtoX" href={"/Buyer/contactus"}>Contact</Link>
                </div>
                {/* <Link className="teal-link borderYtoX" href={"/Buyer/histroy"}>Order</Link> */}
<div className='w-[30%] flex justify-end' >
                {/* <Link className="teal-link borderYtoX" href={"/Buyer/login"}>Logout</Link> */}
                <button
        onClick={handleAuthClick}
        className="px-4 md:px-8 sm:py-1 text-white bg-[#092C4C] rounded-md cursor-pointer"
      >
        {isLoggedIn ? "Logout" : "Login"}
      </button>
                </div>
              </div>
            </div>
          </div>
          <div className="md:hidden">
            {!isOpen ? (
              <button className="text-white" onClick={toggleMenu}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              </button>
            ) : (
              <button className="text-white" onClick={closeMenu}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            )}
          </div>
        </div>
      </div>
      {/* Dropdown menu */}
      {isOpen && (
        <div className="md:hidden  absolute w-full text-[#092C4C] bg-white border-[5px] border-[#092C4C] font-bold py-2 mt-44">
          <div className="flex flex-col items-center">
          <Link className="teal-link borderYtoX hover:underline" href={"/"}>Home</Link>
                <Link className="teal-link borderYtoX hover:underline" href={"/Buyer/products"}>Product</Link>
                {/* <Link className="teal-link borderYtoX hover:underline" href={"/Buyer/home"}>Order</Link> */}

                <Link className="teal-link borderYtoX hover:underline" href={"/Buyer/contactus"}>Contact</Link>
                <Link className="teal-link borderYtoX hover:underline" onClick={handleAuthClick} href={''}>
                  {/* login */}
                  {isLoggedIn ? "Logout" : "Login"}

                </Link>
          </div>
        </div>
      )}
    </div>
  );
}

export default Navbar;




