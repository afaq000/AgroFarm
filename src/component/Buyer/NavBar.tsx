import Link from 'next/link';
import { useState } from 'react';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <div className="w-full flex fixed z-50 items-center justify-center bg-[#465975] py-2">
      <div className="w-[95%] md:w-full flex px-2 md:px-10">
        <div className="w-full flex items-center justify-between">
          <div className="w-[20%] sm:w-[40%] md:w-1/2 text-white flex items-center font-extrabold">
            <span className=' text-2xl font-bold py-2 '>
            𝒜𝒢𝑅𝒪𝐹𝑅𝒜𝑀
      </span>
          </div>
          <div className="hidden md:flex md:md:w-[60%] lg:w-[40%]">
            <div className="w-full flex justify-end">
              <div className="w-full  flex justify-between text-white font-medium">
                <Link className="teal-link borderYtoX" href={"/"}>Home</Link>
                <Link className="teal-link borderYtoX" href={"/Buyer/products"}>Product</Link>
                <Link className="teal-link borderYtoX" href={"/Buyer/histroy"}>Order</Link>

                <Link className="teal-link borderYtoX" href={"/Buyer/contactus"}>Contact</Link>
                <Link className="teal-link borderYtoX" href={"/Buyer/login"}>Logout</Link>
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
                <Link className="teal-link borderYtoX hover:underline" href={"/Buyer/home"}>Order</Link>

                <Link className="teal-link borderYtoX hover:underline" href={"/Buyer/home"}>Contact</Link>
                <Link className="teal-link borderYtoX hover:underline" href={"/Buyer/login"}>Logout</Link>
          </div>
        </div>
      )}
    </div>
  );
}

export default Navbar;




