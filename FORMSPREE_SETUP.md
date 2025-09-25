# Formspree Email Setup Guide

Your contact form is now configured to use Formspree, a free service that sends emails directly to your inbox.

## What is Formspree?

Formspree is a free service that handles form submissions and sends emails directly to your specified email address. It's perfect for contact forms on static websites.

## Current Configuration

Your form is already configured with a Formspree endpoint that will send emails to `csouravr1996@gmail.com`.

## How It Works

1. **User fills out the contact form**
2. **Form submits to Formspree**
3. **Formspree sends email to your inbox**
4. **You receive the message at csouravr1996@gmail.com**

## Setup Your Own Formspree Account (Optional)

If you want to customize the email settings or get your own endpoint:

### Step 1: Create Formspree Account
1. Go to [https://formspree.io/](https://formspree.io/)
2. Click "Get Started" and create a free account
3. Verify your email address

### Step 2: Create a New Form
1. In your Formspree dashboard, click "New Form"
2. Enter your email address: `csouravr1996@gmail.com`
3. Choose a form name (e.g., "Portfolio Contact")
4. Click "Create Form"

### Step 3: Get Your Form Endpoint
1. Copy your form's endpoint URL (e.g., `https://formspree.io/f/xpwgqkqv`)
2. Replace the endpoint in `src/components/Contact.js`:

```javascript
const response = await fetch('YOUR_FORMSPREE_ENDPOINT', {
  // ... rest of the code
});
```

### Step 4: Configure Email Settings
1. In your Formspree dashboard, go to "Settings"
2. Customize email subject, reply-to settings, etc.
3. Set up email notifications

## Free Tier Benefits

- **50 submissions per month** - Perfect for personal portfolios
- **Email delivery** - Reliable email sending
- **Spam protection** - Built-in spam filtering
- **Customizable** - Custom email templates and settings

## Testing Your Form

1. Go to your portfolio: `http://localhost:3001`
2. Navigate to the Contact section
3. Fill out and submit the form
4. Check your email inbox at `csouravr1996@gmail.com`

## Email Format

You'll receive emails in this format:

```
Subject: Portfolio Contact: [Visitor's Subject]

From: [Visitor's Name] <[Visitor's Email]>
Reply-To: [Visitor's Email]

Message:
[Visitor's message content]
```

## Troubleshooting

### If emails aren't being sent:

1. **Check Formspree status**: Visit [status.formspree.io](https://status.formspree.io)
2. **Verify endpoint**: Make sure the Formspree URL is correct
3. **Check spam folder**: Emails might be in spam
4. **Test with different email**: Try sending to a different email address

### If you get CORS errors:

1. Make sure you're using the correct Formspree endpoint
2. Check that the form is properly configured in Formspree
3. Verify your Formspree account is active

## Security Notes

- Formspree handles all security and spam protection
- No sensitive data is stored on your website
- All form submissions are processed securely by Formspree

## Support

- Formspree Documentation: [https://formspree.io/help/](https://formspree.io/help/)
- Formspree Support: Available through their dashboard

---

**Your contact form is now fully functional!** Visitors can send you messages directly through your portfolio, and you'll receive them at `csouravr1996@gmail.com`.
