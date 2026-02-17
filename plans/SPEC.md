# Visual Artist Portfolio - Technical Specification

## 1. Project Overview

**Project Name:** Artista Visual Portfolio
**Project Type:** Single-page website (SPA-like with smooth scrolling)
**Core Functionality:** Professional portfolio showcasing visual artwork with gallery, lightbox, and contact functionality
**Target Users:** Art collectors, galleries, potential clients, and art enthusiasts
**Deployment:** GitHub Pages

---

## 2. UI/UX Specification

### 2.1 Layout Structure

**Page Sections (Single Page with Smooth Scroll):**
1. **Header/Navigation** - Fixed top navigation with logo and menu links
2. **Hero Section** - Full-viewport impact image with artist name and tagline
3. **Biography Section** - Artist's story with portrait image
4. **Gallery Section** - Filterable artwork grid organized by collections
5. **Contact Section** - Contact form and social media links
6. **Footer** - Copyright and quick links

**Grid/Layout Specifications:**
- CSS Grid for gallery layout (auto-fit, minmax)
- Flexbox for navigation and alignment
- Container max-width: 1400px (gallery), 1200px (content sections)

**Responsive Breakpoints:**
- Mobile: < 768px (single column, hamburger menu)
- Tablet: 768px - 1024px (2 columns gallery)
- Desktop: > 1024px (3-4 columns gallery)

### 2.2 Visual Design

**Color Palette:**
- Background Primary: `#0D0D0D` (deep black)
- Background Secondary: `#1A1A1A` (dark charcoal)
- Background Tertiary: `#252525` (card backgrounds)
- Accent Primary: `#C9A962` (warm gold)
- Accent Secondary: `#8B7355` (muted bronze)
- Text Primary: `#F5F5F5` (off-white)
- Text Secondary: `#A0A0A0` (muted gray)
- Border/Divider: `#333333`

**Typography:**
- Headings: `Cormorant Garamond`, serif (elegant, artistic)
  - H1: 4rem / 64px
  - H2: 2.5rem / 40px
  - H3: 1.5rem / 24px
- Body: `Raleway`, sans-serif (clean, readable)
  - Body: 1rem / 16px
  - Small: 0.875rem / 14px
- Line height: 1.6 for body text

**Spacing System:**
- Section padding: 100px vertical (desktop), 60px (mobile)
- Component margins: 2rem standard
- Card gap: 24px
- Container padding: 0 5%

**Visual Effects:**
- Box shadows: `0 10px 40px rgba(0,0,0,0.4)` for elevated elements
- Hover transitions: 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)
- Image hover scale: 1.05
- Text shadow on hero: `0 2px 20px rgba(0,0,0,0.8)`

### 2.3 Components

**Navigation:**
- Fixed position, transparent initially, solid on scroll
- Logo (text-based artist name)
- Menu items: Inicio, Galería, Contacto
- Mobile: Hamburger menu with slide-in drawer
- States: Default, hover (gold underline), active

**Hero Section:**
- Full viewport height (100vh)
- Background: High-quality hero image (placeholder provided)
- Overlay gradient for text readability
- Animated text entrance

**Gallery Cards:**
- Aspect ratio: 4:3 for consistency
- Image with overlay on hover
- Title and category visible on hover
- Smooth scale animation on hover
- Filter buttons above grid

**Lightbox:**
- Full-screen overlay with dark background
- Centered image with max dimensions
- Close button (X) and navigation arrows
- Image title and description below
- Keyboard navigation support (ESC, arrows)
- Click outside to close

**Contact Form:**
- Fields: Name, Email, Subject, Message
- Floating labels
- Validation states (error, success)
- Submit button with loading state

**Social Media Links:**
- Icons for Instagram, Behance, LinkedIn, Email
- Hover effects with color change and scale

---

## 3. Functionality Specification

### 3.1 Core Features

**Smooth Scroll Navigation:**
- Click nav links to smooth scroll to sections
- Update URL hash without page reload
- Active section highlighting in nav

**Gallery Filtering:**
- Filter categories: Todos, Pintura, Escultura, Fotografía, Digital
- Animated filter transitions
- Show/hide items based on category

**Lightbox Viewer:**
- Click any gallery image to open lightbox
- Navigate between images with arrows
- Close with X button, ESC key, or clicking outside
- Display image title and category
- Prevent body scroll when open

**Mobile Navigation:**
- Hamburger menu toggle
- Full-screen overlay menu
- Close on link click or outside click

**Scroll Animations:**
- Fade-in-up animations for sections
- Staggered animation for gallery items
- Triggered by Intersection Observer

### 3.2 User Interactions

- Hover effects on all interactive elements
- Focus states for accessibility
- Form validation with feedback messages
- Loading states for interactions

### 3.3 Data Handling

- Gallery data stored in JavaScript array
- Category filtering performed client-side
- Form submission via Formspree (static site compatible)

### 3.4 Edge Cases

- Empty gallery category: Show "No hay obras en esta categoría"
- Image load error: Show placeholder with error message
- Form submission error: Display error message
- Mobile landscape: Adjust hero height

---

## 4. File Structure

```
luispri2001.github.io/
├── index.html              # Main HTML file
├── css/
│   └── styles.css          # All styles
├── js/
│   └── main.js             # All JavaScript functionality
├── images/
│   ├── hero.jpg            # Hero background
│   ├── artist-portrait.jpg # Biography image
│   └── gallery/            # Artwork images (1-12)
├── plans/
│   └── SPEC.md             # This specification
├── README.md               # Project readme with deployment instructions
└── .gitignore              # Git ignore file
```

---

## 5. Accessibility (WCAG 2.1 AA)

- Semantic HTML5 elements (header, nav, main, section, footer)
- ARIA labels for interactive elements
- Alt text for all images
- Keyboard navigation support
- Focus indicators on all interactive elements
- Sufficient color contrast (4.5:1 minimum)
- Skip to main content link
- Reduced motion media query support

---

## 6. Performance Optimization

- Lazy loading for images below the fold
- Optimized image formats (WebP with JPEG fallback)
- Minified CSS and JS (production)
- Preload critical fonts
- Defer non-critical JavaScript

---

## 7. Deployment to GitHub Pages

1. Create repository on GitHub
2. Push all files to main branch
3. Go to Settings → Pages
4. Select "main" branch as source
5. Save and wait for deployment
6. Access at `https://username.github.io/repository-name`

---

## 8. Acceptance Criteria

- [ ] Page loads without errors
- [ ] Navigation scrolls smoothly to all sections
- [ ] Gallery displays all artworks in grid
- [ ] Category filter works correctly
- [ ] Lightbox opens, navigates, and closes properly
- [ ] Mobile menu toggles correctly
- [ ] All hover effects work smoothly
- [ ] Contact form displays correctly
- [ ] Responsive at all breakpoints
- [ ] No console errors
- [ ] All images have alt text
- [ ] Keyboard navigation works
