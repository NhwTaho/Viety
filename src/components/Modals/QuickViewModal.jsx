import React from 'react';
import { X, ShieldCheck, ShoppingBag, Phone, Check, MessageCircle } from 'lucide-react';
import { formatVND } from '../../lib/utils';

export default function QuickViewModal({ product, onClose, onAddToCart }) {
  if (!product) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div 
        onClick={onClose}
        className="fixed inset-0 bg-slate-900/60 backdrop-blur-xs transition-opacity" 
      />

      <div className="flex min-h-full items-center justify-center p-4">
        <div className="relative w-full max-w-2xl bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-slate-200 overflow-hidden animate-in fade-in zoom-in-95">
          
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-600 bg-slate-100 rounded-full transition cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
            <div className="aspect-square bg-slate-50 rounded-2xl p-4 border border-slate-100 flex items-center justify-center">
              <img
                src={product.image}
                alt={product.title}
                className="max-h-64 object-contain"
              />
            </div>

            <div className="space-y-4">
              <span className="inline-block px-2.5 py-1 text-xs font-bold bg-blue-100 text-blue-800 rounded-md">
                {product.badge}
              </span>

              <h3 className="font-extrabold text-lg text-slate-900 leading-snug">
                {product.title}
              </h3>

              <div className="flex items-center gap-2 text-xs font-medium text-slate-500">
                <ShieldCheck className="w-4 h-4 text-blue-600" />
                <span>Xuất xứ: {product.origin} • Bảo hành {product.warranty}</span>
              </div>

              <div className="p-3 bg-slate-50 rounded-xl space-y-1">
                <div className="text-xs text-slate-400 line-through">{formatVND(product.oldPrice)}</div>
                <div className="text-2xl font-black text-blue-600">{formatVND(product.price)}</div>
              </div>

              <div className="text-xs text-slate-600 space-y-1.5 font-medium">
                <div className="flex items-center gap-1.5 text-slate-800 font-bold">Thông số kỹ thuật:</div>
                <div className="flex items-center gap-1.5 text-slate-600">
                  <Check className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>{product.specs}</span>
                </div>
                <div className="flex items-center gap-1.5 text-slate-600">
                  <Check className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>Bao gồm linh kiện Barista & Ca đánh sữa</span>
                </div>
              </div>

              <div className="flex flex-col gap-2 pt-2">
                <a
                  href={`https://zalo.me/0972006789?text=${encodeURIComponent(`Tôi cần tư vấn báo giá chi tiết & quà tặng cho ${product.title}`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-xs rounded-xl shadow-md transition flex items-center justify-center gap-2 cursor-pointer"
                >
                  <MessageCircle className="w-4.5 h-4.5 fill-white text-emerald-700" /> Chat Zalo Báo Giá & Quà Tặng
                </a>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => { onAddToCart(product); onClose(); }}
                    className="flex-1 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs rounded-xl shadow-xs transition flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <ShoppingBag className="w-4 h-4" /> Thêm Vào Giỏ
                  </button>
                  <a
                    href="tel:0972006789"
                    className="py-2.5 px-3.5 bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold text-xs rounded-xl transition flex items-center gap-1.5"
                  >
                    <Phone className="w-4 h-4 text-blue-600" /> Gọi Hotline
                  </a>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
