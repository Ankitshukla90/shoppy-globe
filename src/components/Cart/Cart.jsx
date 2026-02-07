import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { ShoppingBag } from 'lucide-react';
import CartItem from './CartItem';
import CartSummary from './CartSummary';

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const totalAmount = useSelector((state) => state.cart.totalAmount);
  
  if (cartItems.length === 0) {
    return (
      <div className="container mx-auto px-4 py-20 flex flex-col items-center justify-center text-center">
        <div className="bg-gray-50 p-6 rounded-full mb-6"><ShoppingBag size={64} className="text-gray-300" /></div>
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Your cart is empty</h2>
        <Link to="/" className="mt-4 bg-blue-600 text-white px-8 py-3 rounded-full font-medium hover:bg-blue-700 transition">Start Shopping</Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6 flex items-center gap-2">Shopping Cart <span className="text-base font-normal text-gray-500 bg-gray-100 px-3 py-1 rounded-full">{cartItems.length} Items</span></h1>
      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
          <div className="p-2">{cartItems.map((item) => <CartItem key={item.id} item={item} />)}</div>
        </div>
        <div className="lg:col-span-1"><CartSummary totalAmount={totalAmount} /></div>
      </div>
    </div>
  );
};

export default Cart;