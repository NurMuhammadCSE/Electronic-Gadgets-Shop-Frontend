import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import Image from 'next/image';

// Example Product Data
const products = [
  {
    id: 1,
    name: 'Smart TV 4K',
    category: 'TV',
    price: 599.99,
    imageUrl: 'https://tinyurl.com/46kpkwb2',
  },
  {
    id: 2,
    name: 'Wireless Earbuds',
    category: 'AC',
    price: 499.99,
    imageUrl: 'https://tinyurl.com/5a8vf62a',
  },
  {
    id: 3,
    name: 'Energy-efficient Fridge',
    category: 'Fridge',
    price: 799.99,
    imageUrl: 'https://tinyurl.com/muh778t4',
  },
  {
    id: 4,
    name: 'OLED TV',
    category: 'TV',
    price: 1099.99,
    imageUrl: 'https://tinyurl.com/248ufehm',
  },
  {
    id: 5,
    name: 'Wireless Earbuds',
    category: 'AC',
    price: 499.99,
    imageUrl: 'https://tinyurl.com/5a8vf62a',
  },
  {
    id: 6,
    name: 'Energy-efficient Fridge',
    category: 'Fridge',
    price: 799.99,
    imageUrl: 'https://tinyurl.com/muh778t4',
  },
  {
    id: 7,
    name: 'OLED TV',
    category: 'TV',
    price: 1099.99,
    imageUrl: 'https://tinyurl.com/248ufehm',
  },
  // Add more products as needed
];

export default function FeaturedProducts() {
  return (
    <div className="my-12">
      <h2 className="text-3xl font-bold text-center mb-6">Featured Products</h2>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        centeredSlides={false}
        pagination={{ clickable: true }}
        modules={[Pagination]}
        className="mySwiper"
        breakpoints={{
          // Adjust slides per view for different screen sizes
          1024: { slidesPerView: 4 }, // Desktop
          768: { slidesPerView: 2 }, // Tablet
          480: { slidesPerView: 1 }, // Mobile
        }}
      >
        {products.map((product) => (
          <SwiperSlide key={product.id}>
            <div className="p-4 bg-white shadow-lg rounded-lg hover:shadow-xl transition-shadow duration-300">
              <Image
                src={product.imageUrl}
                alt={product.name}
                className="w-full h-64 object-cover mb-4 rounded-lg"
                height={500}
                width={500}
              />
              <div className="text-center">
                <h3 className="text-xl font-semibold">{product.name}</h3>
                <p className="text-gray-500">{product.category}</p>
                <p className="text-lg font-bold mt-2">${product.price.toFixed(2)}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
