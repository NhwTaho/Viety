import React from 'react';
import { Award, Coffee, Truck, Calculator, Phone, MessageCircle } from 'lucide-react';

export default function Hero({ onOpenTracking, onOpenCheckout }) {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative bg-gradient-to-b from-red-50/50 via-slate-50 to-white py-12 md:py-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* LEFT CONTENT */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-slate-800 font-semibold text-xs tracking-wide uppercase shadow-xs">
              <Award className="w-4 h-4 text-blue-600" />
              <span>THƯƠNG HIỆU NHẬP KHẨU Ý CHÍNH HÃNG</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 leading-tight">
              Công Ty TNHH TM XNK <br className="hidden sm:block" />
              <span className="text-slate-900 bg-clip-text bg-gradient-to-r from-slate-900 via-blue-950 to-slate-900 text-transparent">
                Máy Pha Cà Phê Việt Ý
              </span>
            </h1>

            <p className="text-base sm:text-lg text-slate-600 max-w-2xl leading-relaxed font-normal">
              Nhập khẩu & phân phối độc quyền thương hiệu <strong>Wega, La Cimbali, Nuova Simonelli, Rancilio, Expobar</strong>. Đồng hành trọn gói cùng 1,200+ quán cà phê toàn quốc. Bảo hành 24 tháng tận nơi.
            </p>

            {/* HIGH CONVERTING ZALO ACTION ROW */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="https://zalo.me/0972006789"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-sm rounded-xl shadow-lg shadow-emerald-600/30 hover:shadow-emerald-600/50 transition-all hover:-translate-y-0.5 active:translate-y-0"
              >
                <MessageCircle className="w-5 h-5 fill-white text-emerald-700" />
                <span>Chat Zalo Nhận Báo Giá Đại Lý</span>
              </a>

              <button
                onClick={() => scrollTo('productsSection')}
                className="inline-flex items-center gap-2 px-5 py-3.5 bg-red-600 hover:bg-red-700 text-white font-bold text-sm rounded-xl shadow-md shadow-red-600/20 hover:shadow-red-600/30 transition-all hover:-translate-y-0.5 cursor-pointer"
              >
                <Coffee className="w-4 h-4" /> Xem Các Loại Máy Pha
              </button>

              <button
                onClick={() => scrollTo('calculatorSection')}
                className="inline-flex items-center gap-2 px-5 py-3.5 bg-white hover:bg-slate-50 text-slate-800 font-semibold text-sm rounded-xl border border-slate-200 shadow-sm hover:border-red-300 transition-all cursor-pointer"
              >
                <Calculator className="w-4 h-4 text-red-600" /> Dự Toán Mở Quán
              </button>
            </div>

            {/* MICRO TRUST BADGE FOR ZALO CONVERSION */}
            <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 pt-1">
              <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span>Đang online: Chat Zalo gửi ngay Video kho máy thật & Báo giá trong 3 phút</span>
            </div>
          </div>

          {/* RIGHT SHOWCASE CARD */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-white border border-slate-200/80 group">
              
              {/* Floating Badge */}
              <div className="absolute top-4 left-4 z-20 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/85 backdrop-blur-md text-white font-semibold text-xs border border-white/20 shadow-md">
                <span className="pulse-dot"></span>
                <span>SẴN HÀNG TẠI KHO</span>
              </div>

              {/* Product Image */}
              <div className="relative aspect-[4/3] bg-slate-100 overflow-hidden">
                <img
                  src="/images/máy-pha-cà-phê-wega-airy-2-group.jpg"
                  alt="WEGA AIRY EVD 2GR Flagship Espresso Machine"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
              </div>

              {/* Glass Footer Info */}
              <div className="p-5 bg-slate-900 text-white flex items-center justify-between gap-4">
                <div>
                  <div className="font-bold text-sm text-white tracking-wide">WEGA AIRY EVD 2GR - FLAGSHIP 2026</div>
                  <div className="text-xs text-slate-300 mt-0.5">Bảo hành 24 tháng tận nơi • Trọn gói Barista</div>
                </div>
                <a
                  href="https://zalo.me/0972006789"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs rounded-lg transition shrink-0"
                >
                  <MessageCircle className="w-4 h-4 fill-white text-emerald-700" /> Chat Zalo Báo Giá
                </a>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

