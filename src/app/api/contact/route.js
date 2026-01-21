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
  const { name, email, business, message, company } = await req.json();
  const ip = req.headers.get("x-forwarded-for") || "unknown";

  // Honeypot check - if filled, silently succeed (bot detection)
  if (company) {
    return new Response(JSON.stringify({ success: true }), { status: 200 });
  }

  // Validation
  if (!name || !email || !message) {
    return new Response(JSON.stringify({ error: "Missing required fields" }), {
      status: 400,
    });
  }

  // Rate limiting
  if (isRateLimited(ip)) {
    return new Response(
      JSON.stringify({ error: "Too many requests. Please try again later." }),
      {
        status: 429,
      },
    );
  }

  try {
    const transporter = nodemailer.createTransport({
      host: "smtp.zoho.com",
      port: 465,
      secure: true,
      auth: {
        user: "info@joannfrancisco.com",
        pass: process.env.ZOHO_APP_PASSWORD,
      },
    });

    // Email to yourself
    await transporter.sendMail({
      from: `"Website Contact" <info@joannfrancisco.com>`,
      replyTo: email,
      to: "info@joannfrancisco.com",
      subject: "New Contact Form Message",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px;">
          <h2 style="color: #0f172a;">New Contact Message</h2>
          <div style="background: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            ${business ? `<p><strong>Business:</strong> ${business}</p>` : ""}
          </div>
          <div style="background: white; padding: 20px; border-left: 4px solid #06b6d4;">
            <h3 style="margin-top: 0; color: #0f172a;">Message:</h3>
            <p style="white-space: pre-wrap;">${message}</p>
          </div>
          <hr style="margin: 20px 0; border: none; border-top: 1px solid #e2e8f0;" />
          <p style="color: #64748b; font-size: 12px;">
            This email was sent from your portfolio contact form.
          </p>
        </div>
      `,
    });

    // Auto-reply to sender
    await transporter.sendMail({
      from: `"Jo Ann Francisco" <info@joannfrancisco.com>`,
      to: email,
      subject: "Thanks for reaching out!",
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; max-width: 600px;">
          <h2 style="color: #0f172a;">Hi ${name},</h2>
          <p>Thanks for reaching out! I've received your message and will get back to you within 24 hours.</p>
          <p>In the meantime, feel free to check out my <a href="https://www.joannfrancisco.com" style="color: #06b6d4;">portfolio</a> or connect with me on <a href="https://www.linkedin.com/in/joannfrancisco" style="color: #06b6d4;">LinkedIn</a>.</p>
          <p>Best regards,<br />
          <strong>Jo Ann Francisco</strong><br />
          <span style="color: #64748b;">Web Designer & Full-Stack Developer</span></p>
          <hr style="margin: 20px 0; border: none; border-top: 1px solid #e2e8f0;" />
          <p style="color: #64748b; font-size: 12px;">
            This is an automated response. I'll personally reply to your message soon!
          </p>
        </div>
      `,
    });

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    console.error("Email error:", error);
    return new Response(
      JSON.stringify({ error: "Failed to send message. Please try again." }),
      { status: 500 },
    );
  }
}
