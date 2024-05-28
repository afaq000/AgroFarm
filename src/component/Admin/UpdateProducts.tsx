import axios from 'axios';
import React, { useState, useEffect } from 'react';

type Props = {
    productId: string | null;
};

const UpdateProducts = ({ productId="664a71d14346728ba0184f78" }: Props) => {
    const [productName, setProductName] = useState('');
    const [productDescription, setProductDescription] = useState('');
    const [productPrice, setProductPrice] = useState();
    const [imageURL, setImageURL] = useState('');
    const [selectedFile, setSelectedFile] = useState<File | null>(null);

    useEffect(() => {
        const fetchProductData = async () => {
            if (productId) {
                try {
                    const response = await axios.get(`http://localhost:9000/products/${productId}`);
                    const product = response.data;
                    setProductName(product.id);
                    setProductName(product.name);
                    setProductDescription(product.description);
                    setProductPrice(product.price);
                    setImageURL(product.imageUrl);
                } catch (error) {
                    console.error('Error fetching product data:', error);
                }
            }
        };

        fetchProductData();
    }, [productId]);

    const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            const url = URL.createObjectURL(file);
            setSelectedFile(file);
            setImageURL(url);
            console.log('Selected file URL:', url);
        }
    };

    const handleUpdateProduct = async () => {
        try {
            let updatedProductData = {
                name: productName,
                description: productDescription,
                imageUrl: imageURL,
                price: productPrice,
                
            };

            // If a new file is selected, you might need to handle file upload
            if (selectedFile) {
                const formData = new FormData();
                formData.append('file', selectedFile);
                // Add other product details to formData if required
                formData.append('name', productName);
                formData.append('description', productDescription);
                formData.append('price', productPrice);

                // Upload the file and get the URL (this part is omitted for brevity)
                // const uploadResponse = await axios.post('UPLOAD_URL', formData);
                // updatedProductData.imageUrl = uploadResponse.data.url;
            }

            const response = await axios.put(`http://localhost:9000/products/${productId}`, updatedProductData);
            console.log('Product updated:', response.data);
            // Optionally, handle success (e.g., show a success message or close the modal)
        } catch (error) {
            console.error('Error updating product:', error);
            // Optionally, handle error (e.g., show an error message)
        }
    };

    return (
        <div className="w-full flex flex-col gap-2 p-2 max-h-[80vh] overflow-auto">
            <p className="text-lg font-bold -mt-[16px]">{productId}</p>

            <div className="flex flex-col">
                <label htmlFor="file" className="text-sm font-semibold py-1">
                    Select Image
                </label>
                <input
                    type="file"
                    id="file"
                    name="file"
                    className="border border-gray-300 rounded-md p-2"
                    onChange={handleImageChange}
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
                    name="productName"
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
                <textarea
                    id="Description"
                    name="productDescription"
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
                    name="productPrice"
                    className="border border-gray-300 rounded-md p-2"
                    placeholder="Enter Product Price"
                    value={productPrice}
                    onChange={(e) => setProductPrice(e.target.value)}
                />
            </div>

            <div className="w-full flex justify-center">
                <button
                    className="max-w-[80px] bg-blue-600 rounded-lg font-semibold px-3 py-1 text-white"
                    onClick={handleUpdateProduct}
                >
                    <p>Update</p>
                </button>
            </div>
        </div>
    );
};

export default UpdateProducts;
