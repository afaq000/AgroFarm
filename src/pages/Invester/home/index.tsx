// import InvesterTable from '@/component/Invester/InvesterTable';
// import Confirmation from '@/component/Confirmation';
// import Header from '@/component/Invester/Header'
// import Modal from '@/component/Modal';
// import React, { useState } from 'react'

// function Index() {
//     const [showDetails1, setShowDetails1] = useState(false);
//     const [showImage1, setShowImage1] = useState(false);
//     const [showDetails2, setShowDetails2] = useState(false);
//     const [showImage2, setShowImage2] = useState(false);
//     const [showDetails3, setShowDetails3] = useState(false);
//     const [showImage3, setShowImage3] = useState(false);
//     const [showModal, setShowModal] = useState(false);

//     const toggleDetails1 = () => {
//       setShowDetails1(!showDetails1);
//     };

//     const toggleImage1 = () => {
//       setShowImage1(!showImage1);
//     };

//     const toggleDetails2 = () => {
//       setShowDetails2(!showDetails2);
//     };

//     const toggleImage2 = () => {
//       setShowImage2(!showImage2);
//     };

//     const toggleDetails3 = () => {
//         setShowDetails3(!showDetails3);
//       };

//       const toggleImage3 = () => {
//         setShowImage3(!showImage3);
//       };
//       const handleAddToCartClick = () => {
//         // Set showModal to true to show the modal
//         setShowModal(true);
//       };
//       const handleModalClose = () => {
//         setShowModal(false);
//       };

// const investors = [
//   {
//     id: '1',
//     SNo: '1',
//     // UserName: 'JohnDoe',
//     YourPlane: 'Basic Plan',
//     Amount: '1000',
//     OrderDate: '2024-05-01',
//     Orderexpire: '2024-06-01',
//     Status: 'Approved',
//   },
//   {
//     id: '2',
//     SNo: '2',
//     // UserName: 'JaneDoe',
//     YourPlane: 'Premium Plan',
//     Amount: '2000',
//     OrderDate: '2024-05-02',
//     Orderexpire: '2024-06-02',
//     Status: 'Approved',
//   },
//   {
//     id: '3',
//     SNo: '3',
//     // UserName: 'AliceSmith',
//     YourPlane: 'Basic Plan',
//     Amount: '1500',
//     OrderDate: '2024-05-03',
//     Orderexpire: '2024-06-03',
//     Status: 'Rejected',
//   },
//   {
//     id: '4',
//     SNo: '4',
//     // UserName: 'BobJohnson',
//     YourPlane: 'Premium Plan',
//     Amount: '2500',
//     OrderDate: '2024-05-04',
//     Orderexpire: '2024-06-04',
//     Status: 'Expired',
//   },
// ];

//     return (
//       <div className='w-full'>
//         <Header/>
//         <div className='flex flex-col w-full'>
//           <img src='/Invester/bannar.webp' alt='' className='w-full object-cover'/>
//           <div className='flex flex-col w-full items-center justify-center py-10'>
//             <div className='w-1/2'>
//               <p className='font-bold text-slate-500 px-2 py-2 text-center border cursor-pointer' onClick={toggleDetails1}>
//              "Unlock the potential of sustainable agriculture with Garlic Investem."
//                 <span className='font-extrabold px-2 py-2'>{showDetails1 ? '-' : '+'}</span>
//               </p>
//               {showDetails1 && (
//                 <div className='border px-2 py-2'>
//                   <p>
//                     Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat soluta, debitis sapiente alias recusandae voluptate blanditiis a rerum deserunt impedit corrupti laudantium esse minima ullam. Maxime nobis totam eveniet fuga?
//                   </p>
//                   <img src="/Invester/bannar.webp" alt=""  className=' object-cover'/>
//                 </div>
//               )}
//             </div>

//             <div className='w-1/2'>
//               <p className='font-bold text-slate-500 px-2 py-2 text-center border cursor-pointer' onClick={toggleDetails2}>
//              "Join us in revolutionizing the agricultural industry with Garlic Investem"{' '}
//                 <span className='font-extrabold px-2 py-2'>{showDetails2 ? '-' : '+'}</span>
//               </p>
//               {showDetails2 && (
//                 <div className='border px-2 py-2'>
//                   <p>
//                     Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat soluta, debitis sapiente alias recusandae voluptate blanditiis a rerum deserunt impedit corrupti laudantium esse minima ullam. Maxime nobis totam eveniet fuga?
//                   </p>
//                   <img src="/Invester/image-1.avif" alt=""  className=''/>
//                 </div>
//               )}
//             </div>

