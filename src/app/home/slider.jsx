'use client';
import React, { useEffect, useState } from 'react';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from 'next/link';

// Custom Arrow Components
const PrevArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="md:block hidden absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white border border-gray-300 rounded-full p-2 shadow-md transition-all duration-200 hover:shadow-lg"
  >
    <IoIosArrowBack className="h-5 w-5 text-gray-600" />
  </button>
);

const NextArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="md:block hidden absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white border border-gray-300 rounded-full p-2 shadow-md transition-all duration-200 hover:shadow-lg"
  >
    <IoIosArrowForward className="h-5 w-5 text-gray-600" />
  </button>
);

export default function ProductSlider() {
  const slides = [
    {
      id: 1,
      category: "New Arrivals",
      title: "Flexible Chair",
      description: "Lorem Ipsum Dolor Sit Amet Consectetur, Adipiscing Elit. Consequatur Quisquam Magnam Enim Sed Debitis Perspiciatis.",
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      buttonText: "Shop Now"
    },
    {
      id: 2,
      category: "Featured",
      title: "Comfort Sofa",
      description: "Lorem Ipsum Dolor Sit Amet Consectetur, Adipiscing Elit. Consequatur Quisquam Magnam Enim Sed Debitis Perspiciatis.",
      image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      buttonText: "Shop Now"
    },
    {
      id: 3,
      category: "Best Seller",
      title: "Modern Table",
      description: "Lorem Ipsum Dolor Sit Amet Consectetur, Adipiscing Elit. Consequatur Quisquam Magnam Enim Sed Debitis Perspiciatis.",
      image: "https://images.unsplash.com/photo-1549497538-303791108f95?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      buttonText: "Shop Now"
    }
  ];

  // React-slick settings
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };

  return (
    <div className="w-[95%] mx-auto">
      <Slider {...settings}>
        {slides.map((slide) => (
          <div key={slide.id} className="h-[600px] md:h-[500px] bg-white"> {/* Add bg-gray-50 class */}
            <div className="flex items-center justify-center h-full px-4 md:px-8 lg:px-16">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center max-w-6xl w-full">
                {/* Text Content */}
                <div className="space-y-6 text-center lg:text-left order-2 lg:order-1">
                  <div>
                    <p className="text-sm text-gray-500 uppercase tracking-wide mb-2">
                      {slide.category}
                    </p>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                      {slide.title}
                    </h2>
                    <p className="text-gray-600 text-sm md:text-base leading-relaxed max-w-lg mx-auto lg:mx-0">
                      {slide.description}
                    </p>
                  </div>
                  <Link href="/shop">
                    <button className="bg-[#2f4c4d] text-white px-8 py-3 rounded-md hover:bg-[#fff] hover:text-[#2f4c4d] border-[1px] cursor-pointer border-[#2f4c4d] transition-colors duration-200 font-medium">
                      {slide.buttonText}
                    </button>
                  </Link>
                </div>

                {/* Image */}
                <div className="order-1 lg:order-2">
                  <div className="relative">
                    <img
                      src={slide.image}
                      alt={slide.title}
                      className="w-full h-64 md:h-80 lg:h-96 object-cover rounded-lg shadow-lg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}