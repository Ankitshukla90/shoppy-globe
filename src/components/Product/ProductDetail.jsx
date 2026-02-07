import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { ArrowLeft, ShoppingCart } from 'lucide-react';
import useFetch from '../../hooks/useFetch';
import { cartActions } from '../../store/cartSlice';
import Loader from '../common/Loader';
import ErrorMessage from '../common/ErrorMessage';

const ProductDetail = () => {
  const { id } = useParams();
  const { data: product, loading, error } = useFetch(`https://dummyjson.com/products/${id}`);
  const dispatch = useDispatch();

  if (loading) return <Loader />;
  if (error || !product) return <ErrorMessage message="Product not found or error loading details." />;

  return (
    <div className="container mx-auto px-4 py-8 animate-in fade-in duration-500">
      <Link to="/" className="inline-flex items-center text-gray-500 hover:text-blue-600 mb-6 transition">
        <ArrowLeft size={20} className="mr-1" /> Back to Shopping
      </Link>
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
        <div className="grid md:grid-cols-2 gap-8 p-8">
          <div className="bg-gray-50 rounded-xl p-8 flex items-center justify-center">
            <img src={product.thumbnail} alt={product.title} className="max-h-[400px] object-contain drop-shadow-lg" />
          </div>
          <div className="flex flex-col justify-center">
            <div className="flex items-center gap-2 mb-4">
              <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">{product.category}</span>
              <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-sm font-medium">★ {product.rating}</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{product.title}</h1>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">{product.description}</p>
            <div className="flex items-end gap-4 mb-8">
              <span className="text-4xl font-bold text-gray-900">${product.price}</span>
              {product.discountPercentage > 0 && (
                <span className="text-red-500 mb-1.5 font-medium">-{product.discountPercentage}% OFF</span>
              )}
            </div>
            <button 
              onClick={() => dispatch(cartActions.addToCart(product))}
              className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl text-lg font-bold shadow-lg shadow-blue-200 transition-all flex items-center justify-center gap-3 active:scale-95"
            >
              <ShoppingCart size={24} /> Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;