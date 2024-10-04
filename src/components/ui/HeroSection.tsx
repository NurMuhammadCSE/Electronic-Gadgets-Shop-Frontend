import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper/modules";
import Link from "next/link";

// Hero Section Component

const HeroSectionOne: React.FC = () => {
  return (
    <section className="relative text-white overflow-hidden rounded-md">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('https://tinyurl.com/248ufehm')`,
        }}
      ></div>
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-gray-800/60"></div>
      {/* Content Wrapper */}
      <div className="relative container mx-auto px-4 py-24 lg:py-32 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg">
        Discover the Future of Gadgets at
        <span className="text-[#FF5733]">Gadget Hub</span>
        </h1>
        <p className="text-lg md:text-xl mb-8">
        Dive into a world of cutting-edge technology and unbeatable deals.
          Find the perfect gadget to enhance your life today.
        </p>
        <div className="flex justify-center gap-4">
          <Link
            href="/product"
            className="bg-[#FF5733] text-white font-semibold py-3 px-4 rounded-lg hover:bg-[#ff7a45] transition duration-300 shadow-lg text-xl md:text-2xl"
          >
            Shop Now
          </Link>
        </div>
      </div>
    </section>
  );
};

const HeroSectionTwo: React.FC = () => {
  return (
    <section className="relative text-white overflow-hidden rounded-md">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('https://tinyurl.com/248ufehm')`,
        }}
      ></div>
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-gray-800/60"></div>
      {/* Content Wrapper */}
      <div className="relative container mx-auto px-4 py-24 lg:py-32 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg">
          Unleash Tomorrow’s Tech at <span className="text-[#FF5733]">Gadget Hub</span>
        </h1>
        <p className="text-lg md:text-xl mb-8">
          Your dream gadgets are just a click away. Explore cutting-edge innovations, 
          unbeatable offers, and the latest trends to elevate your digital life.
        </p>
        <div className="flex justify-center gap-4">
          <Link
            href="/product"
            className="bg-[#FF5733] text-white font-semibold py-3 px-4 rounded-lg hover:bg-[#ff7a45] transition duration-300 shadow-lg text-xl md:text-2xl"
          >
            Shop Now
          </Link>
        </div>
      </div>
    </section>
  );
};

const HeroSectionThree: React.FC = () => {
  return (
    <section className="relative text-white overflow-hidden rounded-md">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('https://tinyurl.com/muh778t4')`,
        }}
      ></div>
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-gray-800/60"></div>
      {/* Content Wrapper */}
      <div className="relative container mx-auto px-4 py-24 lg:py-32 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg">
          Empower Your World with <span className="text-[#FF5733]">Next-Gen Gadgets</span>
        </h1>
        <p className="text-lg md:text-xl mb-8">
          Elevate your everyday experience with innovative gadgets designed for 
          efficiency, entertainment, and style. It&apos;s time to upgrade your tech game!
        </p>
        <div className="flex justify-center gap-4">
          <Link
            href="/product"
            className="bg-[#FF5733] text-white font-semibold py-3 px-4 rounded-lg hover:bg-[#ff7a45] transition duration-300 shadow-lg text-xl md:text-2xl"
          >
            Shop Now
          </Link>
        </div>
      </div>
    </section>
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
      className="mySwiper my-2"
    >
      <SwiperSlide>
        <HeroSectionOne />
      </SwiperSlide>
      <SwiperSlide>
        <HeroSectionTwo />
      </SwiperSlide>
      <SwiperSlide>
        <HeroSectionThree />
      </SwiperSlide>
    </Swiper>
  );
}
