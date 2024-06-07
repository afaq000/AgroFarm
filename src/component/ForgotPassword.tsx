//@ts-nocheck
import axios from 'axios';
import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');
    setError('');

    try {
      const response = await axios.post('http://localhost:9000/request', {
        email: email,
      });

      const data = response.data;
   
      setError(data.message)
      toast.success(data.message)
    } catch (err) {
        setError("Server is busy")
        toast.error("Server is busy")
    
    }
  };


  return (
    <>
     

      {/* {isModalOpen && ( */}
        <div className=" flex items-center justify-center ">
          <div className="  rounded-lg ">
            <button
              className="absolute top-2 right-2 text-gray-600 hover:text-gray-900"
              onClick={() => setIsModalOpen(false)}
            >
              {/* <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg> */}
            </button>
            <div className="p-6">
              <div className="max-w-md w-full ">
                <div>
                  <h2 className="mt-3 lg:mt-6 text-center text-3xl font-extrabold text-gray-900">
                    Forgot Password
                  </h2>
                  <p className="mt-2 text-center text-sm text-gray-600">
                    Enter your email address to reset your password
                  </p>
                </div>
                <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
                  <input type="hidden" name="remember" value="true" />
                  <div className="rounded-md shadow-sm -space-y-px">
                    <div>
                      <label htmlFor="email-address" className="sr-only">
                        Email address
                      </label>
                      <input
                        id="email-address"
                        name="email"
                        type="email"
                        autoComplete="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                        placeholder="Email address"
                      />
                    </div>
                  </div>
                  {message && (
                    <p className="mt-2 text-center text-sm text-green-600">
                      {message}
                    </p>
                  )}
                  {error && (
                    <p className="mt-2 text-center text-sm text-red-600">
                      {error}
                    </p>
                  )}
                  <div>
                    <button
                      type="submit"
                      className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                      Send Reset Link
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      {/* )} */}
    </>
  );
};

export default ForgotPassword;