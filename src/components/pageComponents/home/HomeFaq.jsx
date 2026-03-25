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
    return null;
  });
}

function HomeFaq({
  eyebrow = "Resources",
  title = "Got Questions?",
  faqs = defaultFaqs,
  sectionId = "faq",
  description = "",
}) {
  return (
    <section id={sectionId} className="bg-[#f3f4f6] px-4 py-20">
      <div className="mx-auto max-w-4xl text-center space-y-3">
        <h6 className=" text-[#f76d2f]">{eyebrow}</h6>
        <h2 className="mt-3 text-[#114273]">{title}</h2>
        <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-[#f76d2f]" />
        {description && (
          <p className="text-[16px] leading-[27px] text-[#5A6A82] md:text-[16px] max-w-[500px] mx-auto">
            {description}
          </p>
        )}
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
                <p className="whitespace-pre-line description [&_a]:break-all">
                  {formatFaqAnswer(item.answer)}
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
