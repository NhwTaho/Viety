import React from 'react';
import { X, ShieldCheck, ShoppingBag, Phone, CheckCircle2, MessageCircle, Wrench, Award, Clock, Layers } from 'lucide-react';
import { formatVND } from '../../lib/utils';

export default function QuickViewModal({ product, onClose, onAddToCart }) {
  if (!product) return null;

  // Helper to generate 7-10 detailed tech specs lines dynamically for any product
  const getTechSpecs = (p) => {
    const isGrinder = p.category === 'grinder' || p.title.toLowerCase().includes('xay');
    
    if (isGrinder) {
      return [
        { label: "Xuất xứ & Thương hiệu", value: `${p.origin} • Thương hiệu ${p.brand}` },
        { label: "Thời gian bảo hành", value: `${p.warranty} tận nơi toàn quốc` },
        { label: "Đĩa xay (Burr size)", value: "64mm thép tôi cứng công nghiệp Ý" },
        { label: "Tốc độ xay", value: "10 - 14 kg/giờ (2.5 giây/tay pha)" },
        { label: "Màn hình điều khiển", value: "Cảm ứng điện tử định lượng tự động 0.1s" },
        { label: "Dung tích phễu hạt", value: "1.2 kg (Nhựa ABS chịu lực cao cấp)" },
        { label: "Công suất động cơ", value: "350W - Tốc độ 1400 vòng/phút" },
        { label: "Độ mịn cà phê", value: "Tùy chỉnh Stepless mượt mà chuẩn Espresso" },
        { label: "Vận chuyển & Lắp đặt", value: "Miễn phí giao hàng & Cài đặt tận nơi" },
        { label: "Chính sách đại lý", value: "Cam kết 100% linh kiện nhập khẩu nguyên chiếc" }
      ];
    }

    return [
      { label: "Xuất xứ & Thương hiệu", value: `${p.origin} • Thương hiệu ${p.brand}` },
      { label: "Thời gian bảo hành", value: `${p.warranty} tận nơi trên toàn quốc` },
      { label: "Dung tích nồi hơi (Boiler)", value: p.specs.includes('12L') ? "12.0 Lít (Nồi đồng nguyên khối Ý)" : "10.5 Lít - 11.0 Lít (Đồng cao cấp)" },
      { label: "Công suất điện tiêu thụ", value: "3200W - 3500W (Ngắt điện tự động khi đủ nhiệt)" },
      { label: "Bơm & Áp suất chiết xuất", value: "Bơm quay công nghiệp Ý 9 Bar chuẩn Espresso" },
      { label: "Năng suất phục vụ", value: p.specs.includes('ly/ngày') ? p.specs.split('|')[1]?.trim() : "250 - 400 ly/ngày (Vận hành 24/7)" },
      { label: "Vòi đánh sữa & Nước nóng", value: "2 Vòi xoay inox 360° + 1 Vòi nước nóng tự động" },
      { label: "Hệ thống cân bằng nhiệt", value: "Công nghệ SIS / Shot Timer chống cháy cà phê" },
      { label: "Bộ quà tặng kèm", value: "Trọn bộ Barista 10 món + Ca đánh sữa Teflon" },
      { label: "Hỗ trợ chủ quán", value: "Miễn phí công thức Menu & Đào tạo Barista" }
    ];
  };

  const specList = getTechSpecs(product);

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* OVERLAY */}
      <div 
        onClick={onClose}
        className="fixed inset-0 bg-slate-950/70 backdrop-blur-xs transition-opacity" 
      />

      {/* DIALOG BOX */}
      <div className="flex min-h-full items-center justify-center p-3 sm:p-4">
        <div className="relative w-full max-w-4xl bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-slate-200 overflow-hidden animate-in fade-in zoom-in-95 my-8">
          
          {/* CLOSE BUTTON */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-20 p-2.5 text-slate-400 hover:text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-full transition cursor-pointer"
            title="Đóng cửa sổ"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* LEFT COLUMN: PREVIEW & ACTION CTAs */}
            <div className="lg:col-span-5 space-y-5">
              
              {/* IMAGE CONTAINER */}
              <div className="aspect-4/3 sm:aspect-square bg-slate-50 rounded-2xl p-6 border border-slate-200/80 flex items-center justify-center relative group">
                <span className="absolute top-3 left-3 z-10 px-3 py-1 text-[11px] font-extrabold bg-white/95 backdrop-blur-md text-slate-800 rounded-full border border-slate-200/80 shadow-xs uppercase tracking-wider">
                  {product.badge}
                </span>

                <img
                  src={product.image}
                  alt={product.title}
                  className="max-h-64 object-contain group-hover:scale-105 transition duration-500"
                />
              </div>

              {/* TITLE & PRICING */}
              <div>
                <h3 className="font-extrabold text-lg sm:text-xl text-slate-900 leading-snug">
                  {product.title}
                </h3>

                <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 mt-2">
                  <ShieldCheck className="w-4 h-4 text-blue-600" />
                  <span>Chính hãng {product.origin} • Bảo hành {product.warranty}</span>
                </div>

                <div className="mt-4 p-4 bg-slate-50 rounded-2xl border border-slate-200/80 flex items-baseline justify-between">
                  <div>
                    <span className="text-xs text-slate-400 line-through block">
                      Giá niêm yết: {formatVND(product.oldPrice)}
                    </span>
                    <span className="text-2xl sm:text-3xl font-black text-slate-900 mt-0.5 block">
                      {formatVND(product.price)}
                    </span>
                  </div>
                  <span className="text-[11px] font-extrabold text-emerald-700 bg-emerald-100 px-2.5 py-1 rounded-full">
                    Sẵn hàng kho
                  </span>
                </div>
              </div>

              {/* HIGH CONVERTING CONVERSION CTAs */}
              <div className="space-y-2.5 pt-1">
                <a
                  href={`https://zalo.me/0972006789?text=${encodeURIComponent(`Tôi cần tư vấn & nhận báo giá ưu đãi cho ${product.title}`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-sm rounded-xl shadow-lg shadow-emerald-600/25 transition flex items-center justify-center gap-2.5 cursor-pointer"
                >
                  <MessageCircle className="w-5 h-5 fill-white text-emerald-700" />
                  <span>Chat Zalo Báo Giá & Ưu Đãi (3p)</span>
                </a>

                <div className="grid grid-cols-2 gap-2">
                  <button
                    onClick={() => { onAddToCart(product); onClose(); }}
                    className="py-3 bg-red-600 hover:bg-red-700 text-white font-bold text-xs rounded-xl shadow-md shadow-red-600/20 transition flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <ShoppingBag className="w-4 h-4" /> Thêm Giỏ Hàng
                  </button>

                  <a
                    href="tel:0972006789"
                    className="py-3 bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs rounded-xl border border-slate-200 transition flex items-center justify-center gap-1.5"
                  >
                    <Phone className="w-4 h-4 text-blue-600" /> Hotline 24/7
                  </a>
                </div>
              </div>

            </div>

            {/* RIGHT COLUMN: 7-10 DETAILED TECHNICAL SPECIFICATIONS */}
            <div className="lg:col-span-7 bg-slate-50/70 rounded-2xl p-5 sm:p-6 border border-slate-200/90 space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-slate-200">
                <h4 className="font-extrabold text-sm text-slate-900 uppercase tracking-wide flex items-center gap-2">
                  <Wrench className="w-4 h-4 text-blue-600" />
                  Thông Số Kỹ Thuật Chi Tiết (10 Tiêu Chuẩn)
                </h4>
                <span className="text-[11px] font-bold text-blue-600 bg-blue-50 px-2.5 py-0.5 rounded-full border border-blue-100">
                  Chuẩn Ý 100%
                </span>
              </div>

              {/* SPECIFICATION ROWS (10 ITEMS) */}
              <div className="divide-y divide-slate-200/80 text-xs">
                {specList.map((item, idx) => (
                  <div key={idx} className="py-2.5 flex items-start justify-between gap-3">
                    <span className="font-semibold text-slate-500 shrink-0 flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      {item.label}:
                    </span>
                    <span className="font-bold text-slate-900 text-right">
                      {item.value}
                    </span>
                  </div>
                ))}
              </div>

              {/* TRUST FOOTER NOTE */}
              <div className="pt-3 border-t border-slate-200 flex items-center gap-2 text-[11px] text-slate-500 font-medium">
                <Award className="w-4 h-4 text-amber-500 shrink-0" />
                <span>Cam kết máy chính hãng 100%, bảo hành 24 tháng tận nơi tại kho Việt Ý.</span>
              </div>

            </div>

          </div>

        </div>
      </div>
    </div>
  );
}
