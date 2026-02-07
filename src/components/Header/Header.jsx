import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { ShoppingBag, ShoppingCart } from 'lucide-react';
import SearchInput from './SearchInput';

const Header = () => {
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <NavLink to="/" className="flex items-center gap-2 text-2xl font-bold text-blue-600 hover:text-blue-700 transition">
          <ShoppingBag size={28} />
          <span className="hidden sm:inline">ShoppyGlobe</span>
        </NavLink>

        <div className="hidden md:block flex-1 max-w-md mx-8">
          <SearchInput />
        </div>

        <nav className="flex items-center gap-6">
          <NavLink 
            to="/" 
            className={({ isActive }) => `font-medium transition ${isActive ? 'text-blue-600' : 'text-gray-600 hover:text-blue-600'}`}
          >
            Home
          </NavLink>
          
          <NavLink to="/cart" className="relative group p-2">
            <ShoppingCart size={24} className="text-gray-700 group-hover:text-blue-600 transition" />
            {totalQuantity > 0 && (
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full animate-in zoom-in">
                {totalQuantity}
              </span>
            )}
          </NavLink>
        </nav>
      </div>
      
      {/* Mobile Search */}
      <div className="md:hidden px-4 pb-3">
        <SearchInput />
      </div>
    </header>
  );
};

export default Header;