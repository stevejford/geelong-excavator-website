import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

// Initialize Resend client
const resend = new Resend(process.env.RESEND_API_KEY || '');

export async function POST(request: NextRequest) {
  try {
    const { name, email, phone, category, equipment, startDate, endDate, deliveryOption, deliveryAddress, projectDetails } = await request.json();
    
    // Validate required fields
    if (!email || !equipment) {
      return NextResponse.json(
        { error: 'Email and equipment are required' },
        { status: 400 }
      );
    }
    
    // Send email
    const { data, error } = await resend.emails.send({
      from: 'Equipment Booking <booking@gehire.net>',
      to: [email],
      bcc: ['info@gehire.net'],
      subject: 'Your Equipment Booking Request',
      html: `
        <h1>Booking Request Received</h1>
        <p>Dear ${name || 'Customer'},</p>
        <p>Thank you for your equipment booking request. Here are the details:</p>
        <ul>
          <li><strong>Equipment:</strong> ${equipment || 'Not specified'}</li>
          <li><strong>Category:</strong> ${category || 'Not specified'}</li>
          <li><strong>Start Date:</strong> ${startDate || 'Not specified'}</li>
          <li><strong>End Date:</strong> ${endDate || 'Not specified'}</li>
          <li><strong>Delivery Option:</strong> ${deliveryOption || 'Not specified'}</li>
          ${deliveryAddress ? `<li><strong>Delivery Address:</strong> ${deliveryAddress}</li>` : ''}
          ${projectDetails ? `<li><strong>Project Details:</strong> ${projectDetails}</li>` : ''}
          <li><strong>Contact Information:</strong></li>
          <ul>
            <li>Name: ${name || 'Not provided'}</li>
            <li>Email: ${email}</li>
            <li>Phone: ${phone || 'Not provided'}</li>
          </ul>
        </ul>
        <p>We'll be in touch shortly to confirm your booking and provide any additional information.</p>
        <p>If you have any questions, please contact us at info@gehire.net or call 0408 851 525.</p>
        <p>Thank you for choosing Geelong Excavator Hire!</p>
      `,
    });
    
    if (error) {
      console.error('Error sending email:', error);
      return NextResponse.json(
        { error: 'Failed to send email' },
        { status: 500 }
      );
    }
    
    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error('Error processing request:', error);
    return NextResponse.json(
      { error: 'Failed to process request' },
      { status: 500 }
    );
  }
}
