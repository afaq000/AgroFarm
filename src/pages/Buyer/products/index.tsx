//@ts-nocheck
import BookingForm from '@/component/Buyer/BookingForm';
import Layout from '@/component/Buyer/Layout';
import Modal from '@/component/Modal';
import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import Modal from './Modal'; // Import your Modal component
// import BookingForm from './BookingForm'; // Import your BookingForm component

function Index() {
  const [showModal, setShowModal] = useState(false); // State to manage modal visibility
  const [selectedProduct, setSelectedProduct] = useState(null); // State to store the selected product

  const products = [
    {
      id: 1,
      name: "Calabrian Red",
      description: "Product 2 Description",
      image: "/BookingOrder/image-2.webp",
      price:"500"
    },
    {
        id: 2,
        name: "Organic Garlic",
        description: "Product 1 Description",
        image: "/BookingOrder/image-3.webp",
        price:"400"
      },
      {
        id: 3,
        name: "Fresh  Garlic",
        description: "Product 2 Description",
        image: "/BookingOrder/image-1.webp",
        price:"300"
      },
  ];

  const handleTostify = () => {
    toast.success('Booking successful!')
      setShowModal(false)
  };


  const handleBookButtonClick = (product: React.SetStateAction<null>) => {
    setSelectedProduct(product);
    setShowModal(true);
  };

  const handleModalClose = () => {
    setShowModal(false);
    setSelectedProduct(null);
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
            {products.map(product => (
              <div key={product.id} className='w-full md:w-1/4 flex flex-col text-[#092C4C]  shadow-md '>
                <img src={product.image} alt='' className='object-cover h-[200px] w-full' />
                <p className='text-lg font-bold px-3'>{product.name}</p>
                <p className='text-sm px-3'>{product.description}</p>
                <p className='text-lg px-3 font-bold'>Rs: {product.price}</p>
                <button onClick={() => handleBookButtonClick(product)} className='mt-6 w-full bg-[#092C4C] py-3 text-white font-bold'>Order</button>
              </div>
            ))}
          </div>
        </div>

        {showModal && (
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
              <BookingForm product={selectedProduct} onClick={handleTostify} />
            </div>
          </Modal>
        )}
        <ToastContainer/>
      </div>
    </Layout>
  );
}

export default Index;
