import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "../../ui/accordion";
import { homeFaqs as defaultFaqs } from "@/data/faqs";

function HomeFaq({
  eyebrow = "Resources",
  title = "Got Questions?",
  faqs = defaultFaqs,
}) {
  return (
    <section className="bg-[#f3f4f6] px-4 py-20">
      <div className="mx-auto max-w-4xl text-center">
        <h6 className=" text-[#f76d2f]">{eyebrow}</h6>
        <h2 className="mt-3 text-[#114273]">{title}</h2>
        <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-[#f76d2f]" />
      </div>

      <div className="mx-auto mt-14 w-full max-w-4xl">
        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((item) => (
            <AccordionItem
              key={item.id}
              value={item.id}
              className="overflow-hidden rounded-[6px] bg-white shadow-sm"
            >
              <AccordionTrigger value={item.id}>
                <h3 className=" text-[#114273]">{item.question}</h3>
              </AccordionTrigger>
              <AccordionContent value={item.id}>
                <p className="whitespace-pre-line description">
                  {item.answer}
                </p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}

export default HomeFaq;

