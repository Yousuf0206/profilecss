import express from 'express';
import nodemailer from 'nodemailer';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app: express.Application = express();

// Middleware
app.use(cors({ origin: 'http://localhost:3000' })); // Allow frontend domain
app.use(express.json()); // Parse JSON bodies

// Configure Nodemailer
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// Handle POST requests to /send-email
app.post('/send-email', (req: express.Request, res: express.Response) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'All fields are required.' });
  }

  const mailOptions = {
    from: email,
    to: process.env.EMAIL_USER,
    subject: `Contact Form Submission from ${name}`,
    text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error sending email:', error);
      return res.status(500).json({ error: 'Failed to send email. Please try again later.' });
    }
    console.log('Email sent:', info.response);
    return res.status(200).json({ message: 'Email sent successfully.' });
  });
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
