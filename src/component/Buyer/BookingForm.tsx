import React from 'react';

type Props = {
  className?: string;
  title?: string;
  onClick?: () => void;
  ondeleteclick?: () => void;
};

const BookingForm = ({
  className,
  title,
  onClick,
  ondeleteclick,
}: Props) => {
  return (
    <div className={`${className} w-full flex flex-col gap-4 p-4 `}>
      <p className="text-lg font-bold -mt-[25px]">Details</p>
      {title && <h2 className="text-lg font-bold">Details</h2>}

      {/* Quantity Field */}
      <div className="flex flex-col">
        <label htmlFor="quantity" className="text-sm font-semibold py-2">
          Quantity In Kg
        </label>
        <input
          type="text"
          id="quantity"
          name="quantity"
          className="border border-gray-300 rounded-md p-2"
          placeholder="Enter quantity In Kg"
        />
      </div>

      {/* Address Field */}
      <div className="flex flex-col">
        <label htmlFor="address" className="text-sm font-semibold py-2">
          Address
        </label>
        <input
          type="text"
          id="address"
          name="address"
          className="border border-gray-300 rounded-md p-2"
          placeholder="Enter address"
        />
      </div>

      {/* Transaction ID Field */}
      <div className="flex flex-col">
        <label htmlFor="transactionId" className="text-sm font-semibold py-2">
          Transaction ID
        </label>
        <input
          type="text"
          id="transactionId"
          name="transactionId"
          className="border border-gray-300 rounded-md p-2"
          placeholder="Enter transaction ID"
        />
      </div>

      <div className='w-full flex justify-center'>
        <button className='max-w-[80px] bg-blue-600 rounded-lg font-semibold px-3 py-2 text-white'    onClick={onClick}>
            <p>Order</p>
        </button>

      </div>
    </div>
  );
};

export default BookingForm;
