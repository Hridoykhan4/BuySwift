import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

const Banner = () => {
  return (
    <div className="">
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide>
            <img src="https://i.ibb.co/6rBWL5L/Shopping-cart-full-of-garbage-on-blue-background-w-1.jpg" alt="" className="max-h-[400px] object-cover w-full"/>
        </SwiperSlide>
        <SwiperSlide>
            <img src="https://i.ibb.co/RYWdRhD/Shopping-cart-full-of-garbage-on-blue-background-w-2.jpg" alt="" className="max-h-[400px] object-cover w-full"/>
        </SwiperSlide>
        <SwiperSlide>
            <img src="https://i.ibb.co/f9ywZZv/Shopping-cart-full-of-garbage-on-blue-background-w.jpg" alt="" className="max-h-[400px] object-cover w-full"/>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;