import Link from 'next/link'
import React from 'react'
import InvesterTable from '@/component/Invester/InvesterTable';


function index() {

    const investors = [
        {
          id: '1',
          SNo: '1',
          // UserName: 'JohnDoe',
          YourPlane: 'Basic Plan',
          Amount: '1000',
          OrderDate: '2024-05-01',
          Orderexpire: '2024-06-01',
          Status: 'Approved',
        },
        {
          id: '2',
          SNo: '2',
          // UserName: 'JaneDoe',
          YourPlane: 'Premium Plan',
          Amount: '2000',
          OrderDate: '2024-05-02',
          Orderexpire: '2024-06-02',
          Status: 'Approved',
        },
        {
          id: '3',
          SNo: '3',
          // UserName: 'AliceSmith',
          YourPlane: 'Basic Plan',
          Amount: '1500',
          OrderDate: '2024-05-03',
          Orderexpire: '2024-06-03',
          Status: 'Rejected',
        },
        {
          id: '4',
          SNo: '4',
          // UserName: 'BobJohnson',
          YourPlane: 'Premium Plan',
          Amount: '2500',
          OrderDate: '2024-05-04',
          Orderexpire: '2024-06-04',
          Status: 'Expired',
        },
      ];
  return (
    <div className='w-full px-10 py-10'>
        <Link href={'/Invester/home'}>
        <button className='bg-blue-600 text-white px-3 py-2 rounded-md'>Back</button>
        </Link>
        <div className='w-full flex justify-center items-center'>

            <InvesterTable data={investors} handleApprove={function (id: string): void {
                throw new Error('Function not implemented.');
              } } handleReject={function (id: string): void {
                throw new Error('Function not implemented.');
              } } />
        </div>
        
      
    </div>
  )
}

export default index
