
# Menuka Dewsith — Full-Stack Developer Portfolio

A modern, interactive portfolio website for a Computer Science undergraduate specializing in full-stack development, backend systems, and PostgreSQL. The site features a terminal-style hero section, dynamic content rendering, and a responsive dark-mode design.

## Technologies Used

- **HTML5** – Semantic structure and layout
- **CSS3** – Custom styling with variables, animations, and responsive design
- **JavaScript (Vanilla ES6+)** – Dynamic content rendering, interactivity, and animations
- **Bootstrap 5.3** – Responsive grid, navbar, offcanvas menu, accordion, tabs, forms, and components
- **Font Awesome 6** – Icons for skills, projects, contact, and social links
- **Google Fonts** – Space Grotesk (sans-serif) and Fira Code (monospace)

## Bootstrap Features

### Navigation Components
- **Fixed-top Navbar** (`#mainNav`) – Sticky navigation bar that changes style on scroll with backdrop blur effect
- **Offcanvas Mobile Menu** (`#mobileMenu`) – Slide-out drawer menu for mobile devices with custom styling
- **Responsive Toggle Button** – Hamburger icon that appears on smaller screens to trigger the offcanvas menu
- **Smooth Scroll Spy** – Bootstrap's `data-bs-spy` attribute to automatically highlight active nav links based on scroll position

### Layout & Grid System
- **Responsive 12-Column Grid** – `.row` and `.col-*` classes used throughout all sections for flexible layouts
- **Breakpoint-specific Columns** – `.col-lg-6`, `.col-md-6`, `.col-sm-12` for responsive behavior across devices
- **Gutter Spacing** – `.g-3`, `.g-4`, `.g-5` classes for consistent spacing between grid items
- **Container Fluid** – Fixed-width `.container` classes for proper content alignment and padding

### Content Components
- **Cards** – Multiple card variations including stat blocks, project cards, blog cards, deep dive cards, education cards, and contact form cards
- **Badges** – Technology badges in hero section and status badges in education section
- **Pills** – Process highlight pills in About section with rounded corners
- **Nav Tabs** – Project filter tabs (All Projects, Full-Stack, Backend, Real-Time) with active state styling
- **Accordion** – Mobile-friendly skills accordion that replaces the desktop grid on smaller screens

### Form Components
- **Form Controls** – `.form-control` with custom `.custom-input` styling for name, email, subject, and message fields
- **Form Labels** – `.form-label` for accessible form field descriptions
- **Validation Feedback** – `.invalid-feedback` class for form validation error messages
- **Submit Button** – Styled primary button with icon and loading state simulation
- **Success Alert** – Custom `.alert-success-custom` that appears after form submission

### Utility Classes
- **Spacing Utilities** – `mt-*`, `mb-*`, `py-*`, `px-*`, `gap-*` for consistent margin and padding
- **Flexbox Utilities** – `d-flex`, `align-items-center`, `justify-content-center`, `flex-wrap`, `flex-column` for alignment
- **Display Utilities** – `d-none`, `d-lg-none`, `d-lg-block`, `d-md-flex` for responsive visibility
- **Text Utilities** – `text-center`, `mx-auto` for text alignment and centering
- **Sizing Utilities** – `w-100`, `h-100`, `min-vh-100` for full-width and full-height elements
- **Border Utilities** – Custom border styling combined with Bootstrap's border classes

### Interactive Elements
- **Buttons** – Multiple button styles including primary CTA, outline buttons, nav buttons, and project action buttons
- **Button Groups** – `.d-flex.flex-wrap.gap-3` for responsive button grouping in hero section
- **Hover Effects** – Bootstrap hover states combined with custom CSS transitions
- **Collapse Integration** – Offcanvas and accordion components use Bootstrap's JavaScript collapse functionality

### Responsive Behavior
- **Desktop-first approach** – Complex grid layouts visible on larger screens
- **Mobile optimizations** – Accordion replaces grid, offcanvas replaces horizontal nav, reduced padding
- **Breakpoint classes** – Proper use of `lg`, `md`, and `sm` breakpoints throughout
- **Touch-friendly targets** – Larger click areas for buttons and links on mobile devices

## Features Implemented

### HTML Features
- Semantic sectioning (hero, about, skills, projects, education, blog, contact, footer)
- Canvas element for animated background effect
- Terminal-style card component in hero section
- Custom data attributes for JavaScript interactions

