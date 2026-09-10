# Webpage Template Builder 🎨

A reusable and editable webpage template system that can be customized and reused multiple times. Build professional websites in minutes!

## Features ✨

- **Reusable Templates** - Create once, use many times
- **Easy to Edit** - Simple variable-based system with {{PLACEHOLDERS}}
- **Customizable Design** - Change colors, content, and structure easily
- **Responsive Layout** - Works perfectly on all devices
- **Multiple Themes** - Pre-built color schemes and styles
- **Save & Load** - Store templates in browser storage
- **Export/Import** - Share template configurations as JSON
- **Modern Styling** - Built with CSS Grid and Flexbox

## Quick Start 🚀

### 1. Open the Website
Just open `index.html` in your web browser. You'll see a fully functional template!

### 2. Edit Content
All content is controlled by variables in `js/app.js`. Find the `defaultConfig` object:

```javascript
const defaultConfig = {
    SITE_NAME: 'My Awesome Website',
    HERO_TITLE: 'Welcome to Your Amazing Website',
    // ... more variables
};
```

### 3. Change Colors
Modify these in the config:
```javascript
PRIMARY_COLOR: '#007bff',      // Main color
SECONDARY_COLOR: '#6c757d',    // Secondary color
```

### 4. Update Sections
Each section has its own set of variables:

**Navigation:**
```javascript
NAV_ITEMS: [
    { label: 'Home', url: '#' },
    { label: 'About', url: '#about' },
    // Add more items
]
```

**Features:**
```javascript
FEATURES_GRID: [
    {
        icon: '🎨',
        title: 'Feature Title',
        description: 'Feature description'
    },
    // Add more features
]
```

**Services/Products:**
```javascript
SERVICES_GRID: [
    {
        title: 'Service Name',
        description: 'Service description',
        link: '#'
    },
    // Add more services
]
```

**Statistics:**
```javascript
ABOUT_STATS: [
    { number: '500+', label: 'Happy Clients' },
    { number: '1000+', label: 'Projects' },
    // Add more stats
]
```

**Social Links:**
```javascript
SOCIAL_LINKS: [
    { label: 'Facebook', url: 'https://facebook.com', icon: '📘' },
    { label: 'Twitter', url: 'https://twitter.com', icon: '🐦' },
    // Add more links
]
```

## File Structure 📁

```
webpage-template-builder/
├── index.html              # Main HTML template
├── css/
│   ├── styles.css          # Main styles
│   └── templates.css       # Template utilities & themes
├── js/
│   ├── template-manager.js # Template logic (don't edit)
│   └── app.js              # Edit your content here!
├── config/
│   └── templates.json      # Template presets
└── examples/
    ├── portfolio.html      # Portfolio template example
    ├── agency.html         # Agency template example
    └── ecommerce.html      # E-commerce template example
```

## Using the Template Manager 🔧

### Update a Single Item
```javascript
// Change website name
updateVariable('SITE_NAME', 'New Name');

// Change hero title
updateVariable('HERO_TITLE', 'New Title');
```

### Save Your Template
```javascript
// Save current template with a name
saveCustomTemplate('my-website');

// Later, load it
loadCustomTemplate('my-website');
```

### Export Configuration
```javascript
// Download template as JSON file
exportTemplateConfig();
```

## Available Variables 📋

### Navbar
- `SITE_NAME` - Website/company name
- `NAV_ITEMS` - Navigation menu items

### Hero Section
- `HERO_TITLE` - Main heading
- `HERO_SUBTITLE` - Subtitle/tagline
- `CTA_BUTTON` - Call-to-action button text
- `PRIMARY_COLOR` - Main color
- `SECONDARY_COLOR` - Secondary color

### Features
- `FEATURES_TITLE` - Section title
- `FEATURES_GRID` - Array of features

### About
- `ABOUT_TITLE` - Section title
- `ABOUT_DESCRIPTION` - Description text
- `ABOUT_STATS` - Statistics array

### Services
- `SERVICES_TITLE` - Section title
- `SERVICES_GRID` - Array of services

### Contact
- `CONTACT_TITLE` - Section title
- `FORM_NAME` - Name input placeholder
- `FORM_EMAIL` - Email input placeholder
- `FORM_MESSAGE` - Message input placeholder
- `FORM_SUBMIT` - Submit button text

### Footer
- `COMPANY_NAME` - Company name
- `FOOTER_DESCRIPTION` - Footer description
- `FOOTER_LINKS` - Quick links array
- `FOOTER_TEXT` - Copyright/footer text
- `SOCIAL_LINKS` - Social media links

## Customization Guide 🎯

### Change Entire Color Scheme
1. Open `js/app.js`
2. Find the `defaultConfig` object
3. Modify `PRIMARY_COLOR` and `SECONDARY_COLOR`
4. Refresh the page

