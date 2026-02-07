import React from 'react';
import { useDispatch } from 'react-redux';
import { Minus, Plus, Trash2 } from 'lucide-react';
import { cartActions } from '../../store/cartSlice';

const CartItem = ({ item }) => {
  const dispatch = useDispatch();
  return (
    <div className="flex flex-col sm:flex-row items-center gap-4 p-4 border-b border-gray-100 last:border-0 hover:bg-gray-50 transition rounded-lg">
      <div className="w-20 h-20 bg-gray-100 rounded-lg overflow-hidden flex-shrink-0">
        <img src={item.thumbnail} alt={item.title} className="w-full h-full object-cover" />
      </div>
      <div className="flex-1 text-center sm:text-left">
        <h3 className="font-semibold text-gray-800 text-lg">{item.title}</h3>
        <p className="text-gray-500 text-sm">Unit: ${item.price}</p>
      </div>
      <div className="flex items-center gap-3 bg-white border border-gray-200 rounded-lg p-1">
        <button onClick={() => dispatch(cartActions.decreaseQuantity(item.id))} disabled={item.quantity <= 1} className="p-1 hover:bg-gray-100 rounded disabled:opacity-30">
          <Minus size={16} />
        </button>
        <span className="w-8 text-center font-bold text-gray-800">{item.quantity}</span>
        <button onClick={() => dispatch(cartActions.increaseQuantity(item.id))} className="p-1 hover:bg-gray-100 rounded">
          <Plus size={16} />
        </button>
      </div>
      <div className="font-bold text-gray-900 w-24 text-right">${item.totalPrice.toFixed(2)}</div>
      <button onClick={() => dispatch(cartActions.removeFromCart(item.id))} className="text-red-400 hover:text-red-600 p-2 hover:bg-red-50 rounded-full">
        <Trash2 size={20} />
      </button>
    </div>
  );
};

export default CartItem;