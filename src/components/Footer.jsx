import React from 'react';
import { Phone, MapPin, Mail, Award, Clock, MessageCircle } from 'lucide-react';

export default function Footer({ onOpenCheckout }) {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer id="contactFooter" className="bg-slate-950 text-white pt-16 pb-12 scroll-mt-20 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-slate-800">
          
          {/* COL 1: ABOUT */}
          <div className="space-y-4">
            <h3 className="font-extrabold text-base text-white tracking-wide uppercase">
              CÔNG TY TNHH TM XNK MÁY PHA CÀ PHÊ VIỆT Ý
            </h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Đơn vị nhập khẩu, phân phối và bảo hành chính hãng thiết bị pha chế espresso Ý. Mang giải pháp kinh doanh hiệu quả cho các quán cà phê Việt Nam.
            </p>
            <div className="flex items-center gap-2 text-xs text-amber-400 font-semibold pt-1">
              <Award className="w-4 h-4" />
              <span>Bảo hành 24 tháng tận nơi trên toàn quốc</span>
            </div>
          </div>

          {/* COL 2: BRANDS */}
          <div className="space-y-3">
            <h3 className="font-extrabold text-sm text-slate-200 uppercase tracking-wider">
              Thương Hiệu Máy
            </h3>
            <ul className="space-y-2 text-xs text-slate-400 font-medium">
              <li>
                <button onClick={() => scrollTo('productsSection')} className="hover:text-blue-400 transition">
                  Máy pha cà phê Wega
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('productsSection')} className="hover:text-blue-400 transition">
                  Máy pha Nuova Simonelli
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('productsSection')} className="hover:text-blue-400 transition">
                  Máy pha La Cimbali
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('productsSection')} className="hover:text-blue-400 transition">
                  Máy pha Rancilio & Expobar
                </button>
              </li>
            </ul>
          </div>

          {/* COL 3: SUPPORT */}
          <div className="space-y-3">
            <h3 className="font-extrabold text-sm text-slate-200 uppercase tracking-wider">
              Hỗ Trợ & Dự Toán
            </h3>
            <ul className="space-y-2 text-xs text-slate-400 font-medium">
              <li>
                <button onClick={() => scrollTo('calculatorSection')} className="hover:text-blue-400 transition">
                  Dự toán chi phí mở quán
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('comparisonSection')} className="hover:text-blue-400 transition">
                  So sánh kỹ thuật máy
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('realGallerySection')} className="hover:text-blue-400 transition">
                  Hình ảnh bàn giao thực tế
                </button>
              </li>
              <li>
                <button onClick={onOpenCheckout} className="hover:text-blue-400 transition text-blue-400 font-bold">
                  Nhận báo giá trọn gói Zalo
                </button>
              </li>
            </ul>
          </div>

          {/* COL 4: CONTACT DIRECT */}
          <div className="space-y-3">
            <h3 className="font-extrabold text-sm text-slate-200 uppercase tracking-wider">
              Liên Hệ Direct & Zalo
            </h3>
            <div className="space-y-3 text-xs text-slate-300">
              <a
                href="https://zalo.me/0972006789"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-2.5 px-3 bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold rounded-xl transition shadow-md"
              >
                <MessageCircle className="w-4 h-4 fill-white text-emerald-700" />
                <span>Chat Zalo Kỹ Thuật (24/7)</span>
              </a>

              <a href="tel:0972006789" className="flex items-center gap-2 hover:text-blue-400 transition">
                <Phone className="w-4 h-4 text-blue-500 shrink-0" />
                <span>Hotline 1: <strong>0972.006.789</strong></span>
              </a>
              <a href="tel:0948014789" className="flex items-center gap-2 hover:text-blue-400 transition">
                <Phone className="w-4 h-4 text-blue-500 shrink-0" />
                <span>Hotline 2: <strong>0948.014.789</strong></span>
              </a>
              <div className="flex items-start gap-2 text-slate-400">
                <MapPin className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" />
                <span>Showroom: Tân Bình & Quận 12, TP. HCM</span>
              </div>
              <div className="flex items-center gap-2 text-slate-400">
                <Clock className="w-4 h-4 text-blue-500 shrink-0" />
                <span>Giờ làm việc: 8:00 - 18:00 (Tất cả các ngày)</span>
              </div>
            </div>
          </div>

        </div>

        {/* COPYRIGHT */}
        <div className="pt-8 text-center text-xs text-slate-500">
          © 2026 CÔNG TY TNHH TM XNK MÁY PHA CÀ PHÊ VIỆT Ý. All rights reserved. Powered by React & Vite.
        </div>

      </div>
    </footer>
  );
}
