//@ts-nocheck
import React, { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AdminSaidBar from '@/component/Admin/AdminSaidBar';
import Header from '@/component/Admin/Header';
import { Chat, Home, Task, Finance, Attendance, Rewards } from '../../../component/icon/sidebar';
import Modal from '@/component/Modal';
import axios from 'axios';
import { BoxIcon } from '@/component/icon';
import { CiEdit } from "react-icons/ci";


function Index() {
    const [showModal, setShowModal] = useState(false);
    const [showUpdateModal, setShowUpdateModal] = useState(false);
    const [plans, setPlans] = useState([]);
    const [currentPlan, setCurrentPlan] = useState(null);

    useEffect(() => {
        const fetchPlans = async () => {
            try {
                const response = await axios.get('http://localhost:9000/plans');
                setPlans(response.data);
            } catch (error) {
                console.error(error);
                toast.error('Failed to fetch plans');
            }
        };

        fetchPlans();
    }, []);

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

    const handleApproved = (id) => {
        toast.success("Successfully Approved");
    }

    const handleRejected = (id) => {
        toast.error("Successfully Rejected");
    }

    const handleModalClose = () => {
        setShowModal(false);
    };

    const handleAddPlans = () => {
        setShowModal(true);
    };

    const [updateName, setUpdateName] = useState('');
    const [updateDuration, setUpdateDuration] = useState('');
    const [updateStatus, setUpdateStatus] = useState('');
    const [updateAmount, setUpdateAmount] = useState(0);
    const [updateInterestRate, setUpdateInterestRate] = useState(0);

    const [name, setName] = useState(''); 
    const [duration, setDuration] = useState(''); 
    const [status, setStatus] = useState(''); 
    const [amount, setAmount] = useState(0); 
    const [interestRate, setInterestRate] = useState(0); 

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:9000/add', {
                name,
                duration,
                status:"approved",
                amount,
                interestRate
            });
            toast.success(response.data.message);
            setShowModal(false); // Close modal on success
        } catch (error) {
            console.error(error);
            toast.error('Internal Server Error');
        }
    };

    const handleUpdate = (plan) => {
        setCurrentPlan(plan);
        setUpdateName(plan.name);
        setUpdateDuration(plan.duration);
        setUpdateStatus(plan.status);
        setUpdateAmount(plan.amount);
        setUpdateInterestRate(plan.interestRate);
        setShowUpdateModal(true);
    };

    const handleUpdateModalClose = () => {
        setShowUpdateModal(false);
    };

    const handleUpdateSubmit = async (e) => {
        e.preventDefault();
        if (!currentPlan) return;

        try {
           
const response = await axios.put(`http://localhost:9000/update/${currentPlan._id}`, {
    name: updateName,
    duration: updateDuration,
    status: updateStatus,
    amount: updateAmount,
    interestRate: updateInterestRate
});
            toast.success("plane is sucessfully updated");
            setShowUpdateModal(false); 
            fetchPlans(); 
        } catch (error) {
            console.error(error);
            // toast.error('Internal Server Error');
        }
    };

    return (
        <div className="w-full">
            <Header />
            <AdminSaidBar
                data={data}
                mainClassName="max-w-[320px] w-24 sm:w-1/6 text-black"
                SideBarLogoClassName={''}
            />
            <div className="w-full flex flex-col justify-center items-center px-10 " >
                <div className='w-full flex justify-end mt-5'>
                    <button onClick={handleAddPlans} className='px-5 py-3 bg-[#092C4C] rounded-md text-white font-semibold' >
                        <p >Add Plans +</p>
                    </button>
                </div>
              
                <div className="w-[80%]  ml-20 sm:ml-36 mt-10">
                <p className='px-14  -ml-10 text-[#092C4C] font-extrabold text-2xl'>PLANS</p>
                   <div className=' overflow-x-auto py-10'>
                    <table className="w-full min-w-[500px] text-[#092C4C]">
                        <thead>
                            <tr>
                                <th className="border-b border-r border-gray-300 py-2 px-4 min-w-14">S.No</th>
                                <th className="border-b border-r border-gray-300 px-4 min-w-32">Name</th>
                                <th className="border-b border-r border-gray-300 px-4 min-w-32">Duration</th>
                                <th className="border-b border-r border-gray-300 px-4 min-w-44">Amount</th>
                                <th className="border-b border-r border-gray-300 px-2 min-w-14">Interest Rate</th>
                                <th className="border-b border-gray-300 px-2 min-w-14">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {plans.map((plan, index) => (
                                <tr key={plan._id} className="text-black font-medium text-sm">
                                    <td className="px-4 text-center py-4">{index + 1}</td>
                                    <td className="px-4 text-center">{plan.name}</td>
                                    <td className="px-4 text-center">{plan.duration}</td>
                                    <td className="px-4 text-center">{plan.amount}</td>
                                    <td className="px-4 text-center">{plan.interestRate}%</td>
                                    <td className="py- text-center">
                                        <button onClick={() => handleUpdate(plan)} className="text-[8px] px-2 font-extrabold rounded-sm mr-2"><CiEdit className='w-[20px] h-[50px]'/></button>
                                        {/* <button onClick={() => handleApproved(plan._id)} className="bg-green-300 text-[8px] px-2 font-extrabold rounded-sm mr-2">Approve</button>
                                        <button onClick={() => handleRejected(plan._id)} className="bg-red-300 text-[8px] px-2 font-extrabold rounded-sm">Reject</button> */}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    </div>
                </div>
            </div>

            <Modal
                show={showModal}
                className="!w-full overflow-auto"
                containerClass="w-[70%] sm:w-1/2 md:w-1/3 px-1 sm:px-4 bg-white"
                onClose={handleModalClose}
            >
                <div className="!w-full flex flex-col items-center">
                    <div className="flex justify-end w-full">
                        <div
                            onClick={handleModalClose}
                            className="relative top bg-slate-100 w-5 h-5 flex justify-center items-center rounded-full -left-3 sm:top-2 cursor-pointer"
                        >
                            X
                        </div>
                    </div>
                    <div className="w-full flex flex-col">
                        <form onSubmit={handleSubmit} className="flex flex-col gap-2 p-2 max-h-80vh overflow-auto">
                            <div className="flex flex-col">
                                <label htmlFor="name" className="text-sm font-semibold py-1">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    className="border border-gray-300 rounded-md p-2"
                                    placeholder="Enter Name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                />
                            </div>
                            <div className="flex flex-col">
                                <label htmlFor="duration" className="text-sm font-semibold py-1">
                                Expir Date
                                </label>
                                <input
                                    type="date"
                                    id="duration"
                                    name="duration"
                                    className="border border-gray-300 rounded-md p-2"
                                    placeholder="Enter Duration (e.g., months, years)"
                                    value={duration}
                                    onChange={(e) => setDuration(e.target.value)}
                                />
                            </div>
                            {/* <div className="flex flex-col">
                                <label htmlFor="status" className="text-sm font-semibold py-1">
                                    Status
                                </label>
                                <input
                                    type="text"
                                    id="status"
                                    name="status"
                                    className="border border-gray-300 rounded-md p-2"
                                    placeholder="Enter Status"
                                    value={status}
                                    onChange={(e) => setStatus(e.target.value)}
                                />
                            </div> */}
                            <div className="flex flex-col">
                                <label htmlFor="amount" className="text-sm font-semibold py-1">
                                    Amount
                                </label>
                                <input
                                    type="number"
                                    id="amount"
                                    name="amount"
                                    className="border border-gray-300 rounded-md p-2"
                                    placeholder="Enter Amount"
                                    value={amount}
                                    onChange={(e) => setAmount(e.target.value)}
                                />
                            </div>
                            <div className="flex flex-col">
                                <label htmlFor="interestRate" className="text-sm font-semibold py-1">
                                    Interest Rate
                                </label>
                                <input
                                    type="number"
                                    id="interestRate"
                                    name="interestRate"
                                    className="border border-gray-300 rounded-md p-2"
                                    placeholder="Enter Interest Rate (%)"
                                    value={interestRate}
                                    onChange={(e) => setInterestRate(e.target.value)}
                                />
                            </div>
                            <div className="w-full flex justify-center">
                                <button type="submit" className="max-w-80px bg-blue-600 rounded-lg font-semibold px-3 py-2 text-white">
                                    Submit
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </Modal>

            <Modal
                show={showUpdateModal}
                className="!w-full overflow-auto"
                containerClass="w-[70%] sm:w-1/2 md:w-1/3 px-1 sm:px-4 bg-white"
                onClose={handleUpdateModalClose}
            >
                <div className="!w-full flex flex-col items-center">
                    <div className="flex justify-end w-full">
                        <div
                            onClick={handleUpdateModalClose}
                            className="relative top bg-slate-100 w-5 h-5 flex justify-center items-center rounded-full -left-3 sm:top-2 cursor-pointer"
                        >
                            X
                        </div>
                    </div>
                    <div className="w-full flex flex-col">
                        <form onSubmit={handleUpdateSubmit} className="flex flex-col gap-2 p-2 max-h-80vh overflow-auto">
                            <div className="flex flex-col">
                                <label htmlFor="updateName" className="text-sm font-semibold py-1">
                                    Update Name
                                </label>
                                <input
                                    type="text"
                                    id="updateName"
                                    name="updateName"
                                    className="border border-gray-300 rounded-md p-2"
                                    placeholder="Update Enter Name"
                                    value={updateName}
                                    onChange={(e) => setUpdateName(e.target.value)}
                                />
                            </div>
                            <div className="flex flex-col">
                                <label htmlFor="updateDuration" className="text-sm font-semibold py-1">
                                    Update Expire Date
                                </label>
                                <input
                                    type="date"
                                    id="updateDuration"
                                    name="updateDuration"
                                    className="border border-gray-300 rounded-md p-2"
                                    placeholder="Update Enter Duration (e.g., months, years)"
                                    value={updateDuration}
                                    onChange={(e) => setUpdateDuration(e.target.value)}
                                />
                            </div>
                            {/* <div className="flex flex-col">
                                <label htmlFor="updateStatus" className="text-sm font-semibold py-1">
                                    Update Status
                                </label>
                                <input
                                    type="text"
                                    id="updateStatus"
                                    name="updateStatus"
                                    className="border border-gray-300 rounded-md p-2"
                                    placeholder="Update Enter Status"
                                    value={updateStatus}
                                    onChange={(e) => setUpdateStatus(e.target.value)}
                                />
                            </div> */}
                            <div className="flex flex-col">
                                <label htmlFor="updateAmount" className="text-sm font-semibold py-1">
                                    Update Amount
                                </label>
                                <input
                                    type="number"
                                    id="updateAmount"
                                    name="updateAmount"
                                    className="border border-gray-300 rounded-md p-2"
                                    placeholder="Update Enter Amount"
                                    value={updateAmount}
                                    onChange={(e) => setUpdateAmount(e.target.value)}
                                />
                            </div>
                            <div className="flex flex-col">
                                <label htmlFor="updateInterestRate" className="text-sm font-semibold py-1">
                                    Update Interest Rate
                                </label>
                                <input
                                    type="number"
                                    id="updateInterestRate"
                                    name="updateInterestRate"
                                    className="border border-gray-300 rounded-md p-2"
                                    placeholder="Enter Interest Rate (%)"
                                    value={updateInterestRate}
                                    onChange={(e) => setUpdateInterestRate(e.target.value)}
                                />
                            </div>
                            <div className="w-full flex justify-center">
                                <button type="submit" className="max-w-80px bg-blue-600 rounded-lg font-semibold px-3 py-2 text-white">
                                    Update
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </Modal>

            <ToastContainer />
        </div>
    );
}

export default Index;
