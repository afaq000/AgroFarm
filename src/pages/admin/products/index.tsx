
// import AdminSaidBar from '@/component/Admin/AdminSaidBar';
// import Header from '@/component/Admin/Header';
// import React, { SetStateAction, useState } from 'react';
// import { Chat, Home, Task, Finance } from '../../../component/icon/sidebar';
// import OrderTable from '@/component/Admin/OrderTable';
// import Modal from '@/component/Modal';
// import Addproducts from '@/component/Admin/Addproducts';
// import axios from 'axios';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import UpdateProducts from '@/component/Admin/UpdateProducts';


// function Index() {
//   const [showModal, setShowModal] = useState(false);
//   const [selectedProduct, setSelectedProduct] = useState<string | null>(null);
//   const [imageURL, setImageURL] = useState<string | null>(null);
//   const [productName, setProductName] = useState('');
//   const [productDescription, setProductDescription] = useState('');
//   const [productPrice, setProductPrice] = useState('');
  
//   const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     const file = event.target.files?.[0];
//     if (file) {
//       const url = URL.createObjectURL(file);
//       setImageURL(url);
//       console.log('Selected file URL:', url);
//     }
//   };

//   const handleBookButtonClick = () => {
//     setSelectedProduct(null);
//     setShowModal(true);
//   };

//   const handleModalClose = () => {
//     setShowModal(false);
//     setSelectedProduct(null);
//   };

//   const handleFormSubmit = async () => {
//     try {
//       const productData = {
//         name: productName,
//         description: productDescription,
//         imageUrl: imageURL,
//         price: productPrice,
//       };

//       const response = await axios.post('http://localhost:9000/products', productData);
//       console.log('Product saved:', response.data);

//       // Reset form and close modal after successful submission
//       setProductName('');
//       setProductDescription('');
//       setProductPrice('');
//       setImageURL(null);
//       setShowModal(false);
//       setTimeout(() => {
//         toast.success(response.data.message);
//       }, 2000);
//     } catch (error) {
//         toast.error(error as any);
//     }
//   };
  
//   const handleUpdate = (id: string | null) => {
//     setSelectedProduct(id);
//     setShowModal(true);
//   };

//   const handleDelete=()=>{
//   }

//   const data = [
//     {
//       icon: <Home />,
//       title: 'Dashboard',
//       link: '/admin',
//     },
//     {
//       icon: <Finance />,
//       title: 'Invester',
//       link: '/admin/invester',
//     },
//     {
//       icon: <Task />,
//       title: 'Users',
//       link: '/admin/users',
//     },
//     {
//       icon: <Chat />,
//       title: 'Order',
//       link: '/admin/order',
//     },
//     {
//       icon: <Chat />,
//       title: 'Products',
//       link: '/admin/products',
//     },
//   ];

//   const orders = [
//     {
//       id: '2342343',
//       SNo: '1',
//       imageUrl:'/Home/image-1.jpg',
//       ProductName: 'Product 1',
//       Amount: '100',
//       KG: '2',
//     },
//     {
//       id: '23423423',
//       SNo: '2',
//       ProductName: 'Product 2',
//       imageUrl:'/Home/image-1.jpg',
//       Amount: '150',
//       KG: '3',
     
//     },
//     // Add more sample data as needed
//   ];

//   function hanldechange(value: SetStateAction<string>): void {
//     throw new Error('Function not implemented.');
//   }

//   return (
//     <div className='w-full'>
//       <Header />
//       <AdminSaidBar
//         data={data}
//         mainClassName="max-w-[320px] w-24 sm:w-1/6 text-black"
//         SideBarLogoClassName={''}
//       />
//       <div className='w-full flex flex-col justify-center items-center px-10 '>
//         <div className='w-full flex justify-end items-end py-4 px-2'>
//           <button className='bg-[#092C4C] text-white px-2 py-2 rounded-md' onClick={handleBookButtonClick}>+Add Products</button>
//         </div>
//         <div className='w-[80%] px-2 sm:px-10'>
//         <OrderTable data={orders} handleUpdate={handleUpdate} handleDelete={handleDelete} />
//         </div>
//       </div>
//       {showModal && (
//         <Modal
//           show={showModal}
//           className="!w-full overflow-auto"
//           containerClass="w-[70%] sm:w-1/2 md:w-1/3 px-1 sm:px-4 bg-white "
//           onClose={handleModalClose}
//         >
//           <div className="!w-full flex flex-col items-center">
//             <div className="flex justify-end w-full">
//               <div
//                 onClick={handleModalClose}
//                 className="relative  top bg-slate-100 w-5 h-5 flex justify-center items-center rounded-full -left-3 sm:top-2 cursor-pointer"
//               >
//                 X
//               </div>
//             </div>
//             <Addproducts
//               product={selectedProduct}
//               imageURL={imageURL}
//               onImageChange={handleImageChange}
//               productName={productName}
//               setProductName={setProductName}
//               productDescription={productDescription}
//               setProductDescription={setProductDescription}
//               productPrice={productPrice}
//               setProductPrice={setProductPrice}
//               onClick={handleFormSubmit}
//             />
//           </div>
//         </Modal>
//       )}


