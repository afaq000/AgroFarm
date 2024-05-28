// @ts-nocheck
import Layout from '@/component/Buyer/Layout';
import Link from 'next/link';
import React, { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Index = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    password_confirmation: ''
  });
  const [error, setError] = useState('');
  const router = useRouter();

  const handleChange = (e: { target: { name: any; value: any; }; }) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:9000/investor/signup', {
        email: formData.email,
        password: formData.password,
        name:formData.username
      });
      toast.success(response.data.message);
      
      // setError('');
      setTimeout(() => {  
        router.push("/Invester/login");
      }, 2000);
    
    
    } catch (error) {
      toast.error(error);
    }
  };


  return (
    <div>
      <section className="bg-white dark:bg-gray-900">
        <div className="w-full h-screen px-6 py-24 mx-auto lg:py-20">
          <div className="lg:flex">
            <div className="lg:w-1/2 flex flex-col justify-center items-center">
              <img
                className="w-auto h-7 sm:h-8"
                src="https://merakiui.com/images/logo.svg"
                alt=""
              />
              <h1 className="mt-4 text-gray-600 dark:text-gray-300 md:text-lg">
                Welcome back
              </h1>
              <h1 className="mt-4 text-2xl font-medium text-gray-800 capitalize lg:text-3xl dark:text-white">
                Create your account
              </h1>
            </div>

            <div className="w-1/2 px-10">
              <form className="w-full lg:max-w-xl" onSubmit={handleSubmit}>
                <div className="mt-6">
                  <label
                    htmlFor="username"
                    className="block w-full text-base font-medium text-gray-700 dark:text-gray-300"
                  >
                    Username
                  </label>
                  <input
                    type="text"
                    id="username"
                    name="username"
                    autoComplete="username"
                    placeholder="Enter Username"
                    className="mt-1 px-3 border py-3 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    value={formData.username}
                    onChange={handleChange}
                  />
                </div>
                <div className="mt-6">
                  <label
                    htmlFor="email"
                    className="block w-full text-base font-medium text-gray-700 dark:text-gray-300"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    autoComplete="email"
                    placeholder="Enter email"
                    className="mt-1 px-3 border py-3 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
                <div className="mt-6">
                  <label
                    htmlFor="password"
                    className="block w-full text-base font-medium text-gray-700 dark:text-gray-300"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    placeholder="Enter Password"
                    autoComplete="new-password"
                    className="mt-1 px-3 border py-3 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    value={formData.password}
                    onChange={handleChange}
                  />
                </div>
                <div className="mt-6">
                  <label
                    htmlFor="password_confirmation"
                    className="block w-full text-base font-medium text-gray-700 dark:text-gray-300"
                  >
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    id="password_confirmation"
                    name="password_confirmation"
                    placeholder="Enter Confirm Password"
                    autoComplete="new-password"
                    className="mt-1 px-3 border py-3 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    value={formData.password_confirmation}
                    onChange={handleChange}
                  />
                </div>
                <div className="mt-6 flex justify-between items-center">
                  <div className="w-1/2">
                    <button
                      type="submit"
                      className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                      Create Account
                    </button>
                  </div>
                  <div className="w-1/2">
                    <Link href={'/Invester/login'}>
                      {' '}
                      <p className="text-blue-500 text-sm">
                        I have an Already Account
                      </p>
                    </Link>
                  </div>
                </div>
                {/* Display error message */}
                {error && <p className="text-red-500">{error}</p>}
              </form>
            </div>
          </div>
        </div>
      </section>
      <ToastContainer/>
    </div>
  );
};

export default Index;
