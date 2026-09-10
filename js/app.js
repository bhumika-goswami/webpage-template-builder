/**
 * Application - Initializes and manages the template rendering
 */

document.addEventListener('DOMContentLoaded', function() {
    // Load default configuration
    const defaultConfig = {
        // Navbar
        SITE_NAME: 'Bhumika Goswami',
        NAV_ITEMS: [
            { label: 'Home', url: '#' },
            { label: 'About', url: '#about' },
            { label: 'Services', url: '#services' },
            { label: 'Contact', url: '#contact' }
        ],

        // Hero Section
        HERO_TITLE: 'Welcome to this Website',
        HERO_SUBTITLE: 'Create stunning, reusable webpages with ease',
        CTA_BUTTON: 'Learn More',
        PRIMARY_COLOR: '#007bff',
        SECONDARY_COLOR: '#6c757d',

        // Features Section
        FEATURES_TITLE: 'Why Choose Us',
        FEATURES_GRID: [
            {
                icon: '🎨',
                title: 'Beautiful Design',
                description: 'Stunning and modern design that captures attention'
            },
            {
                icon: '⚡',
                title: 'Fast Performance',
                description: 'Optimized for speed and performance'
            },
            {
                icon: '📱',
                title: 'Responsive',
                description: 'Looks great on all devices and screen sizes'
            },
            {
                icon: '🔧',
                title: 'Easy to Customize',
                description: 'Simple to edit and reuse multiple times'
            }
        ],

        // About Section
        ABOUT_TITLE: 'About Us',
        ABOUT_DESCRIPTION: 'I am a passionate web developer creating amazing websites for businesses. With 5 years of experience, I help companies establish their online presence with beautiful, functional websites',
        ABOUT_STATS: [
            { number: '500+', label: 'Happy Clients' },
            { number: '1000+', label: 'Projects Completed' },
            { number: '50+', label: 'Templates' },
            { number: '24/7', label: 'Support' }
        ],

        // Services Section
        SERVICES_TITLE: 'Our Services',
        SERVICES_GRID: [
            {
                title: 'Web Design',
                description: 'Professional web design services to bring your ideas to life',
                link: '#'
            },
            {
                title: 'Web Development',
                description: 'Full-stack development solutions for modern web applications',
                link: '#'
            },
            {
                title: 'Template Customization',
                description: 'Customize any template to match your brand identity',
                link: '#'
            },
            {
                title: 'Consulting',
                description: 'Expert advice on web technologies and best practices',
                link: '#'
            }
        ],

        // Contact Section
        CONTACT_TITLE: 'Get In Touch',
        FORM_NAME: 'Your Name',
        FORM_EMAIL: 'Your Email',
        FORM_MESSAGE: 'Your Message',
        FORM_SUBMIT: 'Send Message',

        // Footer
        COMPANY_NAME: 'My Company',
        FOOTER_DESCRIPTION: 'Creating beautiful, reusable webpage templates for everyone.',
        FOOTER_LINKS: [
            { label: 'Home', url: '#' },
            { label: 'About', url: '#' },
            { label: 'Privacy', url: '#' },
            { label: 'Terms', url: '#' }
        ],
        FOOTER_TEXT: 'Designed with ❤️ by Template Builder',
        SOCIAL_LINKS: [
            { label: 'Facebook', url: '#', icon: '📘' },
            { label: 'Twitter', url: '#', icon: '🐦' },
            { label: 'LinkedIn', url: '#', icon: '💼' },
            { label: 'Instagram', url: '#', icon: '📷' }
        ]
    };

    // Load and render template
    templateManager.loadTemplate('default', defaultConfig);
    renderTemplate();

    // Set up event listeners
    setupEventListeners();
});

/**
 * Render the current template
 */
function renderTemplate() {
    const manager = templateManager;
    const vars = manager.variables;

    // Update navbar
    updateNavbar(vars.SITE_NAME, vars.NAV_ITEMS);

    // Update hero section
    updateHeroSection(vars.HERO_TITLE, vars.HERO_SUBTITLE, vars.CTA_BUTTON, 
                     vars.PRIMARY_COLOR, vars.SECONDARY_COLOR);

    // Update features section
    updateFeaturesSection(vars.FEATURES_TITLE, vars.FEATURES_GRID);

    // Update about section
    updateAboutSection(vars.ABOUT_TITLE, vars.ABOUT_DESCRIPTION, vars.ABOUT_STATS);

    // Update services section
    updateServicesSection(vars.SERVICES_TITLE, vars.SERVICES_GRID);

    // Update contact section
    updateContactSection(vars.CONTACT_TITLE, vars.FORM_NAME, vars.FORM_EMAIL, 
                        vars.FORM_MESSAGE, vars.FORM_SUBMIT);

    // Update footer
    updateFooter(vars.COMPANY_NAME, vars.FOOTER_DESCRIPTION, vars.FOOTER_LINKS, 
                vars.FOOTER_TEXT, vars.SOCIAL_LINKS);
}

/**
 * Update navbar content
 */
function updateNavbar(siteName, navItems) {
    const logo = document.querySelector('.navbar .logo');
    if (logo) logo.textContent = siteName;

    const navLinks = document.querySelector('.nav-links');
    if (navLinks && navItems) {
        navLinks.innerHTML = navItems.map(item => 
            `<li><a href="${item.url || '#'}">${item.label || item}</a></li>`
        ).join('');
    }
}

