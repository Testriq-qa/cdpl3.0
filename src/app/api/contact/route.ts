import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { getEmailTemplate } from '@/lib/email-utils';

// 1. Configure Nodemailer Transporter
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: parseInt(process.env.SMTP_PORT || '587'),
  secure: process.env.SMTP_SECURE === 'true', // true for 465, false for other ports
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASSWORD,
  },
});

// 2. Define Admin and CC/BCC recipients
const ADMIN_EMAIL = process.env.ADMIN_EMAIL || 'admin@example.com';
const CC_EMAIL = process.env.CC_EMAIL || ''; // Optional CC
const BCC_EMAIL = process.env.BCC_EMAIL || ''; // Optional BCC

// 3. POST handler for form submission
export async function POST(request: Request) {
  try {
    const { fullName, email, phone } = await request.json();

    // Basic validation
    if (!fullName || !email || !phone) {
      return NextResponse.json({ message: 'Missing required fields' }, { status: 400 });
    }

    // Data for email templates
    const emailData = {
      fullName,
      email,
      phone,
    };

    // --- A. Send Email to Admin (Notification) ---
    const adminHtml = getEmailTemplate('admin-notification.html', emailData);
    
    const adminMailOptions = {
      from: process.env.SMTP_FROM_EMAIL || 'noreply@cdpl.com',
      to: ADMIN_EMAIL,
      cc: CC_EMAIL,
      bcc: BCC_EMAIL,
      subject: `New Lead: ${fullName} from Home Hero Section`,
      html: adminHtml,
    };

    await transporter.sendMail(adminMailOptions);

    // --- B. Send Email to User (Confirmation) ---
    const userHtml = getEmailTemplate('user-confirmation.html', emailData);

    const userMailOptions = {
      from: process.env.SMTP_FROM_EMAIL || 'noreply@cdpl.com',
      to: email, // Send to the user's email
      subject: 'Confirmation: Your CDPL Inquiry Has Been Received',
      html: userHtml,
    };

    await transporter.sendMail(userMailOptions);

    return NextResponse.json({ message: 'Form submitted and emails sent successfully' }, { status: 200 });

  } catch (error) {
    console.error('Error processing form submission:', error);
    return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
  }
}
