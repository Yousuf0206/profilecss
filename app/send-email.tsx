import type { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { name, email, message } = req.body;

  // Validate input
  if (!name || !email || !message || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return res.status(400).json({ error: "Invalid input data" });
  }

  // Create transporter with environment variables
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.GMAIL_USER, // Load Gmail user from .env.local
      pass: process.env.GMAIL_PASS, // Load Gmail App Password from .env.local
    },
  });

  try {
    // Send the email
    await transporter.sendMail({
      from: `"${name}" <${email}>`,
      to: process.env.GMAIL_USER, // Send email to the recipient
      subject: "New Contact Form Submission",
      text: `You have received a new message from ${name} (${email}):\n\n${message}`,
    });

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error("Error sending email:", error);
    return res.status(500).json({ error: "Failed to send email" });
  }
}
