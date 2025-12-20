import nodemailer from "nodemailer";

const rateLimit = new Map();

function isRateLimited(ip) {
  const now = Date.now();
  const limit = rateLimit.get(ip) || { count: 0, time: now };

  if (now - limit.time > 60000) {
    rateLimit.set(ip, { count: 1, time: now });
    return false;
  }

  limit.count++;
  rateLimit.set(ip, limit);

  return limit.count > 5;
}

export async function POST(req) {
  const { from, message, company } = await req.json();
  const ip = req.headers.get("x-forwarded-for") || "unknown";

  if (company) {
    return new Response(JSON.stringify({ success: true }), { status: 200 });
  }

  if (!from || !message) {
    return new Response(JSON.stringify({ error: "Missing fields" }), {
      status: 400,
    });
  }

  if (isRateLimited(ip)) {
    return new Response(JSON.stringify({ error: "Too many requests" }), {
      status: 429,
    });
  }

  const transporter = nodemailer.createTransport({
    host: "smtp.zoho.com",
    port: 465,
    secure: true,
    auth: {
      user: "info@joannfrancisco.com",
      pass: process.env.ZOHO_APP_PASSWORD,
    },
  });

  await transporter.sendMail({
    from: `"Website Contact" <info@joannfrancisco.com>`,
    replyTo: from,
    to: "info@joannfrancisco.com",
    subject: "New Contact Form Message",
    html: `
      <div style="font-family: Arial, sans-serif">
        <h2>New Contact Message</h2>
        <p><strong>From:</strong> ${from}</p>
        <hr />
        <p>${message.replace(/\n/g, "<br />")}</p>
      </div>
    `,
  });

  // Auto-reply to sender
  await transporter.sendMail({
    from: `"Jo Ann Francisco" <info@joannfrancisco.com>`,
    to: from,
    subject: "Thanks for reaching out!",
    html: `
    <div style="font-family: Arial, sans-serif; line-height: 1.6">
      <p>Hi,</p>
      <p>Thanks for reaching out! I’ve received your message and will get back to you shortly.</p>
      <p>Best,<br />Jo Ann</p>
    </div>
  `,
  });

  return new Response(JSON.stringify({ success: true }), { status: 200 });
}
