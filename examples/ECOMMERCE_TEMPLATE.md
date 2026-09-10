# E-Commerce Template Example

This example demonstrates how to create an e-commerce focused website.

## Key Sections:

1. **Hero** - Promotions and new products
2. **Featured Products** - Top sellers
3. **Categories** - Product categories
4. **Testimonials** - Customer reviews
5. **Newsletter** - Email signup
6. **FAQ** - Common questions

## Suggested Configuration:

```javascript
const ecommerceConfig = {
    SITE_NAME: 'ShopName Store',
    HERO_TITLE: 'Discover Amazing Products',
    HERO_SUBTITLE: 'Quality products at great prices',
    CTA_BUTTON: 'Shop Now',
    FEATURES_TITLE: 'Why Shop With Us',
    FEATURES_GRID: [
        {
            icon: '🚚',
            title: 'Free Shipping',
            description: 'On orders over $50'
        },
        {
            icon: '💳',
            title: 'Secure Checkout',
            description: 'Safe payment processing'
        },
        {
            icon: '↩️',
            title: 'Easy Returns',
            description: '30-day return policy'
        },
        {
            icon: '⭐',
            title: 'Quality Guaranteed',
            description: 'Premium products only'
        }
    ],
    PRIMARY_COLOR: '#2ecc71',
    SECONDARY_COLOR: '#27ae60'
};
```

## E-Commerce Specific Variables:

```javascript
FEATURED_PRODUCTS: [
    {
        name: 'Product Name',
        price: '$99.99',
        image: 'product.jpg',
        rating: 5,
        reviews: 124
    }
],
CATEGORIES: [
    { name: 'Electronics', icon: '📱' },
    { name: 'Clothing', icon: '👕' },
    { name: 'Home', icon: '🏠' }
],
CUSTOMER_REVIEWS: [
    {
        text: 'Great quality!',
        author: 'Customer Name',
        rating: 5
    }
]
```

## To Customize:

1. Add product images
2. Include pricing information
3. Add shopping cart functionality
4. Include customer reviews
5. Add product filters
6. Include payment options

## Features You Can Add:

- Product search
- Wishlist
- User accounts
- Order tracking
- Live chat support
- Product recommendations
- Discount codes
- Newsletter signup

Use this template as a starting point and extend it with e-commerce features!
