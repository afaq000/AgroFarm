//@ts-nocheck
import React from 'react';
import { MdDeleteOutline } from "react-icons/md";

interface User {
  id: string;
  SNo: string;
  UserName: string;
  Email: string;
}

interface Props {
  data: User[];
  handleDelete: (id: string) => void;
}

const UsersTable: React.FC<Props> = ({ data, handleDelete }) => {
  return (
    <div className="w-full overflow-x-auto ml-10 sm:ml-14 mt-10">
      <table className="w-full min-w-[500px] ">
        <thead className="w-full">
          <tr className="w-full border-b-[1.5px] pr-12 pl-6 font-medium">
            <th className="py-1 text-nowrap text-left text-sm font-semibold font-OpenSans leading-6 text-[#092C4C] pl-10">S/No</th>
            <th className="py-1 text-nowrap text-center text-sm font-semibold font-OpenSans leading-6 text-[#092C4C]">UserName</th>
            <th className="py-1 text-nowrap text-center text-sm font-semibold font-OpenSans leading-6 text-[#092C4C]">Email</th>
            <th className="py-1 text-nowrap text-center text-sm font-semibold font-OpenSans leading-6 text-[#092C4C]">Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row,index) => (
            <tr key={row.id} className="w-full  text-[#092C4C] text-sm font-NotoSans text-nowrap whitespace-nowrap font-semibold rounded-[3px] pr-12 pl-6">
              <td className="text-left pl-12">{index+1}</td>
              <td className="text-center">{row.name}</td>
              <td className="text-center">{row.email}</td>
              <td className="text-center">
                <button onClick={() => handleDelete(row._id)} className=' text-[8px] px-2 font-extrabold rounded-sm'><MdDeleteOutline className='w-[20px] h-[50px]'/></button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UsersTable;
