import React, { ReactNode, useEffect, useRef } from 'react';
import AdminSaidBar from '../Admin/AdminSaidBar';
import { Chat, Home, Task,Finance } from '../icon/sidebar';

interface Props {
  children?: ReactNode;
  onclick?: () => void;
}

const Layout: React.FC<Props> = ({ children }) => {
  const data = [
    {
      icon: <Home />,
      title: 'Dashboard',
      link: '/dashboard',
    },
    // {
    //   icon: <Companies />,
    //   title: 'Companies',
    //   link: '/Companies',
    // },
    {
      icon: <Finance />,
      title: 'Invester ',
      link: '/Invester',
    },
    // {
    //   icon: <Subscription />,
    //   title: 'Subscription',
    //   link: '/Subscription',
    // },
    {
      icon: <Task />,
      title: 'Users',
      link: '/Users',
    },
    {
      icon: <Chat />,
      title: 'Order',
      link: '/Order',
    },
  ];

  return (
    <div className="w-full h-screen flex">
      {/* <title>Employee</title> */}
      <AdminSaidBar
        data={data}
        mainClassName="max-w-[200px] w-24 sm:w-1/5 text-black"
        SideBarLogoClassName={''}
      />
      {children}
    
    </div>
  );
};

export default Layout;




  // {
    //   icon: <Attendance />,
    //   title: 'SKILLS',
    //   // link: '/employee/attendance',
    // },

    // {
    //   icon: <Salary />,
    //   title: 'EDUCATION',
    //   // link: '/employee/salary',
    // },
    // {
    //   icon: <Rewards />,
    //   title: 'EXPERIENCE',
    //   // link: '/employee/rewards',
    // },

    // {
    //   icon: <Leaves />,
    //   title: 'WORK',
    //   // link: '/employee/leaves',
    // },

    // {
    //   icon: <Certificate />,
    //   title: 'BLOG',
    //   // link: '/employee/certificate',
    // },

    // {
    //   icon: <Complain />,
    //   title: 'CONTACT',
    //   // link: '/employee/complain',
    // },

    // {
    //   icon: <Summary />,
    //   title: 'Summary report',
    //   link: '/employee/summary',
    // },
