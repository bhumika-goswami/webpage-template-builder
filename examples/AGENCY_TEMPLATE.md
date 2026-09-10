# Agency Template Example

This example shows how to create an agency-focused website.

## Key Features for Agencies:

1. **Team Section** - Display team members
2. **Case Studies** - Show successful projects
3. **Testimonials** - Client feedback
4. **Services** - Detailed service offerings
5. **Contact/Proposal** - Lead generation

## Suggested Configuration:

```javascript
const agencyConfig = {
    SITE_NAME: 'Creative Agency Co.',
    HERO_TITLE: 'We Build Amazing Digital Experiences',
    HERO_SUBTITLE: 'Strategy, Design, Development - Done Right',
    SERVICES_TITLE: 'Our Services',
    SERVICES_GRID: [
        {
            title: 'Brand Strategy',
            description: 'Define your brand identity and market position',
            link: '#'
        },
        {
            title: 'Web Design',
            description: 'Beautiful websites that convert visitors to customers',
            link: '#'
        },
        {
            title: 'Web Development',
            description: 'Fast, secure, and scalable web applications',
            link: '#'
        },
        {
            title: 'Digital Marketing',
            description: 'Reach your audience with targeted campaigns',
            link: '#'
        }
    ],
    PRIMARY_COLOR: '#FF6B6B',
    SECONDARY_COLOR: '#4ECDC4'
};
```

## To Customize:

1. Update company info
2. Add team member photos
3. Include case study images
4. Add client testimonials
5. Include portfolio examples

## Agency-Specific Variables You Can Add:

```javascript
TEAM_MEMBERS: [
    {
        name: 'Name',
        role: 'Position',
        image: 'image.jpg',
        bio: 'Short bio'
    }
],
TESTIMONIALS: [
    {
        text: 'Great work!',
        author: 'Client Name',
        company: 'Company Name'
    }
],
CASE_STUDIES: [
    {
        title: 'Project Name',
        description: 'What we did',
        image: 'image.jpg',
        results: 'Results achieved'
    }
]
```

Extend the template by adding new sections for these in your HTML!
