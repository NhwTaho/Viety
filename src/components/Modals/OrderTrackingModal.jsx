import React, { useState } from 'react';
import { X, Search, Truck, CheckCircle2, User, Phone, PackageCheck, Clock } from 'lucide-react';
import { DEMO_TRACKING } from '../../data/products';

export default function OrderTrackingModal({ isOpen, onClose }) {
  const [query, setQuery] = useState('');
  const [result, setResult] = useState(null);
  const [errorMsg, setErrorMsg] = useState('');

  if (!isOpen) return null;

  const handleSearch = (e) => {
    e?.preventDefault();
    setErrorMsg('');
    const code = query.trim().toUpperCase();

    if (DEMO_TRACKING[code]) {
      setResult(DEMO_TRACKING[code]);
    } else if (code.length > 0) {
      // Default fallback demo response for any search input
      setResult({
        code: code,
        customerName: "Khách hàng Việt Ý",
        items: "Đơn hàng máy pha cà phê nhập khẩu Ý",
        status: "shipping",
        statusText: "Đang giao hàng & chuẩn bị lắp đặt tận nơi",
        techName: "Kỹ thuật viên Việt Ý",
        techPhone: "0972.006.789",
        step: 3,
        timeline: [
          { time: "Mới cập nhật", text: "Đơn hàng đã xuất kho và đang trên đường vận chuyển." },
          { time: "Dự kiến 30 phút", text: "Kỹ thuật viên có mặt tại địa chỉ quán để lắp đặt." }
        ]
      });
    } else {
      setErrorMsg('Vui lòng nhập Mã đơn hàng hoặc Số điện thoại Zalo!');
    }
  };

  const fillDemo = (code) => {
    setQuery(code);
    setResult(DEMO_TRACKING[code]);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div 
        onClick={onClose}
        className="fixed inset-0 bg-slate-900/60 backdrop-blur-xs transition-opacity" 
      />

      <div className="flex min-h-full items-center justify-center p-4">
        <div className="relative w-full max-w-xl bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-slate-200 overflow-hidden animate-in fade-in zoom-in-95">
          
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-600 bg-slate-100 rounded-full transition"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-2 text-blue-600 font-extrabold text-lg mb-1">
            <Truck className="w-6 h-6" /> Tra Cứu Tiến Độ Đơn Hàng
          </div>
          <p className="text-xs text-slate-500 mb-6">
            Nhập Mã đơn (VD: VY-88492) hoặc SĐT Zalo để kiểm tra quy trình xuất kho, vận chuyển & kỹ thuật lắp đặt.
          </p>

          {/* SEARCH FORM */}
          <form onSubmit={handleSearch} className="flex gap-2 mb-4">
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Nhập mã đơn (VD: VY-88492) hoặc SĐT Zalo..."
              className="flex-1 px-4 py-2.5 text-xs font-semibold bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-blue-500"
            />
            <button
              type="submit"
              className="px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs rounded-xl shadow-md transition flex items-center gap-1.5 whitespace-nowrap cursor-pointer"
            >
              <Search className="w-4 h-4" /> Tra Cứu
            </button>
          </form>

          {/* DEMO CHIPS */}
          <div className="flex items-center gap-2 mb-6 flex-wrap">
            <span className="text-[11px] font-semibold text-slate-400">Mẫu xem thử:</span>
            <button
              onClick={() => fillDemo('VY-88492')}
              className="px-3 py-1 bg-slate-100 hover:bg-blue-50 text-slate-700 hover:text-blue-700 text-xs font-semibold rounded-full border border-slate-200 transition"
            >
              VY-88492 (Đang giao hàng)
            </button>
            <button
              onClick={() => fillDemo('VY-99120')}
              className="px-3 py-1 bg-slate-100 hover:bg-emerald-50 text-slate-700 hover:text-emerald-700 text-xs font-semibold rounded-full border border-slate-200 transition"
            >
              VY-99120 (Đã hoàn tất)
            </button>
          </div>

          {errorMsg && (
            <div className="p-3 bg-red-50 border border-red-200 text-red-600 font-semibold text-xs rounded-xl mb-4">
              {errorMsg}
            </div>
          )}

          {/* RESULTS BOX */}
          {result && (
            <div className="bg-slate-50 rounded-2xl p-5 border border-slate-200 space-y-4 text-xs animate-in fade-in">
              <div className="flex items-center justify-between pb-3 border-b border-slate-200">
                <div>
                  <span className="font-extrabold text-blue-700 text-sm">{result.code}</span>
                  <div className="text-slate-600 font-medium">{result.customerName}</div>
                </div>
                <span className={`px-2.5 py-1 font-extrabold rounded-full text-[11px] ${
                  result.status === 'completed' ? 'bg-emerald-100 text-emerald-800' : 'bg-amber-100 text-amber-800'
                }`}>
                  {result.statusText}
                </span>
              </div>

              {/* STEPPER */}
              <div className="grid grid-cols-4 gap-2 text-center text-[10px] font-bold">
                {[
                  { step: 1, label: 'Đã Tiếp Nhận' },
                  { step: 2, label: 'Test Áp Suất 9Bar' },
                  { step: 3, label: 'Đang Giao Hàng' },
                  { step: 4, label: 'Bàn Giao & HD' }
                ].map((s) => (
                  <div
                    key={s.step}
                    className={`p-2 rounded-xl border flex flex-col items-center gap-1 ${
                      result.step >= s.step
                        ? 'bg-blue-600 text-white border-blue-600 shadow-xs'
                        : 'bg-slate-100 text-slate-400 border-slate-200'
                    }`}
                  >
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>{s.label}</span>
                  </div>
                ))}
              </div>

              {/* TECH & TIMELINE */}
              <div className="space-y-2 pt-2 border-t border-slate-200">
                <div className="flex items-center justify-between bg-white p-3 rounded-xl border border-slate-200">
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4 text-blue-600" />
                    <span className="font-bold text-slate-800">{result.techName}</span>
                  </div>
                  <a
                    href={`tel:${result.techPhone}`}
                    className="inline-flex items-center gap-1 text-blue-600 font-extrabold hover:underline"
                  >
                    <Phone className="w-3.5 h-3.5" /> {result.techPhone}
                  </a>
                </div>

                <div className="space-y-1.5 pt-1">
                  {result.timeline.map((t, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-slate-600 text-[11px]">
                      <Clock className="w-3.5 h-3.5 text-slate-400 shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-slate-800">{t.time}:</strong> {t.text}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          )}

        </div>
      </div>
    </div>
  );
}
