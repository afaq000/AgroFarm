import AdminSaidBar from '@/component/Admin/AdminSaidBar';
import Header from '@/component/Admin/Header';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Home, Task, Finance, Attendance, Rewards } from '../../../component/icon/sidebar';
import { Expense, Revenue, Stickies } from '@/component/icon/finance';
import { BoxIcon } from '@/component/icon';
import moment from 'moment';

function Index() {
  const [dashboardData, setDashboardData] = useState({
    totalInvestor: 0,
    totalBuyer: 0,
    totalOrder: 0,
  });

  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        const response = await axios.get('http://localhost:9000/dashobard');
        setDashboardData(response?.data); 
        console.log("response",response)
      } catch (error) {
        console.error('Error fetching dashboard data:', error);
      }
    };

    fetchDashboardData();
  }, []);


  const [orders, setOrders] = useState([]);

  useEffect(() => {
    async function fetchOrders() {
      try {
        const response = await axios.get('http://localhost:9000/getorders');
       
      //  response();
        setOrders(response?.data)
      } catch (error) {
        console.error('Error fetching orders:', error);
      }
    }

    fetchOrders();
  }, []); // Empty dependency array ensures the effect runs only once on component mount


  const data = [
    {
      icon: <Home />,
      title: 'Dashboard',
      link: '/admin/dashboard',
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
      <AdminSaidBar
        data={data}
        mainClassName="max-w-[320px] w-24 sm:w-1/6 text-black"
        SideBarLogoClassName={''}
      />
      <div className='w-full flex justify-center items-center xxs:px-'>

        <div className='w-[10%]' />
        <div className='w-1/2 xxs:w-[80%] sm:w-[78%] ml-10 sm:ml-0 flex flex-col'>
          <div className='w-full xxs:px-10 py-10 flex text-2xl font-extrabold justify-start text-[#092C4C]'>
            <p>DASHBOARD</p>
          </div>
          <div className='w-full sm:flex sm:flex-row flex flex-col justify-center items-center'>
            <div className='w-full py-5 sm:w-[30%] bg-slate-100 border-[4px] border-white shadow-inner flex flex-col justify-center items-center'>
              <p className='font-bold text-lg flex flex-col items-center justify-center '>
                <Expense />Total Investor
              </p>
              <p className='font-bold text-lg'>{dashboardData?.totalInvestor}</p>
            </div>

            <div className='w-full py-5 sm:w-[30%] bg-slate-100 flex flex-col border-[4px]  border-white shadow-inner justify-center items-center'>
              <p className='font-bold text-sm sm:text-lg flex flex-col items-center justify-center '>
                <Revenue />Total Buyer
              </p>
              <p className='font-bold text-lg'>{dashboardData?.totalBuyer}</p>
            </div>

            <div className='w-full py-5 sm:w-[30%] bg-slate-100 flex flex-col border-[4px] border-white shadow-inner justify-center items-center'>
              <p className='font-bold text-sm sm:text-lg flex flex-col items-center justify-center '>
                <Stickies />Total Order
              </p>
              <p className='font-bold text-lg'>{dashboardData?.totalOrder}</p>
            </div>
          </div>



          <div className='w-full px-0 xxs:px-8 mt-5 min-w-[100px] overflow-auto'>
            {/* <p className=''>RECENT ORDER</p> */}
            <div className='w-full xxs:px-2 py-10 flex text-2xl font-extrabold justify-start text-[#092C4C]'>
            <p>RECENT ORDER</p>
          </div>
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
                    <td className=" px-4 text-center">{order.userId?.name}</td>
                    <td className=" px-4 text-center">{order.userId?.email}</td>
                    <td className=" px-4 text-center">{order.productId?.name}</td>
                    <td className=" px-4 text-center">{(order.productId?.price)*(order?.quantity)}</td>
                    <td className=" px-4 text-center">{order.quantity}</td>
                    <td className="px-4 text-center">{moment(order.orderDate).format('MM Do YYYY, h:mm:ss a')}</td>
                    
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Index;
