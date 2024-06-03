//@ts-nocheck
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AdminSaidBar from '@/component/Admin/AdminSaidBar';
import Header from '@/component/Admin/Header';
import { Chat, Home, Task, Finance, Attendance, Rewards } from '../../../component/icon/sidebar';
// import OrderTable from '@/component/Admin/OrderTable';
import Modal from '@/component/Modal';
import Addproducts from '../../../component/Admin/Addproducts';
import OrderTable from '@/component/Admin/ProductTable';
import { BoxIcon } from '@/component/icon';

function Index() {
    const [showModal, setShowModal] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState<string | null>(null);
    const [imageURL, setImageURL] = useState<string | null>(null);
    const [productName, setProductName] = useState('');
    const [productDescription, setProductDescription] = useState('');
    const [productPrice, setProductPrice] = useState('');
    const [products, setProducts] = useState([]);

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


    const handleBookButtonClick = () => {
        setSelectedProduct(null);
        setShowModal(true);
    };

    const handleModalClose = () => {
        setShowModal(false);
        setSelectedProduct(null);
    };


    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get('http://localhost:9000/products');
                setProducts(response.data);
            } catch (error) {
                console.error('Error fetching products:', error);
                toast.error('Error fetching products');
            }
        };

        fetchProducts();
    }, []);

    
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

    const data = [
        {
          icon: <Home />,
          title: 'Dashboard',
          link: '/admin/dashboard',
        },
        {
          icon: <Finance />,
          title: 'investor',
          link: '/admin/investor',
        },
        {
          icon: <Task />,
          title: 'Users',
          link: '/admin/users',
        },
        {
          icon: <BoxIcon />,
          title: 'Order',
          link: '/admin/order',
        },
        {
          icon: <Attendance />,
          title: 'Products',
          link: '/admin/products',
        },
        {
          icon: <Rewards />,
          title: 'Plans',
          link: '/admin/plans',
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
                        + Add Products
                    </button>
                </div>
                <div className="w-[80%] px-2 sm:px-10">
                <p className='px-14 xxs:-mt-14 text-[#092C4C] font-extrabold text-2xl'>PRODUCTS</p>
                    <OrderTable data={products} />
                </div>
            </div>
            {/* {showModal && ( */}
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
                    </div>
                </Modal>
            {/* )} */}
            <ToastContainer />
        </div>
    );
}

export default Index;

