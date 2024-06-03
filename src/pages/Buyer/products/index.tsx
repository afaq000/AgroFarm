/* eslint-disable @next/next/no-img-element */
//@ts-nocheck
import Layout from "@/component/Buyer/Layout";
import Modal from "@/component/Modal";
import axios from "axios";
import { useRouter } from "next/router";
import { SetStateAction, useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

// Index component
function Index() {
  const [showModal, setShowModal] = useState(false); 
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [products, setProducts] = useState([]);
  const [quantity, setQuantity] = useState("");
  const [address, setAddress] = useState("");
  const router = useRouter();
  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await axios.get('http://localhost:9000/products');
        setProducts(response.data);
        console.log(response,"response")
      } catch (error) {
        // setError(error.message);
      }
    };

    fetchOrders();
  }, []);

  const handleToastify = () => {
    toast.success('Booking successful!');
    setShowModal(false);
  };

  // const handleBookButtonClick = (product) => {
  //   setSelectedProduct(product);
  //   setShowModal(true);
  // };

  const handleModalClose = () => {
    setShowModal(false);
    setSelectedProduct(null);
  };

  const handleBookButtonClick = (product) => {
    if (!localStorage.getItem('userId')) {
      router.push(`/Buyer/login`);
    } else {
      setSelectedProduct(product);
      setShowModal(true);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:9000/orders', {
        userId:localStorage.getItem('userId'),
        productId:selectedProduct,
         quantity, address });
      console.log('Order', response.data);
      handleToastify();
    } catch (error) {
      console.error('Error creating order:', error);
      toast.error('Failed to create order. Please try again.');
    }
  };

  return (
    <Layout>
      <div className='w-full relative '>
         <div className="w-full h-[500px] bg-[#092C4C] flex flex-col justify-center items-center   lg:flex lg:flex-row ">
          <div className="text-white text-nowrap lg:text-wrap font-bold text-2xl xxs:text-3xl sm:text-4xl w-1/2 flex items-center justify-center px-5">
                <p >ORDER FAVOURITE  PRODUCTS</p>

          </div>

        </div>
        <div className='w-full flex justify-center  items-center py-20'>
          <div className='w-[80%] flex flex-col md:flex md:flex-row md:flex-wrap justify-start items-center ml-0 md:ml-24 gap-10'>
          {products.map((item,index) =>
             <div key={index} className='w-full md:w-1/4 flex flex-col text-[#092C4C]  shadow-md '>
                <img src={item.imageUrl} alt='' className='object-cover h-[200px] w-full' />
                <p className='text-lg font-bold px-3'>{item.name}</p>
                <p className='text-sm px-3'>{item.description}</p>
                <p className='text-lg px-3 font-bold'>Rs: {item.price}</p>
                <button onClick={() => handleBookButtonClick(item._id)} className='mt-6 w-full bg-[#092C4C] py-3 text-white font-bold'>Order</button>
              </div>
              )}
          </div>
        </div>

        {/* {showModal && ( */}
          <Modal
            show={showModal}
            className="!w-full overflow-auto"
            containerClass="w-[70%] sm:w-1/2 md:w-1/3 px-1 sm:px-4 bg-white "
            onClose={handleModalClose}
          >
            <div className="!w-full flex flex-col items-center">
              <div className="flex justify-end w-full">
                <div
                  onClick={handleModalClose}
                  className="relative top-0 bg-slate-400 w-7 h-7 flex justify-center items-center rounded-full -left-2 sm:top-2 cursor-pointer"
                >
                  X
                </div>
              </div>
              <div className={`w-full `}>
                <p className="text-lg font-bold -mt-6">Details</p>
                <form onSubmit={handleSubmit} className="flex flex-col gap-2 p-2 max-h-80vh overflow-auto">
                  <div className="flex flex-col">
                    <label htmlFor="quantity" className="text-sm font-semibold py-1">
                      Quantity
                    </label>
                    <input
                      type="number"
                      id="quantity"
                      name="quantity"
                      className="border border-gray-300 rounded-md p-2"
                      placeholder="Enter quantity"
                      value={quantity}
                      onChange={(e) => setQuantity(e.target.value)}
                    />
                  </div>
                  <div className="flex flex-col">
                    <label htmlFor="address" className="text-sm font-semibold py-1">
                      Address
                    </label>
                    <textarea
                      id="address"
                      name="address"
                      className="border border-gray-300 rounded-md p-2 resize-none"
                      placeholder="Enter address"
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                    />
                  </div>
                  <div className='w-full flex justify-center'>
                    <button className='max-w-80px bg-blue-600 rounded-lg font-semibold px-3 py-2 text-white'>
                      <p>Order</p>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </Modal>
        {/* )} */}
        <ToastContainer/>
      </div>
    </Layout>
  );
}

export default Index;