/**
 * Update hero section
 */
function updateHeroSection(title, subtitle, buttonText, primaryColor, secondaryColor) {
    const hero = document.querySelector('.hero');
    if (hero) {
        hero.style.background = `linear-gradient(135deg, ${primaryColor} 0%, ${secondaryColor} 100%)`;
    }

    const heroTitle = document.querySelector('.hero-content h1');
    if (heroTitle) heroTitle.textContent = title;

    const heroSubtitle = document.querySelector('.hero-content p');
    if (heroSubtitle) heroSubtitle.textContent = subtitle;

    const ctaButton = document.querySelector('.hero-content .btn');
    if (ctaButton) ctaButton.textContent = buttonText;
}

/**
 * Update features section
 */
function updateFeaturesSection(title, features) {
    const featuresTitle = document.querySelector('.features h2');
    if (featuresTitle) featuresTitle.textContent = title;

    const featuresGrid = document.querySelector('.features-grid');
    if (featuresGrid && features) {
        featuresGrid.innerHTML = features.map(feature => `
            <div class="feature-card">
                <div class="feature-icon">${feature.icon || '✨'}</div>
                <h3>${feature.title}</h3>
                <p>${feature.description}</p>
            </div>
        `).join('');
    }
}

/**
 * Update about section
 */
function updateAboutSection(title, description, stats) {
    const aboutTitle = document.querySelector('.about-content h2');
    if (aboutTitle) aboutTitle.textContent = title;

    const aboutDesc = document.querySelector('.about-content > p');
    if (aboutDesc) aboutDesc.textContent = description;

    const statsContainer = document.querySelector('.about-stats');
    if (statsContainer && stats) {
        statsContainer.innerHTML = stats.map(stat => `
            <div class="stat">
                <div class="stat-number">${stat.number}</div>
                <div class="stat-label">${stat.label}</div>
            </div>
        `).join('');
    }
}

/**
 * Update services section
 */
function updateServicesSection(title, services) {
    const servicesTitle = document.querySelector('.services h2');
    if (servicesTitle) servicesTitle.textContent = title;

    const servicesGrid = document.querySelector('.services-grid');
    if (servicesGrid && services) {
        servicesGrid.innerHTML = services.map(service => `
            <div class="service-card">
                <h3>${service.title}</h3>
                <p>${service.description}</p>
                <a href="${service.link || '#'}" class="btn btn-secondary">Learn More</a>
            </div>
        `).join('');
    }
}

/**
 * Update contact section
 */
function updateContactSection(title, namePlaceholder, emailPlaceholder, messagePlaceholder, submitText) {
    const contactTitle = document.querySelector('.contact h2');
    if (contactTitle) contactTitle.textContent = title;

    const inputs = document.querySelectorAll('.contact-form input');
    if (inputs.length >= 2) {
        inputs[0].placeholder = namePlaceholder;
        inputs[1].placeholder = emailPlaceholder;
    }

    const textarea = document.querySelector('.contact-form textarea');
    if (textarea) textarea.placeholder = messagePlaceholder;

    const submitBtn = document.querySelector('.contact-form button[type="submit"]');
    if (submitBtn) submitBtn.textContent = submitText;
}

/**
 * Update footer
 */
function updateFooter(companyName, description, links, footerText, socialLinks) {
    const footerSections = document.querySelectorAll('.footer-section');
    
    if (footerSections[0]) {
        footerSections[0].innerHTML = `
            <h4>${companyName}</h4>
            <p>${description}</p>
        `;
    }

    if (footerSections[1] && links) {
        footerSections[1].innerHTML = `
            <h4>Quick Links</h4>
            <ul>
                ${links.map(link => 
                    `<li><a href="${link.url || '#'}">${link.label}</a></li>`
                ).join('')}
            </ul>
        `;
    }

    if (footerSections[2] && socialLinks) {
        footerSections[2].innerHTML = `
            <h4>Follow Us</h4>
            <div class="social-links">
                ${socialLinks.map(link => 
                    `<a href="${link.url}" target="_blank" title="${link.label}">${link.icon || link.label}</a>`
                ).join('')}
            </div>
        `;
    }

    const footerBottom = document.querySelector('.footer-bottom');
    if (footerBottom) {
        footerBottom.innerHTML = `<p>&copy; 2026 ${companyName}. All rights reserved. | ${footerText}</p>`;
    }
}

/**
 * Set up event listeners for form and interactive elements
 */
function setupEventListeners() {
    // Handle contact form submission
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Thank you for your message! We will get back to you soon.');
            contactForm.reset();
        });
    }

    // Handle smooth scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href !== '#') {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth' });
                }
            }
        });
    });
}

/**
 * Export current template configuration
 */
function exportTemplateConfig() {
    const config = templateManager.exportConfig();
    const dataStr = JSON.stringify(config, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${config.template}-config.json`;
    link.click();
}

/**
 * Update a single variable and re-render
 */
function updateVariable(key, value) {
    templateManager.setVariable(key, value);
    renderTemplate();
}

/**
 * Save template with a custom name
 */
function saveCustomTemplate(name) {
    templateManager.saveToStorage(name);
    alert(`Template saved as "${name}"`);
}

/**
 * Load a saved template by name
 */
function loadCustomTemplate(name) {
    templateManager.loadFromStorage(name);
    renderTemplate();
    alert(`Template "${name}" loaded`);
}
