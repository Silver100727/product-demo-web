# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

RS Global Solutions - A React-based e-commerce website for corporate gifting solutions. The application showcases products across multiple categories with a focus on customized corporate gifts, festival items, and branded merchandise.

## Development Commands

### Essential Commands
```bash
# Start development server (runs on http://localhost:3005)
npm run dev

# Build for production
npm run build

# Lint code
npm run lint

# Preview production build
npm run preview
```

## Architecture

### Technology Stack
- **Frontend Framework**: React 19.0.0-rc.1 with React Router DOM for routing
- **Build Tool**: Vite 6.1.0 with HMR
- **Styling**: Tailwind CSS v4 (using @tailwindcss/vite plugin)
- **Animations**: Framer Motion for page transitions and component animations
- **Maps**: Leaflet with React Leaflet
- **HTTP Client**: Axios
- **Icons**: Lucide React
- **Carousel**: React Slick

### Project Structure

```
src/
├── components/        # Reusable UI components
│   ├── Navbar.jsx    # Main navigation bar
│   ├── Footer.jsx    # Site footer
│   ├── ProductCard.jsx       # Product display card
│   ├── CategoryCard.jsx      # Category display card
│   ├── ProductModal.jsx      # Quick view modal
│   ├── FormModal.jsx         # Contact form modal
│   └── Trending.component.jsx
├── pages/            # Page-level components
│   ├── Home.jsx              # Landing page
│   ├── Categories.jsx        # Main categories listing
│   ├── SubCategory.jsx       # Subcategory products
│   ├── Products.jsx          # All products listing
│   ├── ProductDetail.jsx     # Single product view
│   ├── NestedProduct.jsx     # Nested product navigation
│   ├── About.jsx             # About page
│   ├── Contact.jsx           # Contact page
│   └── CorporatesGift.jsx    # Corporate gifting page
├── asset/            # Static assets
│   ├── brands/       # Brand logo images (42 brand logos)
│   ├── fonts/        # SF Pro Display font files
│   └── Image/        # App images and banners
├── utils.js          # Brand data exports
├── main.jsx          # App entry point
├── App.jsx           # Root component with routing
└── index.css         # Global styles and Tailwind imports
```

### Routing Architecture

The app uses React Router v7 with the following route structure:

- `/` - Home page with main banner
- `/products` - All products listing
- `/categories` - Category browser
- `/categories/subcategory/:subcategoryname` - Subcategory products (requires state)
- `/categories/subcategory/:subcategoryname/:productName` - Nested products
- `/product-details/:id` - Individual product detail page
- `/Corporate-Gifts` - Corporate gifting page with banners
- `/Contact-us` - Contact form page
- `/about` - About page

**Important**: SubCategory and NestedProduct routes expect state passed via `navigate(path, { state })` from parent components. Direct URL access may cause errors.

### API Integration

**Base API URL**: `https://rsglobalsolutions.in/api/routes.php`

#### Endpoints:
- `?action=getcategory` - GET categories
- `?action=getsubcategorybycategory` - POST with `category_id` to get subcategories
- `?action=addproduct` - Product operations
- `?action=addbanner` - POST with `type: "get"` to fetch banners

#### Banner Types:
- `MainBanner` - Home page banner
- `CoporateBanner` - Corporate gifts page banner
- `FestivalBanner` - Festival section banner

Banners are fetched in App.jsx on mount and distributed via props to respective pages.

### Styling System

**Tailwind CSS v4** is configured with the Vite plugin (no PostCSS needed).

#### Custom Configuration:
- Custom width utility: `w-1/10` (10% width)
- Font: SF Pro Display (loaded from local files)
- Custom animations in index.css:
  - `animate-marquee` - Infinite scrolling animation for brand logos
  - Slider utilities for carousel components

#### Theme:
- Primary color: Blue shades (bg-blue-50, text-blue-600)
- Accent color: Cyan (#1FC4E4)
- Responsive breakpoints: md (768px), lg (1024px)

### Component Patterns

#### Data Fetching Pattern:
```jsx
const [data, setData] = useState([]);
const [spinner, setSpinner] = useState(false);

const fetchData = () => {
  setSpinner(true);
  axios.get/post(url, payload)
    .then(res => {
      if (res.data.success) {
        setData(res.data.data);
      } else {
        setData([]);
      }
    })
    .catch(err => {})
    .finally(() => setSpinner(false));
};

useEffect(() => {
  window.scrollTo(0, 0);  // Reset scroll on mount
  fetchData();
}, []);
```

#### Animation Pattern:
```jsx
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, amount: 0.3 }}
>
```

#### Navigation with State:
```jsx
navigate(`/path/${param}`, {
  state: { subcategory: data }
});
```

### Key Implementation Details

1. **Scroll Behavior**: All pages call `window.scrollTo(0, 0)` on mount to reset scroll position

2. **Image Loading**: Product and category images use `loading="lazy"` attribute for performance

3. **Modal System**: ProductModal uses AnimatePresence from Framer Motion for enter/exit animations

4. **Navbar Behavior**: Navbar receives `scrolled` prop from App.jsx based on scroll position (>50px) to adjust styling

5. **Brand Logos**: 42 brand logos are imported and exported from utils.js as a brands array

6. **Error Handling**: API calls use empty catch blocks - consider adding proper error handling when working with data fetching

7. **Product Structure**: Products have `imageLinks` array, `title`, `description`, and `_id` fields

## Development Notes

- The project uses React 19 RC which may have API differences from stable React 18
- ESLint is configured but targets TypeScript files (files: `['**/*.{ts,tsx}']`) while the project uses JSX - this mismatch should be addressed
- No PostCSS config needed as Tailwind v4 is handled by Vite plugin
- Lucide React is excluded from Vite's dependency optimization
- Dev server runs on port 3005 with host set to localhost
- Custom SF Pro Display font is loaded via CSS from local asset files
