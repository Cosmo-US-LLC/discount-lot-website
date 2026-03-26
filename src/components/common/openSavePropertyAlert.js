import Swal from "sweetalert2";

export async function openSavePropertyAlert() {
  const iconMarkup = `
    <div style="margin:0 auto;display:flex;height:64px;width:64px;align-items:center;justify-content:center;border-radius:9999px;background:#f4e8e0;">
      <svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" viewBox="0 0 64 64" fill="none">
        <path d="M19.9987 10.667C11.8987 10.667 5.33203 17.2337 5.33203 25.3337C5.33203 40.0003 22.6654 53.3337 31.9987 56.435C41.332 53.3337 58.6654 40.0003 58.6654 25.3337C58.6654 17.2337 52.0987 10.667 43.9987 10.667C39.0387 10.667 34.652 13.1297 31.9987 16.899C30.646 14.9728 28.8493 13.4009 26.7605 12.3161C24.6717 11.2313 22.3524 10.6657 19.9987 10.667Z" stroke="#F76D2F" stroke-width="5.33333" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </div>
  `;

  return Swal.fire({
    showConfirmButton: false,
    showCloseButton: true,
    width: 640,
    background: "#f3f4f6",
    padding: "2.25rem 1.5rem 2rem",
    customClass: {
      popup: "text-left rounded-none min-h-[500px]",
      closeButton: "!text-[#111827] !text-[30px] !shadow-none",
    },
    html: `
      ${iconMarkup}
      <div style="margin-top:16px;text-align:center;">
        <h2 style="margin:0;color:#161c2d;font-size:36px;line-height:40px;font-weight:700;">Save This Property Before It's Gone</h2>
        <p style="margin:12px 0 0;color:#4b5563;font-size:14px;line-height:22px;">
          Drop your details - we'll notify you the moment this lot drops in price or a deal goes live.
        </p>
      </div>

      <form id="save-property-form" style="margin-top:36px;text-align:left;">
        <label for="save-full-name" style="display:block;text-align:left;margin-bottom:8px;color:#114273;font-size:12px;font-weight:700;line-height:18px;text-transform:uppercase;">
          Full name
        </label>
        <input
          id="save-full-name"
          type="text"
          placeholder="Enter name"
          style="height:42px;width:100%;border-radius:4px;border:1px solid #d1d5db;background:#f3f4f6;padding:0 12px;font-size:14px;outline:none;"
        />

        <label for="save-email" style="display:block;text-align:left;margin:24px 0 8px;color:#114273;font-size:12px;font-weight:700;line-height:18px;text-transform:uppercase;">
          Email address
        </label>
        <input
          id="save-email"
          type="email"
          placeholder="john@example.com"
          style="height:42px;width:100%;border-radius:4px;border:1px solid #d1d5db;background:#f3f4f6;padding:0 12px;font-size:14px;outline:none;"
        />

        <button
          id="save-property-submit"
          type="submit"
          style="display:block;margin:24px auto 0;border:none;border-radius:4px;background:#0f4578;padding:12px 24px;color:#fff;font-size:12px;font-weight:700;text-transform:uppercase;cursor:pointer;"
        >
          Save Property &amp; Get Alerts
        </button>
      </form>
    `,
    didOpen: () => {
      const form = document.getElementById("save-property-form");
      form?.addEventListener("submit", (e) => {
        e.preventDefault();
        const fullName = document
          .getElementById("save-full-name")
          ?.value?.trim();
        const email = document.getElementById("save-email")?.value?.trim();

        if (!fullName || !email) {
          Swal.showValidationMessage("Please enter full name and email.");
          return;
        }

        Swal.close();
      });
    },
  });
}
