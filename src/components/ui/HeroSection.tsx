import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper/modules";
import Image from "next/image";

// Hero Section Component
const HeroSection: React.FC = () => {
  return (
    <div className="relative bg-gradient-to-r from-purple-500 to-indigo-600 text-white py-20 px-6 lg:px-20 overflow-hidden rounded-md">
      {/* Background Image */}
      <div className="absolute inset-0 bg-opacity-20">
        <Image
          src="https://tinyurl.com/muh778t4"
          alt="Hero Background"
          className="object-cover w-full h-full opacity-30"
          height={500}
          width={500}
        />
      </div>

      {/* Content Container */}
      <div className="relative z-10 flex flex-col items-center lg:flex-row lg:justify-between">
        <div className="text-center lg:text-left lg:w-1/2">
          <h1 className="text-5xl font-bold mb-4 animate__animated animate__fadeInDown">
            Discover the Latest Gadgets
          </h1>
          <p className="text-lg mb-6 animate__animated animate__fadeInUp">
            Stay ahead of the curve with our cutting-edge technology and
            innovative products.
          </p>
          <a
            href="#"
            className="bg-white text-purple-600 font-semibold py-3 px-6 rounded-lg shadow-lg hover:shadow-xl transition-transform transform hover:scale-105 animate__animated animate__zoomIn"
          >
            Shop Now
          </a>
        </div>

        {/* Image Section */}
        <div className="lg:w-1/2 mt-10 lg:mt-0">
          <Image
            src="https://tinyurl.com/muh778t4"
            alt="Gadgets"
            className="w-full h-auto rounded-lg shadow-lg animate__animated animate__fadeInRight"
            height={500}
            width={500}
          />
        </div>
      </div>
    </div>
  );
};

// Main App Component
export default function HeroSectionContainer() {
  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={30}
      loop={true}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Pagination, Navigation]}
      className="mySwiper my-10"
    >
      <SwiperSlide>
        <HeroSection />
      </SwiperSlide>
      <SwiperSlide>
        <HeroSection />
      </SwiperSlide>
      <SwiperSlide>
        <HeroSection />
      </SwiperSlide>
    </Swiper>
  );
}
