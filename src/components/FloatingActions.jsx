import React from 'react';
import { Truck, Phone, MessageCircle } from 'lucide-react';

export default function FloatingActions({ onOpenTracking }) {
  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3">
      
      {/* ORDER TRACKING */}
      <button
        onClick={onOpenTracking}
        className="w-12 h-12 bg-amber-500 hover:bg-amber-600 text-white rounded-full shadow-xl flex items-center justify-center transition-all hover:scale-110 active:scale-95 group relative"
        title="Tra cứu đơn hàng"
      >
        <Truck className="w-5 h-5" />
        <span className="absolute right-14 bg-slate-900 text-white font-semibold text-xs px-3 py-1.5 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition duration-200 pointer-events-none shadow-md">
          Tra cứu đơn hàng tận nơi
        </span>
      </button>

      {/* PHONE HOTLINE */}
      <a
        href="tel:0972006789"
        className="w-12 h-12 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-xl flex items-center justify-center transition-all hover:scale-110 active:scale-95 group relative"
        title="Gọi Hotline"
      >
        <Phone className="w-5 h-5" />
        <span className="absolute right-14 bg-slate-900 text-white font-semibold text-xs px-3 py-1.5 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition duration-200 pointer-events-none shadow-md">
          Hotline: 0972.006.789
        </span>
      </a>

      {/* HIGH CONVERTING ZALO CHAT BUTTON */}
      <a
        href="https://zalo.me/0972006789"
        target="_blank"
        rel="noopener noreferrer"
        className="relative flex items-center gap-2 pl-3.5 pr-4 py-2.5 bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white rounded-full shadow-2xl shadow-emerald-500/40 transition-all hover:scale-105 active:scale-95 group border border-emerald-300/40"
        title="Chat Zalo Tư Vấn 24/7"
      >
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
        </span>
        <MessageCircle className="w-5 h-5 fill-white text-emerald-600" />
        <span className="font-bold text-xs tracking-wide">Zalo Tư Vấn (Báo giá 3p)</span>
      </a>

    </div>
  );
}

