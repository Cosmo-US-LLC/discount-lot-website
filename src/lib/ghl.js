const GHL_BASE = "https://services.leadconnectorhq.com";

/**
 * Note — “Form submissions” vs Contacts:
 * POST /contacts/upsert creates/updates CRM contacts. It does NOT add a row under
 * Sites → Forms → [your form] → Submissions (that list is for native GHL form/embed traffic).
 * To see these leads: Contacts (filter by Source “Website — Arizona Land Alert” or your tags).
 * To mirror form automations: use a Workflow on Contact Created/Updated + tag/source.
 */

/**
 * Split a display name into GHL firstName / lastName (API does not use a single `name` field for create).
 */
function splitName(fullName) {
  const trimmed = (fullName || "").trim();
  if (!trimmed) return { firstName: "Friend", lastName: "" };
  const parts = trimmed.split(/\s+/);
  const firstName = parts[0] || "Friend";
  const lastName = parts.slice(1).join(" ");
  return { firstName, lastName };
}

function buildContactPayload(locationId, formData, options) {
  const { firstName, lastName } = splitName(formData.name);
  const defaultTags = ["Website Form", "Free Report"];
  const tags =
    options.tags && options.tags.length ? options.tags : defaultTags;
  const source = options.source || "Website Form";

  let phone = formData.phone || "";
  if (phone) {
    const digits = phone.replace(/\D/g, "");
    phone = `+${digits}`;
  }

  const companyName = (formData.companyName || "").trim();

  const payload = {
    locationId,
    firstName,
    ...(lastName ? { lastName } : {}),
    email: formData.email.trim().toLowerCase(),
    tags,
    source,
  };

  if (phone) payload.phone = phone;
  if (companyName) payload.companyName = companyName;

  if (options.customFields?.length) {
    payload.customFields = options.customFields;
  }

  return payload;
}

/**
 * GHL custom fields for Arizona land alert (field keys in CRM: pref_county_ari, min_acreage, budget).
 * Set VITE_GHL_CF_* to each field’s UUID from Settings → Custom Fields → field (API id).
 */
function buildLandAlertCustomFields(fields) {
  const { preferredCounty, minAcreage, monthlyBudget } = fields;
  const pairs = [
    [import.meta.env.VITE_GHL_CF_PREF_COUNTY_ARI, preferredCounty],
    [import.meta.env.VITE_GHL_CF_MIN_ACREAGE, minAcreage],
    [import.meta.env.VITE_GHL_CF_BUDGET, monthlyBudget],
  ];
  const out = [];
  for (const [fieldId, value] of pairs) {
    if (!fieldId || !String(fieldId).trim()) continue;
    const v = value != null ? String(value).trim() : "";
    if (!v) continue;
    out.push({ id: String(fieldId).trim(), field_value: v });
  }
  return out;
}

/**
 * Creates or updates a contact in GHL. Uses POST /contacts/upsert so location duplicate rules
 * (e.g. "do not allow duplicate contacts") update the existing lead instead of returning 400.
 *
 * @param {Object} formData - { name, companyName, email, phone }
 * @param {Object} [options] - { source, tags, customFields } to segment leads and map GHL custom fields
 */
export async function submitToGHL(formData, options = {}) {
  const apiKey = import.meta.env.VITE_GHL_API_KEY;
  const locationId = import.meta.env.VITE_GHL_LOCATION_ID;

  if (!apiKey || !locationId) {
    throw new Error(
      "GHL API Key and Location ID are required. Please check your .env file.",
    );
  }

  const contactData = buildContactPayload(locationId, formData, options);

  const response = await fetch(`${GHL_BASE}/contacts/upsert`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
      Accept: "application/json",
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

  if (!response.ok) {
    const errorMessage =
      result.message ||
      result.error ||
      `Submission failed: ${response.status}`;
    throw new Error(errorMessage);
  }

  return { success: true };
}

/**
 * Land alert modal (Arizona and future state pages).
 * Maps to GHL: first_name → contact firstName, email → email,
 * pref_county_ari / min_acreage / budget → customFields when VITE_GHL_CF_* ids are set.
 *
 * @param {Object} fields - firstName, email, preferredCounty, minAcreage, monthlyBudget
 * @param {Object} [options] - { source, tags, formId } — override defaults for segmentation
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

  const customFields = buildLandAlertCustomFields(fields);
  const hasCfEnv =
    import.meta.env.VITE_GHL_CF_PREF_COUNTY_ARI ||
    import.meta.env.VITE_GHL_CF_MIN_ACREAGE ||
    import.meta.env.VITE_GHL_CF_BUDGET;

  const detailParts = [
    formId ? `GHL form: ${formId}` : null,
    preferredCounty ? `County: ${preferredCounty}` : null,
    minAcreage ? `Min acres: ${minAcreage}` : null,
    monthlyBudget ? `Budget: ${monthlyBudget}` : null,
  ].filter(Boolean);

  const companyName = hasCfEnv
    ? [formId && `Form: ${formId}`, "Arizona land alert"].filter(Boolean).join(" | ")
    : detailParts.length
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
      customFields,
    },
  );
}
