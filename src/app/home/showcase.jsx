import Image from 'next/image';
import React from 'react';
import showCase1 from "../../assets/images/show-case-1.png"
import showCase2 from "../../assets/images/show-case-2.png"
import showCase3 from "../../assets/images/show-case-3.png"
import Link from 'next/link';

export default function ProductOffers() {
  const offers = [
    {
      id: 1,
      image: showCase1,
      title: "Limited Offer",
      discount: "Upto 50% Off",
      buttonText: "Shop Now"
    },
    {
      id: 2,
      image: showCase2,
      title: "Limited Offer",
      discount: "Upto 50% Off",
      buttonText: "Shop Now"
    },
    {
      id: 3,
      image: showCase3,
      title: "Limited Offer",
      discount: "Upto 50% Off",
      buttonText: "Shop Now"
    }
  ];

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {offers.map((offer) => (
          <div
            key={offer.id}
            className="bg-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 grid grid-cols-2 gap-4 justify-center items-center"
          >
            <div className="relative h-64 bg-gray-200 flex items-center justify-center">
              {/* Product Image */}
              <Image
                src={offer.image}
                alt={offer.title}
                className="w-full h-full object-contain p-4"
              />
            </div>

            {/* Content */}
            <div className="p-6 bg-gray-200">
              <div className="space-y-3">
                <p className="text-sm text-gray-600 font-medium">
                  {offer.title}
                </p>
                <h3 className="text-xl font-bold text-gray-900">
                  {offer.discount}
                </h3>
                <Link href={"/shop"}>
                  <button className="bg-[#2f4c4d] text-white px-6 py-2 rounded-md hover:bg-[#fff] hover:text-[#2f4c4d] cursor-pointer border-[1px] border-[#2f4c4d] transition-colors duration-200 font-medium text-sm">
                    {offer.buttonText}
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}