import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { ReactNode } from 'react';


interface SideBarArray {
    icon: ReactNode;
    title: string;
    link: string;
}

interface SideBarProps {
  data: SideBarArray[];
  mainClassName?: string;
  SideBarLogoClassName?: string;
}

const AdminSaidBar: React.FC<SideBarProps> = ({
  data,
  mainClassName,
}) => {
  const router = useRouter();
  const handleItemClick = () => {};


  return (
    <div
      id="scroll-1"
      className={`h-screen fixed  sm:pr-2 flex flex-col  bg-[#F2F3F7]  ${mainClassName}`}
    >
           <div className='text-center py-2'>
            <p className='font-extrabold mt-5 mb-10 text-lg sm:text-lg text-[#092C4C]'>ADMIN</p>
          </div>
      <div
        id="scroll-1"
        className="overflow-y-auto  items-center sm:items-start flex flex-col bg-[#F2F3F7] custom-scrollbar"
      >
        <div className="flex flex-col  bg-[#F2F3F7]">
          <div>

            <div className="w-full text-black flex flex-col items-center sm:items-start px-4 sm:px-4 gap-2 lg:gap-4 text-xs  whitespace-nowrap sm:text-sm lg:text-sm  mt-3 md:mt-5">
            {data.map((item, index) => (
  item.link && (
    <Link
      key={index}
      href={item.link} // Make sure item.link is passed as href
      title={item.title}
      onClick={handleItemClick}
      className={`text-[#092C4C] font-medium flex items-center text-center px-3 lg:pl-3 lg:pr-16 py-1 rounded-lg gap-1 md:gap-3 hover:bg-gray-500 text-[#092C4C]  w-full cursor-pointer ${
        item.link === router.pathname ||
        (router.pathname.startsWith(item.link) &&
          item.link !== '/')
          ? 'bg-gray-500 px-4 w-full'
          : ''
      }`}
    >
      <p className="w-[15px] sm:w-[12px] text-[#092C4C] h-[15px] sm:h-[12px]">
        {item.icon}
      </p>
      <p className="text-sm hidden sm:block">{item.title}</p>
    </Link>
  )
))}
            </div>

            <div className="flex sm:w-full px-4 sm:px-5 sm:border-t mt-40 pb-4">
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminSaidBar;
