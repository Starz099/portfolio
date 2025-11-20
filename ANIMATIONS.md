# Portfolio Animations & Micro-interactions

This document outlines all the animations and micro-interactions implemented in the portfolio, inspired by modern web design patterns.

## 🎨 Animation Components Created

### 1. AnimatedSection

**Location:** `src/components/ui/AnimatedSection.tsx`
**Purpose:** Fade-in animation on scroll for sections
**Implementation:**

- Uses IntersectionObserver API
- Triggers when element comes into viewport
- Applied to all major sections on homepage

### 2. Magnetic

**Location:** `src/components/ui/Magnetic.tsx`
**Purpose:** Elements subtly move toward cursor on hover
**Features:**

- Configurable attraction strength
- Smooth transform transitions
- Applied to social media icons

### 3. CardTilt

**Location:** `src/components/ui/CardTilt.tsx`
**Purpose:** 3D tilt effect based on mouse position
**Features:**

- Perspective-based 3D transforms
- Configurable max tilt angle
- Applied to project cards

### 4. Floating

**Location:** `src/components/ui/Floating.tsx`
**Purpose:** Gentle floating up/down animation
**Features:**

- Customizable duration, delay, and distance
- CSS keyframe animation
- Applied to Hero name and skill badges

### 5. TextReveal

**Location:** `src/components/ui/TextReveal.tsx`
**Purpose:** Word-by-word reveal animation on scroll
**Features:**

- Splits text into individual words
- Staggered animation timing
- Applied to section headings

### 6. CursorFollower

**Location:** `src/components/ui/CursorFollower.tsx`
**Purpose:** Custom circular cursor that follows mouse
**Features:**

- Smooth position tracking
- mix-blend-screen for visual effect
- Global implementation in root layout

### 7. RippleButton

**Location:** `src/components/ui/RippleButton.tsx`
**Purpose:** Material Design ripple effect on click
**Features:**

- Dynamic ripple generation
- Auto-cleanup after animation
- Applied to contact form submit button

### 8. PageTransition

**Location:** `src/components/ui/PageTransition.tsx`
**Purpose:** Smooth fade transitions between pages
**Features:**

- Framer Motion powered
- Fade + slide animation
- Applied globally to all routes

## 📍 Where Animations Are Applied

### Homepage (`/`)

- **Hero Section:**
  - Floating animation on "Hi, I'm Mayank"
  - TextReveal on subtitle
- **All Sections:**
  - AnimatedSection wrapper with staggered delays
  - Fade-in on scroll

- **Projects:**
  - TextReveal on "Projects" heading
  - CardTilt on each project card (3D effect on mouse move)
- **Skills:**
  - TextReveal on "Skills" heading
  - Floating on skill badges (staggered)
- **Socials:**
  - Magnetic effect on all social icons

### Contact Page (`/contact`)

- RippleButton on form submit button

### Global

- CursorFollower (custom cursor throughout site)
- PageTransition (smooth navigation between pages)
- Background gradient (pinkish radial gradient)

## 🎭 Animation Timing & Delays

```typescript
// AnimatedSection delays (homepage)
Hero: 100ms
Description: 200ms
Projects: 300ms
Skills: 400ms
Socials: 500ms

// TextReveal delays
Section Headings: 100ms
Hero Subtitle: 300ms

// Floating animations
Hero Name: 4s duration, 8px distance
Skills: 3-4s duration (varied), 6px distance, 0-600ms delay

// PageTransition
Duration: 400ms
Easing: cubic-bezier(0.22, 1, 0.36, 1)
```

## 🎨 Visual Effects

### Color Scheme

- **Light Theme:** Subtle purple/pink accents with oklch colors
- **Dark Theme:** Deep background (oklch(0.10 0 0)) with high contrast
- **Gradient:** Pinkish radial gradient overlay

### Hover States

- Scale transforms (1.02-1.10)
- Border color transitions
- Shadow enhancements
- Magnetic attraction

### Performance

- CSS transforms for GPU acceleration
- RequestAnimationFrame for smooth animations
- Debounced scroll listeners
- Cleanup on unmount

## 🚀 Key Features

1. **Scroll-based animations** - Elements fade in as you scroll
2. **Mouse-tracking effects** - Cursor follower, magnetic hover, card tilt
3. **Click interactions** - Ripple effects on buttons
4. **Text animations** - Word-by-word reveals
5. **Floating elements** - Subtle continuous motion
6. **Page transitions** - Smooth navigation between routes

## 📦 Dependencies

```json
{
  "framer-motion": "^11.x",
  "lenis": "^1.x" (smooth scrolling)
}
```

## 🎯 Inspiration

These animations were inspired by modern portfolio sites like chanhdai.com, focusing on:

- Subtle, tasteful animations
- Performance-first approach
- Enhancing UX without overwhelming
- Professional, polished feel
- Responsive and accessible

## 🔧 Customization

All animation components accept props for customization:

- Duration, delay, distance
- Easing functions
- Tilt angles
- Magnetic strength

Modify in component files or pass props when using components.
