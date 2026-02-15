# Artisan Collective - $100 E-commerce App

A premium-themed e-commerce website simulation representing a $100 budget tier. This project demonstrates what a small business or freelancer might get with a premium WordPress theme setup.

## Features

- **Product Catalog** - 20 handcrafted products with categories and prices
- **Shopping Cart** - Add/remove items, update quantities, persistent cart
- **Checkout Flow** - Shipping form and order confirmation
- **Premium Theme Styling** - Elegant serif fonts, gold accent colors
- **Heavy Footer Branding** - Multiple copyright notices simulating premium theme requirements

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Styling**: Tailwind CSS + Custom CSS
- **State**: Server-side cart with cookies
- **Performance**: Simulated slow loading (15s page delay, 4s images)

## Getting Started

```bash
# Install dependencies
pnpm install

# Run development server
pnpm dev

# Build for production
pnpm build

# Start production server
pnpm start
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Project Structure

```
├── app/
│   ├── api/cart/          # Cart API routes
│   ├── cart/              # Shopping cart page
│   ├── checkout/          # Checkout flow
│   ├── product/[id]/      # Product detail pages
│   ├── globals.css        # Premium theme styles
│   ├── layout.tsx         # Site layout with footer
│   └── page.tsx           # Homepage
├── components/
│   ├── Cart.tsx           # Cart dropdown component
│   └── SlowImage.tsx      # Delayed image loader
├── lib/
│   ├── cart.ts            # Cart server actions
│   ├── delay.ts           # Performance simulation
│   └── products.ts        # Product catalog data
└── SPEC.md                # Project specification
```

## Routes

| Route | Description |
|-------|-------------|
| `/` | Product catalog homepage |
| `/product/[id]` | Individual product details |
| `/cart` | Shopping cart |
| `/checkout` | Checkout form |
| `/checkout/success` | Order confirmation |

## Budget Breakdown

| Item | Cost |
|------|------|
| Domain | ~$12/year |
| WordPress Hosting | ~$48/year |
| Premium Theme | ~$40 |
| **Total First Year** | ~$100 |
| **Monthly Cost** | ~$5/mo |

## Performance Characteristics

This app simulates typical WordPress performance with a premium theme:

- **Page Load**: 15 second delay (simulating PHP rendering)
- **Image Loading**: 4 second delay per image
- **Expected TTFB**: 2-4 seconds

## Target Audience

- Small businesses needing quick setup
- Freelancers selling services/products
- Businesses prioritizing convenience over performance
- Those okay with theme branding requirements

## License

This is a demo project. The "premium theme" branding is simulated for educational purposes.

---

Built with [Next.js](https://nextjs.org) | Deploy on [Vercel](https://vercel.com)
