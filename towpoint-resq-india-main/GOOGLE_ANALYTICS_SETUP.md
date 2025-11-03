# 📊 Google Analytics 4 Setup Guide - TOWPOINT

## Why Google Analytics?

Track:
- **Visitors**: How many people visit your site
- **Traffic Sources**: Where they come from (Google, social media, direct)
- **User Behavior**: Which pages they visit, how long they stay
- **Conversions**: Phone clicks, form submissions
- **Demographics**: Age, gender, location of visitors

---

## Step-by-Step Setup

### 1. Create Google Analytics Account

1. Go to: https://analytics.google.com
2. Click **"Start measuring"**
3. **Account name**: TOWPOINT
4. Click **Next**

### 2. Create Property

1. **Property name**: TOWPOINT Website
2. **Reporting time zone**: (GMT+05:30) India Standard Time
3. **Currency**: Indian Rupee (₹)
4. Click **Next**

### 3. Business Information

1. **Industry**: Automotive
2. **Business size**: Small (1-10 employees)
3. **Usage**: 
   - ✓ Examine user behavior
   - ✓ Measure advertising ROI
4. Click **Create**
5. Accept Terms of Service

### 4. Set Up Data Stream

1. Select **Web**
2. **Website URL**: https://towpoint.in
3. **Stream name**: TOWPOINT Main Website
4. Click **Create stream**

### 5. Copy Measurement ID

You'll see something like: `G-XXXXXXXXXX`

**Copy this ID!**

---

## Installation in Your Website

### Method 1: Add to index.html (Recommended)

Open `index.html` and add this code **before the closing `</head>` tag** (around line 178):

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  
  gtag('config', 'G-XXXXXXXXXX', {
    'send_page_view': true,
    'cookie_flags': 'SameSite=None;Secure'
  });
</script>
```

**Replace `G-XXXXXXXXXX` with your actual Measurement ID!**

---

## Enhanced Tracking Setup

### Track Phone Number Clicks

Add this code after the Google Analytics script:

```html
<script>
  // Track phone number clicks
  document.addEventListener('DOMContentLoaded', function() {
    const phoneLinks = document.querySelectorAll('a[href^="tel:"]');
    
    phoneLinks.forEach(function(link) {
      link.addEventListener('click', function() {
        gtag('event', 'phone_call_click', {
          'phone_number': this.href.replace('tel:', ''),
          'event_category': 'Contact',
          'event_label': 'Phone Call'
        });
      });
    });
  });
  
  // Track WhatsApp clicks
  document.addEventListener('DOMContentLoaded', function() {
    const whatsappLinks = document.querySelectorAll('a[href*="wa.me"], a[href*="whatsapp"]');
    
    whatsappLinks.forEach(function(link) {
      link.addEventListener('click', function() {
        gtag('event', 'whatsapp_click', {
          'event_category': 'Contact',
          'event_label': 'WhatsApp Message'
        });
      });
    });
  });
</script>
```

---

## Configure Important Events

### 1. Set Up Conversions

In Google Analytics dashboard:

1. Go to **Admin** (bottom left gear icon)
2. Under **Property**, click **Events**
3. Click **Create event**
4. Create these events as conversions:

**Event 1: Phone Call Click**
- Event name: `phone_call_click`
- Mark as conversion: ✓

**Event 2: WhatsApp Click**
- Event name: `whatsapp_click`
- Mark as conversion: ✓

**Event 3: Form Submission**
- Event name: `form_submit`
- Mark as conversion: ✓

### 2. Link to Google Search Console

1. In Analytics **Admin** → **Property Settings**
2. Scroll to **Search Console links**
3. Click **Link**
4. Select your Search Console property
5. Click **Submit**

**Benefits:** See which Google searches bring traffic!

---

## Key Metrics Dashboard

### Create Custom Dashboard

1. Go to **Explore** in left menu
2. Click **Blank** template
3. Add these widgets:

**Widget 1: Traffic Overview**
- Metric: Users, Sessions, Page Views
- Date range: Last 30 days

**Widget 2: Traffic Sources**
- Dimension: Session source/medium
- Metric: Users
- Chart type: Pie chart

**Widget 3: Top Pages**
- Dimension: Page path
- Metric: Page views
- Chart type: Table

**Widget 4: Conversions**
- Metric: Phone clicks, WhatsApp clicks
- Chart type: Line chart

**Widget 5: Location**
- Dimension: City
- Metric: Users
- Chart type: Bar chart

---

## Weekly Reporting Checklist

### Every Monday Morning:

1. **Check Traffic**
   - Go to **Reports** → **Acquisition** → **Traffic acquisition**
   - Compare this week vs last week
   - Goal: Increase 10% week over week

2. **Review Conversions**
   - Go to **Reports** → **Engagement** → **Conversions**
   - Count phone clicks + WhatsApp clicks
   - Goal: Minimum 10 conversions per week

3. **Analyze Top Pages**
   - Go to **Reports** → **Engagement** → **Pages and screens**
   - See which pages get most views
   - Optimize low-performing pages

4. **Check User Behavior**
   - Average engagement time (Goal: 2+ minutes)
   - Bounce rate (Goal: <60%)
   - Pages per session (Goal: 2+ pages)

5. **Review Cities**
   - Go to **Reports** → **User** → **Demographics** → **Cities**
   - Ensure traffic from target Gujarat cities
   - Focus marketing on top-performing cities

---

## Set Up Weekly Email Reports

1. Go to any report
2. Click **Share** icon (top right)
3. Select **Schedule email**
4. Configure:
   - **Frequency**: Weekly (every Monday)
   - **Email**: Your email
   - **Format**: PDF
   - **Reports**: Traffic overview, Conversions
5. Click **Schedule**

**Never miss your metrics!**

---

## Advanced: Google Tag Manager (Optional)

For easier tracking management:

### 1. Create GTM Account

1. Go to: https://tagmanager.google.com
2. Create account: TOWPOINT
3. Container name: towpoint.in
4. Target platform: Web
5. Click **Create**

### 2. Install GTM

Replace Google Analytics script in `index.html` with:

```html
<!-- Google Tag Manager -->
<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-XXXXXXX');</script>
<!-- End Google Tag Manager -->
```

Add after opening `<body>` tag:

```html
<!-- Google Tag Manager (noscript) -->
<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-XXXXXXX"
height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
<!-- End Google Tag Manager (noscript) -->
```

**Replace GTM-XXXXXXX with your GTM ID!**

### 3. Add GA4 via GTM

1. In GTM, click **Add a new tag**
2. Tag Configuration → **Google Analytics: GA4 Configuration**
3. Measurement ID: Your G-XXXXXXXXXX
4. Triggering: **All Pages**
5. Click **Save**
6. Click **Submit** to publish

---

## Testing Your Setup

### 1. Real-Time Reports

1. Go to **Reports** → **Realtime**
2. Open your website in another tab
3. You should see yourself in real-time report
4. Click around, check if page views tracked
5. Click phone number, check if event fires

### 2. Google Analytics Debugger

Install Chrome extension:
- https://chrome.google.com/webstore/detail/google-analytics-debugger

Enable it and check console for tracking hits.

### 3. Tag Assistant

Use Google Tag Assistant:
- https://tagassistant.google.com/

Connect to your site and verify tracking works.

---

## Privacy & GDPR Compliance

### Add Privacy Policy Update

In your Privacy Policy page, add:

```
Analytics & Cookies

