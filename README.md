<div align="center">

# 🏋️ TRIFIT Fitness Centre — Premium Website

A high-end, dark-themed fitness website built for **TRIFIT Fitness Centre, Wagholi, Pune** to attract new gym members and showcase premium facilities.

![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-7-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-12-FF0055?style=for-the-badge&logo=framer&logoColor=white)

</div>

---

## ⚡ Live Preview

live link https://trifit-wagholi.netlify.app/

> **Run locally:** `npm install && npm run dev` → [http://localhost:5173](http://localhost:5173)

---

## 📸 Screenshots

<div align="center">

| Hero Section | Services |
|:---:|:---:|
| ![Hero](https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=500&q=60) | ![Services](https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=500&q=60) |

</div>

---

## 🎯 Features

| Feature | Description |
|---------|-------------|
| 🌙 **Dark Luxury Theme** | Premium `#0a0a0a` background with red `#ff2c2c` accent |
| 📱 **Fully Responsive** | Mobile-first design with hamburger menu |
| ✨ **Smooth Animations** | Framer Motion scroll reveals + hover effects |
| 🪟 **Glassmorphism Navbar** | Sticky nav with `backdrop-blur-xl` on scroll |
| 💳 **Pricing Plans** | Three-tier INR pricing (Starter / Pro / Elite) |
| 🧮 **BMI Calculator** | Interactive health check with program recommendations |
| 📅 **Class Schedule** | Weekly class timetable (Zumba, Yoga, HIIT, CrossFit) |
| 🗺️ **Google Maps** | Embedded location map for Wagholi, Pune |
| 💬 **WhatsApp Integration** | Floating CTA button with pre-filled message |
| ⭐ **Testimonials** | Customer reviews with star ratings |
| 🔄 **Transformations** | Before/after member results with stats |
| 📸 **Gallery & Instagram** | Responsive image grids with hover zoom |
| ❓ **Animated FAQ** | Accordion with smooth expand/collapse |

---

## 🛠️ Tech Stack

```
Frontend:     React 19 + JSX
Bundler:      Vite 7
Styling:      Tailwind CSS 4
Animations:   Framer Motion
Icons:        React Icons
Scroll:       React Scroll
Counters:     React CountUp + Intersection Observer
```

---

## 📁 Project Structure

```
trifit/
├── index.html                # Entry HTML with Google Fonts & SEO meta
├── vite.config.js            # Vite + Tailwind plugin config
├── postcss.config.js         # PostCSS override
├── package.json
└── src/
    ├── main.jsx              # React entry point
    ├── App.jsx               # Root component with all sections
    ├── index.css             # Global CSS: theme tokens, premium utilities
    └── components/
        ├── Navbar.jsx        # Sticky glassmorphism navbar
        ├── Hero.jsx          # Cinematic hero with stats & trust badges
        ├── About.jsx         # Gym intro with animated counters
        ├── Services.jsx      # 5 training program cards
        ├── Amenities.jsx     # Facility showcase cards
        ├── Transformations.jsx  # Before/after member results
        ├── Pricing.jsx       # 3-tier membership plans (INR)
        ├── Schedule.jsx      # Weekly class schedule table
        ├── Trainers.jsx      # Trainer profile cards
        ├── Gallery.jsx       # Responsive masonry photo grid
        ├── Instagram.jsx     # Social media grid with overlay
        ├── Testimonials.jsx  # Customer review cards
        ├── BMICalculator.jsx # Interactive BMI tool
        ├── FAQ.jsx           # Accordion FAQ section
        ├── Contact.jsx       # Contact info + Google Map embed
        ├── Footer.jsx        # Links, socials, scroll-to-top
        └── WhatsAppButton.jsx  # Floating WhatsApp CTA
```

---

## 🎨 Design System

| Token | Value | Usage |
|-------|-------|-------|
| `--color-dark` | `#0a0a0a` | Page background |
| `--color-card` | `#141414` | Card backgrounds |
| `--color-accent` | `#ff2c2c` | CTAs, highlights, icons |
| `--color-text` | `#f3f4f6` | Primary text |
| `--color-text-muted` | `#9ca3af` | Secondary text |
| `--font-montserrat` | Montserrat | Headings |
| `--font-poppins` | Poppins | Body text |

### Custom CSS Utilities

- `premium-card` — Gradient card with border glow on hover
- `glow-hover` — Radial gradient that follows cursor
- `gradient-text` — Red gradient text effect
- `ambient-glow` — Subtle red radial glow on sections
- `section-divider` — Red gradient line between sections

---

## 🚀 Getting Started

```bash
# Clone the repository
git clone https://github.com/swapnilhingane18/GymWebsite.git

# Navigate to project
cd GymWebsite

# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build
```

---

## 🗂️ Sections (16 Total)

1. **Navbar** — Sticky, glassmorphism, mobile responsive
2. **Hero** — Full-screen cinematic with background image
3. **About** — Animated stat counters (Rating, Reviews, Equipment, Trainers)
4. **Services** — Strength, Personal Training, Fat Loss, Muscle Building, Diet
5. **Amenities** — Equipment, Cardio Zone, Training Area, Locker Rooms
6. **Transformations** — Before/after member success stories
7. **Pricing** — Starter ₹999 / Pro ₹1,999 / Elite ₹3,499
8. **Schedule** — Weekly Zumba, Yoga, HIIT, CrossFit classes
9. **Trainers** — 4 expert trainer profiles with specializations
10. **Gallery** — Responsive gym photo grid with zoom hover
11. **Instagram** — Social feed with likes/comments overlay
12. **Testimonials** — Member reviews with star ratings
13. **BMI Calculator** — Height/weight input with health recommendations
14. **FAQ** — 6 common questions with animated accordion
15. **Contact** — Phone, address, email + embedded Google Map
16. **Footer** — Quick links, socials, scroll-to-top button

---

## 👤 Author

**Swapnil Hingane**
- GitHub: [@swapnilhingane18](https://github.com/swapnilhingane18)

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

<div align="center">

⭐ **Star this repo if you found it useful!** ⭐

</div>
