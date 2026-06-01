// api/submit.js — Vercel Serverless Function
// Nhận form data từ landing page → gửi tới Google Apps Script

export default async function handler(req, res) {
  // Cho phép CORS
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { name, phone, email } = req.body;

    if (!phone) {
      return res.status(400).json({ error: "Thiếu số điện thoại" });
    }

    // URL của Google Apps Script Web App (chị điền vào sau khi deploy Apps Script)
    const APPS_SCRIPT_URL = process.env.APPS_SCRIPT_URL;

    if (!APPS_SCRIPT_URL) {
      // Nếu chưa có URL, vẫn trả về thành công để test giao diện
      console.log("Lead received (no Apps Script URL):", { name, phone, email });
      return res.status(200).json({ success: true });
    }

    // Gửi sang Google Apps Script
    const response = await fetch(APPS_SCRIPT_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: name || "",
        phone,
        email: email || "",
        source: "Landing page - Bảng tính nuôi con",
      }),
    });

    const result = await response.json();
    return res.status(200).json({ success: true, result });

  } catch (err) {
    console.error("Submit error:", err);
    // Vẫn trả success để không làm phiền trải nghiệm khách
    return res.status(200).json({ success: true });
  }
}
