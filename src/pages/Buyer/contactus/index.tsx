import React, { useState } from 'react';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from 'next/router';
import Header from '../../components/Header';
import HeroSection from '../../components/HeroSection';
import Footer from '../../components/Footer';
import Layout from '@/component/Buyer/Layout';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        message: ''
    });

    const router = useRouter();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (localStorage.getItem("token") === null) {
                // Handle when user is not logged in
            } else {
                const response = await axios.post("http://localhost:9000/contact", formData);
                console.log(response.data);
                toast.success(response.data.message);
                setFormData({
                    firstName: '',
                    lastName: '',
                    email: '',
                    message: ''
                });
            }
        } catch (error) {
            toast.error(error.response.data.message);
            console.error('Error:', error);
        }
    };

    return (
        // <div>
             <Layout>
            {/* <HeroSection title={"Contact Us"}/> */}
            <div className="w-full h-[200px] sm:h-[300px] md:h-[500px] bg-[#092C4C] flex flex-col justify-center items-center   lg:flex lg:flex-row ">
          <div className="text-white text-nowrap lg:text-wrap font-bold text-2xl xxs:text-3xl sm:text-4xl w-1/2 flex items-center justify-center px-5 pt-10 sm:pt-0">
                <p >Contact Us</p>

          </div>

        </div>
            <section className="bg-gray-200 ">
                <div className={`w-full bg-[#092C4C] `}>
                  
                </div>
                {/* <div className="container mx-auto flex flex-wrap justify-center items-start py-4"> */}
                    {/* Contact information card */}
                    <div className='flex flex-col text-[#092C4C]'>
                    <div className='flex flex-col md:flex-row justify-between w-full  items-center !mt-8 py-2 px-4'>
                    <div className="w-full   p-1">
                        <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-sm">
                            <h2 className="text-lg font-semibold mb-2">Contact Information</h2>
                            <p className="text-gray-600 dark:text-gray-300 mb-2">Phone: +1-123-456-7890</p>
                        </div>
                    </div>
                    {/* Working hours card */}
                    <div className="w-full p-1">
                        <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-sm">
                            <h2 className="text-lg font-semibold mb-2">Working Hours</h2>
                            <div className='flex gap-1'>
                            <p className="text-gray-600 dark:text-gray-300 mb-2">Monday to Friday</p>
                            <p className="text-gray-600 dark:text-gray-300 mb-2">9:00 AM - 5:00 PM</p>
                            </div>
                          
                        </div>
                    </div>
                    <div className="w-full  p-1">
                        <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-sm">
                        <h2 className="text-lg font-semibold mb-4">Contact Us</h2>
                            <p className="text-gray-600 dark:text-gray-300 mb-2">Office Address: 123 Street Name, City, Country</p>
                    </div>
                    </div>
                    </div>
                    {/* Contact form */}
                    <div className="w-full mx-auto px-4 mb-4 ">
                        <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-lg">
                            
                            <form onSubmit={handleSubmit} className="flex flex-wrap">
                                <div className="w-full md:w-1/2 px-2 mb-4">
                                    <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">First Name</label>
                                    <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} className="block w-full   px-3 py-2 mt-1 text-gray-800 border rounded-md focus:outline-none focus:border-blue-500" />
                                </div>
                                <div className="w-full md:w-1/2 px-2 mb-4">
                                    <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Last Name</label>
                                    <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} className="block w-full px-3 py-2 mt-1 text-gray-800 border rounded-md focus:outline-none focus:border-blue-500" />
                                </div>
                                <div className="w-full px-2 mb-4">
                                    <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Email address</label>
                                    <input type="email" name="email" value={formData.email} onChange={handleChange} className="block w-full px-3 py-2 mt-1 text-gray-800 border rounded-md focus:outline-none focus:border-blue-500" />
                                </div>
                                <div className="w-full px-2 mb-4">
                                    <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Message</label>
                                    <textarea name="message" value={formData.message} onChange={handleChange} className="block w-full px-3 py-2 mt-1 text-gray-800 border rounded-md focus:outline-none focus:border-blue-500" placeholder="Message"></textarea>
                                </div>
                                <div className="w-full px-2 mb-4">
                                    <button type="submit" className="w-full px-4 py-2 bg-[#092C4C] text-white rounded-md hover:bg-[#B799A5] focus:outline-none focus:bg-[#B799A5]">Send message</button>
                                </div>
                            </form>
                        </div>
                    </div>
               
                </div>
            </section>
            <ToastContainer />
            {/* <div className="hidden md:flex">  */}
</Layout>

    );
};

export default ContactForm;
