// EmailJS Configuration
// Replace these with your actual EmailJS credentials

export const emailConfig = {
  // Get these from https://www.emailjs.com/
  serviceId: 'service_your_service_id', // Replace with your EmailJS service ID
  templateId: 'template_your_template_id', // Replace with your EmailJS template ID
  publicKey: 'your_public_key', // Replace with your EmailJS public key
  
  // Email template parameters
  templateParams: {
    to_name: 'Sourav Kumar', // Your name
    from_name: '', // Will be filled from form
    from_email: '', // Will be filled from form
    subject: '', // Will be filled from form
    message: '', // Will be filled from form
    reply_to: '' // Will be filled from form
  }
};

// Instructions for setting up EmailJS:
/*
1. Go to https://www.emailjs.com/ and create a free account
2. Create a new service (Gmail, Outlook, etc.)
3. Create an email template with these variables:
   - {{from_name}} - Sender's name
   - {{from_email}} - Sender's email
   - {{subject}} - Email subject
   - {{message}} - Email message
   - {{to_name}} - Your name (Sourav Kumar)
   - {{reply_to}} - Reply-to email
4. Get your Service ID, Template ID, and Public Key
5. Replace the values above with your actual credentials
6. The contact form will now send emails directly to your inbox!
*/
