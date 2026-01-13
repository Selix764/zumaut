# ⚡ ZUMAUT Quick Start Guide

## 🚀 Get Running in 3 Steps

### 1. Install Dependencies
```bash
cd zumaut-coffee
npm install
```

### 2. Start Development Server
```bash
npm run dev
```

### 3. Open in Browser
```
http://localhost:3000
```

That's it! The site is now running locally.

---

## 📱 Test the Site

### Homepage
- Open `http://localhost:3000`
- Click the language toggle (🇷🇴 🇭🇺 🇬🇧)
- Scroll to see animations
- Test on mobile (resize browser)

### Menu Page
- Click "Meniu" in navigation
- Switch languages to see translations
- Check all menu items display correctly

### About Page
- Click "Despre Noi" in navigation
- Read the brand story
- Verify all content loads

---

## 🎨 Customize Content

### Change Text
Edit `app/context/LanguageContext.tsx`:
```typescript
const translations = {
  ro: {
    'hero.tagline': 'Your new tagline',
  },
  // ...
};
```

### Update Menu Prices
Edit `app/menu/page.tsx`:
```typescript
{ name: 'Espresso', price: '10 lei' }
```

### Change Colors
Edit `app/globals.css`:
```css
--color-espresso: #4B3221;
--color-cream: #F3EBE7;
```

---

## 🖼️ Add Images

### 1. Create Images Folder
```bash
mkdir -p public/images/gallery
```

### 2. Add Your Images
```bash
# Copy your images
cp ~/my-photos/*.jpg public/images/gallery/
```

### 3. Update Gallery Component
Edit `app/components/Gallery.tsx`:
```tsx
import Image from 'next/image';

<Image 
  src="/images/gallery/coffee-1.jpg"
  alt="Coffee"
  fill
  className="object-cover"
/>
```

---

## 🌍 Test Languages

### Switch Language
1. Click 🇷🇴 for Romanian
2. Click 🇭🇺 for Hungarian  
3. Click 🇬🇧 for English

### Verify Translations
- Navigation changes
- Hero text changes
- Coffee descriptions change
- All pages update

---

## 📦 Build for Production

### Test Production Build
```bash
npm run build
npm start
```

### Check Build Output
```bash
# Should see:
✓ Compiled successfully
✓ Generating static pages (6/6)
Route (app)
├ ○ /
├ ○ /about
└ ○ /menu
```

---

## 🐛 Common Issues

### Port Already in Use
```bash
# Kill process on port 3000
lsof -ti:3000 | xargs kill -9

# Or use different port
npm run dev -- -p 3001
```

### Build Errors
```bash
# Clear cache
rm -rf .next
npm run build
```

### Missing Dependencies
```bash
# Reinstall
rm -rf node_modules package-lock.json
npm install
```

---

## 📚 Documentation Files

- `README.md` - Project overview
- `DEVELOPMENT.md` - Detailed development guide
- `DEPLOYMENT_CHECKLIST.md` - Pre-launch checklist
- `LANGUAGE_REFERENCE.md` - Translation system
- `VISUAL_GUIDE.md` - Design system
- `PROJECT_SUMMARY.md` - Complete summary

---

## 🎯 Next Steps

### Before Launch
1. ✅ Add real images
2. ✅ Update contact info
3. ✅ Add Google Maps
4. ✅ Add Spotify playlist
5. ✅ Test on mobile devices
6. ✅ Review all content

### Deploy
```bash
# Option 1: Vercel (easiest)
npm i -g vercel
vercel

# Option 2: Build manually
npm run build
# Upload .next folder to server
```

---

## 💡 Tips

### Hot Reload
- Changes auto-refresh in dev mode
- Edit any file and see instant updates
- No need to restart server

### Component Structure
```
app/
├── components/     ← Reusable UI components
├── context/        ← Global state (language)
├── menu/          ← Menu page
├── about/         ← About page
└── page.tsx       ← Homepage
```

### Styling
- Use Tailwind classes: `bg-cream text-espresso`
- Custom colors available: espresso, cream, terracotta, olive, jet
- Responsive: `md:text-lg lg:text-xl`

---

## 🆘 Need Help?

1. Check documentation files
2. Review code comments
3. Test in dev mode first
4. Check browser console for errors

---

## ✨ Features to Try

- [x] Language switching
- [x] Smooth animations
- [x] Mobile menu
- [x] Hover effects
- [x] Responsive design
- [x] SEO metadata

---

**Ready to customize!** 🎉

Start with adding your images and updating the contact information.

Made with ☕ and ❤️
