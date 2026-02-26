# EmailJS Setup Guide

## 📧 Get Real Email Functionality in 5 Minutes

Follow these steps to enable real email sending from your contact form:

---

## Step 1: Create EmailJS Account (2 minutes)

1. Go to **[https://dashboard.emailjs.com/sign-up](https://dashboard.emailjs.com/sign-up)**
2. Sign up with your Google account (yashparmar1027@gmail.com)
3. Verify your email
    
---

## Step 2: Add Email Service (1 minute)

1. Go to **[Email Services](https://dashboard.emailjs.com/admin)**
2. Click **"Add New Service"**
3. Select **"Gmail"**
4. Click **"Connect Account"** and authorize your Gmail
5. Copy the **Service ID** (looks like: `service_xxxxxxx`)

---

## Step 3: Create Email Template (1 minute)

1. Go to **[Email Templates](https://dashboard.emailjs.com/admin/templates)**
2. Click **"Create New Template"**
3. Use this template content:

```
From: {{from_name}}
Email: {{from_email}}

Message:
{{message}}
```

4. **Subject:** New Contact Form Message from {{from_name}}
5. **To Email:** yashparmar1027@gmail.com
6. Save and copy the **Template ID** (looks like: `template_xxxxxxx`)

---

## Step 4: Get Public Key (30 seconds)

1. Go to **[Account](https://dashboard.emailjs.com/admin/account)**
2. Find **Public Key** section
3. Copy your **Public Key** (looks like: `xxxxxxxxxxxxxx`)

---

## Step 5: Update .env.local File (30 seconds)

1. Open **`.env.local`** in your project root
2. Replace the placeholder values:

```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_xxxxxxx
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=template_xxxxxxx
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=xxxxxxxxxxxxxx
```

3. Save the file

---

## Step 6: Restart Dev Server (30 seconds)

1. Stop your dev server (Ctrl+C in terminal)
2. Restart: `npm run dev`
3. Test your contact form!

---

## 🧪 Testing

1. Go to your contact form
2. Fill in:
   - Name: Test User
   - Email: test@example.com
   - Message: This is a test message
3. Click "Send Message"
4. Check your Gmail inbox for the email!

---

## ✅ Success Indicators

- ✓ Form shows "Message sent successfully!" in green
- ✓ You receive email at yashparmar1027@gmail.com
- ✓ Form clears after successful submission

---

## 🚨 Troubleshooting

### "Email service not configured" error
→ Check that your .env.local file has all three values filled in

### "Failed to send message" error
→ Double-check your Service ID, Template ID, and Public Key are correct

### Still not working?
→ Make sure you restarted the dev server after updating .env.local

---

## 💡 Quick Links

- EmailJS Dashboard: https://dashboard.emailjs.com/admin
- EmailJS Documentation: https://www.emailjs.com/docs/
- Free Tier Limits: 200 emails/month

---

## 🎯 After Setup

Once configured, your contact form will:
- Send real emails to your Gmail
- Show professional success messages
- Work reliably for recruiters/clients
- Track submissions in EmailJS dashboard

**Estimated Total Time: 5 minutes** ⏱️
