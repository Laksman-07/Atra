import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  const data = await req.json();
  const {
    email, name, mobile, age, gender,
    goal, specific, package: pkg, mode, date, time, location
  } = data;

  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
      tls: {
        rejectUnauthorized: false, 
      },
    });

    await transporter.verify();

    await transporter.sendMail({
      from: `"Atra Contact Form" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_RECEIVER,
      subject: 'New Atra Consultation Request',
      html: `
        <h2>New Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${mobile}</p>
        <p><strong>Age:</strong> ${age}</p>
        <p><strong>Gender:</strong> ${gender}</p>
        <p><strong>Goal:</strong> ${goal}</p>
        <p><strong>Specific:</strong> ${specific}</p>
        <p><strong>Package:</strong> ${pkg}</p>
        <p><strong>Mode:</strong> ${mode}</p>
        <p><strong>Preferred Date:</strong> ${date}</p>
        <p><strong>Preferred Time:</strong> ${time}</p>
        <p><strong>Location:</strong> ${location}</p>
      `,
    });

    return NextResponse.json({ message: 'Email sent successfully' });
  } catch (error: any) {
    console.error('Error sending email:', error);

    return NextResponse.json({
      message: 'Error sending email',
      error: error.message || 'Internal server error',
    }, { status: 500 });
  }
}