/** Aligns with `discountlots.com/property-map` query param expectations. */
export const PRICE_BOUND_MIN = 5943;
export const PRICE_BOUND_MAX = 128999;
export const MONTHLY_PAYMENT_BOUND_MIN = 141;
export const MONTHLY_PAYMENT_BOUND_MAX = 1875;

/**
 * @param {object} p
 * @param {string} p.states
 * @param {string} [p.counties]
 * @param {string} [p.usage]
 * @param {string} p.acreageMin
 * @param {string} p.acreageMax
 * @param {string|number} p.priceMin
 * @param {string|number} p.priceMax
 * @param {string|number} [p.monthlyMin]
 * @param {string|number} [p.monthlyMax]
 */
export function buildPropertyMapUrl(p) {
  const url = new URL("https://discountlots.com/property-map");
  url.searchParams.set("states", p.states ?? "");
  url.searchParams.set("counties", p.counties ?? "");
  url.searchParams.set("usage", p.usage ?? "");
  url.searchParams.set("acreage.min", p.acreageMin);
  url.searchParams.set("acreage.max", p.acreageMax);
  url.searchParams.set("price.min", String(p.priceMin));
  url.searchParams.set("price.max", String(p.priceMax));
  url.searchParams.set(
    "monthly_payment.min",
    String(p.monthlyMin ?? MONTHLY_PAYMENT_BOUND_MIN),
  );
  url.searchParams.set(
    "monthly_payment.max",
    String(p.monthlyMax ?? MONTHLY_PAYMENT_BOUND_MAX),
  );
  return url.toString();
}
