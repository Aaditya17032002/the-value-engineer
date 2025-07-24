import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  try {
    const { name, email, phone, testimonial } = await request.json();

    // Validate required fields
    if (!name || !email || !testimonial) {
      return NextResponse.json(
        { error: 'Name, email, and testimonial are required' },
        { status: 400 }
      );
    }

    // Create transporter (you'll need to configure this with your email service)
    const transporter = nodemailer.createTransport({
      service: 'gmail', // or your email service
      auth: {
        user: process.env.EMAIL_USER, // your email
        pass: process.env.EMAIL_PASS, // your app password
      },
    });

    // Admin email template with dynamic content
    const adminEmailTemplate = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>New Client Feedback - The Value Engineering</title>
    <!--[if mso]>
    <noscript>
        <xml>
            <o:OfficeDocumentSettings>
                <o:PixelsPerInch>96</o:PixelsPerInch>
            </o:OfficeDocumentSettings>
        </xml>
    </noscript>
    <![endif]-->
</head>
<body style="margin: 0; padding: 0; font-family: Arial, Helvetica, sans-serif; background-color: #f5f5f5; line-height: 1.6;">
    <table role="presentation" style="width: 100%; border-collapse: collapse; margin: 0; padding: 0;">
        <tr>
            <td style="padding: 20px 0;">
                <table role="presentation" style="width: 100%; max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 8px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); border-collapse: collapse;">
                    <!-- Header -->
                    <tr>
                        <td style="background: linear-gradient(135deg, #1e3a8a 0%, #52C5D0 100%); padding: 30px; text-align: center; border-radius: 8px 8px 0 0;">
                            <h1 style="margin: 0; color: #ffffff; font-size: 28px; font-weight: bold;">New Client Feedback</h1>
                            <p style="margin: 10px 0 0 0; color: #ffffff; font-size: 16px; opacity: 0.9;">The Value Engineering</p>
                        </td>
                    </tr>
                    
                    <!-- Content -->
                    <tr>
                        <td style="padding: 40px 30px;">
                            <p style="margin: 0 0 20px 0; color: #333333; font-size: 16px;">Hello Admin,</p>
                            <p style="margin: 0 0 30px 0; color: #666666; font-size: 16px;">You have received new feedback from a client through your website. Here are the details:</p>
                            
                            <!-- Feedback Details -->
                            <table role="presentation" style="width: 100%; border-collapse: collapse; margin: 0 0 30px 0;">
                                <tr>
                                    <td style="background-color: #f8fafc; padding: 20px; border-radius: 8px;">
                                        
                                        <!-- Client Name -->
                                        <table role="presentation" style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
                                            <tr>
                                                <td style="width: 120px; vertical-align: top; padding: 0 20px 0 0;">
                                                    <strong style="color: #1e3a8a; font-size: 14px; text-transform: uppercase; letter-spacing: 0.5px;">Client Name:</strong>
                                                </td>
                                                <td style="vertical-align: top;">
                                                    <span style="color: #333333; font-size: 16px; font-weight: 600;">${name}</span>
                                                </td>
                                            </tr>
                                        </table>
                                        
                                        <!-- Email -->
                                        <table role="presentation" style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
                                            <tr>
                                                <td style="width: 120px; vertical-align: top; padding: 0 20px 0 0;">
                                                    <strong style="color: #1e3a8a; font-size: 14px; text-transform: uppercase; letter-spacing: 0.5px;">Email:</strong>
                                                </td>
                                                <td style="vertical-align: top;">
                                                    <a href="mailto:${email}" style="color: #52C5D0; font-size: 16px; text-decoration: none; font-weight: 600;">${email}</a>
                                                </td>
                                            </tr>
                                        </table>
                                        
                                        <!-- Phone -->
                                        <table role="presentation" style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
                                            <tr>
                                                <td style="width: 120px; vertical-align: top; padding: 0 20px 0 0;">
                                                    <strong style="color: #1e3a8a; font-size: 14px; text-transform: uppercase; letter-spacing: 0.5px;">Phone:</strong>
                                                </td>
                                                <td style="vertical-align: top;">
                                                    <a href="tel:${phone || 'Not provided'}" style="color: #52C5D0; font-size: 16px; text-decoration: none; font-weight: 600;">${phone || 'Not provided'}</a>
                                                </td>
                                            </tr>
                                        </table>
                                        
                                        <!-- Testimonial -->
                                        <table role="presentation" style="width: 100%; border-collapse: collapse;">
                                            <tr>
                                                <td style="width: 120px; vertical-align: top; padding: 0 20px 0 0;">
                                                    <strong style="color: #1e3a8a; font-size: 14px; text-transform: uppercase; letter-spacing: 0.5px;">Feedback:</strong>
                                                </td>
                                                <td style="vertical-align: top;">
                                                    <div style="background-color: #ffffff; padding: 15px; border-radius: 6px; border-left: 4px solid #52C5D0;">
                                                        <p style="margin: 0; color: #333333; font-size: 16px; line-height: 1.6; font-style: italic;">"${testimonial}"</p>
                                                    </div>
                                                </td>
                                            </tr>
                                        </table>
                                        
                                    </td>
                                </tr>
                            </table>
                            
                        </td>
                    </tr>
                    
                    <!-- Footer -->
                    <tr>
                        <td style="background-color: #f8fafc; padding: 20px 30px; text-align: center; border-radius: 0 0 8px 8px; border-top: 1px solid #e5e7eb;">
                            <p style="margin: 0; color: #666666; font-size: 14px;">
                                This email was automatically generated from your website feedback form.
                            </p>
                            <p style="margin: 10px 0 0 0; color: #666666; font-size: 12px;">
                                © 2025 The Value Engineering. All rights reserved.
                            </p>
                        </td>
                    </tr>
                </table>
            </td>
        </tr>
    </table>
</body>
</html>`;

    // Client email template with dynamic content
    const clientEmailTemplate = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Thank You for Your Feedback - The Value Engineering</title>
    <!--[if mso]>
    <noscript>
        <xml>
            <o:OfficeDocumentSettings>
                <o:PixelsPerInch>96</o:PixelsPerInch>
            </o:OfficeDocumentSettings>
        </xml>
    </noscript>
    <![endif]-->
</head>
<body style="margin: 0; padding: 0; font-family: Arial, Helvetica, sans-serif; background-color: #f5f5f5; line-height: 1.6;">
    <table role="presentation" style="width: 100%; border-collapse: collapse; margin: 0; padding: 0;">
        <tr>
            <td style="padding: 20px 0;">
                <table role="presentation" style="width: 100%; max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 8px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); border-collapse: collapse;">
                    <!-- Header -->
                    <tr>
                        <td style="background: linear-gradient(135deg, #1e3a8a 0%, #52C5D0 100%); padding: 40px 30px; text-align: center; border-radius: 8px 8px 0 0;">
                            <h1 style="margin: 0; color: #ffffff; font-size: 32px; font-weight: bold;">Thank You!</h1>
                            <p style="margin: 15px 0 0 0; color: #ffffff; font-size: 18px; opacity: 0.95;">We appreciate your valuable feedback</p>
                        </td>
                    </tr>
                    
                    <!-- Content -->
                    <tr>
                        <td style="padding: 40px 30px;">
                            <p style="margin: 0 0 25px 0; color: #333333; font-size: 18px; font-weight: 600;">Dear ${name},</p>
                            
                            <p style="margin: 0 0 25px 0; color: #555555; font-size: 16px; line-height: 1.7;">
                                Thank you for taking the time to share your feedback with us. Your thoughts and experiences are incredibly valuable to The Value Engineering team, and we truly appreciate you choosing to work with us.
                            </p>
                            
                            <p style="margin: 0 0 25px 0; color: #555555; font-size: 16px; line-height: 1.7;">
                                We have received your feedback and our team will review it carefully. Your input helps us continue to improve our estimating services and deliver the best possible experience for all our clients.
                            </p>
                            
                            <!-- Highlight Box -->
                            <table role="presentation" style="width: 100%; border-collapse: collapse; margin: 30px 0;">
                                <tr>
                                    <td style="background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%); padding: 25px; border-radius: 8px; border-left: 4px solid #52C5D0;">
                                        <h3 style="margin: 0 0 15px 0; color: #1e3a8a; font-size: 20px; font-weight: bold;">What's Next?</h3>
                                        <p style="margin: 0; color: #555555; font-size: 16px; line-height: 1.6;">
                                            Our team will be in touch with you soon. In the meantime, if you have any questions or need immediate assistance, please don't hesitate to reach out to us.
                                        </p>
                                    </td>
                                </tr>
                            </table>
                            
                            <!-- Contact Information -->
                            <table role="presentation" style="width: 100%; border-collapse: collapse; margin: 30px 0;">
                                <tr>
                                    <td style="text-align: center; padding: 25px; background-color: #f8fafc; border-radius: 8px;">
                                        <h3 style="margin: 0 0 20px 0; color: #1e3a8a; font-size: 18px; font-weight: bold;">Get in Touch</h3>
                                        
                                        <table role="presentation" style="margin: 0 auto; border-collapse: collapse;">
                                            <tr>
                                                <td style="padding: 8px 20px; text-align: center;">
                                                    <p style="margin: 0; color: #555555; font-size: 14px;">
                                                        <strong style="color: #1e3a8a;">WhatsApp:</strong><br>
                                                        <a href="https://wa.me/919687150213" style="color: #52C5D0; text-decoration: none; font-weight: 600;">+91 96871 50213</a>
                                                    </p>
                                                </td>
                                                <td style="padding: 8px 20px; text-align: center;">
                                                    <p style="margin: 0; color: #555555; font-size: 14px;">
                                                        <strong style="color: #1e3a8a;">Email:</strong><br>
                                                        <a href="mailto:info@thevalueengineering.com" style="color: #52C5D0; text-decoration: none; font-weight: 600;">info@thevalueengineering.com</a>
                                                    </p>
                                                </td>
                                            </tr>
                                        </table>
                                    </td>
                                </tr>
                            </table>
                            
                            <p style="margin: 30px 0 0 0; color: #555555; font-size: 16px; line-height: 1.7;">
                                Thank you once again for your trust in The Value Engineering. We look forward to continuing our partnership and delivering exceptional estimating services for your future projects.
                            </p>
                            
                            <p style="margin: 25px 0 0 0; color: #333333; font-size: 16px; font-weight: 600;">
                                Best regards,<br>
                                <span style="color: #1e3a8a; font-size: 18px;">The Value Engineering Team</span>
                            </p>
                        </td>
                    </tr>
                    
                    <!-- Footer -->
                    <tr>
                        <td style="background-color: #f8fafc; padding: 30px; text-align: center; border-radius: 0 0 8px 8px; border-top: 1px solid #e5e7eb;">
                            <p style="margin: 0 0 15px 0; color: #1e3a8a; font-size: 18px; font-weight: bold;">
                                The Value Engineering
                            </p>
                            <p style="margin: 0 0 10px 0; color: #666666; font-size: 14px; font-style: italic;">
                                "Your Scope. Your Format. Your Timeline. We Estimate It All."
                            </p>
                            <p style="margin: 0; color: #666666; font-size: 14px;">
                                Trusted Worldwide • USA • Canada • UK • Australia
                            </p>
                            <p style="margin: 15px 0 0 0; color: #666666; font-size: 12px;">
                                © 2025 The Value Engineering. All rights reserved.
                            </p>
                        </td>
                    </tr>
                </table>
            </td>
        </tr>
    </table>
</body>
</html>`;

    // Send email to admin
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.ADMIN_EMAIL || process.env.EMAIL_USER, // admin email
      subject: 'New Client Feedback - The Value Engineering',
      html: adminEmailTemplate,
    });

    // Send thank you email to client
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'Thank You for Your Feedback - The Value Engineering',
      html: clientEmailTemplate,
    });

    return NextResponse.json(
      { message: 'Feedback submitted successfully' },
      { status: 200 }
    );

  } catch (error) {
    console.error('Error sending feedback email:', error);
    return NextResponse.json(
      { error: 'Failed to send feedback. Please try again later.' },
      { status: 500 }
    );
  }
} 