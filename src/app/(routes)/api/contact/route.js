import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req) {
  const { name, email, message, companyName } = await req.json();
  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    secure: true,
    auth: {
      user: process.env.EMAIL,
      pass: process.env.EMAIL_PASSWORD
    }
  });
  try {
    await transporter.sendMail({
      from: `IsaiahVickers.com Site ${process.env.EMAIL}`,
      to: process.env.EMAIL,
      subject: `New message from ${name}`,
      html: `<h1>You have a new message from ${name}</h1> 
      <h3>Contact Details:</h3>
      <p>Email: ${email}</p>
      <p>Name: ${name}</p>
      ${companyName && `<p>Company: ${companyName}</p>`}
      <p>Message: ${message}</p>`
    });
    return new NextResponse(
      JSON.stringify({ message: "Email sent successfully!" }),
      { status: 200 }
    );
  } catch (error) {
    return new NextResponse(JSON.stringify({ error }), {
      status: 500
    });
  }
}
