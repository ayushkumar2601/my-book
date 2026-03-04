import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { timestamp, userAgent } = body;

    // Get user's email from environment or config
    const recipientEmail = "kumarayush.professional@gmail.com";
    
    // Format the email content
    const emailSubject = "🔔 New Call Booking Request";
    const emailBody = `
Someone clicked "Book a Call" on your portfolio!

Details:
- Time: ${new Date(timestamp).toLocaleString()}
- User Agent: ${userAgent}
- IP: ${request.headers.get('x-forwarded-for') || 'Unknown'}

They will be redirected to your calendar to book a call.
    `.trim();

    // For now, we'll just log it
    // In production, you would integrate with an email service like:
    // - Resend
    // - SendGrid
    // - Nodemailer with SMTP
    
    console.log('=== CALL BOOKING NOTIFICATION ===');
    console.log('To:', recipientEmail);
    console.log('Subject:', emailSubject);
    console.log('Body:', emailBody);
    console.log('================================');

    // TODO: Integrate with email service
    // Example with Resend:
    // const resend = new Resend(process.env.RESEND_API_KEY);
    // await resend.emails.send({
    //   from: 'notifications@yourdomain.com',
    //   to: recipientEmail,
    //   subject: emailSubject,
    //   text: emailBody,
    // });

    return NextResponse.json({ 
      success: true, 
      message: 'Notification logged (email integration pending)' 
    });
  } catch (error) {
    console.error('Error processing notification:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to process notification' },
      { status: 500 }
    );
  }
}
