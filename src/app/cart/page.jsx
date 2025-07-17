// src/pages/cart.js

"use client";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, removeOneCart, clearCart, addToCart } from "../../redux/slice/cart.slice";
import { MdDelete } from "react-icons/md";
import Image from "next/image";

export default function Cart() {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();

  return (
    <div className="p-6 w-[90%] m-auto">
      <h2 className="text-2xl font-semibold mb-4">Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="space-y-4">
          {cartItems.map((item) => (
            <div key={item.id} className="flex justify-between items-center border-2 border-gray-200  p-4 rounded-lg">
              <div className="flex justify-baseline items-center">
                <div>
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={100}
                    height={100}
                    className="w-16 h-16 object-cover mr-4"
                  />
                </div>
                <div>
                  <p className="font-medium w-[300px] clamp-2">{item.title}</p>
                  <p className="text-sm text-gray-500">Quantity: {item.quantity}</p>
                </div>
              </div>
              <div className="flex space-x-6">
                <button
                  onClick={() => dispatch(addToCart(item))}
                  className="text-blue-600 text-2xl cursor-pointer"
                >
                  +
                </button>
                <button
                  onClick={() => dispatch(removeOneCart(item))}
                  className="text-blue-600 text-2xl cursor-pointer"
                >
                  -
                </button>
                <button
                  onClick={() => dispatch(removeFromCart(item.id))}
                  className="text-red-600"
                >
                  <MdDelete className="text-xl cursor-pointer" />
                </button>
              </div>
            </div>
          ))}
          <button
            onClick={() => dispatch(clearCart())}
            className="bg-red-600 text-white px-4 py-2 rounded-md mt-4"
          >
            Clear Cart
          </button>
        </div>
      )}
    </div>
  );
}
