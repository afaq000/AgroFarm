//@ts-nocheck
import AdminSaidBar from '@/component/Admin/AdminSaidBar';
import Header from '@/component/Admin/Header'
import React, { useState } from 'react'
import { Chat, Home, Task, Finance } from '../../../component/icon/sidebar';
import OrderTable from '@/component/Admin/OrderTable';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Index() {
  const [Delete, setDelete]=useState(false)


     
 

  const handleDelete = (id) => {
    // Simulate a deletion operation
    // You can add your deletion logic here

    // Show the toast message
    toast.success('Your product is successfully deleted');
  };
  const handleUpdate = (id) => {
    // Simulate a deletion operation
    // You can add your deletion logic here

    // Show the toast message
    toast.success('Your product is successfully Aprroved');
  };
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
      <div className='w-full '>
        <Header/>
        <AdminSaidBar
        data={data}
        mainClassName="max-w-[320px] w-24 sm:w-1/6 text-black"
        SideBarLogoClassName={''}
      />
      <div className='w-full flex justify-center items-center px-10 '>
        <div className='w-[80%] px-2 sm:px-10'>
     <OrderTable data={orders} handleDelete={handleDelete} handleUpdate={handleUpdate}/>
      </div>
      </div>
      <ToastContainer/>
      </div>
    );
}

export default Index;



