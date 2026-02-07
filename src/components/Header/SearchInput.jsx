import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Search, X } from 'lucide-react';
import { searchActions } from '../../store/searchSlice';

const SearchInput = () => {
  const dispatch = useDispatch();
  const searchTerm = useSelector((state) => state.search.term);

  return (
    <div className="relative w-full">
      <input
        type="text"
        placeholder="Search products..."
        className="w-full pl-10 pr-10 py-2 bg-gray-100 border-none rounded-full focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all outline-none"
        value={searchTerm}
        onChange={(e) => dispatch(searchActions.setSearchTerm(e.target.value))}
      />
      <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
      {searchTerm && (
        <button 
          onClick={() => dispatch(searchActions.setSearchTerm(''))}
          className="absolute right-3 top-2.5 text-gray-400 hover:text-gray-600"
        >
          <X size={16} />
        </button>
      )}
    </div>
  );
};

export default SearchInput;