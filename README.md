# Sweet Dreams - Sleep Tracking Web App 😴

A beautiful, cute, and caring sleep tracking application built with pure HTML, CSS, and JavaScript. Track your daily sleep patterns, get health insights, and share your progress with friends!

## Features ✨

✅ **User Authentication**
- Simple and cute login/signup system
- One-time registration - users stay logged in
- Session persistence using browser storage

✅ **Sleep Timer & Tracking**
- Start/stop sleep sessions anytime
- Set expected sleep duration
- Automatic sleep duration calculation
- Real-time timer display

✅ **Daily Dashboard**
- View today's sleep sessions
- Health status with emoji feedback
- Quick access to all features
- Beautiful, responsive design

✅ **Sleep Records**
- Track multiple sleep sessions per day
- Detailed session history
- Sleep duration and timing
- Historical data storage

✅ **Health Analysis**
- Daily health status (Good/Warning/Alert)
- Sleep quality feedback
- Recommendations based on sleep patterns

✅ **Weekly Reports**
- Comprehensive weekly sleep analysis
- Daily sleep pattern visualization
- Sleep statistics and insights
- Average sleep calculation
- Best and worst night tracking

✅ **Public Profile Sharing**
- Share your sleep profile with friends
- Public profile view with statistics
- Beautiful profile cards
- No authentication required for viewing

✅ **Cute & Caring UI**
- Loving and friendly design
- Soft pink color scheme
- Smooth animations
- Responsive on all devices
- Easy to use interface

## File Structure 📁

```
├── index.html          # Login/Signup page
├── dashboard.html      # Main dashboard with sleep timer
├── profile.html        # User profile and settings
├── weekly.html         # Weekly sleep analysis and reports
├── share.html          # Public profile sharing page
└── README.md          # This file
```

## How to Use 🚀

### 1. **First Time Setup**
   - Open `index.html` in your browser
   - Create a new account or login
   - Your data is automatically saved locally

### 2. **Start Tracking Sleep**
   - Go to Dashboard
   - Click "Start Sleep" button
   - Set expected sleep duration
   - Sleep timer will count up
   - Click "Stop Sleep" when you wake up
   - Sleep time is recorded automatically

### 3. **View Your Profile**
   - Visit the Profile page
   - See your sleep statistics
   - View last 7 days of sleep
   - Manage notification settings
   - Get your public share link

### 4. **Check Weekly Reports**
   - Go to Weekly Report
   - Select a week to view
   - See detailed sleep analysis
   - Get personalized insights
   - View sleep times and patterns

### 5. **Share Your Profile**
   - Copy your public share link from Profile page
   - Send to friends or family
   - They can view your sleep data publicly
   - No login required to view shared profile

## Data Storage 💾

This app uses **Browser LocalStorage** for data persistence:
- User credentials
- Sleep records (date, duration, timing)
- User settings and preferences
- Session data

**Note**: Data is stored locally in your browser. Clearing browser cache will delete all data.

## Firebase Integration (For Production) 🔥

To connect to Firebase for:
- Cloud data sync
- Email notifications
- Secure authentication
- Multi-device support

Update the Firebase config in `index.html`:
```javascript
const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_AUTH_DOMAIN",
    databaseURL: "YOUR_DATABASE_URL",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_STORAGE_BUCKET",
    messagingSenderId: "YOUR_MESSAGING_ID",
    appId: "YOUR_APP_ID"
};
```

## Features Explained 🎯

### Sleep Timer
- Start a new sleep session
- Set expected wake-up time
- Timer runs continuously even if you close/refresh the page
- Automatically resumes when you return
- Records exact sleep duration when you stop

### Health Status
- **Good (😊)**: Average 7.5+ hours/night
- **Warning (😐)**: Average 6-7.5 hours/night  
- **Alert (😴)**: Average less than 6 hours/night

### Weekly Analysis
- Daily sleep chart with visual bars
- Statistics: total, average, best, worst
- Sleep timing analysis
- Personal insights and recommendations
- Consistency tracking

### Share Profile
- Unique URL generated for each user
- Share with friends/family
- View public sleep statistics
- No personal data exposed
- Public profile shows: name, email, stats, last 7 days

## Customization 🎨

### Colors
Edit the color values in CSS:
```css
/* Primary Pink */
#d946a6   /* Main brand color */
#e91e63   /* Accent color */

/* Backgrounds */
#fce4ec   /* Light pink gradient start */
#f3e5f5   /* Light purple gradient end */

/* Neutral */
#333      /* Dark text */
#666      /* Gray text */
#999      /* Light gray */
#fff      /* White */
```

### Text & Branding
- Change "Sweet Dreams" to your app name
- Update emoji (currently 😴)
- Modify UI text messages
- Adjust welcome messages

### UI Elements
- Button styles in `.btn` classes
- Card styling in `.card` class
- Animations in `@keyframes`
- Responsive breakpoints at `@media` queries

## Browser Compatibility 🌐

✅ Chrome/Edge (Latest)
✅ Firefox (Latest)
✅ Safari (Latest)
✅ Mobile browsers (iOS Safari, Chrome Mobile)

## Tips for Best Experience 💡

1. **Regular Tracking**: Use daily for consistent data
2. **Consistent Bedtime**: Try to sleep at similar times
3. **Full Duration**: Record entire sleep sessions
4. **Share Progress**: Show friends to stay motivated
5. **Check Reports**: Review weekly analysis for insights

## Privacy & Data 🔒

- All data stored locally in your browser
- No data sent to any server (unless Firebase integrated)
- No tracking or analytics
- You control all your sleep data
- Public profile only shows what you set

## Future Enhancements 🚀

- Push notifications for sleep reminders
- Email alerts when sleep is insufficient
- Wearable device integration
- Sleep quality scoring
- Smart wake-up recommendations
- Sleep goal setting
- Medication/caffeine tracking
- Moon phase correlation
- PDF report generation
- Data export functionality

## Support 💬

For issues or suggestions:
1. Check browser console for errors (F12)
2. Clear browser cache and try again
3. Try in a different browser
4. Ensure JavaScript is enabled

## Made with ❤️

Sweet Dreams is built with love for your girlfriend and anyone who wants to track their sleep journey!

---

**Happy Sleeping! 😴✨**
