import AdminSaidBar from '@/component/Admin/AdminSaidBar';
import Header from '@/component/Admin/Header'
import React, { useEffect, useState } from 'react'
import { Chat, Home, Task, Finance, Attendance, Rewards } from '../../../component/icon/sidebar';
import InvesterTable from '@/component/Admin/InvesterTable';
import axios from 'axios';
import { BoxIcon } from '@/component/icon';

function Index() {
    const handleApprove = (id: string) => {
      // Implement logic to handle the approve action for the given ID
    };
    const data = [
      {
        icon: <Home />,
        title: 'Dashboard',
        link: '/admin/dashboard',
      },
      {
        icon: <Finance />,
        title: 'investor',
        link: '/admin/investor',
      },
      {
        icon: <Task />,
        title: 'Users',
        link: '/admin/users',
      },
      {
        icon: <BoxIcon />,
        title: 'Order',
        link: '/admin/order',
      },
      {
        icon: <Attendance />,
        title: 'Products',
        link: '/admin/products',
      },
      {
        icon: <Rewards />,
        title: 'Plans',
        link: '/admin/plans',
    },
    ];
      const [investors, setInvestors] = useState([]);

      useEffect(() => {
       axios.get('http://localhost:9000/purchases')
           .then(response => {
               setInvestors(response.data);
               console.log(response ,"afaq")
           })
           .catch(error => {
               console.error('Error fetching data:', error);
           });
   }, []);
    
  
    return (
      <div className='w-full '>
        <Header/>
        <AdminSaidBar
        data={data}
        mainClassName="max-w-[320px] w-24 sm:w-1/6 text-black"
        SideBarLogoClassName={''}
      />
      <div className='w-full flex justify-center items-center px-10 '>
        <div className='w-[80%] px-2 sm:px-5'>
          <p className='px-14 mt-10 text-[#092C4C] font-extrabold text-2xl'>INVESTOR</p>
        <InvesterTable data={investors} handleApprove={()=>{}} handleReject={()=>{}}
               />
      </div>
      </div>
      </div>
    );
}
export default Index;



