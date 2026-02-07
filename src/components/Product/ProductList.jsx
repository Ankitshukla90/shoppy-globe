import React from 'react';
import { useSelector } from 'react-redux';
import { Search } from 'lucide-react';
import useFetch from '../../hooks/useFetch';
import ProductItem from './ProductItem';
import Loader from '../common/Loader';
import ErrorMessage from '../common/ErrorMessage';

const ProductList = () => {
  const { data, loading, error } = useFetch('https://dummyjson.com/products?limit=100');
  const searchTerm = useSelector((state) => state.search.term.toLowerCase());

  if (loading) return <Loader />;
  if (error) return <ErrorMessage message={error} />;

  const filteredProducts = data?.products.filter(product => 
    product.title.toLowerCase().includes(searchTerm) ||
    product.description.toLowerCase().includes(searchTerm)
  );

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
        {searchTerm ? `Results for "${searchTerm}"` : "Featured Products"}
        <span className="text-sm font-normal text-gray-500 ml-2">
          ({filteredProducts?.length || 0})
        </span>
      </h2>
      
      {filteredProducts?.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <ProductItem key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="text-center py-20 text-gray-500">
          <Search size={48} className="mx-auto mb-4 opacity-20" />
          <p className="text-xl">No products found.</p>
        </div>
      )}
    </div>
  );
};

export default ProductList;