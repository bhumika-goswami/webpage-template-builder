# How to Use Examples

This folder contains example configurations and templates for different use cases.

## Available Examples:

1. **PORTFOLIO_TEMPLATE.md** - Portfolio/Personal website
2. **AGENCY_TEMPLATE.md** - Creative agency website
3. **ECOMMERCE_TEMPLATE.md** - Online store website

## How to Use:

### Step 1: Choose Your Template
Read through the examples and pick the one that matches your needs.

### Step 2: Copy the Configuration
Copy the suggested configuration from the example file.

### Step 3: Create New Files
1. Copy `index.html` to a new file (e.g., `portfolio.html`)
2. Copy `js/app.js` to `js/app-portfolio.js`
3. Update the script reference in your new HTML file

### Step 4: Paste Configuration
Replace the `defaultConfig` in your new `app-portfolio.js` with the example config.

### Step 5: Customize
Modify the configuration to match your content.

### Step 6: Add Extra Sections
If needed, add new HTML sections and corresponding variables.

## Example Workflow:

```
1. Open PORTFOLIO_TEMPLATE.md
2. Read the suggested config
3. Duplicate index.html → my-portfolio.html
4. Duplicate js/app.js → js/app-portfolio.js
5. Update <script> tag in HTML to reference app-portfolio.js
6. Paste config from example into app-portfolio.js
7. Edit config with your own content
8. Refresh browser to see changes
9. Save the template: saveCustomTemplate('portfolio-v1')
10. Open my-portfolio.html in browser
```

## Tips:

- **Keep Original** - Don't edit the original index.html
- **Version Control** - Create separate files for each template variant
- **Test Thoroughly** - Check your site on mobile too
- **Use Browser Storage** - Save different versions locally
- **Export Configs** - Back up your work as JSON files

## Creating Your Own Template:

1. Start with an example that's closest to your needs
2. Modify the configuration
3. Add new sections to HTML if needed
4. Create corresponding update functions in app.js
5. Test everything
6. Save and export your template

## Need Help?

- Check the README.md for complete documentation
- Look at the main app.js for how variables work
- Experiment with the template-manager.js functions
- Use browser DevTools (F12) to debug

Happy creating! 🚀
