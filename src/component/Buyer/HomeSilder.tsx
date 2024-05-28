import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "./Image";
import { MdOutlineFileDownload } from "react-icons/md";
import Link from "next/link";

interface SlideProps {
  imgUrl: string;
  text: string;
}
const HomeSlider: React.FC = () => {
  const [typedText1, setTypedText1] = useState("");
  const [typedText2, setTypedText2] = useState("");
  const fullText = "Hi! I'm Jackson";
  const fullText2 = "NARC G1 Garlic";

  useEffect(() => {
    let currentIndex = 0;

    const interval = setInterval(() => {
      setTypedText1(fullText.substring(0, currentIndex));
      setTypedText2(fullText2.substring(0, currentIndex));

      currentIndex++;
      if (currentIndex > fullText.length && currentIndex > fullText2.length) {
        currentIndex = 0; // Reset currentIndex to restart typing
      }
    }, 100); // Adjust typing speed as needed

    return () => clearInterval(interval);
  }, []);

  //   const downloadFile = () => {
  //     const link = document.createElement('a');
  //     link.href = '/Document/afaq hussain CV_compressed.pdf';
  //     link.download = 'document.pdf';
  //     document.body.appendChild(link);
  //     link.click();
  //     document.body.removeChild(link);
  //   };

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <></>, // Use empty React element instead of null
    prevArrow: <></>, // Use empty React element instead of null
  };

  return (
    <Slider {...settings}>
      {/* slide 1 */}
      <div className="Slide relative flex h-screen justify-center items-center">
        <Image
          height={0}
          width={0}
          src="/Home/Ban-1.jpg"
          className="w-full object-cover h-screen"
          alt="Background Image"
        />
        <div className="w-full absolute top-[40%] left-0 transform -translate-y-1/2 flex flex-col items-center px-10">
          <p
            className=" text-white text-xl sm:text-3xl md:text-5xl text-center leading-relaxed font-extrabold font-serif flex flex-col"
            style={{ animation: "slideInFromBottom 1s ease-out" }}
          >
            DO START. DO GROW GARLIC. JUST DO IT
          </p>
          <p className="font-extrabold text-center text-white">
            NARC G1 Garlic is the best Hybrid garlic produced in Pakistan.
            Highly profitable as commercial point of view.
          </p>
        </div>
        <div className="mt-10 absolute  top-[60%] left-[30%] md:left-[40%] flex items-center justify-center px-10">
          <Link href={""}>
            <button
              className="button-- py-2 custom-btn btn-3  px-4 bg-white text-green-800 border flex gap-2 items-center justify-center hover:text-white hover:bg-green-600 hover:duration-500"
            >
              See More{" "}
              <span>
                <MdOutlineFileDownload className="border " />
              </span>
            </button>
          </Link>
        </div>
      </div>

      {/* slide 2 */}
      <div className="Slide relative flex h-screen justify-center items-center">
        <Image
          height={0}
          width={0}
          src="/Home/ban-2.jpeg"
          className="w-full object-cover h-screen"
          alt="Background Image"
        />
        <div className="w-full absolute top-[40%] left-0 transform -translate-y-1/2 flex flex-col items-center px-10">
          <p className="font-extrabold text-black text-xl sm:text-3xl md:text-5xl ">
            Book Top Quality
          </p>
          <p className="font-extrabold text-green-500 text-xl sm:text-3xl md:text-5xl ">
            NARC G1 Garlic
          </p>
        </div>
        <div className="mt-10 absolute top-[60%] left-[30%] sm:left-[35%] md:left-[40%] flex items-center justify-center px-10">
          <Link href={""}>
            <button
              className=" py-2 custom-btn btn-3 text-sm lg:text-base   px-2 sm:px-4 bg-white text-green-800 border flex gap-2 items-center justify-center hover:text-white hover:bg-green-600 hover:duration-500"
              //  onClick={downloadFile}
            >
              <p >Booking Now{" "}</p>
              <span>
                <MdOutlineFileDownload className="border " />
              </span>
            </button>
          </Link>
        </div>
      </div>

      {/* slide 2 */}
      <div className="Slide relative flex justify-center items-center">
        <Image
          height={0}
          width={0}
          src="/Home/ban-4.jpg"
          className="w-full  object-cover h-screen"
          alt="Background Image"
        />
        <div className="w-1/2 absolute top-1/2 left-0 transform -translate-y-1/2 flex items-center px-10">
          <p
            className="text-white text-lg md:text-5xl leading-relaxed font-extrabold font-serif flex flex-col"
            style={{ animation: "slideInFromBottom 1s ease-out" }}
          >
            {typedText2}
          </p>
        </div>
        {/* <div className="mt-10 absolute  top-[70%] left-0 transform -translate-y-1/2 flex items-center px-10">
          <button className="button-- py-2 custom-btn btn-3  px-2 border flex gap-2 items-center justify-center"
            //  onClick={downloadFile}
             >
            DOWNLOAD CV{" "}
            <span>
              <MdOutlineFileDownload className="border " />
            </span>
          </button>
        </div> */}
      </div>
    </Slider>
  );
};

export default HomeSlider;
