// import AdminSaidBar from '@/component/Admin/AdminSaidBar';
// import Header from '@/component/Admin/Header'
// import React, { useState } from 'react'
// import { Chat, Home, Task, Finance } from '../../../component/icon/sidebar';
// import UsersTable from '@/component/Admin/UserTable';

// function Index() {

//     const data = [
//         {
//           icon: <Home />,
//           title: 'Dashboard',
//           link: '/admin/home',
//         },
      
//         {
//           icon: <Finance />,
//           title: 'Invester ',
//           link: '/admin/invester',
//         },
//         {
//           icon: <Task />,
//           title: 'Users',
//           link: '/admin/users',
//         },
//         {
//           icon: <Chat />,
//           title: 'Order',
//           link: '/admin/order',
//         },
//       ];


//       const users = [
//         {
//           id: '1',
//           SNo: '1',
//           UserName: 'JohnDoe',
//           Email: 'john@example.com',
//         },
//         {
//           id: '2',
//           SNo: '2',
//           UserName: 'JaneDoe',
//           Email: 'jane@example.com',
//         },
//         // Add more sample data as needed
//       ];
    


    
//     return (
//       <div className='w-full '>
//         <Header/>
//         <AdminSaidBar
//         data={data}
//         mainClassName="max-w-[320px] w-24 sm:w-1/6 text-black"
//         SideBarLogoClassName={''}
//       />
//       <div className='w-full flex justify-center items-center px-10 '>
//         <div className='w-[80%] px-2 sm:px-10'>
//       <UsersTable data={users} handleDelete={function (id: string): void {
//             throw new Error('Function not implemented.');
//           } }/>
//       </div>
//       {/* <div className='w-full flex justify-center items-center px-10 py-10'>
//         <div className='w-[22%]'/>
//         <div className='w-[90%] sm:w-[95%] ml-24 sm:ml-0 flex flex-col'>
//           <div className='w-full  '>
//         <Table  data={subscriptions}
//   handleEdit={() => {}}
//   handleDelete={() => {}}
//   handleApprove={handleApprove} // Pass the handleApprove function
//   headers={headers}/>
//       </div>
        

//         </div>
       
//       </div> */}
//       </div>
//       </div>
//     );
// }

// export default Index;


import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AdminSaidBar from '@/component/Admin/AdminSaidBar';
import Header from '@/component/Admin/Header';
import { Chat, Home, Task, Finance } from '../../../component/icon/sidebar';
import UsersTable from '@/component/Admin/UserTable';

function Index() {

  // useEffect(() => {
  //   const fetchUsers = async () => {
  //     try {
  //       const response = await axios.get('http://localhost:9000/getAlluser');
  //   console.log(response,"dataa")

  //       setUsers(response.data);
  //     } catch (error) {
  //       console.error('Error fetching users:', error);
  //     }
  //   };

  //   fetchUsers();
  // }, []);


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
    <div className='w-full'>
      <Header />
      <AdminSaidBar data={data} mainClassName="max-w-[320px] w-24 sm:w-1/6 text-black" SideBarLogoClassName={''} />
      <div className='w-full flex justify-center items-center px-10 '>
        <div className='w-[80%] px-2 sm:px-10'>
          <UsersTable data={users} handleDelete={(id: string) => {}} />
        </div>
      </div>
    </div>
  );
}

export default Index;




