import React from 'react';

interface User {
  id: string;
  SNo: string;
  UserName: string;
  ProductName: string;
  Amount: string;
  KG: string;
  OrderDate: string;
  Email: string;
  Status: string;
}

interface Props {
  data: User[];
  handleApprove: (id: string) => void;
  handleReject: (id: string) => void;
}

const BuyerTable: React.FC<Props> = ({ data, handleApprove, handleReject }) => {
  return (
    <div className="w-full overflow-x-auto ml-10 sm:ml-14 mt-10">
      <table className="w-full min-w-[500px] ">
        <thead className="w-full">
          <tr className="w-full border-b-[1.5px] pr-12 pl-6 font-medium">
            <th className="py-2 px-3 text-nowrap text-left text-sm font-semibold font-OpenSans leading-6 text-[#092C4C] pl-10">S/No</th>
            <th className="py-2 px-3 text-nowrap text-center text-sm font-semibold font-OpenSans leading-6 text-[#092C4C]">UserName</th>
            <th className="py-2 px-3 text-nowrap text-center text-sm font-semibold font-OpenSans leading-6 text-[#092C4C]">ProductName</th>
            <th className="py-2 px-3 text-nowrap text-center text-sm font-semibold font-OpenSans leading-6 text-[#092C4C]">Amount</th>
            <th className="py-2 px-3 text-nowrap text-center text-sm font-semibold font-OpenSans leading-6 text-[#092C4C]">KG</th>
            <th className="py-2 px-3 text-nowrap text-center text-sm font-semibold font-OpenSans leading-6 text-[#092C4C]">Order Date</th>
            <th className="py-2 px-3 text-nowrap text-center text-sm font-semibold font-OpenSans leading-6 text-[#092C4C]">Status</th>
            <th className="py-2 px-3 text-nowrap text-center text-sm font-semibold font-OpenSans leading-6 text-[#092C4C]">Email</th>
            <th className="py-2 px-3 text-nowrap text-center text-sm font-semibold font-OpenSans leading-6 text-[#092C4C]">Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row) => (
            <tr key={row.id} className="w-full  text-[#092C4C] text-sm font-NotoSans text-nowrap whitespace-nowrap font-semibold rounded-[3px] pr-12 pl-6">
              <td className="py-3 text-left pl-12">{row.SNo}</td>
              <td className="py-3 text-center">{row.UserName}</td>
              <td className="py-3 text-center">{row.ProductName}</td>
              <td className="py-3 text-center ">{row.Amount}</td>
              <td className="py-3 text-center">{row.KG}</td>
              <td className="py-3 text-center">{row.OrderDate}</td>
              <td className="py-3 px-3 text-center ">{row.Status}</td>
              <td className="py-3 px-3 text-center">{row.Email}</td>
              <td className="py-3 text-center">
                <button onClick={() => handleApprove(row.id)} className='bg-green-300 text-[8px] px-2 font-extrabold rounded-sm mr-2'>Approve</button>
                <button onClick={() => handleReject(row.id)} className='bg-red-300 text-[8px] px-2 font-extrabold rounded-sm'>Reject</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BuyerTable;
