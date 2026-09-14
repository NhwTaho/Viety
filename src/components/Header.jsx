import React, { useState } from 'react';
import { Search, ShoppingBag, Menu, X, Phone, Award } from 'lucide-react';

export default function Header({ cartCount, onOpenCart, onOpenTracking, searchQuery, setSearchQuery }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* LOGO */}
          <a href="#" className="flex items-center gap-3 group">
            <img 
              src="/images/logoviety.png" 
              alt="Máy Pha Cà Phê Việt Ý" 
              className="h-12 w-auto object-contain transition-transform group-hover:scale-105" 
            />
          </a>

          {/* DESKTOP NAVIGATION */}
          <nav className="hidden md:flex items-center gap-8 font-medium text-slate-700 text-sm">
            <button onClick={() => scrollTo('productsSection')} className="hover:text-blue-600 transition-colors font-semibold">
              Máy Pha Cà Phê
            </button>
            <button onClick={() => scrollTo('realGallerySection')} className="hover:text-blue-600 transition-colors">
              Hình Ảnh Thực Tế
            </button>
            <button onClick={() => scrollTo('calculatorSection')} className="hover:text-blue-600 transition-colors">
              Dự Toán Mở Quán
            </button>
            <button onClick={() => scrollTo('comparisonSection')} className="hover:text-blue-600 transition-colors">
              So Sánh Máy
            </button>
            <button onClick={() => scrollTo('contactFooter')} className="hover:text-blue-600 transition-colors">
              Liên Hệ
            </button>
          </nav>

          {/* ACTIONS: SEARCH, CART, MOBILE TOGGLE */}
          <div className="flex items-center gap-3">
            
            {/* Search Input */}
            <div className="relative hidden sm:block w-48 md:w-64">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Tìm Wega, Cimbali..."
                className="w-full pl-9 pr-4 py-2 text-sm bg-slate-100 border border-slate-200 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition"
              />
              {searchQuery && (
                <button 
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 text-xs"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            {/* Cart Button */}
            <button
              onClick={onOpenCart}
              className="relative p-2.5 bg-blue-50 hover:bg-blue-100 text-blue-600 rounded-full transition-colors focus:outline-none"
              title="Giỏ hàng"
            >
              <ShoppingBag className="w-5 h-5" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white font-bold text-[11px] w-5 h-5 rounded-full flex items-center justify-center border-2 border-white shadow-sm animate-pulse">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2.5 text-slate-700 hover:bg-slate-100 rounded-lg transition"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* MOBILE SEARCH & MENU DROPDOWN */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-slate-100 space-y-3 bg-white px-2">
            <div className="relative mb-3">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Tìm máy pha Wega, Cimbali..."
                className="w-full pl-9 pr-4 py-2.5 text-sm bg-slate-100 border border-slate-200 rounded-full focus:outline-none focus:border-blue-500"
              />
            </div>
            <div className="flex flex-col gap-2 font-medium text-slate-700 text-base">
              <button 
                onClick={() => scrollTo('productsSection')} 
                className="text-left px-3 py-2 rounded-lg hover:bg-slate-50 text-blue-600 font-semibold"
              >
                Máy Pha Cà Phê
              </button>
              <button 
                onClick={() => scrollTo('realGallerySection')} 
                className="text-left px-3 py-2 rounded-lg hover:bg-slate-50"
              >
                Hình Ảnh Thực Tế
              </button>
              <button 
                onClick={() => scrollTo('calculatorSection')} 
                className="text-left px-3 py-2 rounded-lg hover:bg-slate-50"
              >
                Dự Toán Mở Quán
              </button>
              <button 
                onClick={() => scrollTo('comparisonSection')} 
                className="text-left px-3 py-2 rounded-lg hover:bg-slate-50"
              >
                So Sánh Máy
              </button>
              <button 
                onClick={() => scrollTo('contactFooter')} 
                className="text-left px-3 py-2 rounded-lg hover:bg-slate-50"
              >
                Liên Hệ Direct
              </button>
              <button 
                onClick={() => { onOpenTracking(); setMobileMenuOpen(false); }} 
                className="text-left px-3 py-2.5 bg-blue-600 text-white rounded-xl font-semibold flex items-center gap-2"
              >
                <Truck className="w-4 h-4" /> Tra Cứu Đơn Hàng Tận Nơi
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
