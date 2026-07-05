import { NextResponse } from "next/server";

export const runtime = "nodejs";

type ContactPayload = {
  firstName: string;
  lastName: string;
  gender: string;
  phone: string;
  lineId: string;
  location: string;
  projectType: string;
  area: string;
  moveInDate: string;
  budget: string;
  message: string;
};

const requiredFields: Array<keyof ContactPayload> = [
  "firstName",
  "lastName",
  "gender",
  "phone",
  "location",
  "projectType",
  "area",
  "moveInDate",
  "budget",
];

function getFormString(formData: FormData, key: keyof ContactPayload) {
  const value = formData.get(key);
  return typeof value === "string" ? value.trim() : "";
}

function buildPayload(formData: FormData): ContactPayload {
  return {
    firstName: getFormString(formData, "firstName"),
    lastName: getFormString(formData, "lastName"),
    gender: getFormString(formData, "gender"),
    phone: getFormString(formData, "phone"),
    lineId: getFormString(formData, "lineId"),
    location: getFormString(formData, "location"),
    projectType: getFormString(formData, "projectType"),
    area: getFormString(formData, "area"),
    moveInDate: getFormString(formData, "moveInDate"),
    budget: getFormString(formData, "budget"),
    message: getFormString(formData, "message"),
  };
}

function formatContactMessage(payload: ContactPayload) {
  return [
    `Name: ${payload.firstName} ${payload.lastName}`,
    `Gender: ${payload.gender}`,
    `Phone: ${payload.phone}`,
    `Line ID: ${payload.lineId || "-"}`,
    `Location: ${payload.location}`,
    `Type: ${payload.projectType}`,
    `Area: ${payload.area}`,
    `Move-in Date: ${payload.moveInDate}`,
    `Budget: ${payload.budget}`,
    "",
    "Message:",
    payload.message || "-",
  ].join("\n");
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function formatContactHtml(payload: ContactPayload) {
  const rows = [
    ["Name", `${payload.firstName} ${payload.lastName}`],
    ["Gender", payload.gender],
    ["Phone", payload.phone],
    ["Line ID", payload.lineId || "-"],
    ["Location", payload.location],
    ["Type", payload.projectType],
    ["Area", payload.area],
    ["Move-in Date", payload.moveInDate],
    ["Budget", payload.budget],
    ["Message", payload.message || "-"],
  ];

  return `
    <h2>New X3 Design contact request</h2>
    <table cellpadding="8" cellspacing="0" style="border-collapse:collapse;">
      ${rows
        .map(
          ([label, value]) => `
            <tr>
              <th align="left" style="border-bottom:1px solid #ded6ca;">${escapeHtml(label)}</th>
              <td style="border-bottom:1px solid #ded6ca;">${escapeHtml(value)}</td>
            </tr>
          `,
        )
        .join("")}
    </table>
  `;
}

async function sendToWebhook(payload: ContactPayload) {
  const webhookUrl = process.env.CONTACT_WEBHOOK_URL;

  if (!webhookUrl) {
    return false;
  }

  const url = new URL(webhookUrl);

  if (url.protocol !== "https:") {
    throw new Error("CONTACT_WEBHOOK_URL must use HTTPS.");
  }

  const response = await fetch(url, {
    method: "POST",
    headers: {
      "content-type": "application/json",
      ...(process.env.CONTACT_WEBHOOK_SECRET
        ? { authorization: `Bearer ${process.env.CONTACT_WEBHOOK_SECRET}` }
        : {}),
    },
    body: JSON.stringify({
      source: "x3-design-site",
      payload,
      text: formatContactMessage(payload),
    }),
  });

  if (!response.ok) {
    throw new Error("Contact webhook rejected the request.");
  }

  return true;
}

async function sendWithResend(payload: ContactPayload) {
  const apiKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.CONTACT_TO_EMAIL;
  const fromEmail = process.env.CONTACT_FROM_EMAIL;

  if (!apiKey || !toEmail || !fromEmail) {
    return false;
  }

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      authorization: `Bearer ${apiKey}`,
      "content-type": "application/json",
    },
    body: JSON.stringify({
      from: fromEmail,
      to: toEmail.split(",").map((email) => email.trim()),
      reply_to: toEmail,
      subject: `X3 Design contact request - ${payload.firstName} ${payload.lastName}`,
      text: formatContactMessage(payload),
      html: formatContactHtml(payload),
    }),
  });

  if (!response.ok) {
    throw new Error("Email service rejected the request.");
  }

  return true;
}

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const payload = buildPayload(formData);
    const missingFields = requiredFields.filter((field) => !payload[field]);

    if (missingFields.length > 0) {
      return NextResponse.json(
        { message: "請完整填寫必填欄位後再送出。" },
        { status: 400 },
      );
    }

    const deliveredToWebhook = await sendToWebhook(payload);
    const deliveredWithResend = deliveredToWebhook
      ? false
      : await sendWithResend(payload);

    if (!deliveredToWebhook && !deliveredWithResend) {
      return NextResponse.json(
        {
          message:
            "表單已改為安全 API 流程，但尚未設定寄信服務。請設定 RESEND_API_KEY / CONTACT_TO_EMAIL / CONTACT_FROM_EMAIL，或設定 HTTPS 的 CONTACT_WEBHOOK_URL。",
        },
        { status: 503 },
      );
    }

    return NextResponse.json({
      message: "已收到您的需求，我們會盡快與您聯繫。",
    });
  } catch (error) {
    const message =
      error instanceof Error
        ? error.message
        : "表單送出失敗，請稍後再試。";

    return NextResponse.json({ message }, { status: 500 });
  }
}
