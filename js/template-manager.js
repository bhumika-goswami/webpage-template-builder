/**
 * Template Manager - Handles template loading, editing, and rendering
 */

class TemplateManager {
    constructor() {
        this.templates = {};
        this.currentTemplate = null;
        this.variables = {};
        this.templateHistory = [];
    }

    /**
     * Load a template configuration
     * @param {string} templateName - Name of the template to load
     * @param {object} config - Configuration object with variables
     */
    loadTemplate(templateName, config) {
        this.currentTemplate = templateName;
        this.variables = { ...config };
        this.templateHistory.push({
            name: templateName,
            timestamp: new Date(),
            config: JSON.parse(JSON.stringify(config))
        });
        return this;
    }

    /**
     * Set a single variable value
     * @param {string} key - Variable key (e.g., 'SITE_NAME')
     * @param {any} value - Variable value
     */
    setVariable(key, value) {
        this.variables[key] = value;
        return this;
    }

    /**
     * Set multiple variables at once
     * @param {object} vars - Object with key-value pairs
     */
    setVariables(vars) {
        this.variables = { ...this.variables, ...vars };
        return this;
    }

    /**
     * Get a variable value
     * @param {string} key - Variable key
     * @returns {any} Variable value
     */
    getVariable(key) {
        return this.variables[key];
    }

    /**
     * Render the template by replacing all placeholders
     * @returns {string} Rendered HTML
     */
    render() {
        let html = document.documentElement.innerHTML;

        // Replace all {{PLACEHOLDER}} with actual values
        Object.keys(this.variables).forEach(key => {
            const placeholder = new RegExp(`{{${key}}}`, 'g');
            const value = this.variables[key];
            
            if (Array.isArray(value)) {
                html = html.replace(placeholder, this.renderArray(value, key));
            } else if (typeof value === 'object') {
                html = html.replace(placeholder, JSON.stringify(value));
            } else {
                html = html.replace(placeholder, value);
            }
        });

        return html;
    }

    /**
     * Render array of items
     * @param {array} items - Array of items to render
     * @param {string} itemType - Type of item (for template selection)
     * @returns {string} Rendered HTML
     */
    renderArray(items, itemType) {
        if (!Array.isArray(items) || items.length === 0) {
            return '';
        }

        if (itemType.includes('NAV')) {
            return items.map(item => 
                `<li><a href="${item.url || '#'}">${item.label || item}</a></li>`
            ).join('');
        }

        if (itemType.includes('FEATURES')) {
            return items.map(item => `
                <div class="feature-card">
                    <div class="feature-icon">${item.icon || '✨'}</div>
                    <h3>${item.title}</h3>
                    <p>${item.description}</p>
                </div>
            `).join('');
        }

        if (itemType.includes('SERVICES')) {
            return items.map(item => `
                <div class="service-card">
                    <h3>${item.title}</h3>
                    <p>${item.description}</p>
                    <a href="${item.link || '#'}" class="btn btn-secondary">Learn More</a>
                </div>
            `).join('');
        }

        if (itemType.includes('FOOTER_LINKS')) {
            return items.map(item => 
                `<li><a href="${item.url || '#'}">${item.label || item}</a></li>`
            ).join('');
        }

        if (itemType.includes('SOCIAL')) {
            return items.map(item => 
                `<a href="${item.url}" target="_blank" title="${item.label}">${item.icon || item.label}</a>`
            ).join('');
        }

        if (itemType.includes('STATS')) {
            return items.map(item => `
                <div class="stat">
                    <div class="stat-number">${item.number}</div>
                    <div class="stat-label">${item.label}</div>
                </div>
            `).join('');
        }

        // Default rendering
        return items.map(item => {
            if (typeof item === 'string') {
                return item;
            }
            return JSON.stringify(item);
        }).join('\n');
    }

    /**
     * Apply a theme/color scheme
     * @param {object} theme - Theme object with color variables
     */
    applyTheme(theme) {
        const root = document.documentElement;
        Object.keys(theme).forEach(key => {
            const cssVar = `--${key.replace(/([A-Z])/g, '-$1').toLowerCase()}`;
            root.style.setProperty(cssVar, theme[key]);
        });
        this.variables = { ...this.variables, ...theme };
        return this;
    }

    /**
     * Export current template as JSON configuration
     * @returns {object} Configuration object
     */
    exportConfig() {
        return {
            template: this.currentTemplate,
            variables: { ...this.variables },
            timestamp: new Date().toISOString()
        };
    }

    /**
     * Import template from JSON configuration
     * @param {object} config - Configuration object
     */
    importConfig(config) {
        if (config.template) {
            this.currentTemplate = config.template;
        }
        if (config.variables) {
            this.variables = { ...config.variables };
        }
        return this;
    }

    /**
     * Save template to localStorage
     * @param {string} name - Name to save the template as
     */
    saveToStorage(name) {
        const config = this.exportConfig();
        localStorage.setItem(`template_${name}`, JSON.stringify(config));
        return this;
    }

    /**
     * Load template from localStorage
     * @param {string} name - Name of the template to load
     */
    loadFromStorage(name) {
        const config = JSON.parse(localStorage.getItem(`template_${name}`));
        if (config) {
            this.importConfig(config);
        }
        return this;
    }

    /**
     * Get all saved templates from localStorage
     * @returns {array} Array of saved template names
     */
    getAllSavedTemplates() {
        const templates = [];
        for (let i = 0; i < localStorage.length; i++) {
            const key = localStorage.key(i);
            if (key.startsWith('template_')) {
                templates.push(key.replace('template_', ''));
            }
        }
        return templates;
    }

    /**
     * Delete a saved template
     * @param {string} name - Name of the template to delete
     */
    deleteTemplate(name) {
        localStorage.removeItem(`template_${name}`);
        return this;
    }

    /**
     * Clone a template
     * @param {string} newName - Name for the cloned template
     */
    cloneTemplate(newName) {
        const config = this.exportConfig();
        const manager = new TemplateManager();
        manager.importConfig(config);
        manager.saveToStorage(newName);
        return manager;
    }

    /**
     * Get template history
     * @returns {array} Array of template history entries
     */
    getHistory() {
        return this.templateHistory;
    }

    /**
     * Clear template history
     */
    clearHistory() {
        this.templateHistory = [];
        return this;
    }
}

// Create global instance
const templateManager = new TemplateManager();
