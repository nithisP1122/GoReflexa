"use client";

import React, { useState } from "react";
import { Container } from "./ui/Container";
import { SectionHeading } from "./ui/SectionHeading";
import { faqData } from "@/config/faq";
import { ChevronDown } from "lucide-react";
import { trackAnalytics } from "@/lib/analytics";

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    const isOpening = openIndex !== index;
    setOpenIndex(isOpening ? index : null);
    if (isOpening) {
      trackAnalytics.toggleFAQ(faqData[index].question);
    }
  };

  return (
    <section
      id="faq"
      className="py-20 sm:py-28 lg:py-32 bg-[#F7F8FA] border-y border-[#E5E7EB]"
    >
      <Container size="narrow">
        <SectionHeading
          badge="FREQUENTLY ASKED QUESTIONS"
          title="Everything You Need to Know"
          subtitle="Clear answers about our product philosophy, official launch date, subscription options, and the early-access program."
        />

        <div className="space-y-3.5">
          {faqData.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? "bg-white border-[#182230] shadow-xs"
                    : "bg-white border-[#E5E7EB] hover:border-[#CBD5E1]"
                }`}
              >
                <button
                  type="button"
                  id={`faq-btn-${index}`}
                  onClick={() => toggleAccordion(index)}
                  className="w-full py-5 px-6 sm:px-7 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#182230]/20 rounded-2xl"
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${index}`}
                >
                  <span className="text-base sm:text-lg font-bold text-[#182230] leading-snug">
                    {item.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isOpen
                        ? "bg-[#182230] text-white rotate-180"
                        : "bg-[#EEF1F4] text-[#64748B]"
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div
                    id={`faq-answer-${index}`}
                    role="region"
                    aria-labelledby={`faq-btn-${index}`}
                    className="px-6 sm:px-7 pb-6 pt-1 text-sm sm:text-base text-[#64748B] leading-relaxed border-t border-[#F7F8FA] animate-in fade-in duration-200"
                  >
                    <p>{item.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