### CSS Features
- Custom dark theme with CSS variables (terminal green accent, dark backgrounds)
- Custom cursor implementation (dot + ring with hover effects)
- Scroll reveal animations with staggered delays
- Terminal-style code typing animation area
- Animated scroll hint with mouse wheel icon
- Custom scrollbar styling
- Glassmorphism navbar with backdrop blur
- Hover effects on cards, buttons, and skill tags
- Responsive breakpoints for mobile, tablet, and desktop
- Grid layouts for skills, projects, and blog posts
- Deep dive feature card with problem/solution panels

### JavaScript Features
- **Data-driven rendering** – Skills, projects, process steps, courses, blog posts, and contact links are rendered from JavaScript arrays
- **Custom cursor** – Smooth-following dot and ring with scale effect on interactive elements
- **Typing animation** – Code-style text that types out line by line in the terminal card
- **Scroll reveal observer** – Elements fade and slide up when they enter viewport
- **Counter animation** – Stats numbers increment when scrolled into view
- **Contact form simulation** – Form submission shows success alert with loading state
- **Download CV button** – Interactive feedback simulation
- **Active nav link highlighting** – Updates based on scroll position using Intersection Observer
- **Project filtering** – Toggle between all, full-stack, backend, and real-time projects
- **Mobile accordion skills** – Bootstrap accordion rendered dynamically for mobile devices

## Component Breakdown by Language

### HTML Components
- Navbar with offcanvas mobile menu (`#mainNav`, `#mobileMenu`)
- Hero section with canvas background (`#hero`)
- Terminal card (`.terminal-card`)
- About section with stats grid (`#about`)
- Skills section (grid + accordion) (`#skills`)
- Process / How I Build section (`#process`)
- Projects section with filter tabs (`#projects`)
- Education section with coursework (`#education`)
- Blog section (`#blog`)
- Contact form (`#contact`)
- Footer (`.site-footer`)

### CSS Features
- `:root` variables for green accent, dark backgrounds, borders, and fonts
- Custom cursor (`.cursor-dot`, `.cursor-ring`)
- Terminal theme with green text, monospace fonts, and dark editor aesthetic
- Scroll reveal (`.reveal` class with staggered delays)
- Animations (blink dot, scroll bounce, wheel animation)
- Responsive grid (`.skills-master-grid` with Bootstrap grid integration)
- Hover effects (scale, border color changes, transitions)
- Glass navbar with backdrop blur on scroll

### JavaScript Functions
- `initCursor()` – Custom mouse follower animation
- `initNavbar()` – Scroll listener for navbar styling + active link tracking
- `initTypingCode()` – Terminal-style line-by-line text animation
- `initReveal()` – Intersection Observer for scroll-triggered animations
- `renderSkills()` – Renders skill categories and tags into grid
- `renderProjects()` – Renders project cards with features and stack tags
- `renderProcess()` – Renders the "How I Build" steps
- `renderCourses()` – Renders coursework items
- `renderBlog()` – Renders blog post cards
- `renderContact()` – Renders contact method links
- `initCounters()` – Animated number counters for stats
- `initContactForm()` – Handles form submission with loading + success simulation
- `initDownloadCV()` – Interactive CV button feedback
- Project filtering – Toggles project visibility based on category

## Responsive Behavior

- **Desktop (≥992px)** – Full grid layout, custom cursor, terminal card side-by-side with hero text, horizontal navbar
- **Tablet (768px–991px)** – Adjusted padding, terminal card full width below hero text, adjusted grid columns
- **Mobile (<768px)** – Skills accordion replaces desktop grid, offcanvas menu replaces horizontal nav, reduced padding, stacked column layouts

## Setup & Usage

1. Save all five files in the same directory:
   - `index.html`
   - `style.css`
   - `main.js`
   - `data.js`
2. Open `index.html` in a modern web browser
3. No build step or server required — pure static HTML/CSS/JS

## Customization

- **Update personal information** – Edit `data.js` to change skills, projects, blog posts, and contact links
- **Replace placeholder links** – Update `#` placeholders in `PROJECTS_DATA.demo`, `PROJECTS_DATA.github`, and `BLOG_DATA.link`
- **Change email/GitHub/LinkedIn** – Modify `CONTACT_DATA` and social links throughout `index.html`
- **Adjust colors** – Edit CSS variables in `:root` section of `style.css`
- **Modify Bootstrap theme** – Override Bootstrap variables by adding custom CSS after Bootstrap import

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
