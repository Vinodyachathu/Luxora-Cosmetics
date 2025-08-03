import React, { useState } from 'react';
import { Menu, X, Search, ShoppingBag } from 'lucide-react';

const LuxoraHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-md z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold tracking-tight">LUXORA</h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#" className="hover:text-gray-600 transition-colors font-medium">Home</a>
              <a href="#" className="hover:text-gray-600 transition-colors font-medium">Products</a>
              <a href="#" className="hover:text-gray-600 transition-colors font-medium">Collections</a>
              <a href="#" className="hover:text-gray-600 transition-colors font-medium">About</a>
              <a href="#" className="hover:text-gray-600 transition-colors font-medium">Contact</a>
            </div>
          </div>

          {/* Right side icons */}
          <div className="flex items-center space-x-4">
            <Search className="h-5 w-5 hover:text-gray-600 cursor-pointer transition-colors" />
            <ShoppingBag className="h-5 w-5 hover:text-gray-600 cursor-pointer transition-colors" />
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#" className="block px-3 py-2 text-base font-medium hover:bg-gray-50">Home</a>
            <a href="#" className="block px-3 py-2 text-base font-medium hover:bg-gray-50">Products</a>
            <a href="#" className="block px-3 py-2 text-base font-medium hover:bg-gray-50">Collections</a>
            <a href="#" className="block px-3 py-2 text-base font-medium hover:bg-gray-50">About</a>
            <a href="#" className="block px-3 py-2 text-base font-medium hover:bg-gray-50">Contact</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default LuxoraHeader;