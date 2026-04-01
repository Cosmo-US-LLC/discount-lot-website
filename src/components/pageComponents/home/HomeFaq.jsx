import React from "react";
import { Phone } from "lucide-react";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "../../ui/accordion";
import { homeFaqs as defaultFaqs } from "@/data/faqs";

// US-style phone: (XXX) XXX-XXXX or XXX-XXX-XXXX; strip 📞 if present in text
const PHONE_REGEX = /(?:📞\s*)?(\(?\d{3}\)?[-.\s]*\d{3}[-.\s]*\d{4})/g;
// Simple domain links (e.g. albanyky.org, skrecc.com)
const URL_REGEX = /\b([a-zA-Z0-9-]+\.(?:com|org))\b/g;
// Email links (e.g. skrecc@skrecc.com)
const EMAIL_REGEX = /\b([a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})\b/g;

function toTelHref(phoneStr) {
  const digits = phoneStr.replace(/\D/g, "");
  return digits.length === 10 ? `tel:+1${digits}` : `tel:${digits}`;
}

function formatFaqAnswer(text) {
  if (!text || typeof text !== "string") return text;
  const segments = [];
  let lastEnd = 0;
  const matches = [];

  let m;
  PHONE_REGEX.lastIndex = 0;
  while ((m = PHONE_REGEX.exec(text)) !== null) {
    matches.push({
      start: m.index,
      end: m.index + m[0].length,
      type: "phone",
      value: m[1].trim(),
    });
  }
  URL_REGEX.lastIndex = 0;
  while ((m = URL_REGEX.exec(text)) !== null) {
    matches.push({
      start: m.index,
      end: m.index + m[0].length,
      type: "url",
      value: m[1],
    });
  }

  EMAIL_REGEX.lastIndex = 0;
  while ((m = EMAIL_REGEX.exec(text)) !== null) {
    matches.push({
      start: m.index,
      end: m.index + m[0].length,
      type: "email",
      value: m[1],
    });
  }

  matches.sort((a, b) => a.start - b.start);
  const merged = [];
  for (const match of matches) {
    if (merged.length && match.start < merged[merged.length - 1].end) continue;
    merged.push(match);
  }

  for (const match of merged) {
    if (match.start > lastEnd) {
      segments.push({ type: "text", value: text.slice(lastEnd, match.start) });
    }
    segments.push({ type: match.type, value: match.value });
    lastEnd = match.end;
  }
  if (lastEnd < text.length) {
    segments.push({ type: "text", value: text.slice(lastEnd) });
  }

  if (segments.length === 0) return text;

  return segments.map((seg, i) => {
    if (seg.type === "text") {
      return <React.Fragment key={i}>{seg.value}</React.Fragment>;
    }
    if (seg.type === "phone") {
      return (
        <span key={i} className="inline-flex items-center gap-1 align-middle">
          <Phone
            aria-hidden
            className="inline-block h-4 w-4 shrink-0 text-[#c71585]"
            style={{ marginTop: "-0.1em" }}
          />
          <a
            href={toTelHref(seg.value)}
            className="text-[#2563eb] underline decoration-[#2563eb]/40 underline-offset-2 hover:text-[#1d4ed8] hover:decoration-[#1d4ed8]"
          >
            {seg.value}
          </a>
        </span>
      );
    }
    if (seg.type === "url") {
      const href = seg.value.startsWith("http")
        ? seg.value
        : `https://${seg.value}`;
      return (
        <a
          key={i}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#2563eb] underline decoration-[#2563eb]/40 underline-offset-2 hover:text-[#1d4ed8] hover:decoration-[#1d4ed8]"
        >
          {seg.value}
        </a>
      );
    }
    if (seg.type === "email") {
      return (
        <a
          key={i}
          href={`mailto:${seg.value}`}
          className="text-[#2563eb] underline decoration-[#2563eb]/40 underline-offset-2 hover:text-[#1d4ed8] hover:decoration-[#1d4ed8]"
        >
          {seg.value}
        </a>
      );
    }
    return null;
  });
}

function HomeFaq({
  eyebrow = "Resources",
  title = "Got Questions?",
  faqs = defaultFaqs,
  sectionId = "faq",
  description = "",
  singleAccordion = false,
  bgClassName = "bg-[#f0f4f8]",
}) {
  const half = Math.ceil((faqs?.length ?? 0) / 2);
  const leftFaqs = faqs.slice(0, half);
  const rightFaqs = faqs.slice(half);

  return (
    <section id={sectionId} className={`${bgClassName} md:py-18 py-12`}>
      <div className="mx-auto max-w-[1280px] px-4 md:px-8 text-center">
        <div className="space-y-4">
          <h6 className="text-[#f76d2f] text-[12px] font-bold tracking-[3px] uppercase">
            {eyebrow}
          </h6>
          <h2 className="text-[#114273] text-[36px] leading-[1.1] font-black md:text-[50px]">
            {title}
          </h2>
          <div className="mx-auto h-1 w-20 rounded-full bg-[#f76d2f]" />
          {description && (
            <p className="mx-auto max-w-[540px] text-[16px] leading-[1.4] text-[#5A6A82]">
              {description}
            </p>
          )}
        </div>
      </div>

      <div
        className={`mx-auto mt-10 w-full px-4 md:px-8 ${singleAccordion ? "max-w-[960px]" : "max-w-[1280px]"}`}
      >
        {singleAccordion ? (
          <Accordion type="single" collapsible className="flex flex-col gap-4">
            {faqs.map((item) => (
              <AccordionItem
                key={item.id}
                value={item.id}
                className="overflow-hidden rounded-[6px] bg-[#f9fafb]"
              >
                <AccordionTrigger value={item.id}>
                  <span className="text-[18px] leading-[28px] font-bold text-[#114273] font-['Frank_Ruhl_Libre',serif]">
                    {item.question}
                  </span>
                </AccordionTrigger>
                <AccordionContent value={item.id}>
                  <p className="whitespace-pre-line description [&_a]:break-all">
                    {formatFaqAnswer(item.answer)}
                  </p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        ) : (
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <Accordion
              type="single"
              collapsible
              className="flex flex-col gap-4"
            >
              {leftFaqs.map((item) => (
                <AccordionItem
                  key={item.id}
                  value={item.id}
                  className="overflow-hidden rounded-[6px] bg-[#f9fafb]"
                >
                  <AccordionTrigger value={item.id}>
                    <span className="text-[18px] leading-[28px] font-bold text-[#114273] font-['Frank_Ruhl_Libre',serif]">
                      {item.question}
                    </span>
                  </AccordionTrigger>
                  <AccordionContent value={item.id}>
                    <p className="whitespace-pre-line description [&_a]:break-all">
                      {formatFaqAnswer(item.answer)}
                    </p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>

            <Accordion
              type="single"
              collapsible
              className="flex flex-col gap-4"
            >
              {rightFaqs.map((item) => (
                <AccordionItem
                  key={item.id}
                  value={item.id}
                  className="overflow-hidden rounded-[6px] bg-[#f9fafb]"
                >
                  <AccordionTrigger value={item.id}>
                    <span className="text-[18px] leading-[28px] font-bold text-[#114273] font-['Frank_Ruhl_Libre',serif]">
                      {item.question}
                    </span>
                  </AccordionTrigger>
                  <AccordionContent value={item.id}>
                    <p className="whitespace-pre-line description [&_a]:break-all">
                      {formatFaqAnswer(item.answer)}
                    </p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        )}
      </div>
    </section>
  );
}

export default HomeFaq;
