import React from "react";
import { CheckCircle2, MoreVertical, Play, Star } from "lucide-react";

const cards = [
  {
    name: "LaJeanna Brooks",
    quoteSnippet: "It was super easy.",
    quote:
      "The process was extremely easy... it was a super smooth transition. They're very communicative. They will show you the ropes and they will definitely put you in peace.",
    role: "Verified buyer",
    thumbnail:
      "https://www.figma.com/api/mcp/asset/4bed7f00-3d7f-4a74-9974-e2a63c2e5b66",
  },
  {
    name: "Charles Riggs",
    quoteSnippet: "I'm an event director here in Los Angeles",
    quote:
      "I've been with Discount Lots for a few years. I purchased a property... It was a no money down situation. So I thought it would be a good investment.",
    role: "Verified buyer",
    thumbnail:
      "https://www.figma.com/api/mcp/asset/e4de5070-9761-4362-aa4e-b88fa24f78f2",
  },
  {
    name: "Broch Clinton",
    quoteSnippet: "Owner finance $1 and...",
    quote:
      '"10 out of 10. I believe it’ll be an incredible asset in the future so I feel really good about it."',
    role: "Verified buyer",
    thumbnail:
      "https://www.figma.com/api/mcp/asset/0fe832cc-190f-4053-b143-c7f13a0b14d1",
  },
];

function HomeTestimonials() {
  return (
    <section id="reviews" className="bg-[#114273] px-4 py-16 text-white md:py-[60px]">
      <div className="mx-auto max-w-7xl text-center">
        <p className="text-[12px] font-bold uppercase tracking-[3px] text-[#f76d2f] md:text-[14px]">
          Testimonials
        </p>
        <h2 className="mt-4 font-bold tracking-[-1px] text-[34px] leading-[38px] md:text-[60px] md:leading-[60px] md:tracking-[-1.5px]">
          Hear From Families Like Yours
        </h2>
        <p className="mt-4 text-[16px] leading-[24px] text-white md:text-[20px] md:leading-[28px]">
          Over 3,000+ properties sold to satisfied buyers across the nation.
        </p>

        <div className="mx-auto mt-6 inline-flex items-center justify-center gap-3 rounded-full border border-white/10 bg-white/5 px-8 py-3 text-white">
          <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-white/10 text-[12px] font-bold">
            G
          </span>
          <span className="inline-flex items-center gap-1 text-[#f76d2f]">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="h-4 w-4 fill-current" aria-hidden="true" />
            ))}
          </span>
          <span className="text-[14px] font-bold leading-7 md:text-[18px]">
            4.9/5 Google Rating
          </span>
        </div>
      </div>

      <div className="mx-auto mt-14 max-w-7xl px-0 md:px-5">
        <div className="mx-auto grid max-w-[1100px] grid-cols-1 gap-10 md:grid-cols-3 md:gap-8">
          {cards.map((card) => (
            <div
              key={card.name}
              className="flex w-full flex-col items-center"
            >
              <div className="w-full max-w-[353px]">
                <div className="relative overflow-hidden rounded-[16px] bg-black shadow-[0px_18px_40px_rgba(0,0,0,0.35)]">
                  <div className="relative aspect-313/517 w-full">
                    <img
                      src={card.thumbnail}
                      alt={card.name}
                      className="absolute inset-0 h-full w-full object-cover"
                    />

                    <button
                      type="button"
                      className="absolute right-3 top-3 inline-flex h-9 w-9 items-center justify-center rounded-[8px] bg-black/80"
                      aria-label="More options"
                    >
                      <MoreVertical className="h-5 w-5 text-white" aria-hidden="true" />
                    </button>

                    <div className="absolute bottom-3 left-3 flex items-center gap-2 rounded-[4px] bg-black/80 px-3 py-2 text-white">
                      <Play className="h-4 w-4 fill-current" aria-hidden="true" />
                      <span className="text-[12px] font-semibold leading-[15px]">
                        Play
                      </span>
                    </div>

                    <div className="absolute inset-x-0 bottom-0 bg-[#f76d2f] px-5 py-3">
                      <div className="flex items-center justify-between gap-3">
                        <p className="truncate text-[20px] font-bold leading-[24px] text-white">
                          {card.name}
                        </p>
                        <span className="text-[12px] font-semibold leading-[15px] text-white/90">
                          01:00
                        </span>
                      </div>
                    </div>

                    <div className="pointer-events-none absolute inset-x-0 bottom-14 px-4 pb-4">
                      <div className="mx-auto max-w-[260px] rounded-[9999px] bg-black/70 px-3 py-2 text-center text-[12px] leading-[14px] text-white">
                        {card.quoteSnippet}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-5 flex flex-col items-center text-center">
                  <div className="text-[#f7cf2f]">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="inline-block h-4 w-4 fill-current" aria-hidden="true" />
                    ))}
                  </div>
                  <h3 className="mt-3 text-[16px] font-bold tracking-[0.4px] text-white">
                    {card.name}
                  </h3>
                  <p className="mt-2 text-[16px] leading-[24px] text-white/90">
                    {card.quote}
                  </p>

                  <div className="mt-5 inline-flex items-center gap-2 text-[14px] leading-[20px] text-white/80">
                    <CheckCircle2 className="h-5 w-5 text-emerald-400" aria-hidden="true" />
                    <span>{card.role}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 flex justify-center gap-3">
          <span className="h-2 w-2 rounded-full bg-white/70" />
          <span className="h-2 w-2 rounded-full bg-white/30" />
          <span className="h-2 w-2 rounded-full bg-white/30" />
          <span className="h-2 w-2 rounded-full bg-white/30" />
          <span className="h-2 w-2 rounded-full bg-white/30" />
        </div>
      </div>
    </section>
  );
}

export default HomeTestimonials;