//             <div className='w-1/2'>
//               <p className='font-bold text-slate-500 px-2 py-2 text-center border cursor-pointer' onClick={toggleDetails3}>
//              "Discover lucrative opportunities in agribusiness with Garlic Investem."
//                 <span className='font-extrabold px-2 py-2'>{showDetails3 ? '-' : '+'}</span>
//               </p>
//               {showDetails3 && (
//                 <div className='border px-2 py-2'>
//                   <p>
//                     Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat soluta, debitis sapiente alias recusandae voluptate blanditiis a rerum deserunt impedit corrupti laudantium esse minima ullam. Maxime nobis totam eveniet fuga?
//                   </p>
//                   <img src="/Invester/image-11.avif" alt=""  className=''/>
//                 </div>
//               )}
//             </div>

//                     <p className='text-center text-[#092C4C] font-extrabold text-2xl py-10'>SUBSCRIPTION PLANS</p>

//             <div className='w-full flex justify-center items-center'>
//                 <div className='w-[80%] mdx:w-[70%] flex-col sm:flex sm:flex-row gap-4 '>
//                 <div className='w-full sm:w-1/3 flex border shadow-2xl flex-col justify-center items-center  md:px-5'>
//                     <p className='text-center font-extrabold text-4xl sm:text-xl md:text-2xl mdx:text-3xl lg:text-4xl mt-4 gap-3 text-[#092C4C] py-2'>BASIC</p>
//                     <p className='py-2 text-xs text-center text-[#092C4C] '>Everything you need to create your website</p>
//                     <p className='py-2 mt-7 text-base sm:text-sm  mdx:text-base font-semibold text-nowrap  '>Subscription Amount</p>
//                     <span className='font-bold border shadow-inner rounded-full text-nowrap pl-4 px-8 py-2 text-xl md:text-3xl  text-[#092C4C]'><span className='font-bold text-lg text-[#092C4C]  py-2'> Rs: </span>1234<span className='text-sm'></span></span>
//                     <button className='mt-6 w-full bg-[#092C4C] mb-4 py-3 text-nowrap text-white font-bold' onClick={handleAddToCartClick}>Add To Cart </button>
//                 </div>

//                 <div className='w-full sm:w-1/3 flex border shadow-2xl flex-col justify-center items-center px-5'>
//                     <p className='text-center font-extrabold  text-4xl sm:text-xl md:text-2xl mdx:text-3xl lg:text-4xl mt-4 gap-3 text-[#092C4C] py-2'>PREMIUM</p>
//                     <p className='py-2 text-xs text-[#092C4C] text-center '>Everything you need to create your website</p>
//                     <p className='py-2 mt-7 text-base sm:text-sm  mdx:text-base  font-semibold text-nowrap '>Subscription Amount</p>
//                     <span className='font-bold border shadow-inner rounded-full pl-4 px-8 py-2 text-xl md:text-3xl text-nowrap text-[#092C4C]'><span className='font-bold text-lg text-[#092C4C]  py-2'> Rs: </span>1234<span className='text-sm'></span></span>
//                     <button className='mt-6 w-full bg-[#092C4C] mb-4 py-3 text-white font-bold' onClick={handleAddToCartClick}>Add To Cart </button>
//                 </div>

//                 <div className='w-full sm:w-1/3 flex border shadow-2xl flex-col justify-center items-center px-5'>
//                     <p className='text-center font-extrabold  text-4xl sm:text-xl md:text-2xl mdx:text-3xl lg:text-4xl mt-4  gap-3 text-[#092C4C] py-2 '>STANDERD</p>
//                     <p className='py-2 text-xs text-center text-[#092C4C] '>Everything you need to create your website</p>
//                     <p className='py-2 mt-7 text-base sm:text-sm  mdx:text-base  font-semibold text-nowrap '>Subscription Amount</p>
//                     <span className='font-bold border shadow-inner rounded-full pl-4 px-8 py-2 text-nowrap text-xl md:text-3xl text-[#092C4C]'><span className='font-bold text-lg text-[#092C4C]  py-2'> Rs: </span>1234<span className='text-sm'></span></span>
//                     <button className='mt-6 w-full bg-[#092C4C] mb-4 py-3 text-white font-bold' onClick={handleAddToCartClick}>Add To Cart </button>
//                 </div>

