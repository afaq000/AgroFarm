//@ts-nocheck
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AdminSaidBar from '@/component/Admin/AdminSaidBar';
import Header from '@/component/Admin/Header';
import { Chat, Home, Task, Finance, Attendance, Rewards } from '../../../component/icon/sidebar';
import UsersTable from '@/component/Admin/UserTable';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BoxIcon } from '@/component/icon';

function Index() {

  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('http://localhost:9000/getAlluser');
        setUsers(response.data);
        console.log(response, "afaq");
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };
  
    fetchUsers();
  }, []);

  const handleDelete = async (id: any) => {
    try {
      const response = await axios.delete(`http://localhost:9000/deleteuser/${id}`);
      console.log(response.data.message);
      setUsers(users.filter(user => user._id !== id));
      toast.success(response?.data?.message)
    } catch (error) {
      console.error('Error deleting user:', error);
      toast.error("Error deleting user")
    }
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

  return (
    <div className='w-full'>
      <Header />
      <AdminSaidBar data={data} mainClassName="max-w-[320px] w-24 sm:w-1/6 text-black" SideBarLogoClassName={''} />
      <div className='w-full flex justify-center items-center px-10 '>
        <div className='w-[80%] px-2 sm:px-10'>
        <p className='px-14 mt-10 text-[#092C4C] font-extrabold text-2xl'>USERS</p>
          <UsersTable data={users} handleDelete={handleDelete}  />
        </div>
      </div>
      <ToastContainer/>
    </div>
  );
}

export default Index;