### Add New Features
1. Find `FEATURES_GRID` in `defaultConfig`
2. Add new object to array:
```javascript
{
    icon: '⚡',
    title: 'New Feature',
    description: 'Feature details here'
}
```

### Add New Services
1. Find `SERVICES_GRID` in `defaultConfig`
2. Add new service object:
```javascript
{
    title: 'New Service',
    description: 'Service details',
    link: '#'
}
```

### Change Fonts
1. Open `css/styles.css`
2. Find `font-family` property
3. Replace with your preferred font

## Creating Multiple Instances 📦

### Method 1: Browser Storage
```javascript
// Save current template
saveCustomTemplate('template-1');

// Make changes
updateVariable('SITE_NAME', 'Different Company');

// Save another version
saveCustomTemplate('template-2');

// Switch between them
loadCustomTemplate('template-1');
loadCustomTemplate('template-2');
```

### Method 2: Duplicate Files
1. Copy `index.html` to `index-v2.html`
2. Copy `js/app.js` to `js/app-v2.js`
3. Update the script reference in HTML
4. Create different configs in each file

### Method 3: Export/Import
1. Export configuration as JSON
2. Modify the JSON file
3. Import it to create new template

## Theme Presets 🎨

Pre-defined color schemes available:

- **Ocean** - Blue theme (#0066cc, #00b3ff)
- **Sunset** - Orange theme (#ff6b35, #f7931e)
- **Forest** - Green theme (#2d5016, #6b8e23)
- **Midnight** - Dark theme (#1a1a1a, #333333)
- **Berry** - Purple theme (#c2185b, #e91e63)

To apply a theme, modify the colors in config:
```javascript
PRIMARY_COLOR: '#0066cc',      // Ocean blue
SECONDARY_COLOR: '#00b3ff',
```

## Responsive Design 📱

The template is fully responsive and works on:
- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (below 768px)

All adjustments are automatic!

## Browser Compatibility 🌐

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## Tips & Tricks 💡

1. **Preview Changes** - Edit config and refresh browser to see changes instantly
2. **Use Emojis** - Add emojis to feature icons: `icon: '🚀'`
3. **Organize Content** - Keep config organized and commented
4. **Backup Templates** - Export configs regularly
5. **Test Responsiveness** - Use browser DevTools to test on different devices
6. **Smooth Scrolling** - Navigation links automatically scroll to sections
7. **Mobile Menu** - Navbar adapts to mobile automatically

## Common Tasks 🔄

### Change Hero Background
```javascript
PRIMARY_COLOR: '#FF6B6B',
SECONDARY_COLOR: '#4ECDC4'
```

### Add New Navigation Item
```javascript
NAV_ITEMS: [
    { label: 'Home', url: '#' },
    { label: 'Blog', url: '#blog' },  // NEW
    { label: 'Contact', url: '#contact' }
]
```

### Update All Text at Once
```javascript
SITE_NAME: 'My New Business',
HERO_TITLE: 'Welcome to My Business',
COMPANY_NAME: 'My New Business'
```

### Add More Features
```javascript
FEATURES_GRID: [
    // ... existing features ...
    {
        icon: '🎯',
        title: 'Focused Strategy',
        description: 'Strategic approach to all projects'
    }
]
```

## Troubleshooting 🐛

**Content not updating?**
- Make sure you edited `js/app.js` (not `template-manager.js`)
- Refresh the browser (Ctrl+F5 for hard refresh)

**Styles look broken?**
- Check that all CSS files are linked in HTML
- Verify file paths are correct
- Clear browser cache

**Templates not saving?**
- Check browser's local storage is enabled
- Use a modern browser
- Try exporting/importing instead

**Images not showing?**
- Add an `images/` folder
- Update image paths in config
- Use full URLs for external images

## Next Steps 🎓

1. **Customize the default template** - Edit colors and content
2. **Create multiple versions** - Save different templates
3. **Export your config** - Back up your work
4. **Add your own images** - Create images folder and reference them
5. **Deploy online** - Upload to GitHub Pages or your hosting

## Example Customization 📝

Here's a complete example of changing everything:

```javascript
const defaultConfig = {
    // NAVBAR
    SITE_NAME: 'Digital Agency',
    NAV_ITEMS: [
        { label: 'Home', url: '#' },
        { label: 'Services', url: '#services' },
        { label: 'Portfolio', url: '#portfolio' },
        { label: 'Contact', url: '#contact' }
    ],

    // HERO
    HERO_TITLE: 'Grow Your Business',
    HERO_SUBTITLE: 'We create stunning digital experiences',
    CTA_BUTTON: 'Start Your Project',
    PRIMARY_COLOR: '#667eea',
    SECONDARY_COLOR: '#764ba2',

    // And so on...
};
```

## License 📄

Free to use and modify for personal and commercial projects.

## Support 🤝

Have questions? Check the code comments or experiment with the variables!

---

**Happy Building! 🚀**

Made with ❤️ for web developers everywhere
