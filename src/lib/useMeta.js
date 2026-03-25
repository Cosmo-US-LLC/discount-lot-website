import { useEffect } from "react";

/**
 * Updates the document title + <meta name="description"> for the current route.
 * Keeps logic centralized so pages don't duplicate DOM manipulation code.
 */
export default function useMeta({ title, description }) {
  useEffect(() => {
    const isNonEmptyString = (value) =>
      typeof value === "string" && value.trim().length > 0;

    const upsertMeta = ({ selector, attrName, attrValue, content }) => {
      let meta = document.head.querySelector(selector);

      if (!meta) {
        meta = document.createElement("meta");
        meta.setAttribute(attrName, attrValue);
        document.head.appendChild(meta);
      }

      meta.setAttribute("content", content);
    };

    if (isNonEmptyString(title)) {
      document.title = title;
      upsertMeta({
        selector: 'meta[property="og:title"]',
        attrName: "property",
        attrValue: "og:title",
        content: title,
      });
      upsertMeta({
        selector: 'meta[name="twitter:title"]',
        attrName: "name",
        attrValue: "twitter:title",
        content: title,
      });
    }

    if (typeof description === "string") {
      upsertMeta({
        selector: 'meta[name="description"]',
        attrName: "name",
        attrValue: "description",
        content: description,
      });
      upsertMeta({
        selector: 'meta[property="og:description"]',
        attrName: "property",
        attrValue: "og:description",
        content: description,
      });
      upsertMeta({
        selector: 'meta[name="twitter:description"]',
        attrName: "name",
        attrValue: "twitter:description",
        content: description,
      });
    }
  }, [title, description]);
}

