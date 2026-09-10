# Configuration Template

Copy this entire configuration and modify it for your needs.

```javascript
const customConfig = {
    // ============================================
    // NAVBAR / NAVIGATION
    // ============================================
    SITE_NAME: 'Your Company Name',
    NAV_ITEMS: [
        { label: 'Home', url: '#' },
        { label: 'About', url: '#about' },
        { label: 'Services', url: '#services' },
        { label: 'Contact', url: '#contact' }
    ],

    // ============================================
    // HERO SECTION (Big welcome message)
    // ============================================
    HERO_TITLE: 'Your Main Headline Here',
    HERO_SUBTITLE: 'Your subheadline or tagline here',
    CTA_BUTTON: 'Call to Action Button',
    PRIMARY_COLOR: '#007bff',      // Main color
    SECONDARY_COLOR: '#6c757d',    // Secondary color

    // ============================================
    // FEATURES SECTION
    // ============================================
    FEATURES_TITLE: 'Our Features',
    FEATURES_GRID: [
        {
            icon: '🎨',              // Emoji from getemoji.com
            title: 'Feature Title',
            description: 'Feature description goes here'
        },
        {
            icon: '⚡',
            title: 'Feature 2',
            description: 'Another feature description'
        },
        {
            icon: '📱',
            title: 'Feature 3',
            description: 'Third feature description'
        },
        {
            icon: '🔧',
            title: 'Feature 4',
            description: 'Fourth feature description'
        }
    ],

    // ============================================
    // ABOUT SECTION
    // ============================================
    ABOUT_TITLE: 'About Us',
    ABOUT_DESCRIPTION: 'Write your company story and background here. This section tells visitors who you are and what you do.',
    ABOUT_STATS: [
        { number: '100+', label: 'Customers' },
        { number: '50+', label: 'Projects' },
        { number: '5+', label: 'Years Experience' },
        { number: '24/7', label: 'Support' }
    ],

    // ============================================
    // SERVICES SECTION
    // ============================================
    SERVICES_TITLE: 'Our Services',
    SERVICES_GRID: [
        {
            title: 'Service 1',
            description: 'Description of first service',
            link: '#'
        },
        {
            title: 'Service 2',
            description: 'Description of second service',
            link: '#'
        },
        {
            title: 'Service 3',
            description: 'Description of third service',
            link: '#'
        },
        {
            title: 'Service 4',
            description: 'Description of fourth service',
            link: '#'
        }
    ],

    // ============================================
    // CONTACT SECTION
    // ============================================
    CONTACT_TITLE: 'Get In Touch',
    FORM_NAME: 'Your Name',
    FORM_EMAIL: 'Your Email',
    FORM_MESSAGE: 'Your Message',
    FORM_SUBMIT: 'Send Message',

    // ============================================
    // FOOTER
    // ============================================
    COMPANY_NAME: 'Your Company',
    FOOTER_DESCRIPTION: 'Brief description of your company',
    FOOTER_LINKS: [
        { label: 'Home', url: '#' },
        { label: 'About', url: '#' },
        { label: 'Privacy Policy', url: '#' },
        { label: 'Terms of Service', url: '#' }
    ],
    FOOTER_TEXT: 'Designed with ❤️ by Your Name',
    SOCIAL_LINKS: [
        { label: 'Facebook', url: 'https://facebook.com/yourpage', icon: '📘' },
        { label: 'Twitter', url: 'https://twitter.com/yourhandle', icon: '🐦' },
        { label: 'LinkedIn', url: 'https://linkedin.com/in/yourprofile', icon: '💼' },
        { label: 'Instagram', url: 'https://instagram.com/yourprofile', icon: '📷' }
    ]
};

// To use this config:
// 1. Copy all the code above
// 2. Open js/app.js
// 3. Replace the existing 'defaultConfig' with this 'customConfig'
// 4. Rename 'customConfig' to 'defaultConfig'
// 5. Save and refresh browser
```

## Color Codes Reference

### Blues
- Light Blue: `#007bff`
- Dark Blue: `#0056b3`
- Sky Blue: `#87ceeb`

### Greens
- Forest Green: `#228B22`
- Sea Green: `#2E8B57`
- Lime: `#00FF00`

### Reds/Oranges
- Red: `#DC143C`
- Orange: `#FF8C00`
- Coral: `#FF7F50`

### Purples
- Purple: `#800080`
- Orchid: `#DA70D6`
- Indigo: `#4B0082`

### Pastels
- Pastel Blue: `#ADD8E6`
- Pastel Pink: `#FFB6C1`
- Pastel Green: `#90EE90`

## Emoji Ideas

### For Features/Services
- 🎨 Design/Creative
- ⚡ Speed/Power
- 📱 Mobile
- 🔧 Tools/Fix
- 🚀 Launch/Speed
- 💡 Ideas
- 🎯 Target/Goal
- ✨ Quality
- 🏆 Award/Best
- 💰 Money/Price

### For Stats
- 👥 People
- 📊 Growth
- 🎯 Success
- ⭐ Rating
- 📈 Increase
- 🏅 Achievement

### For Social
- 📘 Facebook
- 🐦 Twitter
- 💼 LinkedIn
- 📷 Instagram
- 🎵 TikTok
- 📺 YouTube

## How to Customize Each Section

### Change Company Name Everywhere
```javascript
SITE_NAME: 'My New Company',
COMPANY_NAME: 'My New Company',
```

### Change Hero Colors
```javascript
PRIMARY_COLOR: '#FF6B6B',
SECONDARY_COLOR: '#4ECDC4'
```

### Add/Remove Features
Just add or remove items from the FEATURES_GRID array.

### Update Social Links
Find your social profile URLs and paste them.

## Tips 💡

1. **Keep descriptions short** - 1-2 sentences max
2. **Use real URLs** - For links and social profiles
3. **Consistent naming** - Use same company name everywhere
4. **Professional tone** - Keep language professional
5. **Spell check** - Proofread before saving

Done editing? Replace the default config in app.js and refresh!
