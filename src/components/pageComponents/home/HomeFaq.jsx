import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "../../ui/accordion";

const faqs = [
  {
    id: "credit-checks",
    question: "Do you run credit checks?",
    answer:
      "Nope! We don't check credit scores, credit history, or ask for bank statements. If you can make the down payment and monthly payments, you're approved. We've helped hundreds of people with bad credit (or no credit) become landowners.",
  },
  {
    id: "fees",
    question: "Are there any agent commissions or hidden fees?",
    answer:
      "We own every property we sell, so there are no agents involved. The price you see on the listing is the total price — no closing costs, no junk fees, no surprises. The only costs you'll have are your down payment, monthly payments (if financing), and annual property taxes paid directly to the county.",
  },
  {
    id: "process",
    question: "How does the buying process work from start to finish?",
    answer:
      "First, you choose the property you like by browsing parcels and filtering by location, size, and budget. Next, you pick the payment option that works for you — a flexible monthly plan or paying in full. Finally, you complete checkout online and sign the agreement. Your property is secured in a few simple steps, and our team can guide you at any point.",
  },
  {
    id: "build-on-land",
    question: "What can I do with the land? Can I build on it?",
    answer:
      "Every listing includes zoning and permitted-use details. Many of our properties allow camping, RVs, building a home (with county permits), off-grid living, agriculture, and recreation. Always confirm your specific plans with the county before purchasing; we provide county contact info for each lot.",
  },
  {
    id: "pay-early",
    question: "What if I want to pay off early?",
    answer:
      "You can pay off your land at any time with no prepayment penalty. The sooner you pay in full, the sooner the deed is transferred into your name.",
  },
  {
    id: "multiple-properties",
    question: "Can I finance multiple properties?",
    answer:
      "Yes. Many investors purchase multiple parcels at once. Reach out to our team and we’ll help structure a deal that fits your goals.",
  },
  {
    id: "safe-online",
    question: "I'm nervous about buying land online. How do I know it's safe?",
    answer:
      "We provide detailed property information, maps, photos, and clear written agreements. We follow standard recording procedures so your ownership is properly documented and secure. Because we own the properties we sell, we can answer detailed questions about each lot.",
  },
  {
    id: "title-help",
    question:
      "I'm not sure how buying land and transferring the title works. Will you help?",
    answer:
      "Yes. Our team walks you through each step, including the paperwork and title transfer. We explain everything in plain language before you sign.",
  },
  {
    id: "cant-pay",
    question: "What happens if I can't keep up with payments?",
    answer:
      "Because we approve everyone with no credit check and no bank involvement, our installment agreements are generally non‑refundable once signed. If you hit financial hardship, contact us before missing a payment and we’ll work with you on options. Our goal is to keep you on track as an owner.",
  },
  {
    id: "first-time-buyer",
    question: "I'm a first-time land buyer. Can I still buy from you?",
    answer:
      "Absolutely. We work with many first‑time buyers and guide you through choosing a property, understanding the terms, and completing your purchase step by step.",
  },
  {
    id: "no-full-funds",
    question: "What if I don't have full funds?",
    answer:
      "You don't need to pay the full price upfront. Most buyers secure their property with a small down payment and affordable monthly terms.",
  },
  {
    id: "call-county",
    question: "Do I need to call the county before buying?",
    answer:
      "We've already done the heavy lifting. Before listing a property, we verify zoning, access, and buildability with county records. If you still have questions after reviewing the listing details, our team can help you confirm specifics with the county.",
  },
  {
    id: "visit-land",
    question: "Can I visit the land before buying?",
    answer:
      "Yes, and many buyers do. Each listing includes GPS coordinates and aerial imagery so you can explore the area beforehand. Thousands of our buyers have purchased confidently using our maps, photos, and property data.",
  },
  {
    id: "utilities",
    question: "Do the lots have utilities?",
    answer:
      "It depends on the property. We check for proximity to water, electric lines, and road access before listing. Some lots have full utility access; others are ideal for off-grid setups. All utility details are clearly noted on each property page.",
  },
  {
    id: "deed",
    question: "When do I receive the deed?",
    answer:
      "For cash purchases, the deed is prepared and sent for recording immediately after closing. For financed purchases, the deed is recorded in your name once the property is paid in full. You'll receive copies of all signed agreements for your records.",
  },
];

function HomeFaq() {
  return (
    <section className="bg-[#f3f4f6] px-4 py-20">
      <div className="mx-auto max-w-4xl text-center">
        <h6 className=" text-[#f76d2f]">Resources</h6>
        <h2 className="mt-3 text-[#114273]">Got Questions?</h2>
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
                <p className="whitespace-pre-line description">{item.answer}</p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}

export default HomeFaq;