We use Google Analytics to understand how visitors use our website. 
This helps us improve our service. Google Analytics uses cookies to 
collect anonymous information including:
- Number of visitors
- Pages visited
- Time spent on site
- Geographic location (city level)

You can opt-out of Google Analytics by installing the Google Analytics 
Opt-out Browser Add-on: https://tools.google.com/dlpage/gaoptout
```

### Cookie Consent (Optional)

For EU/EEA visitors, consider adding cookie consent banner.

---

## Monthly Analytics Report Template

### Traffic Summary
- Total Users: ______
- New Users: ______
- Sessions: ______
- Avg. Session Duration: ______
- Bounce Rate: ______%

### Traffic Sources
- Organic Search: ______%
- Direct: ______%
- Social: ______%
- Referral: ______%

### Top Pages
1. Homepage: ______ views
2. Services: ______ views
3. Contact: ______ views

### Conversions
- Phone Clicks: ______
- WhatsApp Clicks: ______
- Total Conversions: ______
- Conversion Rate: ______%

### Top Cities
1. ______ (_____ users)
2. ______ (_____ users)
3. ______ (_____ users)

### Goals for Next Month
- Increase traffic by: ____%
- Increase conversions by: ____%
- Focus on: ______

---

## Troubleshooting

### Not Seeing Data?

1. **Check Measurement ID**: Ensure correct ID in code
2. **Wait 24-48 hours**: Data can take time to appear
3. **Check Real-time**: Should see activity immediately
4. **Ad Blockers**: Disable ad blockers during testing
5. **Browser Console**: Check for JavaScript errors

### Data Looks Wrong?

1. **Filter Internal Traffic**: Exclude your own IP
   - Admin → Data Settings → Data Filters
   - Create filter to exclude your office IP
2. **Check Time Zone**: Ensure set to IST
3. **Verify Events**: Use Debug mode to check events

---

## Key Performance Indicators (KPIs)

Track these monthly:

| KPI | Month 1 | Month 2 | Month 3 | Month 6 |
|-----|---------|---------|---------|---------|
| Total Users | 100 | 300 | 500 | 1000+ |
| Organic Users | 50 | 150 | 300 | 600+ |
| Conversion Rate | 2% | 3% | 5% | 8%+ |
| Avg. Engagement | 1 min | 1.5 min | 2 min | 3 min+ |
| Phone Clicks | 5 | 15 | 25 | 50+ |

---

## Integration with Other Tools

### Google Ads (Future)
- Link Analytics to Ads for better ROI tracking
- Track which ads drive conversions

### Facebook Pixel (Future)
- Add alongside Analytics
- Track social media ROI

### CRM Integration
- Export Analytics data to track customer journey
- Analyze which sources bring best customers

---

## Checklist

- [ ] Google Analytics account created
- [ ] GA4 property set up
- [ ] Tracking code added to index.html
- [ ] Phone click tracking enabled
- [ ] WhatsApp click tracking enabled
- [ ] Conversions configured
- [ ] Linked to Search Console
- [ ] Real-time report shows data
- [ ] Weekly email report scheduled
- [ ] Privacy policy updated
- [ ] Team trained on dashboard

---

## Next Steps After Setup

1. **Week 1**: Verify data collection
2. **Week 2**: Create baseline report
3. **Week 3**: Identify improvement areas
4. **Week 4**: Implement optimizations
5. **Month 2**: A/B test improvements
6. **Month 3**: Scale what works

---

**With Google Analytics, you'll make data-driven decisions to grow TOWPOINT!** 📊📈

**Questions? Check GA4 Help:** https://support.google.com/analytics
