import React, { useState } from 'react';
import { Calculator, CheckCircle2, Send } from 'lucide-react';
import { formatVND } from '../lib/utils';

export default function CostCalculator({ onOpenCheckout }) {
  const [cups, setCups] = useState(150);
  const [modelType, setModelType] = useState('medium');

  // Compute package based on cups & model type
  const getPackage = () => {
    if (cups < 100 && modelType === 'takeaway') {
      return {
        name: "Gói Khởi Nghiệp Takeaway",
        price: 49000000,
        items: [
          "Máy pha cà phê Casadio Undici A1 Group (Ý)",
          "Máy xay cà phê JX600AD On-Demand Auto",
          "Bộ phụ kiện Barista trọn gói (Tamper, Ca đánh sữa, Thảm)",
          "Miễn phí lắp đặt & đào tạo nhân viên tận nơi"
        ]
      };
    } else if (cups > 300 || modelType === 'lounge') {
      return {
        name: "Gói High-End Lounge",
        price: 185000000,
        items: [
          "Máy pha cà phê WEGA AIRY EVD 2 Group (Flagship 2026)",
          "Máy xay cà phê Eureka Zenith Club 65E (Ý)",
          "Hệ thống lọc nước tinh khiết chuyên dụng chống cặn",
          "Bảo hành 24 tháng tận nơi + Bảo trì định kỳ 6 tháng/lần"
        ]
      };
    } else {
      return {
        name: "Gói Quán Chuyên Nghiệp",
        price: 89000000,
        items: [
          "Máy pha cà phê Wega Pegaso / Casadio A2 Group (Ý)",
          "Máy xay cà phê Fiorenzato F64E màn hình cảm ứng",
          "Trọn bộ dụng cụ quầy pha chế Espresso",
          "Tặng công thức pha chế menu chuẩn Ý & Đào tạo Barista"
        ]
      };
    }
  };

  const currentPkg = getPackage();

  return (
    <section id="calculatorSection" className="py-16 bg-slate-100/80 border-t border-slate-200 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 flex items-center justify-center gap-2">
            <Calculator className="w-7 h-7 text-blue-600" />
            Dự Toán Chi Phí Thiết Bị Mở Quán
          </h2>
          <p className="text-sm text-slate-500 mt-2">
            Kéo chọn số lượng ly/ngày để hệ thống đề xuất gói máy pha & máy xay tối ưu chi phí
          </p>
        </div>

        {/* CALCULATOR CARD */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-xl border border-slate-200 grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* INPUTS (LEFT) */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="font-bold text-lg text-slate-900 border-b border-slate-100 pb-3">
              1. Công Suất Quán Dự Kiến
            </h3>

            {/* Range Slider */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-sm font-semibold text-slate-700">Số lượng ly cà phê/ngày:</label>
                <span className="px-3 py-1 bg-blue-100 text-blue-800 font-extrabold text-sm rounded-full">
                  {cups} ly/ngày
                </span>
              </div>
              <input
                type="range"
                min="50"
                max="500"
                step="10"
                value={cups}
                onChange={(e) => setCups(Number(e.target.value))}
                className="w-full h-2.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
              />
              <div className="flex justify-between text-[11px] font-semibold text-slate-400 mt-1">
                <span>50 ly (Mô hình nhỏ)</span>
                <span>250 ly (Quán vừa)</span>
                <span>500 ly (Chuỗi lớn)</span>
              </div>
            </div>

            {/* Model Type Radio Buttons */}
            <div>
              <label className="text-sm font-semibold text-slate-700 block mb-3">Mô hình kinh doanh:</label>
              <div className="grid grid-cols-3 gap-3">
                {[
                  { id: 'takeaway', label: 'Takeaway' },
                  { id: 'medium', label: 'Quán Vừa' },
                  { id: 'lounge', label: 'Chuỗi Lounge' }
                ].map((m) => (
                  <button
                    key={m.id}
                    onClick={() => setModelType(m.id)}
                    className={`py-3 px-2 text-xs sm:text-sm font-bold rounded-xl border transition-all cursor-pointer ${
                      modelType === m.id
                        ? 'bg-blue-600 border-blue-600 text-white shadow-md shadow-blue-500/25 scale-[1.02]'
                        : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'
                    }`}
                  >
                    {m.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* RESULTS (RIGHT) */}
          <div className="lg:col-span-5 bg-slate-900 text-white rounded-2xl p-6 flex flex-col justify-between space-y-6">
            <div>
              <span className="text-[11px] font-bold tracking-wider text-slate-400 uppercase block mb-1">
                Gói Thiết Bị Đề Xuất:
              </span>
              <h4 className="text-xl font-extrabold text-blue-400 mb-4">
                {currentPkg.name}
              </h4>

              <ul className="space-y-2.5 text-xs text-slate-300">
                {currentPkg.items.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-4 border-t border-slate-800">
              <div className="text-xs text-slate-400 mb-1">Dự toán đầu tư trọn gói:</div>
              <div className="text-2xl sm:text-3xl font-black text-amber-400 mb-4">
                {formatVND(currentPkg.price)}
              </div>

              <div className="space-y-2.5">
                <a
                  href={`https://zalo.me/0972006789?text=${encodeURIComponent(`Tôi muốn nhận file Dự Toán Chi Tiết cho ${currentPkg.name} (${cups} ly/ngày).`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm rounded-xl shadow-lg shadow-emerald-600/30 transition flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send className="w-4 h-4" /> Gửi Bảng Dự Toán Sang Zalo
                </a>

                <button
                  onClick={onOpenCheckout}
                  className="w-full py-3 bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold text-xs rounded-xl border border-slate-700 transition flex items-center justify-center gap-2 cursor-pointer"
                >
                  Đặt Hàng / Nhận Tư Vấn Gọi Lại
                </button>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
