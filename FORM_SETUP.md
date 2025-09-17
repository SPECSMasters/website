# SPECS Signup Form - Backend Setup Guide

This document explains how to set up backend data storage for the SPECS signup form on GitHub Pages.

## 🚀 Quick Start

The form is **ready to use** and just needs a backend service configured. Choose one option below:

### ⭐ Recommended: Formspree (5 minutes setup)

1. **Create Account**: Go to [formspree.io](https://formspree.io) → Sign up (free)
2. **Create Form**: New project → Get your form ID (e.g., `mbjqvjko`)
3. **Update Code**: In `index.html`, replace `YOUR_FORM_ID` with your actual ID:
   ```html
   <form action="https://formspree.io/f/mbjqvjko" method="POST">
   ```
4. **Deploy**: Push changes to GitHub → Form is live!

**Data Access**: View submissions at formspree.io dashboard, export CSV, get email notifications.

---

## Alternative Options

### Option 2: Google Forms + Sheets
- **Pro**: Familiar interface, automatic spreadsheet
- **Con**: Requires manual field mapping
- **Setup**: See `form-config-guide.html` for detailed steps

### Option 3: EmailJS
- **Pro**: All submissions via email
- **Con**: No centralized database
- **Setup**: Connect Gmail/Outlook, all forms sent as emails

### Option 4: Custom Backend
- **Pro**: Full control
- **Con**: Requires server setup (not suitable for GitHub Pages)

---

## Current Form Features

✅ **Form Fields Configured**:
- First Name, Last Name (required)
- Email address with validation
- Grade Level (9-12th grade)
- Programming Experience (None to Advanced)
- Computer Science Interests (optional text)

✅ **Validation & UX**:
- HTML5 form validation
- Custom JavaScript error handling
- Success message with form hiding
- Loading state during submission

✅ **Backend Ready**:
- Formspree integration configured
- Hidden fields for better emails
- Error handling for failed submissions
- Fallback email link for backup

---

## Data Structure

Each submission includes:
```json
{
  "firstName": "Student name",
  "lastName": "Student surname", 
  "_replyto": "student@email.com",
  "gradeLevel": "11",
  "experience": "beginner",
  "interests": "I want to learn web development...",
  "_subject": "New SPECS Club Signup",
  "timestamp": "2024-01-15T10:30:00Z"
}
```

---

## Testing Instructions

1. **Configure Backend**: Choose Formspree (recommended) or alternative
2. **Update Form Action**: Replace `YOUR_FORM_ID` with real endpoint
3. **Test Submission**: 
   - Fill form with test data
   - Submit and verify success message shows
   - Check your backend (Formspree dashboard, Google Sheets, email) for data
4. **Test Validation**: Try submitting incomplete forms to verify error handling

---

## Troubleshooting

**Form not submitting?**
- Check browser console for JavaScript errors
- Verify form action URL is correct
- Ensure all required fields are filled

**Not receiving data?**
- Double-check your backend service configuration
- Test with a simple form first
- Verify email notifications are enabled

**CORS errors?**
- This shouldn't happen with Formspree/Google Forms
- If using custom backend, ensure CORS headers are set

---

## Security & Privacy

- ✅ All submissions transmitted over HTTPS
- ✅ No sensitive data stored in client code
- ✅ Formspree includes spam protection
- ✅ Email addresses protected from bots
- ⚠️ Consider adding CAPTCHA for production use

---

## Next Steps

1. **Choose your backend** (Formspree recommended for beginners)
2. **Update the form action URL** in `index.html`
3. **Test thoroughly** with real submissions
4. **Set up email notifications** to get alerts for new signups
5. **Monitor submissions** and reach out to new SPECS members!

For detailed configuration examples, see `form-config-guide.html`.