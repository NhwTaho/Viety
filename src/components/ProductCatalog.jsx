import React, { useState } from 'react';
import { PRODUCTS, CATEGORIES } from '../data/products';
import { formatVND } from '../lib/utils';
import { ShoppingBag, Eye, ShieldCheck, ChevronRight, MessageCircle } from 'lucide-react';

export default function ProductCatalog({ searchQuery, onAddToCart, onQuickView }) {
  const [activeCategory, setActiveCategory] = useState('all');
  const [sortOption, setSortOption] = useState('default');


  // Filter products by category & search query
  let filtered = PRODUCTS.filter((p) => {
    const matchesCategory = activeCategory === 'all' || p.category === activeCategory;
    const q = searchQuery.toLowerCase().trim();
    const matchesSearch = !q || p.title.toLowerCase().includes(q) || p.brand.toLowerCase().includes(q) || p.specs.toLowerCase().includes(q);
    return matchesCategory && matchesSearch;
  });

  // Sort products
  if (sortOption === 'price-asc') {
    filtered.sort((a, b) => a.price - b.price);
  } else if (sortOption === 'price-desc') {
    filtered.sort((a, b) => b.price - a.price);
  }

  return (
    <section id="productsSection" className="py-14 bg-white scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* HEADER & SORT ROW */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              Các Loại Máy Pha Cà Phê Nhập Khẩu
            </h2>
            <p className="text-sm text-slate-500 mt-1">
              Danh mục máy pha & máy xay cà phê Ý chính hãng sẵn có tại kho Việt Ý
            </p>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-xs font-semibold text-slate-500 whitespace-nowrap">Sắp xếp:</span>
            <select
              value={sortOption}
              onChange={(e) => setSortOption(e.target.value)}
              className="px-3.5 py-2 text-xs font-semibold bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 text-slate-700 cursor-pointer"
            >
              <option value="default">Mặc định</option>
              <option value="price-asc">Giá: Thấp đến Cao</option>
              <option value="price-desc">Giá: Cao đến Thấp</option>
            </select>
          </div>
        </div>

        {/* CATEGORY SUBTABS */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar scroll-smooth">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 text-xs font-bold rounded-full transition-all whitespace-nowrap cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-500/20 scale-105'
                  : 'bg-slate-100 hover:bg-slate-200 text-slate-600'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* PRODUCTS GRID */}
        {filtered.length === 0 ? (
          <div className="text-center py-16 bg-slate-50 rounded-2xl border border-dashed border-slate-300">
            <p className="text-slate-500 font-medium">Không tìm thấy sản phẩm phù hợp với từ khóa "{searchQuery}"</p>
            <button
              onClick={() => { setActiveCategory('all'); }}
              className="mt-3 text-sm text-blue-600 font-semibold hover:underline"
            >
              Xem tất cả sản phẩm
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filtered.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-2xl border border-slate-200/90 overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col group hover:-translate-y-1"
              >
                {/* IMAGE CONTAINER */}
                <div className="relative aspect-4/3 bg-slate-50 overflow-hidden">
                  <span className="absolute top-3 left-3 z-10 px-2.5 py-1 text-[11px] font-bold bg-blue-600 text-white rounded-md shadow-xs">
                    {product.badge}
                  </span>

                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-contain p-4 group-hover:scale-108 transition-transform duration-500"
                  />

                  {/* QUICK VIEW EYE BUTTON */}
                  <button
                    onClick={() => onQuickView(product)}
                    className="absolute top-3 right-3 z-10 p-2 bg-white/90 backdrop-blur-md hover:bg-white text-slate-700 hover:text-blue-600 rounded-full shadow-md transition opacity-80 group-hover:opacity-100"
                    title="Xem nhanh"
                  >
                    <Eye className="w-4 h-4" />
                  </button>
                </div>

                {/* CONTENT */}
                <div className="p-4 flex-1 flex flex-col justify-between space-y-3">
                  <div>
                    <div className="flex items-center gap-1.5 text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-1">
                      <ShieldCheck className="w-3.5 h-3.5 text-blue-500" />
                      <span>{product.origin} • {product.warranty}</span>
                    </div>

                    <h3 className="font-bold text-sm text-slate-900 line-clamp-2 hover:text-blue-600 transition-colors">
                      {product.title}
                    </h3>

                    <p className="text-xs text-slate-500 mt-1">
                      {product.specs}
                    </p>
                  </div>

                  {/* PRICING & ACTION */}
                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between gap-2">
                    <div>
                      <div className="text-xs text-slate-400 line-through">
                        {formatVND(product.oldPrice)}
                      </div>
                      <div className="text-base font-extrabold text-blue-700">
                        {formatVND(product.price)}
                      </div>
                    </div>

                    <div className="flex items-center gap-1.5">
                      <a
                        href={`https://zalo.me/0972006789?text=${encodeURIComponent(`Tôi cần tư vấn & báo giá ưu đãi cho ${product.title}`)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-emerald-50 hover:bg-emerald-100 text-emerald-700 rounded-xl border border-emerald-200 transition flex items-center gap-1 text-xs font-bold"
                        title="Báo giá Zalo"
                      >
                        <MessageCircle className="w-4 h-4 fill-emerald-600 text-white" />
                        <span className="hidden sm:inline">Zalo</span>
                      </a>

                      <button
                        onClick={() => onAddToCart(product)}
                        className="p-2 bg-blue-600 hover:bg-blue-700 text-white rounded-xl shadow-md shadow-blue-500/20 transition active:scale-95 flex items-center gap-1 text-xs font-semibold"
                        title="Thêm vào giỏ"
                      >
                        <ShoppingBag className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
}
