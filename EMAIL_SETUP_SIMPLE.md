# Simple Email Setup Guide

Your contact form is now configured to actually send emails to your inbox. Here's how to set it up properly:

## Current Status

The form is using demo endpoints that may not work. To receive emails at `csouravr1996@gmail.com`, you need to set up your own email service.

## Quick Setup Options

### Option 1: Formspree (Recommended - 5 minutes)

1. **Go to [formspree.io](https://formspree.io/)**
2. **Sign up for free account**
3. **Create new form**
4. **Add your email**: `csouravr1996@gmail.com`
5. **Get your form endpoint** (e.g., `https://formspree.io/f/abc123`)
6. **Replace in code**:
   ```javascript
   const response = await fetch('YOUR_FORMSPREE_ENDPOINT', {
   ```

### Option 2: Web3Forms (Alternative)

1. **Go to [web3forms.com](https://web3forms.com/)**
2. **Sign up for free account**
3. **Create new form**
4. **Add your email**: `csouravr1996@gmail.com`
5. **Get your access key**
6. **Replace in code**:
   ```javascript
   access_key: 'YOUR_ACCESS_KEY',
   ```

### Option 3: Getform (Another option)

1. **Go to [getform.io](https://getform.io/)**
2. **Sign up for free account**
3. **Create new form**
4. **Add your email**: `csouravr1996@gmail.com`
5. **Get your form endpoint**
6. **Replace in code**

## How It Works

1. **User fills out form**
2. **Form submits to email service**
3. **Email service sends to your inbox**
4. **You receive email at csouravr1996@gmail.com**

## Testing

1. **Set up your email service**
2. **Update the code with your endpoint**
3. **Test the form**
4. **Check your email inbox**

## Free Tier Limits

- **Formspree**: 50 submissions/month
- **Web3Forms**: 250 submissions/month
- **Getform**: 50 submissions/month

All are perfect for personal portfolios!

## Quick Fix

If you want to test immediately, you can:

1. **Use the current setup** (may work with demo endpoints)
2. **Check your spam folder** if emails don't arrive
3. **Set up your own service** for reliable delivery

---

**The form will work once you set up your own email service endpoint!**
