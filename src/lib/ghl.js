const GHL_BASE = "https://services.leadconnectorhq.com";

/**
 * Creates or updates a contact in GHL. Use from Home, Insurance, or other pages with optional options.
 *
 * @param {Object} formData - { name, companyName, email, phone }
 * @param {Object} [options] - { source, tags } to segment leads (e.g. Insurance vs Home)
 */
export async function submitToGHL(formData, options = {}) {
  const apiKey = import.meta.env.VITE_GHL_API_KEY;
  const locationId = import.meta.env.VITE_GHL_LOCATION_ID;

  if (!apiKey || !locationId) {
    throw new Error(
      "GHL API Key and Location ID are required. Please check your .env file.",
    );
  }

  let phone = formData.phone || "";
  if (phone) {
    const digits = phone.replace(/\D/g, "");
    phone = `+${digits}`;
  }

  const defaultTags = ["Website Form", "Free Report"];
  const tags =
    options.tags && options.tags.length ? options.tags : defaultTags;
  const source = options.source || "Website Form";

  const contactData = {
    locationId,
    name: formData.name.trim(),
    email: formData.email.trim().toLowerCase(),
    phone,
    companyName: (formData.companyName || "").trim(),
    tags,
    source,
  };

  const response = await fetch(`${GHL_BASE}/contacts/`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
      Version: "2021-07-28",
    },
    body: JSON.stringify(contactData),
  });

  const responseText = await response.text();
  let result = {};
  try {
    result = responseText ? JSON.parse(responseText) : {};
  } catch {
    /* ignore */
  }

  if (
    !response.ok &&
    (result.message?.includes("duplicate") ||
      result.message?.includes("duplicated"))
  ) {
    const searchResponse = await fetch(`${GHL_BASE}/contacts/search`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
        Version: "2021-07-28",
      },
      body: JSON.stringify({
        locationId,
        query: { email: contactData.email },
        limit: 1,
      }),
    });

    const searchText = await searchResponse.text();
    let searchResult = {};
    try {
      searchResult = searchText ? JSON.parse(searchText) : {};
    } catch {
      /* ignore */
    }

    const contacts = searchResult.contacts || searchResult.data?.contacts || [];

    if (contacts.length > 0) {
      const existingContactId = contacts[0].id;
      const updateResponse = await fetch(
        `${GHL_BASE}/contacts/${existingContactId}`,
        {
          method: "PUT",
          headers: {
            Authorization: `Bearer ${apiKey}`,
            "Content-Type": "application/json",
            Version: "2021-07-28",
          },
          body: JSON.stringify({
            ...contactData,
            tags: [
              ...new Set([...(contacts[0].tags || []), ...contactData.tags]),
            ],
          }),
        },
      );

      const updateText = await updateResponse.text();
      let updateResult = {};
      try {
        updateResult = updateText ? JSON.parse(updateText) : {};
      } catch {
        /* ignore */
      }

      if (!updateResponse.ok) {
        throw new Error(
          updateResult.message ||
            updateResult.error ||
            `Update failed: ${updateResponse.status}`,
        );
      }

      return { success: true, updated: true };
    }
  }

  if (!response.ok) {
    const errorMessage =
      result.message || result.error || `Submission failed: ${response.status}`;
    throw new Error(errorMessage);
  }

  return { success: true };
}

/**
 * Land alert modal (Arizona and future state pages). Maps fields into GHL contact name/companyName.
 *
 * @param {Object} fields - firstName, email, preferredCounty, minAcreage, monthlyBudget
 * @param {Object} [options] - { source, tags } — override defaults for segmentation
 */
export async function submitLandAlertToGHL(fields, options = {}) {
  const formId =
    options.formId ?? import.meta.env.VITE_GHL_FORM_ID_ARIZONA;
  const {
    firstName = "",
    email = "",
    preferredCounty = "",
    minAcreage = "",
    monthlyBudget = "",
  } = fields;

  const detailParts = [
    formId ? `GHL form: ${formId}` : null,
    preferredCounty ? `County: ${preferredCounty}` : null,
    minAcreage ? `Min acres: ${minAcreage}` : null,
    monthlyBudget ? `Budget: ${monthlyBudget}` : null,
  ].filter(Boolean);

  const companyName = detailParts.length
    ? detailParts.join(" | ")
    : "Land alert";

  return submitToGHL(
    {
      name: firstName.trim() || "Friend",
      companyName,
      email,
      phone: "",
    },
    {
      source: options.source || "Website — Arizona Land Alert",
      tags: options.tags || ["Website", "Arizona Land Alert"],
    },
  );
}
