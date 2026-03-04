# Email Notification Setup

The "Book a Call" button currently logs notifications to the console. To enable actual email notifications, follow these steps:

## Option 1: Using Resend (Recommended)

1. **Sign up for Resend**
   - Go to https://resend.com
   - Create a free account
   - Get your API key

2. **Install Resend**
   ```bash
   npm install resend
   ```

3. **Add to .env.local**
   ```
   RESEND_API_KEY=your_api_key_here
   ```

4. **Update the API route** (`src/app/api/notify-call/route.ts`):
   ```typescript
   import { Resend } from 'resend';
   
   const resend = new Resend(process.env.RESEND_API_KEY);
   
   // Replace the console.log section with:
   await resend.emails.send({
     from: 'notifications@yourdomain.com',
     to: 'kumarayush.professional@gmail.com',
     subject: emailSubject,
     text: emailBody,
   });
   ```

## Option 2: Using SendGrid

1. **Sign up for SendGrid**
   - Go to https://sendgrid.com
   - Create account and get API key

2. **Install SendGrid**
   ```bash
   npm install @sendgrid/mail
   ```

3. **Add to .env.local**
   ```
   SENDGRID_API_KEY=your_api_key_here
   ```

4. **Update the API route**:
   ```typescript
   import sgMail from '@sendgrid/mail';
   
   sgMail.setApiKey(process.env.SENDGRID_API_KEY!);
   
   await sgMail.send({
     to: 'kumarayush.professional@gmail.com',
     from: 'verified@yourdomain.com',
     subject: emailSubject,
     text: emailBody,
   });
   ```

## Current Functionality

✅ Email Me button - Opens default mail app with your email
✅ Book a Call button - Shows toast notification
✅ Book a Call button - Logs notification to console
✅ Book a Call button - Redirects to Cal.com after 1 second
⏳ Book a Call button - Email notification (needs setup above)

## Testing

1. Click "Email Me" - Should open your default email client
2. Click "Book a Call" - Should show toast and redirect to calendar
3. Check console logs for notification details
