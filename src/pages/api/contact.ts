import type { APIRoute } from 'astro';

export const POST: APIRoute = async ({ request }) => {
  try {
    const data = await request.json();
    const { firstName, lastName, email, phone, interest, message } = data;

    // Validate required fields
    if (!firstName || !lastName || !email || !interest || !message) {
      return new Response(
        JSON.stringify({ 
          success: false, 
          message: 'Please fill in all required fields.' 
        }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return new Response(
        JSON.stringify({ 
          success: false, 
          message: 'Please provide a valid email address.' 
        }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // Format the email content
    const emailContent = {
      to: 'info@villacar.com', // Your dealership email
      from: email,
      subject: `New Contact Form Submission - ${interest}`,
      body: `
New Contact Form Submission from Villacar Website

Name: ${firstName} ${lastName}
Email: ${email}
Phone: ${phone || 'Not provided'}
Interest: ${interest}

Message:
${message}

---
Submitted on: ${new Date().toLocaleString('en-US', { 
  timeZone: 'America/Chicago',
  dateStyle: 'full',
  timeStyle: 'long'
})}
      `.trim()
    };

    // In production, integrate with an email service like:
    // SendGrid, Resend, AWS SES, or Nodemailer with SMTP
    // await sendEmail(emailContent);

    return new Response(
      JSON.stringify({ 
        success: true, 
        message: 'Thank you for contacting us! We will get back to you within 24 hours.' 
      }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );

  } catch (error) {
    console.error('Contact form error:', error);
    return new Response(
      JSON.stringify({ 
        success: false, 
        message: 'An error occurred. Please try calling us at (956) 566-6618.' 
      }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
};