//             </div>

//             </div>

//           </div>

//         </div>

//         {showModal && (
//         <Modal
//           show={showModal}
//           className="!w-full overflow-auto"
//           containerClass="w-[70%] sm:w-1/2 md:w-1/3 px-1 sm:px-4 bg-white "
//           onClose={() => {
//             console.log('Function not implemented.');
//           }}
//         >
//           <div className="!w-full flex flex-col items-center">
//             <div className="flex justify-end w-full">
//               <div
//                 onClick={handleModalClose}
//                 className="relative top-4 bg-slate-400 w-7 h-7 flex justify-center items-center rounded-full -left-4 sm:top-6 cursor-pointer"
//               >
//                 X
//               </div>
//             </div>
//            <Confirmation title="ARE YOU SURE" oncancelclick={handleModalClose}/>
//           </div>
//         </Modal>
//       )}

// <div className='w-full flex justify-center items-center pr-24 '>
//   <div className='w-full sm:w-[90%] md:[70%]'>
//           <InvesterTable data={investors} handleApprove={function (id: string): void {
//               throw new Error('Function not implemented.');
//             } } handleReject={function (id: string): void {
//               throw new Error('Function not implemented.');
//             } }/>

//       </div>
//       </div>
//       </div>
//     );
// }

// export default Index;

import Confirmation from "@/component/Confirmation";
import Header from "@/component/Invester/Header";
import Modal from "@/component/Modal";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


