import nodemailer from 'nodemailer';
import { readFileSync } from 'fs';

// Setup Mailtrap Transport
const transport = nodemailer.createTransport({
  host: "sandbox.smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "7cb101a9c38c18",
    pass: "257f00193f36c8"
  }
});

// Read compiled Maizzle HTML
const html = readFileSync('./docs/index.html', 'utf8');

const mailOptions = {
  from: 'test@hashmicro-dev.com',
  to: 'prospect@example.com',
  subject: 'HashMicro ERP - Production Test',
  html: html
};

transport.sendMail(mailOptions, (error, info) => {
  if (error) return console.log(error);
  console.log('Email sent to Mailtrap! Check your inbox.');
});
