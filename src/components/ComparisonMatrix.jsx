import React from 'react';
import { BarChart3 } from 'lucide-react';
import { formatVND } from '../lib/utils';

export default function ComparisonMatrix() {
  const MACHINES = [
    {
      name: "WEGA ROVER 2GR",
      origin: "Ý (100% Italy)",
      boiler: "10.5 Lít",
      power: "3400W",
      capacity: "350+ ly/ngày",
      warranty: "24 Tháng tận nơi",
      price: 130000000
    },
    {
      name: "LA CIMBALI M27",
      origin: "Ý (100% Italy)",
      boiler: "11.0 Lít",
      power: "3500W",
      capacity: "400+ ly/ngày",
      warranty: "24 Tháng tận nơi",
      price: 80000000
    },
    {
      name: "NUOVA APPIA II",
      origin: "Ý (100% Italy)",
      boiler: "11.0 Lít",
      power: "3300W",
      capacity: "350+ ly/ngày",
      warranty: "24 Tháng tận nơi",
      price: 85000000
    },
    {
      name: "CASADIO UNDICI",
      origin: "Ý (100% Italy)",
      boiler: "10.5 Lít",
      power: "3300W",
      capacity: "300+ ly/ngày",
      warranty: "24 Tháng tận nơi",
      price: 78000000
    }
  ];

  return (
    <section id="comparisonSection" className="py-16 bg-white scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 flex items-center justify-center gap-2">
            <BarChart3 className="w-7 h-7 text-blue-600" />
            So Sánh Thông Số Các Dòng Máy
          </h2>
          <p className="text-sm text-slate-500 mt-2">
            Bảng so sánh chi tiết dung tích nồi hơi, công suất và năng suất giữa các thương hiệu
          </p>
        </div>

        {/* TABLE WRAPPER */}
        <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-md">
          <table className="w-full text-left text-xs sm:text-sm text-slate-700">
            <thead className="bg-slate-900 text-white font-bold uppercase text-xs">
              <tr>
                <th className="p-4 w-48 bg-slate-950">Thông Số</th>
                {MACHINES.map((m, i) => (
                  <th key={i} className="p-4 text-center border-l border-slate-800">
                    {m.name}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 font-medium">
              <tr className="hover:bg-slate-50">
                <td className="p-4 font-bold text-slate-900 bg-slate-50">Xuất Xứ</td>
                {MACHINES.map((m, i) => (
                  <td key={i} className="p-4 text-center">{m.origin}</td>
                ))}
              </tr>

              <tr className="hover:bg-slate-50">
                <td className="p-4 font-bold text-slate-900 bg-slate-50">Dung Tích Nồi Hơi</td>
                {MACHINES.map((m, i) => (
                  <td key={i} className="p-4 text-center font-bold text-blue-700">{m.boiler}</td>
                ))}
              </tr>

              <tr className="hover:bg-slate-50">
                <td className="p-4 font-bold text-slate-900 bg-slate-50">Công Suất Điện</td>
                {MACHINES.map((m, i) => (
                  <td key={i} className="p-4 text-center">{m.power}</td>
                ))}
              </tr>

              <tr className="hover:bg-slate-50">
                <td className="p-4 font-bold text-slate-900 bg-slate-50">Năng Suất Phục Vụ</td>
                {MACHINES.map((m, i) => (
                  <td key={i} className="p-4 text-center">{m.capacity}</td>
                ))}
              </tr>

              <tr className="hover:bg-slate-50">
                <td className="p-4 font-bold text-slate-900 bg-slate-50">Thời Gian Bảo Hành</td>
                {MACHINES.map((m, i) => (
                  <td key={i} className="p-4 text-center">{m.warranty}</td>
                ))}
              </tr>

              <tr className="hover:bg-slate-50 bg-blue-50/50">
                <td className="p-4 font-extrabold text-slate-900 bg-blue-100/50">Giá Niêm Yết</td>
                {MACHINES.map((m, i) => (
                  <td key={i} className="p-4 text-center font-black text-blue-700 text-base">
                    {formatVND(m.price)}
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>

      </div>
    </section>
  );
}
