# ZUMAUT Development Guide

## 🎯 Quick Start

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## 🌍 Language System

The site uses a React Context for language management. All translations are centralized in `app/context/LanguageContext.tsx`.

### Adding New Translations

1. Open `app/context/LanguageContext.tsx`
2. Add your key to all three language objects (ro, hu, en):

```typescript
const translations = {
  ro: {
    'your.new.key': 'Textul în română',
    // ...
  },
  hu: {
    'your.new.key': 'Szöveg magyarul',
    // ...
  },
  en: {
    'your.new.key': 'Text in English',
    // ...
  },
};
```

3. Use in components:

```tsx
const { t } = useLanguage();
return <p>{t('your.new.key')}</p>;
```

## 🎨 Styling Guide

### Using Theme Colors

```tsx
// Tailwind classes
<div className="bg-cream text-espresso border-olive">

// Available colors:
// - espresso (#4B3221)
// - cream (#F3EBE7)
// - terracotta (#D99C82)
// - olive (#8A8F4F)
// - jet (#1A1A1A)
```

### Typography

```tsx
// Serif (headings)
<h1 className="font-serif">

// Sans-serif (body)
<p className="font-sans">
```

## 🎬 Animations

Using Framer Motion for smooth animations:

```tsx
import { motion } from 'framer-motion';

<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
>
  Content
</motion.div>
```

### Common Animation Patterns

**Fade in on scroll:**
```tsx
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6 }}
>
```

**Hover effect:**
```tsx
<motion.div
  whileHover={{ scale: 1.05 }}
  transition={{ duration: 0.3 }}
>
```

## 📸 Adding Images

### Gallery Images

1. Add images to `/public/images/gallery/`
2. Update `app/components/Gallery.tsx`:

```tsx
import Image from 'next/image';

const images = [
  { id: 1, src: '/images/gallery/coffee-1.jpg', alt: 'Coffee close-up' },
  // ...
];

// In component:
<Image 
  src={image.src}
  alt={image.alt}
  fill
  className="object-cover"
  sizes="(max-width: 768px) 50vw, 33vw"
/>
```

### Optimizing Images

Next.js automatically optimizes images. Best practices:
- Use WebP or AVIF format when possible
- Keep original size reasonable (max 2000px width)
- Use `priority` prop for above-the-fold images

## 🗺️ Google Maps Integration

Update `app/components/Location.tsx`:

```tsx
<iframe
  src="https://www.google.com/maps/embed?pb=YOUR_EMBED_CODE"
  width="100%"
  height="100%"
  style={{ border: 0 }}
  allowFullScreen
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
/>
```

Get embed code from [Google Maps](https://www.google.com/maps).

## 🎵 Spotify Integration

### Option 1: Playlist Embed

```tsx
<iframe
  src="https://open.spotify.com/embed/playlist/YOUR_PLAYLIST_ID"
  width="100%"
  height="380"
  frameBorder="0"
  allow="encrypted-media"
/>
```

### Option 2: Direct Link (Current)

Update the link in `app/components/MusicSection.tsx`:

```tsx
<a href="https://open.spotify.com/playlist/YOUR_PLAYLIST_ID">
```

## 📱 Responsive Design

Mobile-first approach with Tailwind breakpoints:

```tsx
<div className="
  text-base          // mobile
  md:text-lg         // tablet (768px+)
  lg:text-xl         // desktop (1024px+)
">
```

## 🔧 Common Tasks

### Update Opening Hours

Edit `app/context/LanguageContext.tsx`:

```typescript
'location.weekdays': 'Luni - Vineri: 8:00 - 20:00',
'location.weekend': 'Sâmbătă - Duminică: 9:00 - 21:00',
```

### Update Menu Prices

Edit `app/menu/page.tsx` in the `menuCategories` object.

### Change Social Links

Edit `app/components/Footer.tsx`:

```tsx
<a href="https://instagram.com/your_handle">
<a href="https://facebook.com/your_page">
```

## 🚀 Deployment

### Vercel (Recommended)

1. Push code to GitHub
2. Import project in Vercel
3. Deploy automatically

### Manual Deployment

```bash
npm run build
npm start
```

Or use Docker, AWS, etc.

## 🐛 Troubleshooting

### Build Errors

```bash
# Clear cache
rm -rf .next
npm run build
```

### Type Errors

```bash
# Check types
npx tsc --noEmit
```

### Styling Issues

```bash
# Rebuild Tailwind
npm run dev
```

## 📊 Performance Tips

1. **Images**: Always use `next/image`
2. **Fonts**: Already optimized with `next/font`
3. **Animations**: Keep them subtle and performant
4. **Code splitting**: Automatic with Next.js App Router

## 🔐 Environment Variables

Create `.env.local` for sensitive data:

```env
NEXT_PUBLIC_GOOGLE_MAPS_KEY=your_key
NEXT_PUBLIC_INSTAGRAM_TOKEN=your_token
```

Access in code:
```typescript
process.env.NEXT_PUBLIC_GOOGLE_MAPS_KEY
```

## 📝 Code Style

- Use TypeScript for type safety
- Follow React best practices
- Keep components small and focused
- Use meaningful variable names
- Comment complex logic

---

Happy coding! ☕
