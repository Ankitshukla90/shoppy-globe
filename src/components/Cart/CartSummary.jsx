import React from 'react';
import { Link } from 'react-router-dom';

const CartSummary = ({ totalAmount }) => (
  <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 sticky top-24">
    <h3 className="text-lg font-bold text-gray-800 mb-4 pb-4 border-b">Order Summary</h3>
    <div className="space-y-3 mb-6">
      <div className="flex justify-between text-gray-600"><span>Subtotal</span><span>${totalAmount.toFixed(2)}</span></div>
      <div className="flex justify-between text-gray-600"><span>Shipping</span><span className="text-green-600 font-medium">Free</span></div>
      <div className="flex justify-between text-gray-600"><span>Tax (8%)</span><span>${(totalAmount * 0.08).toFixed(2)}</span></div>
    </div>
    <div className="flex justify-between text-xl font-bold text-gray-900 mb-8 pt-4 border-t">
      <span>Total</span><span>${(totalAmount * 1.08).toFixed(2)}</span>
    </div>
    <Link to="/checkout" className="block w-full bg-black text-white text-center py-4 rounded-xl font-bold text-lg hover:bg-gray-800 transition active:scale-[0.98]">
      Proceed to Checkout
    </Link>
  </div>
);

export default CartSummary;