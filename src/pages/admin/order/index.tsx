import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AdminSaidBar from '@/component/Admin/AdminSaidBar';
import Header from '@/component/Admin/Header';
import { Chat, Home, Task, Finance } from '../../../component/icon/sidebar';
import moment from 'moment';

function Index() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    async function fetchOrders() {
      try {
        const response = await fetch('http://localhost:9000/orders');
        if (!response.ok) {
          throw new Error('Failed to fetch orders');
        }
        const ordersData = await response.json();
        setOrders(ordersData);
      } catch (error) {
        console.error('Error fetching orders:', error);
        toast.error('Failed to fetch orders');
      }
    }

    fetchOrders();
  }, []); // Empty dependency array ensures the effect runs only once on component mount

  const data = [
    {
      icon: <Home />,
      title: 'Dashboard',
      link: '/admin',
    },
    {
      icon: <Finance />,
      title: 'Investor',
      link: '/admin/investor',
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
    <div className="w-full">
      <Header />
      <AdminSaidBar
        data={data}
        mainClassName="max-w-[320px] w-24 sm:w-1/6 text-black"
        SideBarLogoClassName={''}
      />
      <div className="w-full flex justify-center items-center px-10">
      <div className="w-[80%] overflow-x-auto ml-20 sm:ml-36 mt-10">
            <table className="w-full min-w-[500px] text-[#092C4C]">
              <thead>
                <tr>
                  <th className="border-b border-r border-gray-300 py-2 px- min-w-14">S.No</th>
                  <th className="border-b border-r border-gray-300 px- min-w-32">User Name</th>
                  <th className="border-b border-r border-gray-300 px- min-w-32">Email</th>
                  <th className="border-b border-r border-gray-300 px- min-w-44">Product Name</th>

                  <th className="border-b border-r border-gray-300 px-2 min-w-14">Amount</th>
                  <th className="border-b border-r border-gray-300 px-2 min-w-14">Quantity</th>
                  <th className="border-b border-gray-300 px- min-w-32">Order Date</th>
                  
                </tr>
              </thead>
              <tbody>
                {orders.map((order, index) => (
                  <tr key={order._id} className='text-black font-medium text-sm'>
                    <td className=" px-4 text-center py-4">{index + 1}</td>
                    <td className=" px-4 text-center">{order.userId.name}</td>
                    <td className=" px-4 text-center">{order.userId.email}</td>
                    <td className=" px-4 text-center">{order.productId.name}</td>
                    <td className=" px-4 text-center">{(order.productId.price)*(order.quantity)}</td>
                    <td className=" px-4 text-center">{order.quantity}</td>
                    <td className="px-4 text-center">{moment(order.orderDate).format('MM Do YYYY, h:mm:ss a')}</td>
                    
                  </tr>
                ))}
              </tbody>
            </table>
          {/* </div> */}
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default Index;
