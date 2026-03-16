import React from "react";

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
    <section className="bg-[#114273] px-4 py-20 text-white">
      <div className="mx-auto max-w-5xl text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#f76d2f]">
          Testimonials
        </p>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
          Hear From Families Like Yours
        </h2>
        <p className="mt-4 text-sm text-slate-100">
          Over 3,000+ properties sold to satisfied buyers across the nation.
        </p>

        <div className="mt-5 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-5 py-2 text-xs font-medium text-white">
          <span className="flex items-center gap-1">
            <span className="text-base">G</span>
          </span>
          <span className="flex items-center gap-1 text-[#fbbf24]">
            {"★★★★★"}
          </span>
          <span>4.9/5 Google Rating</span>
        </div>
      </div>

      <div className="mx-auto mt-10 flex max-w-6xl flex-col gap-10">
        <div className="grid gap-6 md:grid-cols-3">
          {cards.map((card) => (
            <div
              key={card.name}
              className="flex flex-col rounded-2xl bg-white text-left shadow-[0_18px_40px_rgba(15,23,42,0.7)]"
            >
              <div className="relative h-[360px] overflow-hidden rounded-t-2xl">
                <img
                  src={card.thumbnail}
                  alt={card.name}
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-4 text-sm text-white">
                  <p>{card.quoteSnippet}</p>
                </div>
                <button
                  type="button"
                  className="absolute bottom-3 left-3 inline-flex items-center gap-1 rounded bg-black/80 px-2 py-1 text-[0.7rem] font-medium"
                >
                  ▶ <span>Play</span>
                </button>
              </div>
              <div className="px-4 pb-5 pt-4 text-[#0f172a]">
                <div className="mb-1 text-sm text-[#fbbf24]">★★★★★</div>
                <h3 className="text-sm font-semibold text-[#114273]">
                  {card.name}
                </h3>
                <p className="mt-2 text-xs text-slate-700">{card.quote}</p>
                <div className="mt-3 flex items-center gap-2 text-[0.7rem] text-emerald-400">
                  <span className="h-2 w-2 rounded-full bg-emerald-400" />
                  <span>{card.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center gap-2">
          <span className="h-1.5 w-4 rounded-full bg-white" />
          <span className="h-1.5 w-4 rounded-full bg-white/40" />
          <span className="h-1.5 w-4 rounded-full bg-white/40" />
          <span className="h-1.5 w-4 rounded-full bg-white/40" />
        </div>
      </div>
    </section>
  );
}

export default HomeTestimonials;
