# EmailJS Complete Setup Guide

## Step 1: Create EmailJS Account

1. Go to [https://www.emailjs.com](https://www.emailjs.com)
2. Click "Sign Up Free"
3. Create account with email and password
4. Verify email

## Step 2: Get Your USER_ID

1. After login, go to Dashboard
2. You'll see "User ID" in the top left
3. Copy this ID

## Step 3: Create Email Service

1. Go to "Email Services" from left menu
2. Click "Create New Service"
3. Select "Gmail" (recommended)
4. Enter your Gmail email: **Vishal165610@gmail.com**
5. Generate app password:
   - Go to [Google Account Security](https://myaccount.google.com/security)
   - Enable 2-Factor Authentication (if not already)
   - Go to "App passwords"
   - Select "Mail" and "Windows Computer"
   - Copy the generated password
6. Paste the app password in EmailJS
7. Click "Connect Account"
8. Copy your **Service ID** (looks like: `service_xxxxx`)

## Step 4: Create Sleep Start Email Template

1. Go to "Email Templates" from left menu
2. Click "Create New Template"
3. Name: `Sleep_Start_Template`
4. Email subject: `Sleep Tracking Alert - Session Started`
5. Paste this HTML template:

```html
<!DOCTYPE html>
<html>
<head>
    <style>
        body { font-family: 'Arial', sans-serif; background: #f5f5f5; }
        .container { max-width: 600px; margin: 20px auto; background: white; padding: 30px; border-radius: 10px; }
        .header { background: linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%); color: #0f0f0f; padding: 20px; border-radius: 8px; text-align: center; }
        .content { padding: 20px 0; }
        .info-box { background: #f9f9f9; padding: 15px; border-left: 4px solid #fbbf24; margin: 15px 0; }
        .button { display: inline-block; background: #fbbf24; color: #0f0f0f; padding: 12px 24px; text-decoration: none; border-radius: 5px; font-weight: bold; margin: 10px 0; }
        .footer { color: #666; font-size: 12px; text-align: center; margin-top: 30px; border-top: 1px solid #ddd; padding-top: 20px; }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>😴 Sleep Session Started</h1>
        </div>
        
        <div class="content">
            <p>Hi {{to_name}},</p>
            
            <p><strong>{{user_name}}</strong> started a sleep session.</p>
            
            <div class="info-box">
                <p><strong>Sleep Start Time:</strong> {{sleep_start_time}}</p>
                <p><strong>Date:</strong> {{sleep_date}}</p>
                <p><strong>Time:</strong> {{sleep_time_formatted}}</p>
            </div>
            
            <p>The sleep tracking system is now monitoring the session in real-time.</p>
            
            <p style="color: #666; font-size: 14px;">
                ✓ Timer is running<br>
                ✓ Data is being tracked<br>
                ✓ You will receive an alert when the session ends
            </p>
        </div>
        
        <div class="footer">
            <p>Sleep Tracker | Automatic Email Notification</p>
            <p style="color: #999;">Do not reply to this email</p>
        </div>
    </div>
</body>
</html>
```

6. Click "Save"
7. Copy the **Template ID** (looks like: `template_xxxxx`)

## Step 5: Create Sleep End Email Template

1. Click "Create New Template" again
2. Name: `Sleep_End_Template`
3. Email subject: `Sleep Tracking Report - Session Ended`
4. Paste this HTML template:

```html
<!DOCTYPE html>
<html>
<head>
    <style>
        body { font-family: 'Arial', sans-serif; background: #f5f5f5; }
        .container { max-width: 600px; margin: 20px auto; background: white; padding: 30px; border-radius: 10px; }
        .header { background: linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%); color: #0f0f0f; padding: 20px; border-radius: 8px; text-align: center; }
        .content { padding: 20px 0; }
        .stats { display: grid; grid-template-columns: 1fr 1fr; gap: 15px; margin: 20px 0; }
        .stat-box { background: #f9f9f9; padding: 15px; border-radius: 8px; text-align: center; border-left: 4px solid #fbbf24; }
        .stat-value { font-size: 28px; font-weight: bold; color: #fbbf24; }
        .stat-label { color: #666; font-size: 12px; margin-top: 5px; }
        .status-good { color: #22c55e; }
        .status-fair { color: #f59e0b; }
        .status-poor { color: #ef4444; }
        .footer { color: #666; font-size: 12px; text-align: center; margin-top: 30px; border-top: 1px solid #ddd; padding-top: 20px; }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>📊 Sleep Session Summary</h1>
        </div>
        
        <div class="content">
            <p>Hi {{to_name}},</p>
            
            <p><strong>{{user_name}}</strong> completed a sleep session.</p>
            
            <div class="stats">
                <div class="stat-box">
                    <div class="stat-value">{{sleep_duration}}</div>
                    <div class="stat-label">Duration</div>
                </div>
                <div class="stat-box">
                    <div class="stat-value {{health_status}}">{{health_status}}</div>
                    <div class="stat-label">Health Status</div>
                </div>
            </div>
            
            <div style="background: #f9f9f9; padding: 15px; border-radius: 8px; margin: 15px 0;">
                <p><strong>Session Details:</strong></p>
                <p>Started: {{sleep_start_time}}</p>
                <p>Ended: {{sleep_end_time}}</p>
                <p>Date: {{sleep_date}}</p>
            </div>
            
            <p>Health recommendations based on your sleep:</p>
            <ul>
                <li>Sleep duration: {{sleep_duration}}</li>
                <li>Health status: {{health_status}}</li>
                <li>Consistency: Track regularly for better insights</li>
            </ul>
        </div>
        
        <div class="footer">
            <p>Sleep Tracker | Automatic Email Report</p>
            <p style="color: #999;">Do not reply to this email</p>
        </div>
    </div>
</body>
</html>
```

5. Click "Save"
6. Copy the **Template ID** (looks like: `template_xxxxx`)

## Step 6: Update Your App Configuration

Open `emailjs-config.js` in your project and update these lines:

```javascript
const EMAILJS_CONFIG = {
    USER_ID: 'YOUR_EMAILJS_USER_ID',        // Paste your User ID here
    SERVICE_ID: 'YOUR_SERVICE_ID',           // Paste your Service ID here
    TEMPLATE_START_ID: 'YOUR_TEMPLATE_START_ID',  // Paste Sleep Start Template ID
    TEMPLATE_END_ID: 'YOUR_TEMPLATE_END_ID',      // Paste Sleep End Template ID
    TO_EMAIL: 'Vishal165610@gmail.com',     // Your email
    FROM_NAME: 'Sleep Tracker Bot'
};
```

Example filled in:
```javascript
const EMAILJS_CONFIG = {
    USER_ID: 'abc123xyz789',
    SERVICE_ID: 'service_abc123xyz',
    TEMPLATE_START_ID: 'template_start_123',
    TEMPLATE_END_ID: 'template_end_123',
    TO_EMAIL: 'Vishal165610@gmail.com',
    FROM_NAME: 'Sleep Tracker Bot'
};
```

## Step 7: Test It!

1. Open your app
2. Go to Dashboard
3. Enter sleep hours (e.g., 8)
4. Click "Start Sleep"
5. Check your email - you should receive an alert!
6. Wait 10 seconds
7. Click "Stop Sleep"
8. Check your email again - you should receive a summary!

## How It Works

- **When user clicks "Start Sleep"**: Email automatically sent to Vishal165610@gmail.com
- **When user clicks "Stop Sleep"**: Email automatically sent to Vishal165610@gmail.com
- **Email Queue**: If EmailJS fails, emails are queued and sent later
- **Offline Support**: App continues to work offline, emails sent when back online

## Variable Reference

These variables are available in your email templates:

```
{{to_email}}              - Recipient email
{{to_name}}               - Recipient name
{{user_name}}             - User's name
{{sleep_start_time}}      - Start time (formatted)
{{sleep_end_time}}        - End time (formatted)
{{sleep_duration}}        - Duration in hours
{{sleep_duration_numeric}} - Duration as number
{{sleep_date}}            - Date (formatted)
{{sleep_time_formatted}}  - Time only (formatted)
{{health_status}}         - Health status (Excellent/Good/Fair/Needs Improvement)
{{notification_type}}     - Type (Sleep Session Started/Ended)
{{message}}               - Alert message
```

## Troubleshooting

**Emails not sending:**
1. Check that User ID is correct in `emailjs-config.js`
2. Check Service ID is correct
3. Check Template IDs are correct
4. Check Gmail password is generated correctly
5. Check that to_email is correct

**Template variables not showing:**
1. Make sure variable names match exactly (case-sensitive)
2. Use `{{variable_name}}` format only

**Still having issues:**
- Check browser console for errors (F12)
- Check EmailJS dashboard for activity logs
- Verify Gmail app password is correct

## Free Tier Limits

EmailJS free account includes:
- 200 emails per month
- Unlimited templates
- No credit card required
- Perfect for personal use!

## Security Notes

- Your User ID, Service ID, and Template IDs are visible in your app
- This is normal and expected for frontend email services
- Gmail password is never exposed - only token is used
- All data stored locally in your browser

That's it! Your app now sends automatic email alerts! 🎉
