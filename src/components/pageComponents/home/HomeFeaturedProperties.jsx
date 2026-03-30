import React from "react";
import { ArrowRightIcon } from "lucide-react";
import {
  StarYellowIcon,
  HeartGrayIcon,
  LocationBlueIcon,
  AcresIcon,
  WorldIcon,
  CameraIcon,
} from "../../common/IconsSvgs";
import { openSavePropertyAlert } from "@/components/common/openSavePropertyAlert";
import { homeFeaturedPropertyCards } from "@/data/featuredProperties";

function HomeFeaturedProperties({
  sectionId = "properties",
  eyebrow = "Active listings",
  title = "Featured Properties",
  description = `Build, farm, park, or live on it. Every listing includes verified zoning, permitted use, and buildability, no guesswork.`,
  cards = homeFeaturedPropertyCards,
  browseCtaLabel = "Browse 200+ Available Properties",
  onBrowseCtaClick,
  browseScrollTargetId = "home",
}) {
  const handleBrowseAvailablePropertiesClick = () => {
    if (onBrowseCtaClick) {
      onBrowseCtaClick();
      return;
    }

    const target = document.getElementById(browseScrollTargetId);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
      return;
    }

    window.location.hash = browseScrollTargetId;
  };

  return (
    <section id={sectionId} className="bg-[#f2f5f9] py-18">
      <div className="mx-auto w-full max-w-[1280px] px-4 md:px-8">
        <div className="mx-auto mb-10 max-w-[752px] text-center space-y-4">
          <h6 className="text-[#f76d2f]">{eyebrow}</h6>
          <h2 className="text-[#114273]">{title}</h2>
          <div className="mx-auto h-1 w-20 rounded-full bg-[#f76d2f]" />
          <p className="body-description text-[#4a5565]">{description}</p>
        </div>

        {cards?.length ? (
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {cards.map((card) => (
              <article
                key={card.id}
                className="flex h-full flex-col overflow-hidden rounded-[14px] border border-[#e6edf4] bg-white shadow-[0px_4px_10px_rgba(0,0,0,0.06)]"
              >
                <div className="relative h-full">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="h-full w-full object-cover"
                  />
                  {/* <button
                    type="button"
                    className="absolute right-3 top-3 flex items-center justify-center rounded-full bg-white/85 p-2 shadow-md backdrop-blur"
                    onClick={() => openSavePropertyAlert(card)}
                    aria-label={`Save ${card.title}`}
                  >
                    <HeartGrayIcon className="h-4 w-4" />
                  </button> */}
                  <div
                    className="absolute left-3 top-3 inline-flex items-center gap-2 rounded-full px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.09em] text-white shadow-lg"
                    style={{ backgroundColor: card.badgeColor }}
                  >
                    <StarYellowIcon className="h-4 w-4" />
                    <span>{card.badgeText}</span>
                  </div>
                </div>

                <div className="flex flex-1 flex-col px-4 pb-4 pt-3 sm:px-5 sm:pb-5">
                  <h3 className="mb-3 line-clamp-2 text-[18px] font-semibold leading-[1.35] text-[#114273]">
                    {card.title}
                  </h3>

                  <div className="border-b border-[#edf2f7] pb-3 text-[13px] text-[#5a6a82]">
                    <div className="mb-1.5 flex items-center justify-between gap-2">
                      <div className="flex items-center gap-2">
                        <LocationBlueIcon className="h-4 w-4" />
                        <span>{card.cityLine}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <AcresIcon className="h-4 w-4" />
                        <span>{card.acres}</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between gap-2">
                      <div className="flex items-center gap-2">
                        <WorldIcon className="h-4 w-4" />
                        <span>{card.county}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CameraIcon className="h-4 w-4" />
                        <span>{card.photos}</span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-3 flex items-center justify-between rounded-[10px] bg-[#f0f4f8] px-4 py-3 text-[13px]">
                    <div>
                      <p className="text-[10px] uppercase tracking-[0.12em] text-[#0a3056]">
                        Monthly payment
                      </p>
                      <p className="text-[24px] font-semibold leading-none tracking-tight text-[#f76d2f]">
                        {card.monthly}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-[10px] uppercase tracking-[0.12em] text-[#0a3056]">
                        Pay in full
                      </p>
                      <p className="text-[16px] font-semibold text-[#114273]">
                        {card.cash}
                      </p>
                    </div>
                  </div>

                  <button
                    type="button"
                    className="mt-3 inline-flex items-center justify-center gap-2 btn-primary"
                    onClick={() => {
                      window.location.assign(card.propertyUrl);
                    }}
                  >
                    Explore details
                    <ArrowRightIcon className="h-4 w-4" />
                  </button>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="mx-auto max-w-[720px] rounded-[14px] border border-[#e6edf4] bg-white px-6 py-8 text-center text-[#4a5565] shadow-[0px_4px_10px_rgba(0,0,0,0.06)]">
            No featured properties available right now.
          </div>
        )}

        <div className="mt-10 flex justify-center">
          <button
            type="button"
            className="inline-flex items-center gap-3 btn-secondary"
            onClick={handleBrowseAvailablePropertiesClick}
          >
            {browseCtaLabel}
            <ArrowRightIcon className="h-4 w-4" />
          </button>
        </div>
      </div>
    </section>
  );
}

export default HomeFeaturedProperties;
