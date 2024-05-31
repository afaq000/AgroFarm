import React from 'react';

type Props = {
  className?: string;
  title?: string;
  onClick?: () => void;
  ondeleteclick?: () => void;
  imageURL: string | null;
  onImageChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  productName: string;
  setProductName: React.Dispatch<React.SetStateAction<string>>;
  productDescription: string;
  setProductDescription: React.Dispatch<React.SetStateAction<string>>;
  productPrice: string;
  setProductPrice: React.Dispatch<React.SetStateAction<string>>;
};

const Addproducts = ({
  className,
  onClick,
  imageURL,
  onImageChange,
  productName,
  setProductName,
  productDescription,
  setProductDescription,
  productPrice,
  setProductPrice,
}: Props) => {
  return (
    <div className={`${className} w-full h-full max-h-[80vh] flex flex-col gap-2 p-2 overflow-y-auto`}>
      <p className="text-lg font-bold -mt-[25px]">Details</p>

      <div className="flex flex-col">
        <label htmlFor="file" className="text-sm font-semibold py-1">
          Select Image
        </label>
        <input
          type="file"
          id="file"
          name="file"
          className="border border-gray-300 rounded-md p-2"
          onChange={onImageChange}
        />
        {imageURL && <img src={imageURL} alt="Selected" className="mt-2 w-full h-auto object-cover" />}
      </div>

      <div className="flex flex-col">
        <label htmlFor="Name" className="text-sm font-semibold py-1">
          Product Name
        </label>
        <input
          type="text"
          id="Name"
          name="Name"
          className="border border-gray-300 rounded-md p-2"
          placeholder="Enter Product Name"
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
        />
      </div>

      <div className="flex flex-col">
        <label htmlFor="Description" className="text-sm font-semibold py-1">
          Product Description
        </label>
        <input
          type="text"
          id="Description"
          name="Description"
          className="border border-gray-300 rounded-md p-2"
          placeholder="Enter Product Description"
          value={productDescription}
          onChange={(e) => setProductDescription(e.target.value)}
        />
      </div>

      <div className="flex flex-col">
        <label htmlFor="Price" className="text-sm font-semibold py-1">
          Product Price
        </label>
        <input
          type="text"
          id="Price"
          name="Price"
          className="border border-gray-300 rounded-md p-2"
          placeholder="Enter Product Price"
          value={productPrice}
          onChange={(e) => setProductPrice(e.target.value)}
        />
      </div>

      <div className="w-full flex justify-center">
        <button
          className="max-w-[80px] bg-blue-600 rounded-lg font-semibold px-3 py-1 text-white"
          onClick={onClick}
        >
          <p>Order</p>
        </button>
      </div>
    </div>
  );
};

export default Addproducts;
