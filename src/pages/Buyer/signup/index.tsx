/* eslint-disable @next/next/no-img-element */
// @ts-nocheck
import Link from 'next/link';
import React, { useState } from 'react';
import axios from 'axios'; // Import axios for making HTTP requests
import { Router } from 'react-router-dom';
import { useRouter } from 'next/router';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Index = () => {
  const [formData, setFormData] = useState({
    username:'',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [error, setError] = useState<any>('');
  const router = useRouter();
  
  const handleChange = (e: { target: { name: any; value: any; }; }) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      toast.error(error.message);
      return;
    }
    try {
      const response = await axios.post('http://localhost:9000/buyer/signup', {
        email: formData.email,
        password: formData.password,
        name:formData.username
      });
      toast.success(response.data.message);
      // setError('');
      setTimeout(() => {  
        router.push("/Buyer/login");
      }, 2000);
    
    } catch (error) {
      console.error('Error:', error.message);
      toast.error(error.message);
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
                    placeholder="Enter Username"
                    name="username"
                    autoComplete="username"
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
                    placeholder="Enter email"
                    autoComplete="email"
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
                    placeholder="Enter password"
                    autoComplete="new-password"
                    className="mt-1 px-3 border py-3 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    value={formData.password}
                    onChange={handleChange}
                  />
                </div>
                
                <div className="mt-6">
                  <label
                    htmlFor="confirmPassword"
                    className="block w-full text-base font-medium text-gray-700 dark:text-gray-300"
                  >
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    id="confirmPassword"
                    name="confirmPassword"
                    placeholder="Confirm password"
                    autoComplete="new-password"
                    className="mt-1 px-3 border py-3 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    value={formData.confirmPassword}
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
                    <Link href={'/Buyer/login'}>
                      {' '}
                      <p className="text-blue-500 text-sm">
                        I have an Already Account
                      </p>
                    </Link>
                  </div>
                </div>
               
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
