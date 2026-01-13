# ZUMAUT Coffee Shop Website

A modern, multilingual website for ZUMAUT - an independent coffee shop in Bucharest.

## 🎨 Features

- **Multilingual Support**: Romanian, Hungarian, and English
- **Smooth Animations**: Framer Motion for subtle, elegant transitions
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Modern Stack**: Next.js 16 with App Router
- **SEO Optimized**: Proper metadata and semantic HTML

## 🚀 Getting Started

### Prerequisites

- Node.js 20.9.0 or higher (currently using 18.19.1 - upgrade recommended)
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## 📁 Project Structure

```
zumaut-coffee/
├── app/
│   ├── components/
│   │   ├── Navigation.tsx       # Main navigation with language toggle
│   │   ├── Hero.tsx             # Hero section
│   │   ├── FeaturedCoffees.tsx  # Coffee showcase
│   │   ├── CoffeeCard.tsx       # Individual coffee card
│   │   ├── Gallery.tsx          # Image gallery
│   │   ├── MusicSection.tsx     # Music/Spotify section
│   │   ├── Location.tsx         # Location & hours
│   │   ├── Footer.tsx           # Site footer
│   │   └── LanguageToggle.tsx   # Language switcher
│   ├── context/
│   │   └── LanguageContext.tsx  # Language state management
│   ├── menu/
│   │   └── page.tsx             # Menu page
│   ├── about/
│   │   └── page.tsx             # About page
│   ├── layout.tsx               # Root layout
│   ├── page.tsx                 # Homepage
│   └── globals.css              # Global styles
└── public/
    └── images/                  # Add your images here
```

## 🎨 Design System

### Colors
- **Espresso Brown**: `#4B3221` - Primary text and accents
- **Creamy Beige**: `#F3EBE7` - Background
- **Muted Terracotta**: `#D99C82` - Accent color
- **Olive Green**: `#8A8F4F` - Secondary accent
- **Jet Black**: `#1A1A1A` - Deep contrast

### Typography
- **Headings**: Playfair Display (serif)
- **Body**: Montserrat (sans-serif)

## 🌍 Language Support

The site supports three languages:
- 🇷🇴 Romanian (default)
- 🇭🇺 Hungarian
- 🇬🇧 English

Language toggle is available in the navigation bar on all pages.

## 📝 Customization

### Adding Images

1. Add your images to `/public/images/`
2. Update the Gallery component to use real images:

```tsx
<Image 
  src="/images/your-image.jpg" 
  alt="Description"
  fill
  className="object-cover"
/>
```

### Updating Content

All translations are in `app/context/LanguageContext.tsx`. Edit the `translations` object to update text.

### Changing Colors

Update colors in `app/globals.css` under the `@theme inline` section.

## 🚀 Deployment

### Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Build for Production

```bash
npm run build
npm start
```

## 📦 Dependencies

- **Next.js 16**: React framework
- **React 19**: UI library
- **Tailwind CSS**: Styling
- **Framer Motion**: Animations
- **TypeScript**: Type safety

## 🎯 TODO

- [ ] Add real images to gallery
- [ ] Connect Google Maps embed
- [ ] Add actual Spotify playlist link
- [ ] Set up contact form
- [ ] Add Instagram feed integration
- [ ] Optimize images with next/image

## 📄 License

Private project for ZUMAUT Coffee Shop.

## 🤝 Support

For questions or support, contact the development team.

---

Made with ☕ and ❤️ for ZUMAUT
