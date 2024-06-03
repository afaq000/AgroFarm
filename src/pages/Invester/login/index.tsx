/* eslint-disable @next/next/no-img-element */
//@ts-nocheck
import Layout from "@/component/Buyer/Layout";
import Link from "next/link";
import React, { useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Modal from "@/component/Modal";
import ForgotPassword from "@/component/ForgotPassword";

const Index = () => {
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const router = useRouter();

  const handleChange = (e: { target: { name: any; value: any } }) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleModalClose = () => {
    setShowModal(false);
  };

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:9000/investor/login",
        formData,
        {
          email: formData.email,
          password: formData.password,
        }
      );

      localStorage.setItem("token", response?.data?.token);
      localStorage.setItem("userId", response?.data?.userId);
      toast.success(response.data.message);
      // setError('');

      router.push("/Invester/");
    } catch (error) {
      console.error("Error:", error.message);
      toast.error(error.message);
    }
  };

  return (
    <div>
      <section className="bg-white dark:bg-gray-900">
        <div className="w-full h-screen px-6 py-24 mx-auto lg:py-20">
          <div className="flex flex-col items-center lg:items-start lg:flex-row">
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
                Login your account
              </h1>
            </div>

            <div className="w-full lg:w-1/2 px-10">
              <form className="w-full lg:max-w-xl" onSubmit={handleSubmit}>
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
                <div className="mt-6 flex flex-col lg:flex-row justify-between items-center">
                  <div className="w-full lg:w-1/2">
                    <button
                      type="submit"
                      className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                      Login
                    </button>
                    <span
                      className="px-2 hover:underline cursor-pointer text-xs"
                      onClick={() => setShowModal(true)}
                    >
                      Forgotten password?
                    </span>
                  </div>
                  <div className=" py-2 lg:w-1/2">
                    <div>
                      {" "}
                      <p className=" text-sm">
                        <span className=""> Donot have an account? </span>
                        <span className="font-bold text-[#4F46E5]">
                          <Link
                            href={"/Invester/signup"}
                            className="hover:underline"
                          >
                            Register
                          </Link>
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      {showModal && (
        <Modal
          show={showModal}
          containerClass="w-[70%] sm:w-1/2 md:w-1/3 px-1 sm:px-4 bg-white py-2 rounded"
          onClose={() => setShowModal(false)}
        >
          <div className="!w-full flex flex-col items-center">
            <h2 className="text-xl mb-4">Reset Password</h2>
            <form className="w-full">
              <div className="mt-4">
                <label
                  htmlFor="resetEmail"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="resetEmail"
                  name="resetEmail"
                  placeholder="Enter your email"
                  className="mt-1 px-3 border py-3 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                  // value={resetEmail}
                  // onChange={(e) => setResetEmail(e.target.value)}
                  required
                />
              </div>
              <div className="mt-6 flex justify-center">
                <button
                  type="submit"
                  className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </Modal>
      )}

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
          <ForgotPassword />
        </div>
      </Modal>
      <ToastContainer />
    </div>
  );
};

export default Index;
