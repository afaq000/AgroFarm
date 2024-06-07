/* eslint-disable @next/next/no-img-element */
// @ts-nocheck
import Layout from '@/component/Buyer/Layout';
import Link from 'next/link';
import React, { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Index = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
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
    if (formData.password !== formData.password_confirmation) {
      toast.error("Password and confirm password do not match");
      return;
    }
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
      toast.error(error.message);
    }
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const toggleConfirmPasswordVisibility = () => {
    setConfirmPasswordVisible(!confirmPasswordVisible);
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
                {/* <div className="mt-6">
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
                </div> */}

<div className="mt-6 relative">
                  <label
                    htmlFor="password"
                    className="block w-full text-base font-medium text-gray-700 dark:text-gray-300"
                  >
                    Password
                  </label>
                  <input
                    type={passwordVisible ? "text" : "password"}
                    id="password"
                    name="password"
                    placeholder="Enter Password"
                    autoComplete="new-password"
                    className="mt-1 px-3 border py-3 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    value={formData.password}
                    onChange={handleChange}
                  />
                  <div className="absolute inset-y-0 right-0 top-7 pr-3 flex items-center text-sm leading-5">
                    <svg
                      className="h-6 text-gray-700 cursor-pointer"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      onClick={togglePasswordVisibility}
                    >
                      {passwordVisible ? (
                        <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M12 5c-7 0-12 7-12 7s5 7 12 7 12-7 12-7-5-7-12-7zm0 12c-3.036 0-5.529-2.037-6.472-3C6.471 13.037 8.964 11 12 11s5.529 2.037 6.472 3c-.943.963-3.436 3-6.472 3zm0-2a4 4 0 110-8 4 4 0 010 8z"
                      />
                      ) : (
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M12 5c-7 0-12 7-12 7s5 7 12 7 12-7 12-7-5-7-12-7zm0 12c-3.036 0-5.529-2.037-6.472-3C6.471 13.037 8.964 11 12 11s5.529 2.037 6.472 3c-.943.963-3.436 3-6.472 3zm0-8a4 4 0 100 8 4 4 0 000-8z"
                        />
                      )}
                    </svg>
                  </div>
                </div>
                <div className="mt-6 relative">
                  <label
                    htmlFor="password_confirmation"
                    className="block w-full text-base font-medium text-gray-700 dark:text-gray-300"
                  >
                    Confirm Password
                  </label>
                  <input
                    type={confirmPasswordVisible ? "text" : "password"}
                    id="password_confirmation"
                    name="password_confirmation"
                    placeholder="Enter Confirm Password"
                    autoComplete="new-password"
                    className="mt-1 px-3 border py-3 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    value={formData.password_confirmation}
                    onChange={handleChange}
                  />
                  <div className="absolute inset-y-0 right-0 top-7 pr-3 flex items-center text-sm leading-5">
                    <svg
                      className="h-6 text-gray-700 cursor-pointer"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      onClick={toggleConfirmPasswordVisibility}
                    >
                      {confirmPasswordVisible ? (
                         <path
                         fillRule="evenodd"
                         clipRule="evenodd"
                         d="M12 5c-7 0-12 7-12 7s5 7 12 7 12-7 12-7-5-7-12-7zm0 12c-3.036 0-5.529-2.037-6.472-3C6.471 13.037 8.964 11 12 11s5.529 2.037 6.472 3c-.943.963-3.436 3-6.472 3zm0-2a4 4 0 110-8 4 4 0 010 8z"
                       />
                      ) : (
                        <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M12 5c-7 0-12 7-12 7s5 7 12 7 12-7 12-7-5-7-12-7zm0 12c-3.036 0-5.529-2.037-6.472-3C6.471 13.037 8.964 11 12 11s5.529 2.037 6.472 3c-.943.963-3.436 3-6.472 3zm0-8a4 4 0 100 8 4 4 0 000-8z"
                      />
                      )}
                    </svg>
                  </div>
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
