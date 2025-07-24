# Email Setup for Feedback Form

## Environment Variables

Create a `.env.local` file in your project root with the following variables:

```env
# Email Configuration
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
ADMIN_EMAIL=admin@thevalueengineering.com
```

## Gmail Setup Instructions

1. **Enable 2-Factor Authentication** on your Google account
2. **Generate App Password**:
   - Go to Google Account settings > Security > App passwords
   - Select "Mail" as the app
   - Generate a new app password
   - Use this password in `EMAIL_PASS` (not your regular Gmail password)

## Installation

Install the required dependencies:

```bash
npm install nodemailer
npm install --save-dev @types/nodemailer
```

## How It Works

When a user submits feedback:

1. **Admin Email**: Receives all form details (name, email, phone, testimonial)
2. **Client Email**: Receives a thank you message confirming their feedback was received

## Email Templates

### Admin Email Content:
- Name, Email, Phone, and Testimonial details
- Professional formatting with company branding

### Client Email Content:
- Personalized thank you message
- Confirmation of feedback receipt
- Professional closing

## Testing

1. Fill out the feedback form on the website
2. Check your admin email for the notification
3. Check the client's email for the thank you message

## Troubleshooting

- Ensure all environment variables are set correctly
- Verify Gmail app password is correct
- Check server logs for any email sending errors 