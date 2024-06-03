//@ts-nocheck
import React, { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import Modal from '../Modal';
import { CiEdit } from "react-icons/ci";
import { MdDeleteOutline } from "react-icons/md";
import UpdateProducts from './UpdateProducts';
import 'react-toastify/dist/ReactToastify.css';

interface User {
    id: string;
    SNo: string;
    imageUrl: string;
    ProductName: string;
    Amount: string;
    KG: string;
}

interface Props {
    data: User[];
}

const OrderTable: React.FC<Props> = ({ data }) => {
  const [selectedproductId, setSelectedproductId] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
console.log("order",data)

    const handleUpdate = (productId: any) => {
      setSelectedproductId(productId);
      setIsModalOpen(true);
    };
  
    const closeModal = () => {
      setIsModalOpen(false);
      setSelectedproductId(null);
    };


    const handleDelete = async (id: string) => {
      try {
            const response = await axios.delete(`http://localhost:9000/products/${id}`);
            toast.success("Product is sucessfully deleted")
    
          } catch (error) {
            console.error('Error deleting category:', error);
          }
        };

    return (
        <div className="w-full overflow-x-auto ml-10 sm:ml-14 mt-10">
            <table className="w-full min-w-[500px]">
                <thead className="w-full">
                    <tr className="w-full border-b-[1.5px] pr-12 pl-6 font-medium">
                        <th className="py-2 px-3 text-nowrap text-left text-sm font-semibold font-OpenSans leading-6 text-[#092C4C] pl-10">S/No</th>
                        <th className="py-2 px-3 text-nowrap text-center text-sm font-semibold font-OpenSans leading-6 text-[#092C4C]">Image</th>
                        <th className="py-2 px-3 text-nowrap text-center text-sm font-semibold font-OpenSans leading-6 text-[#092C4C]">Product Name</th>
                        <th className="py-2 px-3 text-nowrap text-center text-sm font-semibold font-OpenSans leading-6 text-[#092C4C]">Price/kg</th>
                        {/* <th className="py-2 px-3 text-nowrap text-center text-sm font-semibold font-OpenSans leading-6 text-[#092C4C]">Quantity/kg</th> */}
                        <th className="py-2 px-3 text-nowrap text-center text-sm font-semibold font-OpenSans leading-6 text-[#092C4C]">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {data?.map((row, index) => (
                        <tr key={row?.id} className="w-full text-[#092C4C] text-sm font-NotoSans text-nowrap whitespace-nowrap font-semibold rounded-[3px] pr-12 pl-6">
                            <td className="py-3 text-left pl-12">{index + 1}</td>
                            <td className="py-3 text-center flex justify-center items-center">
                                <img src={row.imageUrl} alt="image" className='w-16 h-16 rounded-full object-cover' />
                            </td>
                            <td className="py-3 text-center">{row.name}</td>
                            <td className="py-3 text-center">{row.price}</td>
                            {/* <td className="py-3 text-center">{row.KG}</td> */}
                            <td className="py-3 text-center">
                                <button onClick={() => handleUpdate(row)} className='text-[8px] px-2 font-extrabold rounded-sm mr-2'><CiEdit className='w-[20px] h-[40px]'/></button>
                                <button onClick={() => handleDelete(row._id)} className=' text-[8px] px-2 font-extrabold rounded-sm'><MdDeleteOutline className='w-[20px] h-[40px]'/></button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
                    
                      <UpdateProducts productId={selectedproductId}
                        isOpen={isModalOpen} 
                        onClose={closeModal} 
                      />
                 
            <ToastContainer />
        </div>
    );
};

export default OrderTable;