function Index() {
  const [showDetails1, setShowDetails1] = useState(false);
  const [showImage1, setShowImage1] = useState(false);
  const [showDetails2, setShowDetails2] = useState(false);
  const [showImage2, setShowImage2] = useState(false);
  const [showDetails3, setShowDetails3] = useState(false);
  const [showImage3, setShowImage3] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const toggleDetails1 = () => {
    setShowDetails1(!showDetails1);
  };

  const toggleImage1 = () => {
    setShowImage1(!showImage1);
  };

  const toggleDetails2 = () => {
    setShowDetails2(!showDetails2);
  };

  const toggleImage2 = () => {
    setShowImage2(!showImage2);
  };

  const toggleDetails3 = () => {
    setShowDetails3(!showDetails3);
  };

  const toggleImage3 = () => {
    setShowImage3(!showImage3);
  };
  // const handleAddToCartClick = () => {
  //   // Set showModal to true to show the modal
  //   setShowModal(true);
  // };
  const handleModalClose = () => {
    setShowModal(false);
  };
  const [plans, setPlans] = useState([]);
  const [planId,setPlaneId]=useState(null)

  useEffect(() => {
    axios
      .get("http://localhost:9000/plans")
      .then((response) => {
        setPlans(response.data);
        console.log(response.data, "plans data");
      })
      .catch((error) => {
        console.error("Error fetching plans data:", error);
      });
      console.log(plans, "plllansss")
  }, []);

  const [purchaseDetails, setPurchaseDetails] = useState(null);
  const handleAddToCartClick = async () => {
    {plans.map((item)=>{
      setPlaneId(item._id)
    })}
    try {
      const response = await axios.post(`http://localhost:9000/buy`,{
        planeId:planId,
        userId: localStorage.getItem("userId")
      });
    
      toast.success(response.data.message);
      // setError('');
     const purchaseDetails = response.data;
      setShowModal(true);
      setPurchaseDetails(purchaseDetails);
    } catch (error) {
      console.error('Error:', error.message);
      toast.error(error.message);
    
    }
  };
  console.log(purchaseDetails, "asas")


  return (
    <div className="w-full">
      <Header />
      <div className="flex flex-col w-full">
        <img
          src="/Invester/bannar.webp"
          alt=""
          className="w-full object-cover"
        />
        <div className="flex flex-col w-full items-center justify-center py-10">
          <div className="w-1/2">
            <p
              className="font-bold text-slate-500 px-2 py-2 text-center border cursor-pointer"
              onClick={toggleDetails1}
            >
              "Unlock the potential of sustainable agriculture with Garlic
              Investem."
              <span className="font-extrabold px-2 py-2">
                {showDetails1 ? "-" : "+"}
              </span>
            </p>
            {showDetails1 && (
              <div className="border px-2 py-2">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Quaerat soluta, debitis sapiente alias recusandae voluptate
                  blanditiis a rerum deserunt impedit corrupti laudantium esse
                  minima ullam. Maxime nobis totam eveniet fuga?
                </p>
                <img
                  src="/Invester/bannar.webp"
                  alt=""
                  className=" object-cover"
                />
              </div>
            )}
          </div>

          <div className="w-1/2">
            <p
              className="font-bold text-slate-500 px-2 py-2 text-center border cursor-pointer"
              onClick={toggleDetails2}
            >
              "Join us in revolutionizing the agricultural industry with Garlic
              Investem"{" "}
              <span className="font-extrabold px-2 py-2">
                {showDetails2 ? "-" : "+"}
              </span>
            </p>
            {showDetails2 && (
              <div className="border px-2 py-2">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Quaerat soluta, debitis sapiente alias recusandae voluptate
                  blanditiis a rerum deserunt impedit corrupti laudantium esse
                  minima ullam. Maxime nobis totam eveniet fuga?
                </p>
                <img src="/Invester/image-1.avif" alt="" className="" />
              </div>
            )}
          </div>

          <div className="w-1/2">
            <p
              className="font-bold text-slate-500 px-2 py-2 text-center border cursor-pointer"
              onClick={toggleDetails3}
            >
              "Discover lucrative opportunities in agribusiness with Garlic
              Investem."
              <span className="font-extrabold px-2 py-2">
                {showDetails3 ? "-" : "+"}
              </span>
            </p>
            {showDetails3 && (
              <div className="border px-2 py-2">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Quaerat soluta, debitis sapiente alias recusandae voluptate
                  blanditiis a rerum deserunt impedit corrupti laudantium esse
                  minima ullam. Maxime nobis totam eveniet fuga?
                </p>
                <img src="/Invester/image-11.avif" alt="" className="" />
              </div>
            )}
          </div>

          <p className="text-center text-[#092C4C] font-extrabold text-2xl py-10">
            SUBSCRIPTION PLANS
          </p>

          <div className="w-full flex justify-center items-center">
            <div className="w-[80%] mdx:w-[70%] flex-col sm:flex sm:flex-row gap-4 ">
              {plans.map((plan, index) => (
                <div
                  key={index}
                  className="w-full sm:w-1/3 flex border shadow-2xl flex-col justify-center items-center md:px-5"
                >
                  <p className="text-center font-extrabold text-4xl sm:text-xl md:text-2xl mdx:text-3xl lg:text-4xl mt-4 gap-3 text-[#092C4C] py-2">
                    {plan.name}
                  </p>
                  <p className="py-2 text-xs text-center text-[#092C4C]">
                    {plan.description}
                  </p>
                  <p className="py-2 mt-7 text-base sm:text-sm mdx:text-base font-semibold text-nowrap">
                    Subscription Amount
                  </p>
                  <span className="font-bold border shadow-inner rounded-full text-nowrap pl-4 px-8 py-2 text-xl md:text-3xl text-[#092C4C]">
                    <span className="font-bold text-lg text-[#092C4C]  py-2">
                      {" "}
                      Rs:{" "}
                    </span>
                    {plan.amount}
                    <span className="text-sm"></span>
                  </span>
                  <button
                    className="mt-6 w-full bg-[#092C4C] mb-4 py-3 text-nowrap text-white font-bold"
                    onClick={handleAddToCartClick}
                  >
                    Book{" "}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* {showModal && (
        <Modal
          show={showModal}
          className="!w-full overflow-auto"
          containerClass="w-[70%] sm:w-1/2 md:w-1/3 px-1 sm:px-4 bg-white "
          onClose={() => {
            console.log("Function not implemented.");
          }}
        >
          <div className="!w-full flex flex-col items-center">
            <div className="flex justify-end w-full">
              <div
                onClick={handleModalClose}
                className="relative top-4 bg-slate-400 w-7 h-7 flex justify-center items-center rounded-full -left-4 sm:top-6 cursor-pointer"
              >
                X
              </div>
            </div>
            <Confirmation
              title="ARE YOU SURE"
              oncancelclick={handleModalClose}
              purchaseDetails={purchaseDetails}
            />
          </div>
        </Modal>
      )} */}

      <div className="w-full flex justify-center items-center pr-24 ">
        <div className="w-full sm:w-[90%] md:[70%]"></div>
      </div>
      <ToastContainer/>
    </div>
  );
}

export default Index;
