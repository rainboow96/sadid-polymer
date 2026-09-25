"use client";

import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { MessageCircleQuestion, Phone, Plus } from "lucide-react";
import Reveal from "../ui/reveal";
import SectionHead from "./sectionHead";
import { FAQS } from "../data/content";

const BRAND_CYAN = "#00e0ff";
const BRAND_BLUE = "#0066ff";

export default function FAQ() {
  return (
    <section className="relative py-14 sm:py-16">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-2">
        <div>
          <Reveal>
            <SectionHead
              align="right"
              title="پاسخ پرسش‌های"
              highlight="پرتکرار شما"
              desc="اگر پاسخ سؤالات‌تان را پیدا نکردید، تیم فنی سدید پلیمر همواره از ۸ صبح تا ۶ عصر پاسخگوی شماست."
            />
          </Reveal>

          <Reveal delay={0.2}>
            <div className="mt-8 flex items-center gap-4 rounded-2xl border border-slate-800 bg-slate-900/40 p-5">
              <div
                className="grid size-14 shrink-0 place-items-center rounded-full bg-gradient-to-tr"
                style={{
                  backgroundImage: `linear-gradient(to top right, ${BRAND_BLUE}, ${BRAND_CYAN})`,
                }}
              >
                <MessageCircleQuestion className="size-7 text-white" />
              </div>

              <div>
                <h4 className="font-bold text-white">سؤال متفاوتی دارید؟</h4>
                <p className="mt-1 text-sm text-slate-400">
                  کارشناسان فنی ما آماده مشاوره رایگان هستند.
                </p>

                <Link
                  href="/contact"
                  className="mt-3 inline-flex items-center gap-2 text-sm font-bold hover:underline"
                  style={{ color: BRAND_CYAN }}
                >
                  <Phone className="size-4" />
                  تماس مستقیم با واحد فروش
                </Link>
              </div>
            </div>
          </Reveal>
        </div>

        <div className="space-y-4">
          <Accordion defaultValue={["item-0"]}>
            {FAQS.map((faq, index) => {
              const value = `item-${index}`;
              const key = typeof faq.q === "string" ? faq.q : value;

              return (
                <Reveal key={key} delay={index * 0.1}>
                  <AccordionItem
                    value={value}
                    className="rounded-2xl border border-slate-800 bg-slate-900/40 px-5 py-1 transition-colors data-open:border-[#00e0ff]/50"
                  >
                    <AccordionTrigger className="group/accordion-trigger flex flex-row-reverse gap-4 py-5 text-right font-bold text-white hover:no-underline [&>svg]:hidden">
                      <span
                        className="grid size-9 shrink-0 place-items-center rounded-full border transition-transform duration-300 group-aria-expanded/accordion-trigger:rotate-45"
                        style={{
                          borderColor: `${BRAND_CYAN}4D`, // ~30%
                          color: BRAND_CYAN,
                        }}
                      >
                        <Plus className="size-5" />
                      </span>

                      <span className="flex-1">{faq.q}</span>
                    </AccordionTrigger>

                    <AccordionContent className="text-sm leading-7 text-slate-400">
                      {faq.a}
                    </AccordionContent>
                  </AccordionItem>
                </Reveal>
              );
            })}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
