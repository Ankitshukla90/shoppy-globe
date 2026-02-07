import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Plus } from 'lucide-react';
import { cartActions } from '../../store/cartSlice';

const ProductItem = ({ product }) => {
  const dispatch = useDispatch();

  const handleAddToCart = (e) => {
    e.preventDefault();
    dispatch(cartActions.addToCart(product));
  };

  return (
    <div className="group bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col overflow-hidden h-full">
      <Link to={`/product/${product.id}`} className="relative pt-[75%] bg-gray-50 overflow-hidden block">
        <img
          src={product.thumbnail}
          alt={product.title}
          loading="lazy"
          className="absolute top-0 left-0 w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-300"
        />
      </Link>
      <div className="p-4 flex flex-col flex-grow">
        <div className="mb-2">
          <span className="text-xs font-semibold text-blue-600 bg-blue-50 px-2 py-1 rounded-full uppercase">
            {product.category}
          </span>
        </div>
        <Link to={`/product/${product.id}`} className="hover:text-blue-600 transition-colors">
          <h3 className="font-bold text-gray-800 line-clamp-1" title={product.title}>{product.title}</h3>
        </Link>
        <div className="mt-auto pt-4 flex items-center justify-between">
          <span className="text-lg font-bold text-gray-900">${product.price}</span>
          <button
            onClick={handleAddToCart}
            className="bg-gray-900 hover:bg-blue-600 text-white px-3 py-2 rounded-lg text-sm font-medium transition-colors flex items-center gap-2"
          >
            <Plus size={16} /> Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;