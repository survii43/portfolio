# Email Integration Setup Guide

This guide will help you set up EmailJS to enable contact form functionality on your portfolio.

## What is EmailJS?

EmailJS is a free service that allows you to send emails directly from client-side JavaScript without needing a backend server. It's perfect for contact forms on static websites.

## Setup Steps

### 1. Create EmailJS Account

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Click "Sign Up" and create a free account
3. Verify your email address

### 2. Create an Email Service

1. In your EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the setup instructions for your chosen provider
5. Note down your **Service ID** (e.g., `service_abc123`)

### 3. Create an Email Template

1. Go to "Email Templates" in your dashboard
2. Click "Create New Template"
3. Use this template content:

```
Subject: New Contact Form Message from {{from_name}}

Hello {{to_name}},

You have received a new message from your portfolio contact form:

Name: {{from_name}}
Email: {{from_email}}
Subject: {{subject}}

Message:
{{message}}

---
Reply directly to this email to respond to {{from_name}}.
```

4. Save the template and note down your **Template ID** (e.g., `template_xyz789`)

### 4. Get Your Public Key

1. Go to "Account" in your EmailJS dashboard
2. Find your **Public Key** (e.g., `user_abc123def456`)

### 5. Update Configuration

1. Open `src/config/emailConfig.js` in your project
2. Replace the placeholder values with your actual credentials:

```javascript
export const emailConfig = {
  serviceId: 'service_your_actual_service_id', // Replace with your Service ID
  templateId: 'template_your_actual_template_id', // Replace with your Template ID
  publicKey: 'your_actual_public_key', // Replace with your Public Key
  
  templateParams: {
    to_name: 'Sourav Kumar', // Your name
    // ... other params
  }
};
```

### 6. Test the Contact Form

1. Start your development server: `npm start`
2. Go to `http://localhost:3000`
3. Navigate to the Contact section
4. Fill out and submit the contact form
5. Check your email inbox for the message

## Features Included

✅ **Real-time Email Sending**: Messages are sent directly to your inbox  
✅ **Loading States**: Shows spinner while sending  
✅ **Success/Error Messages**: User feedback for form submission  
✅ **Form Validation**: Client-side validation before sending  
✅ **Auto-reset**: Form clears after successful submission  
✅ **Responsive Design**: Works on all devices  

## Free Tier Limits

EmailJS free tier includes:
- 200 emails per month
- 2 email services
- 2 email templates
- Basic support

This is perfect for personal portfolio websites!

## Troubleshooting

### Common Issues:

1. **"Service not found" error**
   - Check your Service ID is correct
   - Ensure the service is active in your EmailJS dashboard

2. **"Template not found" error**
   - Check your Template ID is correct
   - Ensure the template is published

3. **"Invalid public key" error**
   - Check your Public Key is correct
   - Ensure your account is verified

4. **Emails not received**
   - Check your spam folder
   - Verify your email service is properly configured
   - Check EmailJS dashboard for error logs

### Testing:

- Use the browser's developer console to see any error messages
- Check the Network tab to see if the request is being sent
- Verify all credentials are correctly entered

## Security Notes

- EmailJS credentials are safe to use in client-side code
- The public key is designed to be public
- EmailJS handles rate limiting and spam protection
- Never expose your private keys or sensitive information

## Support

- EmailJS Documentation: [https://www.emailjs.com/docs/](https://www.emailjs.com/docs/)
- EmailJS Support: Available through their dashboard
- This portfolio's contact form is ready to use once configured!

---

**Next Steps**: After setting up EmailJS, your contact form will be fully functional and ready for production deployment!
