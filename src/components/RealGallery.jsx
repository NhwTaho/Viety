import React, { useState } from 'react';
import { X, MessageCircle, Eye, ShieldCheck } from 'lucide-react';

const REAL_ITEMS = [
  {
    id: 1,
    title: "Bàn giao máy Wega tại Quận 1",
    tag: "Trọn gói lắp đặt & đào tạo nhân viên",
    desc: "Hình ảnh kỹ thuật viên Việt Ý hoàn thiện bàn giao & căn chỉnh máy pha Wega EVD 2 Group tại quán cà phê cao cấp Quận 1, TP.HCM.",
    image: "/images/real_wega_q1.jpg"
  },
  {
    id: 2,
    title: "Kỹ Thuật Căn Chỉnh Áp Suất 9 Bar",
    tag: "Kiểm tra chi tiết trước khi xuất xưởng",
    desc: "Quy trình đo áp suất bơm 9 Bar chuẩn Espresso và kiểm tra nhiệt độ nước ổn định 92°C trước khi niêm phong giao cho khách.",
    image: "/images/real_pressure_9bar.jpg"
  },
  {
    id: 3,
    title: "Showroom Quận 12 Sẵn Máy Thử",
    tag: "Khách hàng trực tiếp test máy & nếm cà phê",
    desc: "Showroom Việt Ý tại Quận 12 có sẵn hơn 50+ dòng máy pha Ý chính hãng. Khách hàng có thể mang hạt cà phê riêng đến test thử máy thoải mái.",
    image: "/images/real_showroom_q12.jpg"
  },
  {
    id: 4,
    title: "Chuyển Giao Công Thức Pha Chế",
    tag: "Tặng trọn bộ công thức menu mở quán",
    desc: "Chuyên gia Barista của Việt Ý hướng dẫn chủ quán cách chiết xuất Espresso chuẩn vị, kỹ thuật đánh sữa Latte Art và định lượng nguyên liệu.",
    image: "/images/real_barista_recipe.jpg"
  }
];

export default function RealGallery() {
  const [selectedItem, setSelectedItem] = useState(null);

  return (
    <section id="realGallerySection" className="py-16 bg-white border-t border-slate-100 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="text-blue-600 font-extrabold text-xs tracking-widest uppercase block mb-2">
            HÌNH ẢNH THỰC TẾ
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 leading-tight mb-3">
            Bàn Giao & Lắp Đặt Tận Nơi Cho Khách Hàng
          </h2>
          <div className="w-12 h-1 bg-blue-600 rounded-full mx-auto mb-4"></div>
          <p className="text-sm sm:text-base text-slate-500 leading-relaxed">
            Ghi nhận những khoảnh khắc kỹ thuật viên Việt Ý bàn giao máy, test áp suất và hướng dẫn chủ quán tại TP.HCM và các tỉnh thành toàn quốc. Click vào hình để xem chi tiết!
          </p>
        </div>

        {/* 4 CARDS GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {REAL_ITEMS.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedItem(item)}
              className="group relative rounded-2xl overflow-hidden shadow-lg border border-slate-200 aspect-[4/4.8] cursor-pointer hover:-translate-y-2 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-900/10"
            >
              {/* IMAGE */}
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700"
              />

              {/* OVERLAY EYE ICON */}
              <div className="absolute top-3 right-3 z-10 p-2 bg-slate-900/70 backdrop-blur-xs text-white rounded-full opacity-0 group-hover:opacity-100 transition duration-300">
                <Eye className="w-4 h-4" />
              </div>

              {/* GRADIENT OVERLAY */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-transparent flex flex-col justify-end p-5 text-white">
                <h3 className="font-bold text-base text-white leading-snug mb-1 drop-shadow-md">
                  {item.title}
                </h3>
                <p className="text-xs font-semibold text-amber-400 drop-shadow-sm">
                  {item.tag}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* LIGHTBOX MODAL WHEN CLICKING AN IMAGE */}
      {selectedItem && (
        <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4">
          <div 
            onClick={() => setSelectedItem(null)}
            className="fixed inset-0 bg-slate-950/80 backdrop-blur-sm transition-opacity" 
          />

          <div className="relative w-full max-w-3xl bg-white rounded-3xl overflow-hidden shadow-2xl z-10 border border-slate-200 animate-in fade-in zoom-in-95">
            <button
              onClick={() => setSelectedItem(null)}
              className="absolute top-4 right-4 z-20 p-2 text-white bg-slate-900/70 hover:bg-slate-900 rounded-full transition cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="grid grid-cols-1 md:grid-cols-12">
              <div className="md:col-span-7 bg-slate-900 aspect-4/3 md:aspect-auto relative flex items-center justify-center">
                <img
                  src={selectedItem.image}
                  alt={selectedItem.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="md:col-span-5 p-6 flex flex-col justify-between space-y-5 bg-white">
                <div>
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-blue-50 text-blue-700 font-bold text-xs mb-3">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>Hình ảnh bàn giao thực tế</span>
                  </div>

                  <h3 className="text-xl font-extrabold text-slate-900 leading-snug mb-2">
                    {selectedItem.title}
                  </h3>

                  <p className="text-xs font-bold text-amber-600 mb-3">
                    {selectedItem.tag}
                  </p>

                  <p className="text-xs text-slate-600 leading-relaxed font-normal">
                    {selectedItem.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 space-y-2">
                  <a
                    href={`https://zalo.me/0972006789?text=${encodeURIComponent(`Tôi muốn xem thêm hình ảnh & video thực tế công trình: ${selectedItem.title}`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-xs rounded-xl shadow-md transition flex items-center justify-center gap-2"
                  >
                    <MessageCircle className="w-4.5 h-4.5 fill-white text-emerald-700" /> Chat Zalo Xem Thêm Video Thực Tế
                  </a>
                  <button
                    onClick={() => setSelectedItem(null)}
                    className="w-full py-2.5 text-slate-500 hover:text-slate-700 font-semibold text-xs text-center"
                  >
                    Đóng cửa sổ
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>
      )}
    </section>
  );
}

