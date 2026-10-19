'use client';

import Link from 'next/link';
import { Home, PackageSearch } from 'lucide-react';

export default function NotFound() {
  return (
    <main className="relative min-h-[calc(100vh-5rem)] flex items-center justify-center px-6 sm:px-12 py-16 overflow-hidden bg-background">
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-center">
        
        <div className="flex flex-col items-center md:items-start text-center md:text-right order-2 md:order-1">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-foreground mb-4 leading-tight">
            صفحه‌ای که به دنبال آن بودید یافت نشد!
          </h1>

          <p className="text-muted-foreground text-sm sm:text-base leading-relaxed mb-8 max-w-lg">
            به نظر می‌رسد این لینک تغییر کرده، حذف شده یا آدرس را به اشتباه وارد کرده‌اید. لطفاً از دکمه‌های زیر برای بازگشت به مسیر اصلی استفاده کنید.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
            <Link
              href="/"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-l from-[#00d2ff] to-[#0066ff] text-white font-medium shadow-lg shadow-cyan-500/20 hover:opacity-95 transition-all duration-200"
            >
              <Home className="w-5 h-5" />
              بازگشت به صفحه اصلی
            </Link>

            <Link
              href="/products"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-card border border-border text-foreground font-medium hover:border-cyan-500/50 hover:bg-muted/50 transition-all duration-200"
            >
              <PackageSearch className="w-5 h-5 text-cyan-400" />
              مشاهده محصولات
            </Link>
          </div>
        </div>

        <div className="flex items-center justify-center order-1 md:order-2 select-none">
          <span className="text-[8.5rem] sm:text-[11rem] md:text-[12rem] lg:text-[14rem] font-black tracking-tighter leading-none text-gradient drop-shadow-[0_10px_35px_rgba(0,210,255,0.15)]">
            404
          </span>
        </div>

      </div>
    </main>
  );
}
