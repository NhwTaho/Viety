import React, { useState } from 'react';
import { Search, ShoppingBag, Menu, X, Phone, Award, Truck } from 'lucide-react';

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
      {/* TOP ANNOUNCEMENT BAR WITH LOGO BRAND TICKER */}
      <div className="bg-slate-900 text-white text-xs font-medium py-2 px-4 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          <div className="flex items-center gap-4 overflow-x-auto no-scrollbar whitespace-nowrap py-0.5">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span className="font-semibold text-slate-200">Nhập Khẩu Máy Pha Cà Phê Ý Chính Hãng</span>
            </div>
            <span className="text-slate-700">|</span>
            <div className="flex items-center gap-2 text-slate-300">
              <img 
                src="/favicon.png" 
                alt="Logo Việt Ý" 
                className="h-5 w-5 object-contain shrink-0" 
              />
              <span className="font-bold text-white tracking-wide">Coffee Việt Ý</span>
            </div>
            <span className="text-slate-700">|</span>
            <span className="text-amber-400 font-semibold">★ Bảo Hành 24 Tháng Tận Nơi</span>
          </div>

          <div className="hidden sm:flex items-center gap-4 text-slate-300 shrink-0">
            <a href="tel:0972006789" className="hover:text-white transition flex items-center gap-1.5 font-bold">
              <Phone className="w-3.5 h-3.5 text-red-500" />
              <span>Hotline: 0972.006.789</span>
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* LOGO */}
          <a href="#" className="flex items-center gap-3 group shrink-0">
            <img 
              src="/images/logoviety.png" 
              alt="Máy Pha Cà Phê Việt Ý" 
              className="h-10 sm:h-12 w-auto max-h-12 object-contain shrink-0 transition-transform group-hover:scale-105" 
            />
          </a>

          {/* DESKTOP NAVIGATION */}
          <nav className="hidden md:flex items-center gap-8 font-medium text-slate-700 text-sm">
            <button onClick={() => scrollTo('productsSection')} className="hover:text-blue-600 transition-colors font-semibold cursor-pointer">
              Máy Pha Cà Phê
            </button>
            <button onClick={() => scrollTo('realGallerySection')} className="hover:text-blue-600 transition-colors cursor-pointer">
              Hình Ảnh Thực Tế
            </button>
            <button onClick={() => scrollTo('calculatorSection')} className="hover:text-blue-600 transition-colors cursor-pointer">
              Dự Toán Mở Quán
            </button>
            <button onClick={() => scrollTo('comparisonSection')} className="hover:text-blue-600 transition-colors cursor-pointer">
              So Sánh Máy
            </button>
            <button onClick={() => scrollTo('contactFooter')} className="hover:text-blue-600 transition-colors cursor-pointer">
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
                className="w-full pl-9 pr-4 py-2 text-sm bg-slate-100 border border-slate-200 rounded-full focus:outline-none focus:ring-2 focus:ring-slate-900/10 focus:border-slate-400 transition"
              />
              {searchQuery && (
                <button 
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 text-xs cursor-pointer"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            {/* Cart Button */}
            <button
              onClick={onOpenCart}
              className="relative p-2.5 bg-slate-100 hover:bg-slate-200 text-slate-800 rounded-full transition-colors focus:outline-none cursor-pointer"
              title="Giỏ hàng"
            >
              <ShoppingBag className="w-5 h-5" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-slate-900 text-white font-bold text-[11px] w-5 h-5 rounded-full flex items-center justify-center border-2 border-white shadow-sm animate-pulse">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2.5 text-slate-700 hover:bg-slate-100 rounded-lg transition cursor-pointer"
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
                className="w-full pl-9 pr-4 py-2.5 text-sm bg-slate-100 border border-slate-200 rounded-full focus:outline-none focus:border-slate-400"
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
                className="text-left px-3 py-2.5 bg-slate-900 hover:bg-slate-800 text-white rounded-xl font-semibold flex items-center gap-2"
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
