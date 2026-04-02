// Email Alert Service for Sleep Tracking
// Sends automatic email alerts when sleep timer starts and ends
// Email: Vishal165610@gmail.com

const EMAIL_CONFIG = {
    recipientEmail: 'Vishal165610@gmail.com',
    senderName: 'Sweet Dreams Sleep Tracker',
    senderEmail: 'noreply@sweetdreams.app'
};

// Send email via EmailJS (free service - requires setup)
// OR via your own backend
// For now, this logs and prepares data for integration

class EmailAlertService {
    constructor() {
        this.isEnabled = true;
    }

    async sendSleepStartAlert(userData, sleepData) {
        if (!this.isEnabled) return;
        
        const emailData = {
            to: EMAIL_CONFIG.recipientEmail,
            subject: '💤 Sleep Tracking Started - ' + new Date().toLocaleTimeString(),
            body: this.generateSleepStartEmail(userData, sleepData),
            type: 'SLEEP_START'
        };

        console.log('[v0] Sleep Start Alert Queued:', emailData);
        
        // Queue for sending
        this.queueEmail(emailData);
        
        // Try to send immediately if backend available
        await this.sendEmail(emailData);
    }

    async sendSleepEndAlert(userData, sleepData, duration) {
        if (!this.isEnabled) return;
        
        const emailData = {
            to: EMAIL_CONFIG.recipientEmail,
            subject: '✨ Sleep Session Ended - ' + duration + ' hours',
            body: this.generateSleepEndEmail(userData, sleepData, duration),
            type: 'SLEEP_END'
        };

        console.log('[v0] Sleep End Alert Queued:', emailData);
        
        // Queue for sending
        this.queueEmail(emailData);
        
        // Try to send immediately if backend available
        await this.sendEmail(emailData);
    }

    generateSleepStartEmail(userData, sleepData) {
        const now = new Date();
        return `
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <style>
        body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto; background: #f5f5f5; margin: 0; padding: 20px; }
        .container { background: white; border-radius: 12px; padding: 30px; max-width: 600px; margin: 0 auto; box-shadow: 0 4px 12px rgba(0,0,0,0.1); }
        .header { text-align: center; border-bottom: 2px solid #fbbf24; padding-bottom: 20px; margin-bottom: 20px; }
        .header h1 { color: #fbbf24; margin: 0; font-size: 28px; }
        .content { color: #333; line-height: 1.6; }
        .status { background: rgba(251, 191, 36, 0.1); border-left: 4px solid #fbbf24; padding: 15px; border-radius: 4px; margin: 20px 0; }
        .status-icon { font-size: 24px; margin-right: 10px; }
        .info-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 15px; margin: 20px 0; }
        .info-item { background: #f9f9f9; padding: 12px; border-radius: 8px; }
        .info-label { font-size: 12px; color: #999; text-transform: uppercase; margin-bottom: 5px; }
        .info-value { font-size: 18px; font-weight: bold; color: #333; }
        .footer { text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee; color: #999; font-size: 12px; }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>💤 Sleep Tracking Started</h1>
        </div>
        <div class="content">
            <div class="status">
                <span class="status-icon">🟢</span>
                <strong>Active Sleep Session</strong>
            </div>
            <p>Sleep tracking is now active and recording.</p>
            <div class="info-grid">
                <div class="info-item">
                    <div class="info-label">Started At</div>
                    <div class="info-value">${now.toLocaleTimeString()}</div>
                </div>
                <div class="info-item">
                    <div class="info-label">Date</div>
                    <div class="info-value">${now.toLocaleDateString()}</div>
                </div>
            </div>
            <p style="margin-top: 20px; color: #666; font-size: 14px;">You will receive another notification when the sleep session ends.</p>
        </div>
        <div class="footer">
            <p>Sweet Dreams Sleep Tracker | Automatic Notification</p>
            <p>This is an automated message, please do not reply.</p>
        </div>
    </div>
</body>
</html>
        `;
    }