// {/* {showModal && (
//         <Modal
//           show={showModal}
//           className="!w-full overflow-auto"
//           containerClass="w-[70%] sm:w-1/2 md:w-1/3 px-1 sm:px-4 bg-white "
//           onClose={handleModalClose}
//         >
//           <div className="!w-full flex flex-col items-center">
//             <div className="flex justify-end w-full">
//               <div
//                 onClick={handleModalClose}
//                 className="relative  top bg-slate-100 w-5 h-5 flex justify-center items-center rounded-full -left-3 sm:top-2 cursor-pointer"
//               >
//                 X
//               </div>
//             </div>
//             <UpdateProducts
//               productId={selectedProduct} 
//                         />
//           </div>
//         </Modal>
//       )} */}
//       <ToastContainer/>
//     </div>
//   );
// }

// export default Index;

import AdminSaidBar from '@/component/Admin/AdminSaidBar';
import Header from '@/component/Admin/Header';
import React, { useState } from 'react';
import { Chat, Home, Task, Finance } from '../../../component/icon/sidebar';
import OrderTable from '@/component/Admin/OrderTable';
import Modal from '@/component/Modal';
import Addproducts from '@/component/Admin/Addproducts';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import UpdateProducts from '@/component/Admin/UpdateProducts';

function Index() {
    const [showModal, setShowModal] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState<string | null>(null);
    const [imageURL, setImageURL] = useState<string | null>(null);
    const [productName, setProductName] = useState('');
    const [productDescription, setProductDescription] = useState('');
    const [productPrice, setProductPrice] = useState('');

    const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            const url = URL.createObjectURL(file);
            setImageURL(url);
            console.log('Selected file URL:', url);
        }
    };

    const handleBookButtonClick = () => {
        setSelectedProduct(null);
        setShowModal(true);
    };

    const handleModalClose = () => {
        setShowModal(false);
        setSelectedProduct(null);
    };

    const handleFormSubmit = async () => {
        try {
            const productData = {
                name: productName,
                description: productDescription,
                imageUrl: imageURL,
                price: productPrice,
            };

            const response = await axios.post('http://localhost:9000/products', productData);
            console.log('Product saved:', response.data);

            setProductName('');
            setProductDescription('');
            setProductPrice('');
            setImageURL(null);
            setShowModal(false);
            toast.success(response.data.message);
        } catch (error) {
            toast.error(error as any);
        }
    };

    const handleUpdate = (id: string | null) => {
        setSelectedProduct(id);
        setShowModal(true);
    };

    const handleDelete = () => {
        // Add delete functionality here
    };

    const data = [
        {
            icon: <Home />,
            title: 'Dashboard',
            link: '/admin',
        },
        {
            icon: <Finance />,
            title: 'Invester',
            link: '/admin/invester',
        },
        {
            icon: <Task />,
            title: 'Users',
            link: '/admin/users',
        },
        {
            icon: <Chat />,
            title: 'Order',
            link: '/admin/order',
        },
        {
            icon: <Chat />,
            title: 'Products',
            link: '/admin/products',
        },
    ];

    const orders = [
        {
            id: '2342343',
            SNo: '1',
            imageUrl: '/Home/image-1.jpg',
            ProductName: 'Product 1',
            Amount: '100',
            KG: '2',
        },
        {
            id: '23423423',
            SNo: '2',
            ProductName: 'Product 2',
            imageUrl: '/Home/image-1.jpg',
            Amount: '150',
            KG: '3',
        },
    ];

    return (
        <div className="w-full">
            <Header />
            <AdminSaidBar
                data={data}
                mainClassName="max-w-[320px] w-24 sm:w-1/6 text-black"
                SideBarLogoClassName=""
            />
            <div className="w-full flex flex-col justify-center items-center px-10">
                <div className="w-full flex justify-end items-end py-4 px-2">
                    <button
                        className="bg-[#092C4C] text-white px-2 py-2 rounded-md"
                        onClick={handleBookButtonClick}
                    >
                        +Add Products
                    </button>
                </div>
                <div className="w-[80%] px-2 sm:px-10">
                    <OrderTable data={orders} handleUpdate={handleUpdate} handleDelete={handleDelete} />
                </div>
            </div>
            {showModal && (
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
                        {selectedProduct ? (
                            <UpdateProducts productId={selectedProduct} />
                        ) : (
                            <Addproducts
                                product={selectedProduct}
                                imageURL={imageURL}
                                onImageChange={handleImageChange}
                                productName={productName}
                                setProductName={setProductName}
                                productDescription={productDescription}
                                setProductDescription={setProductDescription}
                                productPrice={productPrice}
                                setProductPrice={setProductPrice}
                                onClick={handleFormSubmit}
                            />
                        )}
                    </div>
                </Modal>
            )}
            <ToastContainer />
        </div>
    );
}

export default Index;
