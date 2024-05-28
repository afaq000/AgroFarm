import React from 'react';

interface User {
  id: string;
  SNo: string;
//   UserName: string;
  YourPlane: string;
  Amount: string;
  OrderDate: string;
  Orderexpire: string;
//   Email: string;
Status: string;
}

interface Props {
  data: User[];
  handleApprove: (id: string) => void;
  handleReject: (id: string) => void;
}

const InvesterTable: React.FC<Props> = ({ data, handleApprove, handleReject }) => {
  const getStatusStyles = (status: string) => {
    switch (status) {
      case 'Expired':
        return 'bg-[#FFE5EE] text-[#AA0000]';
    //   case 'Pending Approval':
    //     return 'bg-[#FFF8E7] text-[#D5B500]';
      case 'Approved':
        return 'bg-[#E6EFFC] text-[#0764E6]';
      case 'Rejected':
        return 'bg-[#FFCCCC] text-[#FF0000]';
      default:
        return '';
    }
  };

  console.log(data, "")

  return (
    <div className="w-full overflow-x-auto ml-10 sm:ml-14 mt-10">
      <table className="w-full min-w-[500px] ">
        <thead className="w-full">
          <tr className="w-full border-b-[1.5px] pr-12 pl-6 font-medium">
            <th className="py-2 px-3 text-nowrap text-left text-sm font-semibold font-OpenSans leading-6 text-[#092C4C] pl-10">S/No</th>
            {/* <th className="py-2 px-3 text-nowrap text-center text-sm font-semibold font-OpenSans leading-6 text-[#092C4C]">UserName</th> */}
            <th className="py-2 px-3 text-nowrap text-center text-sm font-semibold font-OpenSans leading-6 text-[#092C4C]">YourPlane</th>
            <th className="py-2 px-3 text-nowrap text-center text-sm font-semibold font-OpenSans leading-6 text-[#092C4C]">Amount</th>
            <th className="py-2 px-3 text-nowrap text-center text-sm font-semibold font-OpenSans leading-6 text-[#092C4C]">startDate</th>
            <th className="py-2 px-3 text-nowrap text-center text-sm font-semibold font-OpenSans leading-6 text-[#092C4C]">expireDate</th>
            <th className="py-2 px-3 text-nowrap text-center text-sm font-semibold font-OpenSans leading-6 text-[#092C4C]">status</th>
            {/* <th className="py-2 px-3 text-nowrap text-center text-sm font-semibold font-OpenSans leading-6 text-[#092C4C]">Email</th> */}
            {/* <th className="py-2 px-3 text-nowrap text-center text-sm font-semibold font-OpenSans leading-6 text-[#092C4C]">Action</th> */}
          </tr>
        </thead>
        <tbody>
          {data.map((row) => (
            <tr key={row.id} className="w-full  text-[#092C4C] text-sm font-NotoSans text-nowrap whitespace-nowrap font-semibold rounded-[3px] pr-12 pl-6">
              <td className="py-3 text-left pl-12">{row.SNo}</td>
              {/* <td className="py-3 text-center">{row.UserName}</td> */}
              <td className="py-3 text-center">{row.YourPlane}</td>
              <td className="py-3 text-center ">{row.Amount}</td>
              <td className="py-3 text-center">{row.OrderDate}</td>
              <td className="py-3 text-center">{row.Orderexpire}</td>
              <td className="py-2 text-center">
                  <span
                    className={`inline-block min-w-[80px] cursor-pointer py-1 rounded ${getStatusStyles(row.Status)}`}
                  >
                    {row.Status}
                  </span>
                </td>
              {/* <td className="py-3 text-center">
                <button onClick={() => handleApprove(row.id)} className='bg-green-300 text-[8px] px-2 font-extrabold rounded-sm mr-2'>Approve</button>
                <button onClick={() => handleReject(row.id)} className='bg-red-300 text-[8px] px-2 font-extrabold rounded-sm'>Reject</button>
              </td> */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default InvesterTable;
