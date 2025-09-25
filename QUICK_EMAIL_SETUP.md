# Quick Email Setup Guide

Your contact form is now working with a basic setup. To add real email functionality, follow these simple steps:

## Current Status
✅ Form works and shows success message  
✅ Form data is logged to console  
❌ Emails not sent automatically  

## Quick Setup (5 minutes)

### Option 1: Formspree (Easiest)

1. **Go to [formspree.io](https://formspree.io/)**
2. **Sign up for free**
3. **Create new form**
4. **Add your email**: `csouravr1996@gmail.com`
5. **Get your form endpoint** (e.g., `https://formspree.io/f/abc123`)
6. **Replace in Contact.js**:
   ```javascript
   // Replace this line:
   setTimeout(() => {
   
   // With this:
   const response = await fetch('YOUR_FORMSPREE_ENDPOINT', {
     method: 'POST',
     headers: { 'Content-Type': 'application/json' },
     body: JSON.stringify({
       name: formData.name,
       email: formData.email,
       subject: formData.subject,
       message: formData.message,
       _replyto: formData.email,
       _subject: `Portfolio Contact: ${formData.subject}`,
     }),
   });
   
   if (response.ok) {
     setSubmitStatus('success');
     setFormData({ name: '', email: '', subject: '', message: '' });
   }
   ```

### Option 2: Web3Forms (Alternative)

1. **Go to [web3forms.com](https://web3forms.com/)**
2. **Sign up for free**
3. **Create new form**
4. **Add your email**: `csouravr1996@gmail.com`
5. **Get your access key**
6. **Replace in Contact.js**:
   ```javascript
   const response = await fetch('https://api.web3forms.com/submit', {
     method: 'POST',
     headers: { 'Content-Type': 'application/json' },
     body: JSON.stringify({
       access_key: 'YOUR_ACCESS_KEY',
       name: formData.name,
       email: formData.email,
       subject: formData.subject,
       message: formData.message,
       from_name: formData.name,
       reply_to: formData.email,
       to_name: 'Sourav Kumar',
     }),
   });
   ```

## Testing

1. **Set up your email service**
2. **Update the code**
3. **Test the form**
4. **Check your email inbox**

## Free Limits

- **Formspree**: 50 submissions/month
- **Web3Forms**: 250 submissions/month

Both are perfect for personal portfolios!

---

**Your form is ready to use! Just add your email service endpoint to make it fully functional.**
