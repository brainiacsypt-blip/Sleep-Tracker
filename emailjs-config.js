// EmailJS Configuration & Integration
// Complete Email Service for Sleep Tracking

// ============================================
// EMAILJS SETUP - Add your credentials below
// ============================================

// Step 1: Go to https://www.emailjs.com
// Step 2: Create a free account
// Step 3: Copy your USER_ID from Dashboard
// Step 4: Create an Email Service (Gmail recommended)
// Step 5: Create Email Templates
// Step 6: Update the values below

const EMAILJS_CONFIG = {
    USER_ID: 'SCAFSmqyFb38NmhFv', // Get from EmailJS Dashboard
    SERVICE_ID: 'service_x3zp63v',   // Get from EmailJS Email Service
    TEMPLATE_START_ID: 'template_965u2j7', // Template for sleep start
    TEMPLATE_END_ID: 'template_6a2ane8',     // Template for sleep end
    TO_EMAIL: 'Vishal165610@gmail.com',
    FROM_NAME: 'Sleep Tracker Bot'
};
// ============================================
// INITIALIZE EMAILJS
// ============================================

if (typeof emailjs !== 'undefined') {
    emailjs.init(EMAILJS_CONFIG.USER_ID);
}

// ============================================
// EMAIL SEND FUNCTION - Sleep Start
// ============================================

async function sendSleepStartEmail(userName, startTime) {
    try {
        if (!EMAILJS_CONFIG.USER_ID || EMAILJS_CONFIG.USER_ID === 'YOUR_EMAILJS_USER_ID') {
            console.log('[v0] EmailJS not configured. Email queued locally.');
            queueEmail('START', userName, startTime);
            return;
        }

        const templateParams = {
            to_email: EMAILJS_CONFIG.TO_EMAIL,
            to_name: 'Admin',
            user_name: userName,
            sleep_start_time: new Date(startTime).toLocaleString(),
            sleep_date: new Date(startTime).toLocaleDateString(),
            sleep_time_formatted: new Date(startTime).toLocaleTimeString(),
            notification_type: 'Sleep Session Started',
            message: `${userName} started sleeping at ${new Date(startTime).toLocaleTimeString()}`
        };

        const response = await emailjs.send(
            EMAILJS_CONFIG.SERVICE_ID,
            EMAILJS_CONFIG.TEMPLATE_START_ID,
            templateParams
        );

        console.log('[v0] Sleep start email sent successfully:', response);
        return { success: true, messageId: response.status };

    } catch (error) {
        console.error('[v0] Error sending sleep start email:', error);
        queueEmail('START', userName, startTime);
        return { success: false, error: error.message };
    }
}

// ============================================
// EMAIL SEND FUNCTION - Sleep End
// ============================================

async function sendSleepEndEmail(userName, endTime, duration, startTime) {
    try {
        if (!EMAILJS_CONFIG.USER_ID || EMAILJS_CONFIG.USER_ID === 'YOUR_EMAILJS_USER_ID') {
            console.log('[v0] EmailJS not configured. Email queued locally.');
            queueEmail('END', userName, endTime, duration, startTime);
            return;
        }

        const templateParams = {
            to_email: EMAILJS_CONFIG.TO_EMAIL,
            to_name: 'Admin',
            user_name: userName,
            sleep_start_time: new Date(startTime).toLocaleString(),
            sleep_end_time: new Date(endTime).toLocaleString(),
            sleep_duration: `${duration} hours`,
            sleep_duration_numeric: duration,
            sleep_date: new Date(endTime).toLocaleDateString(),
            notification_type: 'Sleep Session Ended',
            message: `${userName} stopped sleeping. Total sleep: ${duration} hours`,
            health_status: getHealthStatus(duration)
        };

        const response = await emailjs.send(
            EMAILJS_CONFIG.SERVICE_ID,
            EMAILJS_CONFIG.TEMPLATE_END_ID,
            templateParams
        );

        console.log('[v0] Sleep end email sent successfully:', response);
        return { success: true, messageId: response.status };

    } catch (error) {
        console.error('[v0] Error sending sleep end email:', error);
        queueEmail('END', userName, endTime, duration, startTime);
        return { success: false, error: error.message };
    }
}

// ============================================
// EMAIL QUEUE - For offline/config issues
// ============================================

function queueEmail(type, userName, time1, duration = null, time2 = null) {
    const queue = JSON.parse(localStorage.getItem('emailQueue') || '[]');
    const emailData = {
        type: type, // 'START' or 'END'
        userName: userName,
        timestamp: new Date().toISOString(),
        startTime: type === 'START' ? time1 : time2,
        endTime: type === 'END' ? time1 : null,
        duration: duration,
        sent: false
    };
    queue.push(emailData);
    localStorage.setItem('emailQueue', JSON.stringify(queue));
    console.log('[v0] Email queued for later:', emailData);
}

// Process queued emails when connection is restored
async function processEmailQueue() {
    const queue = JSON.parse(localStorage.getItem('emailQueue') || '[]');
    const unsent = queue.filter(email => !email.sent);

    if (unsent.length === 0) return;

    for (const email of unsent) {
        try {
            if (email.type === 'START') {
                await sendSleepStartEmail(email.userName, email.startTime);
            } else if (email.type === 'END') {
                await sendSleepEndEmail(
                    email.userName,
                    email.endTime,
                    email.duration,
                    email.startTime
                );
            }
            email.sent = true;
        } catch (error) {
            console.error('[v0] Error processing queued email:', error);
        }
    }

    localStorage.setItem('emailQueue', JSON.stringify(queue));
    console.log('[v0] Email queue processed');
}

// ============================================
// HELPER FUNCTION - Health Status
// ============================================

function getHealthStatus(duration) {
    if (duration >= 7 && duration <= 9) return 'Excellent';
    if (duration >= 6 && duration < 7) return 'Good';
    if (duration >= 5 && duration < 6) return 'Fair';
    return 'Needs Improvement';
}

// ============================================
// SETUP - Call on page load
// ============================================

function initializeEmailService() {
    // Load EmailJS script dynamically
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js';
    script.async = true;
    script.onload = () => {
        if (EMAILJS_CONFIG.USER_ID !== 'YOUR_EMAILJS_USER_ID') {
            emailjs.init(EMAILJS_CONFIG.USER_ID);
            console.log('[v0] EmailJS initialized successfully');
            processEmailQueue(); // Send any queued emails
        }
    };
    document.head.appendChild(script);
}

// Auto-initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    console.log('[v0] Email service initializing...');
    initializeEmailService();
});

// ============================================
// EXPORT FOR USE
// ============================================

window.sleepEmailService = {
    sendSleepStartEmail,
    sendSleepEndEmail,
    initializeEmailService,
    processEmailQueue,
    getHealthStatus
};
