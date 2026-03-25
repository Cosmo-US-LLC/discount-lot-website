import Swal from "sweetalert2";

export async function openSavePropertyAlert() {
  const iconMarkup = `
    <div style="margin:0 auto;display:flex;height:64px;width:64px;align-items:center;justify-content:center;border-radius:9999px;background:#f4e8e0;">
      <svg width="32" height="32" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9.78195 14.7273C9.54418 14.8744 9.27003 14.9524 8.99034 14.9524C8.71065 14.9524 8.4365 14.8744 8.19873 14.7273C7.66765 14.3947 7.20688 14.0671 6.78314 13.7663L6.7819 13.7654C5.46964 12.8338 4.51254 12.1545 3.53395 11.0402C1.98242 9.27499 1.12109 7.13212 1.12109 4.88831C1.12109 2.10184 3.36665 0.0476074 6.07966 0.0476074C7.20497 0.0476074 8.25083 0.50388 8.99034 1.2702C9.72985 0.50388 10.7757 0.0476074 11.901 0.0476074C14.614 0.0476074 16.8596 2.10184 16.8596 4.88831C16.8596 7.13212 15.9983 9.27499 14.4467 11.0402C13.4682 12.1545 12.511 12.8339 11.1985 13.7656C10.7743 14.0665 10.3132 14.3943 9.78195 14.7273Z" stroke="#F76D2F" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </div>
  `;

  return Swal.fire({
    showConfirmButton: false,
    showCloseButton: true,
    width: 410,
    background: "#f3f4f6",
    padding: "1.75rem 1.5rem 1.5rem",
    customClass: {
      popup: "text-left rounded-none",
      closeButton: "!text-[#111827] !text-[30px] !shadow-none",
    },
    html: `
      ${iconMarkup}
      <div style="margin-top:16px;text-align:center;">
        <h2 style="margin:0;color:#161c2d;font-size:40px;line-height:42px;font-weight:700;">Save This Property Before It's Gone</h2>
        <p style="margin:12px 0 0;color:#4b5563;font-size:14px;line-height:22px;">
          Drop your details - we'll notify you the moment this lot drops in price or a deal goes live.
        </p>
      </div>

      <form id="save-property-form" style="margin-top:28px;">
        <label for="save-full-name" style="display:block;margin-bottom:8px;color:#114273;font-size:10px;font-weight:700;letter-spacing:.08em;text-transform:uppercase;">
          Full name
        </label>
        <input
          id="save-full-name"
          type="text"
          placeholder="Enter name"
          style="height:40px;width:100%;border-radius:4px;border:1px solid #d1d5db;background:#f3f4f6;padding:0 12px;font-size:13px;outline:none;"
        />

        <label for="save-email" style="display:block;margin:20px 0 8px;color:#114273;font-size:10px;font-weight:700;letter-spacing:.08em;text-transform:uppercase;">
          Email address
        </label>
        <input
          id="save-email"
          type="email"
          placeholder="john@example.com"
          style="height:40px;width:100%;border-radius:4px;border:1px solid #d1d5db;background:#f3f4f6;padding:0 12px;font-size:13px;outline:none;"
        />

        <button
          id="save-property-submit"
          type="submit"
          style="display:block;margin:20px auto 0;border:none;border-radius:4px;background:#0f4578;padding:12px 24px;color:#fff;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase;cursor:pointer;"
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
