//@ts-nocheck
import React, { useState } from 'react'
import { Chat, Home, Task, Finance } from '../../../component/icon/sidebar';
import { Expense, Revenue, Stickies } from '@/component/icon/finance';
import OrderTable from '@/component/Admin/OrderTable';
import Link from 'next/link';
import Layout from '@/component/Buyer/Layout';

function Index() {

     
 

    const handleApprove = (id: string) => {
      // Implement logic to handle the approve action for the given ID
    };
    const data = [
        {
          icon: <Home />,
          title: 'Dashboard',
          link: '/admin/home',
        },
      
        {
          icon: <Finance />,
          title: 'Invester ',
          link: '/admin/invester',
        },
        {
          icon: <Task />,
          title: 'Users',
          link: '/admin/users',
        },
        {
          icon: <Chat />,
          title: 'Order',
          link: '/admin/order',
        },
      ];


      const orders = [
        {
          id: '1',
          SNo: '1',
          UserName: 'JohnDoe',
          ProductName: 'Product 1',
          Amount: '100',
          KG: '2',
          OrderDate: '2024-05-01',
          Email: 'john@example.com',
          Status: 'Pending',
        },
        {
          id: '2',
          SNo: '2',
          UserName: 'JaneDoe',
          ProductName: 'Product 2',
          Amount: '150',
          KG: '3',
          OrderDate: '2024-05-02',
          Email: 'jane@example.com',
          Status: 'Approved',
        },
        // Add more sample data as needed
      ];
    
    
    
    return (
      <Layout>
      <div className='w-full '>
         <div className="w-full h-[500px] bg-[#092C4C] flex flex-col justify-center items-center   lg:flex lg:flex-row ">
          <div className="text-white text-nowrap lg:text-wrap font-bold text-2xl xxs:text-3xl sm:text-4xl w-1/2 flex items-center justify-center px-5">
                <p >YOUR ORDER HISTROY</p>

          </div>

        </div>
       <Link href={'/Buyer/products'}>
        <button className='bg-blue-600 text-white px-3 py-2 rounded-md mt-10 ml-10'>Back</button>
        </Link>
      <div className='w-full flex justify-center items-center px-10 py-20 pr-20'>
        <div className='w-[100%] px-2 sm:px-10'>
     <OrderTable data={orders} handleDelete={function (id: string): void {
              throw new Error('Function not implemented.');
            } }/>
      </div>
      </div>
      </div>
      </Layout>
    );
}

export default Index;



