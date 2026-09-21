"use client";

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { Plus, MessageCircleQuestion, Phone } from "lucide-react";
import Reveal from "../ui/reveal";
import SectionHead from "./sectionHead";
import { FAQS } from "../data/content";

export default function FAQ() {
    return (
        <section className="relative py-15">
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
                            <div className="grid size-14 shrink-0 place-items-center rounded-full bg-gradient-to-tr from-[#0066ff] to-[#00e0ff]">
                                <MessageCircleQuestion className="size-7 text-white" />
                            </div>
                            <div>
                                <h4 className="font-bold text-white">سؤال متفاوتی دارید؟</h4>
                                <p className="mt-1 text-sm text-slate-400">
                                    کارشناسان فنی ما آماده مشاوره رایگان هستند.
                                </p>
                                <a
                                    href="tel:02112345678"
                                    className="mt-3 inline-flex items-center gap-2 text-sm font-bold text-[#00e0ff] hover:underline"
                                >
                                    <Phone className="size-4" />
                                    تماس مستقیم با واحد فروش
                                </a>
                            </div>
                        </div>
                    </Reveal>
                </div>

                <div className="space-y-4">
                    <Accordion defaultValue={["item-0"]} className="gap-4">
                        {FAQS.map((faq, index) => (
                            <Reveal key={index} delay={index * 0.1}>
                                <AccordionItem
                                    value={`item-${index}`}
                                    className="rounded-2xl border border-slate-800 bg-slate-900/40 px-5 py-1 transition-colors data-open:border-[#00e0ff]/50"
                                >
                                    <AccordionTrigger className="group/accordion-trigger flex flex-row-reverse gap-4 py-5 text-right font-bold text-white hover:no-underline [&>svg]:hidden">
                                        <span className="grid size-9 shrink-0 place-items-center rounded-full border border-[#00e0ff]/30 text-[#00e0ff] transition-transform duration-300 group-aria-expanded/accordion-trigger:rotate-45">
                                            <Plus className="size-5" />
                                        </span>

                                        <span className="flex-1">{faq.q}</span>
                                    </AccordionTrigger>

                                    <AccordionContent className=" text-sm leading-7 text-slate-400">
                                        {faq.a}
                                    </AccordionContent>
                                </AccordionItem>
                            </Reveal>
                        ))}
                    </Accordion>
                </div>

            </div>
        </section>
    );
}
