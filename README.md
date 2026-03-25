# SOLE – Premium Footwear Store

A full shoes store website built with **Vite + React** and CSS Modules.

## Pages
- `/` – Home (hero, stats, featured products, sale banner)
- `/about` – Brand story, values, team
- `/service` – 6 service cards + guarantee section
- `/products` – All products with category filter
- `/products/:id` – Product detail (size picker, color picker, wishlist, related products)
- `/contact` – Contact form + store info

## Tech Stack
- **Vite** – build tool
- **React 18** – UI
- **React Router v6** – routing
- **CSS Modules** – scoped styling
- **Google Fonts** – Playfair Display + DM Sans

## Getting Started

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
sole-store/
├── index.html
├── package.json
├── vite.config.js
└── src/
    ├── main.jsx          # Entry point
    ├── App.jsx           # Routes + global cart state
    ├── data/
    │   └── products.js   # Products + services data
    ├── styles/
    │   └── global.css    # CSS variables + global styles
    ├── components/
    │   ├── Navbar.jsx
    │   ├── Navbar.module.css
    │   ├── ProductCard.jsx
    │   ├── ProductCard.module.css
    │   ├── Footer.jsx
    │   └── Footer.module.css
    └── pages/
        ├── Home.jsx + Home.module.css
        ├── About.jsx + About.module.css
        ├── Service.jsx + Service.module.css
        ├── Products.jsx + Products.module.css
        ├── ProductDetail.jsx + ProductDetail.module.css
        ├── Contact.jsx + Contact.module.css
```
