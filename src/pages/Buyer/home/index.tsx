// import Navbar from '@/component/NavBar'
import HomeSlider from "@/component/Buyer/HomeSilder";
import Layout from "@/component/Buyer/Layout";
import Navbar from "@/component/Buyer/NavBar";
import Link from "next/link";
import React from "react";

function index() {

  const imagePaths = [
    { image: "/Home/image-1.jpg" },
    { image: "/Home/image-2.jpg" },
    { image: "/Home/image-3.jpg" },
    { image: "/Home/image-4.jpg" },
    { image: "/Home/image-5.jpg" },
    { image: "/Home/image-6.jpg" },
    { image: "/Home/image-7.jpg" },
    { image: "/Home/image-8.jpg" },
  ];
  return (
    <Layout>
      <div className="w-full" >
        {/* <Navbar/> */}
        {/* <HomeSlider /> */}
        <div className="w-full h-1/2 bg-">

        </div>
        <div className="w-full px-5 md:px-14 flex flex-col ">
          <p className="text-center text-3xl mt-5 font-semibold ">
            NARC G1 Garlic
          </p>
          <p className="text-center">_________________</p>
          <p className="text-center font-semibold text-gray-500">
            NARC G1 Garlic is the excellent source of vitamins E, C, and A. It
            also contains allicin, which has been known for its antibacterial
            properties.
          </p>
          <div className="flex flex-col md:flex md:flex-row w-full py-10">
            <div className="w-full md:w-1/2">
              <p>
                What is G1 Garlic? or Elephant garlic (Allium ampeloprasum)
                seems like an enormous clove however if truth be told, isn’t
                real garlic however additional closely associated with a leek.
                it’s a hardy bulb with massive blue-green leaves. This perennial
                herb boasts AN oversize pink or purple stem that seems within
                the spring or summer. below the bottom, a massive|an outsized|an
                oversized bulb consisting of 5 to 6 large cloves enclosed by
                smaller bulblets grows. This liliid monocot genus plant attains
                a height of regarding three feet (1 m.) from bulb to the tip of
                the strap-like leaves and originates in Pakistan.
              </p>
            </div>
            <div className="w-full md:w-1/2 flex flex-col">
              <div className="flex flex-col md:flex-row w-full justify-between">
                <div className="w-full md:w-1/2 px-3 py-3">
                  <img
                    src="/Home/image-8.jpg"
                    alt=""
                    className="w-full h-auto object-cover"
                  />
                  <p className="text-center  text-3xl md:text-lg lg:text-3xl mt-2 font-semibold">
                    NARC G1 Garlic
                  </p>
                </div>
                <div className="w-full md:w-1/2 px-3 py-3">
                  <img
                    src="/Home/image-7.jpg"
                    alt=""
                    className="w-full h-auto object-cover"
                  />
                  <p className="text-center text-3xl md:text-lg lg:text-3xl mt-2 font-semibold">
                    NARC G1 Garlic
                  </p>
                </div>
              </div>
              <div className="flex flex-col md:flex-row w-full justify-between">
                <div className="w-full md:w-1/2 px-3 py-3">
                  <img
                    src="/Home/image-5.jpg"
                    alt=""
                    className="w-full h-auto object-cover"
                  />
                  <p className="text-center  text-3xl md:text-lg lg:text-3xl mt-2 font-semibold">
                    NARC G1 Garlic
                  </p>
                </div>
                <div className="w-full md:w-1/2 px-3 py-3">
                  <img
                    src="/Home/image-4.jpg"
                    alt=""
                    className="w-full h-auto object-cover"
                  />
                  <p className="text-center  text-3xl md:text-lg lg:text-3xl mt-2 font-semibold">
                    NARC G1 Garlic
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col px-5 md:px-14">
          <p className="text-center text-3xl mt-5 font-semibold ">
            Success Stories of our Clients
          </p>
          <p className="text-center">_________________</p>
          <p className="text-center font-semibold text-gray-500">
            Farmers below are successfully growing NARC G1 Garlic? Hear from
            these members.
          </p>
        </div>

        <div className="flex flex-col md:flex md:flex-row w-full items-center justify-center md:justify-between px-10 md:px-24 py-5">
          <div className="w-full md:w-1/3 border flex flex-col justify-center items-center px-2 py-2 shadow-2xl">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum eveniet aliquam fugit ipsam minima fugiat, voluptate facere minus a laborum porro incidunt accusamus exercitationem perspiciatis, optio excepturi nisi facilis libero.</p>
          <p className="text-green-400 py-3 font-semibold">Ali Khan</p>
          <img src="/Home/image-4.jpg" alt=""  className="rounded-full w-24 h-24"/>       
            </div>

          <div className="w-full md:w-1/3 flex flex-col justify-center items-center px-2 py-2 border shadow-2xl">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum eveniet aliquam fugit ipsam minima fugiat, voluptate facere minus a laborum porro incidunt accusamus exercitationem perspiciatis, optio excepturi nisi facilis libero.</p>
          <p className="text-green-400 py-3 font-semibold">Ali Khan</p>
          <img src="/Home/image-4.jpg" alt=""  className="rounded-full w-24 h-24"/> 
          </div>

          <div className="w-full  md:w-1/3 flex flex-col justify-center items-center px-2 py-2 border shadow-2xl">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum eveniet aliquam fugit ipsam minima fugiat, voluptate facere minus a laborum porro incidunt accusamus exercitationem perspiciatis, optio excepturi nisi facilis libero.</p>
          <p className="text-green-400 py-3 font-semibold">Ali Khan</p>
          <img src="/Home/image-4.jpg" alt=""  className="rounded-full w-24 h-24"/> 
          </div>
        </div>

        <div className="flex flex-col px-5 md:px-14">
          <p className="text-center text-3xl mt-5 font-semibold ">
          Watch Our Gallery
          </p>
          <p className="text-center">_________________</p>
          <p className="text-center font-semibold text-gray-500">
          Let’s join hands together and work towards promoting our beloved country all over the world. click here to see more Our Farms
          </p>
        </div>

        <div className="w-full flex flex-wrap justify-start items-center px-4 md:px-14">
  {imagePaths.map((item, index) => (
    <div key={index} className=" w-1/2 md:w-[25%] py-2 px-2 relative">
      <img
       src={item.image}
       alt={`Image ${index + 1}`}
        className="w-full h-[200px] object-cover"
      />
      <div className="absolute inset-0 flex justify-center items-center opacity-0 hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-50">
        <p className="text-white text-lg">Image {index + 1}</p>
      </div>
    </div>
  ))}
</div>

{/* <div className="w-full py-5 relative">
  <div className="w-full relative">
    <img src="/Home/ban-4.jpg" alt="" className="w-full object-cover" />
    <div className="absolute inset-0 bg-yellow-400 opacity-50"></div>
  </div>
  <div className="w-full flex">
    <div className="w-[70%]">
      <div className="w-full flex flex-col">
   <div>
   <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro tenetur eaque exercitationem neque quod laboriosam repellat rerum et nobis! Nihil beatae nesciunt reprehenderit placeat! Perspiciatis voluptatum est expedita vel eligendi?</p>
    </div> 
    <div className="w-full flex justify-between">
      <div className="w-[48%]">
      <div className="w-full  md:w-1/3 flex flex-col justify-center items-center px-2 py-2 border shadow-2xl">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum eveniet aliquam fugit ipsam minima fugiat, voluptate facere minus a laborum porro incidunt accusamus exercitationem perspiciatis, optio excepturi nisi facilis libero.</p>
          <p className="text-green-400 py-3 font-semibold">Ali Khan</p>
          <img src="/Home/image-4.jpg" alt=""  className="rounded-full w-24 h-24"/> 
          </div>
      </div>
      <div className="w-[48%]">
      <div className="w-full  md:w-1/3 flex flex-col justify-center items-center px-2 py-2 border shadow-2xl">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum eveniet aliquam fugit ipsam minima fugiat, voluptate facere minus a laborum porro incidunt accusamus exercitationem perspiciatis, optio excepturi nisi facilis libero.</p>
          <p className="text-green-400 py-3 font-semibold">Ali Khan</p>
          <img src="/Home/image-4.jpg" alt=""  className="rounded-full w-24 h-24"/> 
          </div>
      </div>

    </div>
  </div>
  </div>
  <div className="w-[30%]">
    <div className="w-full px-5">
      <img src="/Home/image-4.jpg" alt="" className="w-full h-[400px]"/>

    </div>
    </div>
  </div>
</div> */}

<div className="w-full relative mb-10">
  <div className="w-full relative">
    <img src="/Home/ban-4.jpg" alt="" className="w-full object-cover" />
    <div className="absolute inset-0 flex items-center justify-center px-10 z-9999 opacity-100">
    <div className="w-full flex">
  <div className="w-full lg:w-[70%]">
    <div className="w-full flex flex-col">
      <div>
        <p className="text-white text-xl sm:text-2xl lg:text-4xl font-bold z-9999999">Our Reviews</p>
        <p className="text-white text-xs sm:text-sm md:text-base lg:text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro tenetur eaque exercitationem neque quod laboriosam repellat rerum et nobis! Nihil beatae nesciunt reprehenderit placeat! Perspiciatis voluptatum est expedita vel eligendi?</p>
     <Link href={""} >
     <button className="bg-[#0b2a25]  text-white mt-2 hover:text-[#0b2a25] hover:bg-white font-bold text-base sm:text-lg px-2 py-1">
      BOOK MORE
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
