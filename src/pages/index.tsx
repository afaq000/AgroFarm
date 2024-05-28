// import Navbar from '@/component/NavBar'
import HomeSlider from "@/component/Buyer/HomeSilder";
import Layout from "@/component/Buyer/Layout";
import Navbar from "@/component/Buyer/NavBar";
import Link from "next/link";
import React from "react";

function index() {

  const imagePaths = [
    { image: "/Home/image-1.jpg",
    pargph:"Spring garlic — This type of garlic looks nothing like its garlic siblings (it closely resembles a scallion) and has a more mild taste."
     },
    { image: "/Home/image-2.jpg",
      pargph:"Different tastes and looks — It might not surprise you that garlic varieties will look different, but did you know they can have different tastes, too?"
     },
    { image: "/Home/image-3.jpg",
      pargph:"Baja California White: bright white cloves; bold garlic flavor; harvested in June (Best time to buy: mid-June to November)"
     },
    // { image: "/Home/image-4.jpg" },
    // { image: "/Home/image-5.jpg" },
    // { image: "/Home/image-6.jpg" },
    // { image: "/Home/image-7.jpg" },
    // { image: "/Home/image-8.jpg" },
  ];
  return (
    <Layout>
      <div className="w-full text-[#092C4C] ">
        {/* <Navbar/> */}
        {/* <HomeSlider /> */}
        <div className="w-full h-[500px] bg-[#092C4C] flex flex-col justify-center items-center   lg:flex lg:flex-row lg:justify-between">
          <div className="text-white text-nowrap lg:text-wrap font-bold text-3xl xxs:text-4xl sm:text-4xl w-1/2 flex items-center justify-center px-5">
                <p >WELCOME TO AGROFRAM</p>

          </div>
          <div className="w-1/2 flex justify-center items-center">
            <div className="w-full mt-20 sm:mt-0 sm:w-[80%]">
            <img src="/Home/garlic-tanspraent.png" alt="agro"  className="w-[100%] "/>
            </div>
          </div>

        </div>
        <div className="w-full px-5 md:px-14 flex flex-col ">
          <p className="text-center text-[#092C4C]  text-5xl mt-5 font-semibold ">
             AGROFRAM
          </p>
          <p className="text-center">_________________</p>
          <p className="text-center font-semibold text-gray-500">
           AGROFRAM is the excellent source of vitamins E, C, and A. It
            also contains allicin, which has been known for its antibacterial
            properties.
          </p>
          <div className="flex flex-col md:flex md:flex-row w-full py-5 gap-4">
            <div className="w-full md:w-1/2 text-justify">
              <p>
              <span className="text-3xl font-bold">What is AGROFRAM?</span> or Elephant garlic (Allium ampeloprasum)
                seems like an enormous clove however if truth be told, isn’t
                real garlic however additional closely associated with a leek.
                it’s a hardy bulb with massive blue-green leaves. This perennial
                herb boasts AN oversize pink or purple stem that seems within
                the spring or summer. below the bottom, a massive|an outsized|an
                oversized bulb consisting of 5 to 6 large cloves enclosed by
                smaller bulblets grows. This liliid monocot genus plant attains
                a height of regarding three feet (1 m.) from bulb to the tip of
                the strap-like leaves and originates in Pakistan.below the bottom, a massive|an outsized|an
                oversized bulb consisting of 5 to 6 large cloves enclosed by
                smaller bulblets grows. This liliid monocot genus plant attains
                a height of regarding three feet (1 m.) from bulb to the tip of
                the strap-like leaves and originates in Pakistan.
              </p>
            </div>
            
            <div className="w-full md:w-1/2 flex flex-col">
              <img src="/Home/image-1.jpg" alt="" className="w-full h-[70%] object-cover rounded-lg" />
            </div>
          </div>
        </div>


        <p className="text-center text-3xl sm:text-4xl font-bold px-10 ">The Different Types of Garlic</p>


        <div className="w-full flex flex-col sm:flex sm:flex-col px-10">
              <div className="flex flex-col sm:flex sm:flex-row w-full justify-between">
                <div className="w-full md:w-1/2 px-3 py-3">
                  <img
                    src="/Home/ban-1.jpg"
                    alt=""
                    className="w-full h-[200px] rounded-lg shadow-md object-cover"
                  />
                  <p className="text-center  text-3xl md:text-lg lg:text-3xl mt-2 font-semibold">
                  Hardneck Garlic 
                  </p>
                </div>
                <div className="w-full md:w-1/2 px-3 py-3">
                  <img
                    src="/Home/ban-2.jpeg"
                    alt=""
                    className="w-full h-[200px] rounded-lg shadow-md  object-cover"
                  />
                  <p className="text-center  text-3xl md:text-lg lg:text-3xl mt-2 font-semibold">
                  Softneck Garlic
                  </p>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row w-full justify-between">
                <div className="w-full md:w-1/2 px-3 py-3">
                  <img
                    src="/Home/ban-3.jpg"
                    alt=""
                    className="w-full h-[200px] rounded-lg shadow-md  object-cover"
                  />
                  <p className="text-center  text-3xl md:text-lg lg:text-3xl mt-2 font-semibold">
                  Spring garlic 
                  </p>
                </div>
                <div className="w-full md:w-1/2 px-3 py-3">
                  <img
                    src="/Home/purple.jpg"
                    alt=""
                    className="w-full h-[200px] rounded-lg shadow-md  object-cover"
                  />
                  <p className="text-center  text-3xl md:text-lg lg:text-3xl mt-2 font-semibold">
                  Mexican Purple
                  </p>
                </div>
              </div>
            </div>



            

        <div className="flex flex-col px-5 md:px-14">
          <p className="text-center text-5xl font-bold mt-5 font-semibold ">
            Success Stories of our Clients
          </p>
          <p className="text-center">_________________</p>
          <p className="text-center font-semibold text-gray-500">
            Farmers below are successfully growing NARC G1 Garlic? Hear from
            these members.
          </p>
        </div>

        <div className="flex flex-col md:flex cursor-pointer md:flex-row w-full items-center justify-center md:justify-between px-10 md:px-24 py-5 gap-10 ">
          <div className="w-full md:w-1/3 border hover:border-[2px] hover:border-[#092C4C] flex flex-col justify-center items-center px-2 py-2 shadow-2xl">
          <p className="text-center px-10">Majid Hussain is well known farmer based in Okara, Pakistan. He is our customer for last 18 months and is very happy with the results.</p>
          <p className=" py-3 font-bold">Majid Hussain</p>
          <img src="/Home/costumer-1.jpg" alt=""  className="rounded-full w-24 h-24 object-cover border-[2px] border-[#092C4C]"/>       
            </div>

          <div className="w-full md:w-1/3 cursor-pointer flex flex-col justify-center hover:border-[2px] hover:border-[#092C4C] items-center px-2 py-2 border shadow-2xl">
          <p className="text-center px-10">Kashif Mehmood started G1 Garlic farming with us in March 2020. He is growing every year on 8-10 acre land every year successfully.</p>
          <p className=" py-3 font-bold">Kashif Mehmood</p>
          <img src="/Home/costumer-2.jpg" alt=""  className="rounded-full object-cover w-24 h-24 border-[2px] border-[#092C4C]"/> 
          </div>

          <div className="w-full  md:w-1/3 cursor-pointer flex flex-col justify-center items-center hover:border-[2px] hover:border-[#092C4C]  px-2 py-2 border shadow-2xl">
          <p className="text-center px-10">Aslam Sattar started investing in G1 Garlic cultivation and trading program in 2020 from UK. He is one of our most successful traders.</p>
          <p className=" py-3 font-bold">Aslam Sattar</p>
          <img src="/Home/costumer-3.jpg" alt=""  className="rounded-full w-24 h-24 object-cover border-[2px] border-[#092C4C]"/> 
          </div>
        </div>

        <div className="flex  flex-col px-5 md:px-14">
          <p className="text-center text-5xl mt-5 font-bold ">
          Watch Our Gallery
          </p>
          <p className="text-center">_________________</p>
          <p className="text-center font-semibold text-gray-500">
          Let’s join hands together and work towards promoting our beloved country all over the world. click here to see more Our Farms
          </p>
        </div>

        <div className="w-full flex flex-wrap py-20 justify-start items-center px-4 md:px-14">
  {imagePaths.map((item, index) => (
    <div key={index} className=" cursor-pointer w-1/2 md:w-1/3 py-2 px-2 relative">
      <img
       src={item.image}
       alt={`Image ${index + 1}`}
        className="w-full h-[200px] object-cover"
      />
      <div className="absolute inset-0 flex justify-center items-center opacity-0 hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-50">
        <p className="text-white text-lg px-10">{item.pargph}</p>
      </div>
    </div>
  ))}
</div>

<div className="w-full relative mb-10">
  <div className="w-full relative">
    <img src="/Home/ban-4.jpg" alt="" className="w-full object-cover" />
    <div className="absolute inset-0 flex items-center justify-center px-10 z-9999 opacity-100">
    <div className="w-full flex">
  <div className="w-full lg:w-[70%]">
    <div className="w-full flex flex-col">
      <div>
        <p className="text-white text-xl sm:text-2xl lg:text-4xl font-bold z-9999999">Our Products</p>
        <p className="text-white text-xs sm:text-sm md:text-base lg:text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro tenetur eaque exercitationem neque quod laboriosam repellat rerum et nobis! Nihil beatae nesciunt reprehenderit placeat! Perspiciatis voluptatum est expedita vel eligendi?</p>
     <Link href={"Buyer/products"} >
     <button className="bg-[#0b2a25]  text-white mt-2 hover:text-[#0b2a25] hover:bg-white font-bold text-base sm:text-lg px-2 py-1">
      OUR PRODUCTS
     </button>
     </Link>
      </div> 
     
    </div>
  </div>

</div>
    </div>
  </div>
</div>




      </div>
    </Layout>
  );
}

export default index;
