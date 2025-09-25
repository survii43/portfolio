# Web3Forms Email Setup Guide

Your contact form is now configured to use Web3Forms, a free and reliable email service that sends emails directly to your inbox.

## What is Web3Forms?

Web3Forms is a free service that handles form submissions and sends emails directly to your specified email address. It's perfect for contact forms and requires no backend server.

## Current Configuration

Your form is configured with a demo access key. To receive emails at `csouravr1996@gmail.com`, you need to set up your own Web3Forms account.

## Setup Your Web3Forms Account

### Step 1: Create Account
1. Go to [https://web3forms.com/](https://web3forms.com/)
2. Click "Get Started" and create a free account
3. Verify your email address

### Step 2: Create a New Form
1. In your Web3Forms dashboard, click "Create New Form"
2. Enter your email: `csouravr1996@gmail.com`
3. Choose a form name (e.g., "Portfolio Contact")
4. Click "Create Form"

### Step 3: Get Your Access Key
1. Copy your form's access key (e.g., `a1b2c3d4-e5f6-7890-abcd-ef1234567890`)
2. Replace the access key in `src/components/Contact.js`:

```javascript
access_key: 'YOUR_ACTUAL_ACCESS_KEY', // Replace with your actual key
```

### Step 4: Test Your Form
1. Go to your portfolio: `http://localhost:3001`
2. Navigate to the Contact section
3. Fill out and submit the form
4. Check your email inbox at `csouravr1996@gmail.com`

## How It Works

1. **User fills out contact form**
2. **Form submits to Web3Forms API**
3. **Web3Forms sends email to your inbox**
4. **You receive the message at csouravr1996@gmail.com**

## Email Format

You'll receive emails in this format:

```
Subject: Portfolio Contact: [Visitor's Subject]

From: [Visitor's Name] <[Visitor's Email]>
Reply-To: [Visitor's Email]

Message:
[Visitor's message content]

---
Form submitted via Web3Forms
```

## Free Tier Benefits

- **250 submissions per month** - Perfect for personal portfolios
- **Email delivery** - Reliable email sending
- **Spam protection** - Built-in spam filtering
- **Customizable** - Custom email templates and settings
- **No backend required** - Pure client-side solution

## Troubleshooting

### If emails aren't being sent:

1. **Check access key**: Make sure you're using your actual Web3Forms access key
2. **Verify email**: Ensure `csouravr1996@gmail.com` is correct in your Web3Forms account
3. **Check spam folder**: Emails might be in spam
4. **Test with different email**: Try sending to a different email address

### If you get CORS errors:

1. Make sure you're using the correct Web3Forms endpoint
2. Check that your access key is valid
3. Verify your Web3Forms account is active

## Security Notes

- Web3Forms handles all security and spam protection
- No sensitive data is stored on your website
- All form submissions are processed securely by Web3Forms
- Access keys are safe to use in client-side code

## Support

- Web3Forms Documentation: [https://web3forms.com/docs](https://web3forms.com/docs)
- Web3Forms Support: Available through their dashboard

---

**Next Steps**: 
1. Create your Web3Forms account
2. Get your access key
3. Replace the demo key in the code
4. Test the form

Your contact form will then send emails directly to `csouravr1996@gmail.com`!
