import React from 'react';
import Link from 'next/link';
import { MapPin, ArrowUpLeft, Clock, Phone, ExternalLink } from 'lucide-react';
import { company } from '../data/content';

const NESHAN_URL = "https://nshn.ir/..."; 


const LAT = 37.47291590231388;
const LNG = 57.32713953848807;

export default function MapSection() {
  const primaryAddress = company.addresses[0];

  return (
    <section className="py-16 px-4 max-w-7xl mx-auto" dir="rtl">
      <div className="relative rounded-3xl bg-slate-950/80 border border-slate-800/90 p-6 md:p-10 backdrop-blur-xl shadow-2xl overflow-hidden">
        

        <div className="absolute top-0 right-1/4 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />


        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          

          <div className="lg:col-span-6 space-y-5 z-10">
            <div>
              <h2 className="text-2xl md:text-3xl font-extrabold text-gradient tracking-tight">
                مراجعه حضوری به {company.name}
              </h2>
              <p className="mt-2 text-sm text-slate-400 leading-relaxed">
                جهت بازدید از نمونه محصولات و دریافت مشاوره، می‌توانید با اپلیکیشن نشان به دفتر فروش مراجعه فرمایید.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-3">
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-xl bg-cyan-500/10 text-cyan-400 mt-0.5 shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-semibold text-cyan-400 block mb-1">
                    {primaryAddress.title}
                  </span>
                  <p className="text-sm text-slate-200 leading-6">
                    {primaryAddress.value}
                  </p>
                </div>
              </div>

              <div className="pt-3 border-t border-slate-800/80 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-400">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-cyan-500 shrink-0" />
                  <span>{company.workingHours}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-cyan-500 shrink-0" />
                  <span dir="ltr">{company.phoneDisplay}</span>
                </div>
              </div>
            </div>

            <div>
              <Link
                href={NESHAN_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between p-4 rounded-2xl bg-gradient-to-r from-cyan-950/40 via-slate-900 to-slate-900 border border-cyan-500/30 hover:border-cyan-400 hover:shadow-[0_0_25px_rgba(6,182,212,0.2)] transition-all duration-300"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#1e293b] border border-cyan-500/40 flex items-center justify-center font-black text-cyan-400 text-sm shadow-inner group-hover:scale-105 transition-transform">
                    نشان
                  </div>
                  <div>
                    <span className="text-sm font-bold text-white block group-hover:text-cyan-300 transition-colors">
                      مسیریابی با نقشه نشان
                    </span>
                    <span className="text-xs text-slate-400">
                      باز کردن مستقیم مقصد در اپلیکیشن یا وب
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-cyan-400 font-semibold text-xs bg-cyan-500/10 px-3 py-1.5 rounded-xl border border-cyan-500/20 group-hover:bg-cyan-500/20 transition-all">
                  <span>شروع مسیر</span>
                  <ArrowUpLeft className="w-4 h-4 group-hover:-translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </Link>
            </div>
          </div>

          <div className="lg:col-span-6 h-[320px] md:h-[350px] rounded-2xl border border-slate-800/80 overflow-hidden relative bg-[#090d16] shadow-inner group">
            
            <iframe
              title="نقشه موقعیت سدید پلیمر"
              className="w-full h-full border-0 filter invert-[0.92] hue-rotate-180 contrast-[1.1] opacity-80 group-hover:opacity-100 transition-opacity duration-300"
              src={`https://www.openstreetmap.org/export/embed.html?bbox=${LNG - 0.006}%2C${LAT - 0.003}%2C${LNG + 0.006}%2C${LAT + 0.003}&layer=mapnik&marker=${LAT}%2C${LNG}`}
              loading="lazy"
            />

            <div className="absolute top-4 right-4 bg-slate-900/90 border border-cyan-500/40 px-3 py-1.5 rounded-xl shadow-xl backdrop-blur-md flex items-center gap-2 pointer-events-none">
            </div>

            <Link 
              href={NESHAN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute bottom-3 left-3 text-[11px] text-cyan-300 bg-slate-900/90 hover:bg-slate-800 border border-cyan-500/40 px-3 py-1.5 rounded-lg flex items-center gap-1.5 transition-all shadow-lg backdrop-blur-sm"
            >
              <span>باز کردن در نشان</span>
              <ExternalLink className="w-3 h-3" />
            </Link>

          </div>

        </div>
      </div>
    </section>
  );
}
