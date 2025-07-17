'use client'
import React, { useState } from 'react';
import { IoIosMenu } from "react-icons/io";
import { LuShoppingCart } from "react-icons/lu";
import { LuHeart } from "react-icons/lu";
import { FaRegUser } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";
import Image from 'next/image';
import Logo from "../assets/images/logo.png";
import Link from 'next/link';
import { useSelector } from 'react-redux';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const cartItems = useSelector((state) => state.cart.cartItems);
  const totalQuantity = cartItems.reduce((total, item) => total + item.quantity, 0);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const menuItems = [
    { name: 'Home', href: '/' },
    { name: 'Shop', href: '/shop' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' }
  ];

  return (
    <header className="bg-[#bbf7d0/40] backdrop-blur-sm shadow-md sticky top-0 z-50 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <div className="text-2xl font-bold text-gray-800">
              <Link href="/">
                <Image src={Logo} alt="Logo" width={60} height={60} />
              </Link>
            </div>
          </div>

          {/* Desktop Navigation - Hidden on mobile */}
          <nav className="hidden min-[900px]:flex space-x-8">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-[#2f4c4d] px-3 py-2 text-sm font-medium transition-colors duration-200"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Right side icons */}
          <div className="flex items-center space-x-4">
            {/* Desktop icons */}
            <div className="hidden min-[900px]:flex items-center space-x-4">
              <button className="text-gray-700 hover:text-[#2f4c4d] p-2 rounded-full hover:bg-[#eefbeb] transition-colors duration-200">
                <Link href="/cart">
                  <div className='relative'>
                    <LuShoppingCart className="h-5 w-5" />
                    <div className='absolute top-[-12px] text-[10px] align-middle bg-[#2f4c4d] text-white rounded-4xl px-1 -right-3'>{totalQuantity ? totalQuantity : 0}</div>
                  </div>
                </Link>
              </button>
              <button className="text-gray-700 hover:text-[#2f4c4d] p-2 rounded-full hover:bg-[#eefbeb] transition-colors duration-200">
                <LuHeart className="h-5 w-5" />
              </button>
              <button className="text-gray-700 hover:text-[#2f4c4d] p-2 rounded-full hover:bg-[#eefbeb] transition-colors duration-200">
                <FaRegUser className="h-5 w-5" />
              </button>
            </div>

            {/* Mobile: Icons + Menu button */}
            <div className="flex items-center space-x-2 min-[900px]:hidden">
              <button className="text-gray-700 hover:text-[#2f4c4d] p-2 rounded-full hover:bg-[#eefbeb] transition-colors duration-200">
                <Link href="/cart">
                  <LuShoppingCart className="h-5 w-5" />
                </Link>
              </button>
              <button className="text-gray-700 hover:text-[#2f4c4d] p-2 rounded-full hover:bg-[#eefbeb] transition-colors duration-200">
                <LuHeart className="h-5 w-5" />
              </button>
              <button className="text-gray-700 hover:text-[#2f4c4d] p-2 rounded-full hover:bg-[#eefbeb] transition-colors duration-200">
                <FaRegUser className="h-5 w-5" />
              </button>
              <button
                onClick={toggleMenu}
                className="text-gray-700 hover:text-[#2f4c4d] p-2 rounded-full hover:bg-[#eefbeb] transition-colors duration-200"
              >
                {isMenuOpen ? <IoClose className="h-6 w-6" /> : <IoIosMenu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Dropdown */}
        {isMenuOpen && (
          <div className="min-[900px]:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-[#eefbeb/40] border-t border-gray-200">
              {menuItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 hover:text-[#2f4c4d] hover:bg-gray-50 block px-3 py-2 text-base font-medium transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
}