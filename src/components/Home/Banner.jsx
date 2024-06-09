import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="relative">
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide>
          <div className="relative ">
            <img
              src="https://i.ibb.co/6rBWL5L/Shopping-cart-full-of-garbage-on-blue-background-w-1.jpg"
              alt=""
              className="h-full md:h-[400px] object-cover w-full"
            />
            <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 z-10"></div>
            <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center text-white z-20 py-12">
              <h2 className="text-2xl md:text-6xl font-bold">
                Welcome to BuySwift!
              </h2>
              <p className="text-xs md:text-lg">
                Get started with your shopping journey.
              </p>
              <button className="btn btn-sm md:btn-md bg-[#15803D] border-none hover:bg-[#15803D] text-white font-bold py-2 px-4 rounded mt-4">
               <Link to={"/products"}> Get Started</Link>
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <img
              src="https://i.ibb.co/RYWdRhD/Shopping-cart-full-of-garbage-on-blue-background-w-2.jpg"
              alt=""
              className="max-h-[400px] object-cover w-full"
            />
            <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 z-10"></div>
            <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center text-white z-20">
            <h2 className="text-2xl md:text-6xl font-bold">
                Welcome to BuySwift!
              </h2>
              <p className="text-xs md:text-lg">
                Get started with your shopping journey.
              </p>
              <button className="btn btn-sm md:btn-md bg-[#15803D] border-none hover:bg-[#15803D] text-white font-bold py-2 px-4 rounded mt-4">
               <Link to={"/products"}> Get Started</Link>
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <img
              src="https://i.ibb.co/f9ywZZv/Shopping-cart-full-of-garbage-on-blue-background-w.jpg"
              alt=""
              className="max-h-[400px] object-cover w-full"
            />
            <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 z-10"></div>
            <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center text-white z-20">
            <h2 className="text-2xl md:text-6xl font-bold">
                Welcome to BuySwift!
              </h2>
              <p className="text-xs md:text-lg">
                Get started with your shopping journey.
              </p>
              <button className="btn btn-sm md:btn-md bg-[#15803D] border-none hover:bg-[#15803D] text-white font-bold py-2 px-4 rounded mt-4">
               <Link to={"/products"}> Get Started</Link>
              </button>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
