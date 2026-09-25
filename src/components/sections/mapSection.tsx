import Link from "next/link";
import { MapPin, ArrowUpLeft, Clock, Phone, ExternalLink } from "lucide-react";
import { company } from "../data/content";

const NESHAN_URL = "https://nshn.ir/...";

const LAT = 37.47291590231388;
const LNG = 57.32713953848807;

// محاسبه خارج از بدنه کامپوننت جهت جلوگیری از پردازش مکرر در هر رندر
const BBOX = `${LNG - 0.006}%2C${LAT - 0.003}%2C${LNG + 0.006}%2C${LAT + 0.003}`;
const OSM_EMBED_URL = `https://www.openstreetmap.org/export/embed.html?bbox=${BBOX}&layer=mapnik&marker=${LAT}%2C${LNG}`;

export default function MapSection() {
  const primaryAddress = company.addresses[0];

  return (
    <section className="mx-auto max-w-7xl px-4 py-16">
      <div className="relative overflow-hidden rounded-3xl border border-slate-800/90 bg-slate-950/80 p-6 shadow-2xl backdrop-blur-xl md:p-10">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute end-1/4 top-0 size-80 rounded-full bg-cyan-500/10 blur-3xl"
        />

        <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-12">
          <div className="z-10 space-y-5 lg:col-span-6">
            <div>
              <h2 className="text-2xl font-extrabold text-gradient md:text-3xl">
                مراجعه حضوری به {company.name}
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-slate-400">
                جهت بازدید از نمونه محصولات و دریافت مشاوره، می‌توانید با اپلیکیشن نشان به دفتر فروش مراجعه فرمایید.
              </p>
            </div>

            <div className="space-y-3 rounded-2xl border border-slate-800 bg-slate-900/90 p-4">
              <div className="flex items-start gap-3">
                <div className="mt-0.5 shrink-0 rounded-xl bg-cyan-500/10 p-2 text-cyan-400">
                  <MapPin className="size-5" aria-hidden="true" />
                </div>
                <div>
                  <span className="mb-1 block text-xs font-semibold text-cyan-400">
                    {primaryAddress.title}
                  </span>
                  <p className="text-sm leading-6 text-slate-200">
                    {primaryAddress.value}
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-3 border-t border-slate-800/80 pt-3 text-xs text-slate-400 sm:grid-cols-2">
                <div className="flex items-center gap-2">
                  <Clock className="size-4 shrink-0 text-cyan-500" aria-hidden="true" />
                  <span>{company.workingHours}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="size-4 shrink-0 text-cyan-500" aria-hidden="true" />
                  <span dir="ltr">{company.phoneDisplay}</span>
                </div>
              </div>
            </div>

            <div>
              <Link
                href={NESHAN_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between rounded-2xl border border-cyan-500/30 bg-gradient-to-r from-cyan-950/40 via-slate-900 to-slate-900 p-4 transition-all duration-300 hover:border-cyan-400 hover:shadow-[0_0_25px_rgba(6,182,212,0.2)]"
              >
                <div className="flex items-center gap-3">
                  <div className="flex size-10 items-center justify-center rounded-xl border border-cyan-500/40 bg-slate-800 text-sm font-black text-cyan-400 shadow-inner transition-transform group-hover:scale-105">
                    نشان
                  </div>
                  <div>
                    <span className="block text-sm font-bold text-white transition-colors group-hover:text-cyan-300">
                      مسیریابی با نقشه نشان
                    </span>
                    <span className="text-xs text-slate-400">
                      باز کردن مستقیم مقصد در اپلیکیشن یا وب
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-2 rounded-xl border border-cyan-500/20 bg-cyan-500/10 px-3 py-1.5 text-xs font-semibold text-cyan-400 transition-all group-hover:bg-cyan-500/20">
                  <span>شروع مسیر</span>
                  <ArrowUpLeft className="size-4 transition-transform group-hover:-translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
                </div>
              </Link>
            </div>
          </div>

          <div className="group relative h-[320px] overflow-hidden rounded-2xl border border-slate-800/80 bg-[#090d16] shadow-inner md:h-[350px] lg:col-span-6">
            <iframe
              title="نقشه موقعیت سدید پلیمر"
              className="size-full border-0 opacity-80 contrast-[1.1] hue-rotate-180 invert-[0.92] transition-opacity duration-300 group-hover:opacity-100"
              src={OSM_EMBED_URL}
              loading="lazy"
            />

            <Link
              href={NESHAN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute bottom-3 start-3 flex items-center gap-1.5 rounded-lg border border-cyan-500/40 bg-slate-900/90 px-3 py-1.5 text-xs text-cyan-300 shadow-lg backdrop-blur-sm transition-all hover:bg-slate-800"
            >
              <span>باز کردن در نشان</span>
              <ExternalLink className="size-3" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
