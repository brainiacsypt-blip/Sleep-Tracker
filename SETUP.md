# Sweet Dreams Sleep Tracker - Complete Setup Guide

## 🚀 Quick Start

1. **Open `index.html` in your browser**
   - No server setup required
   - Works completely offline
   - All data stored locally in your browser

2. **Sign up once** with your details
   - Email and password
   - Name for personalization
   - Account stays active forever

3. **Start tracking sleep!**
   - Go to Dashboard
   - Set expected sleep hours
   - Click "Start Sleep" before bed
   - Click "Stop Sleep" when waking up
   - Check your stats and progress

## 📱 Features Overview

### Dashboard (`dashboard.html`)
- **Live Sleep Timer**: Real-time countdown showing exactly how long she's sleeping
- **Live Notification**: Floating notification appears when timer starts, showing live timer
- **Today's Records**: View all sleep sessions from today
- **Health Status**: Automatic health assessment based on sleep
- **Sleep Records**: All sleep sessions displayed in real-time
- **Responsive Design**: Works perfectly on phones, tablets, and computers

### Profile (`profile.html`)
- **Personal Stats**: Total sleep, average per night, days tracked
- **7-Day Chart**: Visual representation of sleep patterns
- **Share Profile**: Generate and copy a shareable link
- **Settings**: Email notifications and bedtime preferences
- **Dark Theme**: Easy on the eyes, perfect for evening use

### Weekly Report (`weekly.html`)
- **Week Selector**: Choose different weeks to analyze
- **Sleep Statistics**: Daily breakdown with visual bars
- **Health Insights**: AI-powered analysis of sleep patterns
- **Consistency Tracking**: See improvement over time

### Public Sharing (`share.html`)
- **View Anyone's Profile**: Share sleep progress with family
- **No Login Required**: Friends can view without account
- **Beautiful Display**: Stats and charts in a shareable format

## 🎨 Theme Details

### Color System
**Dark Mode (Night-friendly)**
- Background: Deep black (`#0f0f0f`)
- Cards: Dark gray (`#1a1a1a`, `#242424`)
- Primary: Bright Yellow (`#fbbf24`)
- Accent: Gold (`#f59e0b`)
- Text: White (`#fff`), Light Gray (`#ddd`)
- Subtle Gray (`#999`, `#666`)

### Visual Effects
- **Glowing Text**: Yellow titles with subtle glow
- **Pulse Animation**: Timer pulses with soft glow
- **Live Notification**: Slides in from top-right
- **Smooth Transitions**: All interactions are smooth
- **Dark Shadows**: Elegant depth effects

## 💾 Data Storage

All data is stored in **browser localStorage**:
- `currentUser` - Current logged in user
- `sleepRecords_{uid}` - All sleep records
- `sleepTimer_{uid}` - Active timer state
- `settings_{uid}` - User preferences

**Data persists across browser sessions** - No server needed!

## 🔐 Security Notes

- Passwords are stored locally (for demo purposes)
- For production: Use proper backend authentication
- Consider adding password hashing (bcrypt)
- Implement secure API endpoints

## 📋 How It Works

### Login/Signup Flow
1. User signs up with email, name, and password
2. Account is stored in localStorage
3. User stays logged in automatically
4. Logout button clears session

### Sleep Tracking Flow
1. User sets expected sleep duration
2. Clicks "Start Sleep"
3. Timer begins, live notification shows
4. App persists timer state (survives browser refresh)
5. User clicks "Stop Sleep"
6. Sleep session is saved to records
7. Health status updates automatically

### Data Persistence
- Timer state saved every second
- Sleep records saved immediately
- Settings saved on change
- All data survives browser restarts

## 🎯 Customization

### Change Colors
Edit the CSS in any HTML file:
```css
/* Primary Yellow */
color: #fbbf24;

/* Dark Background */
background: #0f0f0f;

/* Gold Accent */
color: #f59e0b;
```

### Change App Name
Replace "Sweet Dreams" with your custom name in all files

### Add Firebase
Update the Firebase config in `index.html` to enable:
- Cloud backup
- Email notifications
- Cross-device sync

## 🐛 Troubleshooting

**Timer not showing?**
- Check browser console (F12)
- Ensure localStorage is enabled
- Try clearing browser cache

**Data not saving?**
- Verify localStorage is not full
- Check if private/incognito mode is enabled
- Try different browser

**Styling looks off?**
- Clear browser cache (Ctrl+Shift+Delete)
- Refresh page (Ctrl+R)
- Check screen size (might be very small)

## 📞 Support

For issues or questions:
1. Check browser console for errors
2. Verify all HTML files are in same directory
3. Try opening in different browser
4. Ensure JavaScript is enabled

## 🎉 Ready to Use!

The app is **100% ready** - just open `index.html` and start tracking sleep!

### What You Get:
✅ Beautiful dark theme with yellow accents
✅ Real-time live sleep timer with notification
✅ One-time login (stays logged in forever)
✅ Fully responsive on all devices
✅ Smooth animations and transitions
✅ Complete sleep analytics
✅ Shareable profiles
✅ No server or setup required

---

**Enjoy tracking sleep with style! 😴✨**
