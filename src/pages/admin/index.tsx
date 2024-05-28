import AdminSaidBar from '@/component/Admin/AdminSaidBar';
import Header from '@/component/Admin/Header'
import React, { useState } from 'react'
import { Chat, Home, Task, Finance } from '../../component/icon/sidebar';
import { Expense, Revenue, Stickies } from '@/component/icon/finance';
import Chart from '@/component/Admin/Chart';

function Index() {

    const timespentChartdata = [
        { day: '1', time: 2 },
        { day: '2', time: 9 },
        { day: '3', time: 4 },
        { day: '4', time: 2 },
        { day: '5', time: 9 },
        { day: '6', time: 4 },
        { day: '7', time: 2 },
        { day: '8', time: 9 },
        { day: '9', time: 4 },
        { day: '10', time: 2 },
        { day: '11', time: 9 },
        { day: '12', time: 4 },
        { day: '01', time: 2 },
        { day: '02', time: 9 },
        { day: '03', time: 4 },
        { day: '04', time: 2 },
        { day: '05', time: 9 },
        { day: '06', time: 4 },
        { day: '07', time: 2 },
        { day: '08', time: 9 },
        { day: '09', time: 3 },
        { day: '10', time: 2 },
        { day: '11', time: 9 },
        { day: '12', time: 4 },
        { day: '13', time: 2 },
        { day: '14', time: 9 },
        { day: '15', time: 4 },
        { day: '16', time: 2 },
        { day: '17', time: 9 },
        { day: '18', time: 4 },
        { day: '19', time: 2 },
        { day: '20', time: 9 },
        { day: '21', time: 4 },
        { day: '22', time: 2 },
        { day: '23', time: 9 },
        { day: '24', time: 4 },
        { day: '25', time: 9 },
        { day: '26', time: 4 },
        { day: '27', time: 2 },
        { day: '28', time: 9 },
        { day: '29', time: 4 },
      ];
    
      const data = [
        {
          icon: <Home />,
          title: 'Dashboard',
          link: '/admin',
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
        {
          icon: <Chat />,
          title: 'Products',
          link: '/admin/products',
        },
      ];
    return (
      <div className='w-full '>
        <Header/>
        <AdminSaidBar
        data={data}
        mainClassName="max-w-[320px] w-24 sm:w-1/4 text-black"
        SideBarLogoClassName={''}
      />
      <div className='w-full flex justify-center items-center px-10 py-10'>
        <div className='w-[22%]'/>
        <div className='w-[80%] sm:w-[78%] ml-10 sm:ml-0 flex flex-col'>
       <div className='w-full sm:flex sm:flex-row flex flex-col justify-center items-center'>
        <div className='w-full py-5 sm:w-[30%] bg-slate-100 border shadow-inner flex flex-col justify-center items-center'>
            <p className='font-bold text-lg flex flex-col items-center justify-center '><Expense />Total Invester</p>
            <p className='font-bold text-lg'>20</p>
        </div>

        <div className='w-full py-5 sm:w-[30%] bg-slate-100 flex flex-col border shadow-inner  justify-center items-center'>
        <p className='font-bold text-sm sm:text-lg flex flex-col items-center justify-center '> {<Revenue />}Revenue</p>
        <p className='font-bold text-lg'>10000</p>
        </div>

        <div className='w-full py-5 sm:w-[30%] bg-slate-100  flex flex-col border shadow-inner  justify-center items-center'>
        <p className='font-bold text-sm sm:text-lg flex flex-col items-center justify-center  '><span className=''><Stickies/></span>Order</p>
        <p className='font-bold text-lg'>30</p>
        </div>
        </div>
        <div className='w-full px-14 mt-5 min-w-[100px] overflow-auto'>
<Chart
            data={timespentChartdata}
            className="!shadow-custom"
          />
          </div>
        

        </div>
       
      </div>
      </div>
    );
}

export default Index;



