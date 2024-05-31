import React, { useState } from 'react';
import axios from 'axios';

type Props = {
  className?: string;
  title?: string;
  onClick?: () => void;
  onSubmit: (formData: FormData) => void;
};

type FormData = {
  quantity: string;
  address: string;
};

const BookingForm = ({ className, title, onClick, onSubmit }: Props) => {
  const [quantity, setQuantity] = useState("");
  const [address, setAddress] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit({ quantity, address }); // Pass form data to onSubmit function
  };

  return (
    <div className={`w-full ${className}`}>
      <p className="text-lg font-bold -mt-16">Details</p>
      <form onSubmit={handleSubmit} className="flex flex-col gap-2 p-2 max-h-80vh overflow-auto">
        <div className="flex flex-col">
          <label htmlFor="quantity" className="text-sm font-semibold py-1">
            Quantity
          </label>
          <input
            type="text"
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
            className="border border-gray-300 rounded-md p-2"
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
  );
};

export default BookingForm;
