//@ts-nocheck
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

type Props = {
    productId: string;
    isOpen: boolean;
    onClose: () => void;
};

const UpdateProducts: React.FC<Props> = ({ productId, isOpen, onClose }) => {
    const [productName, setProductName] = useState('');
    const [productDescription, setProductDescription] = useState('');
    const [productPrice, setProductPrice] = useState('');
    const [imageURL, setImageURL] = useState('');
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string>('');
    // const [id,setId]=useState('')

    console.log("Detail", productId);

    useEffect(() => {
        if (!isOpen) {
            resetForm();
        }
    }, [isOpen]);

    useEffect(() => {
        if (productId) {
            fetchProductDetails();
        }
    }, [productId]);

    // const handleImageChange = (e) => {
    //     const file = e.target.files[0];
    //         setImageURL(URL.createObjectURL(file));
    //         setSelectedFile(file);
    // };
    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (event) => {
                const img = new Image();
                img.src = event.target?.result as string;
                img.onload = () => {
                    const canvas = document.createElement('canvas');
                    const ctx = canvas.getContext('2d');
                    const max_width = 600;
                    const scaleSize = max_width / img.width;
                    canvas.width = max_width;
                    canvas.height = img.height * scaleSize;
                    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
                    canvas.toBlob((blob) => {
                        const compressedFile = new File([blob!], file.name, { type: 'image/jpeg' });
                        const compressedFileReader = new FileReader();
                        compressedFileReader.onloadend = () => {
                            setImageURL(compressedFileReader.result as string);
                        };
                        compressedFileReader.readAsDataURL(compressedFile);
                    }, 'image/jpeg', 0.4);
                };
            };
            reader.readAsDataURL(file);
        }
    };

    const fetchProductDetails = async () => {
        try {
            setProductName(productId.name);
            setProductDescription(productId.description);
            setProductPrice(productId.price);
            setImageURL(productId.imageUrl);
            // setId(productId._id)
        } catch (error) {
            console.error('Error fetching product details:', error);
            setError('Failed to fetch product details. Please try again.');
        }
    };

    const resetForm = () => {
        setProductName('');
        setProductDescription('');
        setProductPrice('');
        setImageURL('');
        setLoading(false);
        setError('');
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);

        const formData = new FormData();
        formData.append('name', productName);
        formData.append('description', productDescription);
        formData.append('price', productPrice);
        if (selectedFile) {
            formData.append('image', selectedFile);
        }
        try {
            const response = await axios.put(`http://localhost:9000/products/${productId._id}`, {
                name:productName,
                description:productDescription,
                price:productPrice,
                image:imageURL

            });
            console.log(response,"afaq")
            console.log('Product updated successfully');
            toast.success('Product updated successfully')
            onClose();
        } catch (error) {
            console.error('Error updating product:', error);
            setError('Failed to update product. Please try again.');
        } finally {
            setLoading(false);
        }
    };

 

    if (!isOpen) return null;

    return (
        <div className="w-full flex flex-col gap-2 p-2 max-h-[80vh] overflow-auto">
            <p className="text-lg font-bold -mt-[16px]">Update Products</p>
            <form onSubmit={handleSubmit}>
                {error && <div className="text-red-500">{error}</div>}
                <div className="flex flex-col">
                    <label htmlFor="image" className="text-sm font-semibold py-1">
                        Select Image
                    </label>
                    <input
                        type="file"
                        id="image"
                        name={imageURL}
                        className="border border-gray-300 rounded-md p-2"
                        onChange={handleImageChange}
                    />
                    {imageURL && <img src={imageURL} alt="Selected" className="mt-2 w-[300px] h-auto object-cover" />}
                </div>
                <div className="flex flex-col">
                    <label htmlFor="productName" className="text-sm font-semibold py-1">
                        Product Name
                    </label>
                    <input
                        type="text"
                        id="productName"
                        name={productName}
                        className="border border-gray-300 rounded-md p-2"
                        placeholder="Enter Product Name"
                        value={productName}
                        onChange={(e) => setProductName(e.target.value)}
                    />
                </div>
                <div className="flex flex-col">
                    <label htmlFor="productDescription" className="text-sm font-semibold py-1">
                        Product Description
                    </label>
                    <textarea
                        id="productDescription"
                        name={productDescription}
                        className="border border-gray-300 rounded-md p-2"
                        placeholder="Enter Product Description"
                        value={productDescription}
                        onChange={(e) => setProductDescription(e.target.value)}
                    />
                </div>
                <div className="flex flex-col">
                    <label htmlFor="productPrice" className="text-sm font-semibold py-1">
                        Product Price
                    </label>
                    <input
                        type="number"
                        id="productPrice"
                        name={productPrice}
                        className="border border-gray-300 rounded-md p-2"
                        placeholder="Enter Product Price"
                        value={productPrice}
                        onChange={(e) => setProductPrice(e.target.value)}
                    />
                </div>
                <div className="w-full flex justify-center mt-5">
                    <button
                        type="submit"
                        className="w-full inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        disabled={loading}
                    >
                        {loading ? 'Updating...' : 'Update Product'}
                    </button>
                    <button
                        type="button"
                        onClick={onClose}
                        className="w-full inline-flex justify-center py-2 px-4 mt-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-gray-700 bg-gray-200 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        disabled={loading}
                    >
                        Cancel
                    </button>
                </div>
            </form>
            <ToastContainer/>
        </div>
    );
};

export default UpdateProducts;