    generateSleepEndEmail(userData, sleepData, duration) {
        const now = new Date();
        const durationHours = parseFloat(duration).toFixed(2);
        
        let healthStatus = '✅ Excellent';
        let statusColor = '#22c55e';
        
        if (durationHours < 5) {
            healthStatus = '⚠️ Low Sleep';
            statusColor = '#ef4444';
        } else if (durationHours < 7) {
            healthStatus = '⚠️ Below Target';
            statusColor = '#f59e0b';
        } else if (durationHours >= 9) {
            healthStatus = '💤 Extended Sleep';
            statusColor = '#0ea5e9';
        }

        return `
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <style>
        body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto; background: #f5f5f5; margin: 0; padding: 20px; }
        .container { background: white; border-radius: 12px; padding: 30px; max-width: 600px; margin: 0 auto; box-shadow: 0 4px 12px rgba(0,0,0,0.1); }
        .header { text-align: center; border-bottom: 2px solid #fbbf24; padding-bottom: 20px; margin-bottom: 20px; }
        .header h1 { color: #fbbf24; margin: 0; font-size: 28px; }
        .content { color: #333; line-height: 1.6; }
        .status { background: rgba(251, 191, 36, 0.1); border-left: 4px solid #fbbf24; padding: 15px; border-radius: 4px; margin: 20px 0; }
        .status-icon { font-size: 24px; margin-right: 10px; }
        .health-box { background: linear-gradient(135deg, rgba(251,191,36,0.1) 0%, rgba(245,158,11,0.05) 100%); border: 2px solid #fbbf24; padding: 20px; border-radius: 8px; text-align: center; margin: 20px 0; }
        .health-title { font-size: 12px; color: #666; text-transform: uppercase; margin-bottom: 10px; }
        .health-value { font-size: 36px; font-weight: bold; color: #fbbf24; }
        .info-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 15px; margin: 20px 0; }
        .info-item { background: #f9f9f9; padding: 12px; border-radius: 8px; }
        .info-label { font-size: 12px; color: #999; text-transform: uppercase; margin-bottom: 5px; }
        .info-value { font-size: 18px; font-weight: bold; color: #333; }
        .footer { text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee; color: #999; font-size: 12px; }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>✨ Sleep Session Complete</h1>
        </div>
        <div class="content">
            <div class="status">
                <span class="status-icon">✓</span>
                <strong>Sleep Session Recorded</strong>
            </div>
            
            <div class="health-box">
                <div class="health-title">Total Sleep Duration</div>
                <div class="health-value">${durationHours} hours</div>
            </div>

            <div class="info-grid">
                <div class="info-item">
                    <div class="info-label">Ended At</div>
                    <div class="info-value">${now.toLocaleTimeString()}</div>
                </div>
                <div class="info-item">
                    <div class="info-label">Date</div>
                    <div class="info-value">${now.toLocaleDateString()}</div>
                </div>
            </div>

            <div style="background: rgba(251, 191, 36, 0.05); padding: 15px; border-radius: 8px; margin: 20px 0;">
                <p><strong>📊 Health Status:</strong> ${healthStatus}</p>
                <p style="color: #666; font-size: 14px; margin: 10px 0 0 0;">Target: 7-8 hours per night for optimal health.</p>
            </div>
        </div>
        <div class="footer">
            <p>Sweet Dreams Sleep Tracker | Automatic Notification</p>
            <p>This is an automated message, please do not reply.</p>
        </div>
    </div>
</body>
</html>
        `;
    }

    async sendEmail(emailData) {
        try {
            // Method 1: Try EmailJS (if configured)
            if (typeof emailjs !== 'undefined') {
                await emailjs.send('service_id', 'template_id', {
                    to_email: emailData.to,
                    subject: emailData.subject,
                    message: emailData.body
                });
                console.log('[v0] Email sent via EmailJS');
                return true;
            }
        } catch (error) {
            console.log('[v0] EmailJS not configured');
        }

        try {
            // Method 2: Try custom backend
            const response = await fetch('/api/send-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(emailData)
            });
            
            if (response.ok) {
                console.log('[v0] Email sent via backend');
                return true;
            }
        } catch (error) {
            console.log('[v0] Backend not available:', error.message);
        }

        return false;
    }

    queueEmail(emailData) {
        let queue = JSON.parse(localStorage.getItem('emailQueue') || '[]');
        queue.push({
            ...emailData,
            timestamp: new Date().toISOString(),
            retries: 0
        });
        localStorage.setItem('emailQueue', JSON.stringify(queue));
    }

    disable() {
        this.isEnabled = false;
    }

    enable() {
        this.isEnabled = true;
    }
}

// Initialize service
const emailAlerts = new EmailAlertService();
