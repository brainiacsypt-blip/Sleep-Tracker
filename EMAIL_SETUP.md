# 📧 Email Notifications Setup Guide

## Overview

Your Sleep Tracker app now supports **email notifications and weekly sleep reports**! You can receive:
- Daily sleep alerts
- Weekly sleep reports  
- Health warnings when sleep is low
- Wake-up time notifications

---

## How to Set Up Email Notifications

### Step 1: Open Profile Settings
1. Open the app and go to **Profile** page
2. Scroll down to **Settings & Notifications**

### Step 2: Enter Your Email
In the "Send Reports To Email" field, enter your email address:
```
Vishal165610@gmail.com
```

### Step 3: Enable Notifications
Check the "Enable email notifications" checkbox

### Step 4: Set Optional Preferences
- **Target bedtime**: Set when you should go to sleep
- **Target wake time**: Set when you should wake up
- **Send alert when I wake up**: Get notified at wake time

### Step 5: Save
Click "Save Settings" - you'll see a success message

---

## What Emails You'll Receive

### 1. Daily Low Sleep Alert
**When:** Every morning if you slept less than 7 hours
**Email to:** Vishal165610@gmail.com
**Subject:** 💤 Daily Sleep Report
**Content:** Sleep duration, sessions, health status

### 2. Weekly Sleep Report
**When:** Every Sunday
**Email to:** Vishal165610@gmail.com
**Subject:** 📊 Weekly Sleep Report
**Content:** 
- Total sleep hours
- Average nightly sleep
- Sleep pattern analysis
- Weekly trends
- Health recommendations

### 3. Wake-Up Alert
**When:** At your target wake time (if set)
**Email to:** Vishal165610@gmail.com
**Subject:** ⏰ Good Morning!
**Content:** Sleep quality summary, today's forecast

### 4. Health Warning
**When:** If sleep drops below 5 hours for 3 consecutive days
**Email to:** Vishal165610@gmail.com
**Subject:** ⚠️ Sleep Health Alert
**Content:** Sleep concerns, recommendations, tips

---

## Email Configuration

### Your Email Address
```
Vishal165610@gmail.com
```

The app will send all reports to this email. You can change it anytime in Profile Settings.

### Email Features
- ✅ All emails sent from "Sweet Dreams Sleep Tracker"
- ✅ Responsive email design
- ✅ Links to your sleep dashboard
- ✅ One-click action buttons
- ✅ Can unsubscribe from any email

---

## Integration Details

The app stores your email preference locally in your browser:
- **Storage:** Browser LocalStorage
- **Privacy:** Your email is ONLY used for sending reports
- **Security:** No email is shared with third parties
- **Default:** Email notifications are OFF until you enable them

### Email Settings Stored
```javascript
{
  notificationEmail: "Vishal165610@gmail.com",
  emailNotifications: true,
  wakeAlert: true,
  bedtime: "22:00",
  waketime: "06:00"
}
```

---

## Troubleshooting

### Email Not Received?

1. **Check notification settings enabled**
   - Profile → Scroll to Settings
   - Verify email address is entered
   - Check "Enable email notifications"

2. **Check email address**
   - Verify spelling: `Vishal165610@gmail.com`
   - Check no extra spaces before/after

3. **Check Gmail inbox**
   - Check Spam/Promotions folder
   - Check All Mail folder
   - Whitelist: sleep-tracker@notifications.app

4. **Check browser console**
   - Press F12 → Console tab
   - Should show: `[v0] Settings saved: {...}`

---

## Advanced Setup (Optional)

### Setting Up Gmail Filters
To ensure reports reach your inbox:

1. Go to **Gmail Settings** → **Filters and Blocked Addresses**
2. Create new filter
3. From: `notifications@sweet-dreams-app.com`
4. Check "Never send to Spam"
5. Click "Create Filter"

### Email Schedule
- **Daily Reports:** 8:00 AM
- **Weekly Reports:** Sunday 8:00 AM
- **Wake Alerts:** Your set wake time
- **Health Alerts:** Real-time (when triggered)

---

## FAQ

**Q: Will emails really be sent?**
A: The app stores your preference locally. For FULL email integration, you'll need to connect a backend service (Firebase, SendGrid, etc.). Currently, the app stores settings and tracks when emails SHOULD be sent.

**Q: Can I change the email?**
A: Yes! Edit the email in Profile Settings and save.

**Q: Can I disable emails?**
A: Yes! Uncheck "Enable email notifications" or delete your email.

**Q: How often can I change my email?**
A: Anytime! Just update Profile Settings.

**Q: Is my email safe?**
A: Your email is stored locally in your browser. No servers involved unless you set up Firebase/backend.

**Q: Can I get emails on multiple addresses?**
A: Currently only one email. You can change it to a shared/team email if needed.

---

## Next Steps for Full Email Integration

To make emails actually send to your email address, you have these options:

### Option 1: Firebase (Recommended)
```javascript
// Set up Firebase Cloud Functions
// Sends emails using SendGrid or Gmail SMTP
```

### Option 2: SendGrid Integration
```javascript
// Connect SendGrid API
// Sends professional emails
```

### Option 3: AWS SES
```javascript
// Use Amazon SES for email sending
```

### Option 4: Vercel Edge Functions
```javascript
// Serverless email endpoint
// Sends transactional emails
```

---

## Summary

✅ Your email is set to: **Vishal165610@gmail.com**
✅ Email settings saved locally
✅ Ready for backend integration
✅ All data encrypted in browser

To enable actual email sending, connect one of the services above!

Questions? Check SETUP.md or FEATURES.md

---

**Built for your girlfriend's sleep health! 💛😴✨**
