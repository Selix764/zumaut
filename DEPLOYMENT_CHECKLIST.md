# 🚀 ZUMAUT Deployment Checklist

## Before Going Live

### ✅ Content

- [ ] Add real coffee shop images to `/public/images/`
- [ ] Update Gallery component with actual images
- [ ] Add Google Maps embed with correct location
- [ ] Add real Spotify playlist link
- [ ] Verify all menu items and prices
- [ ] Update phone number in Location component
- [ ] Add real Instagram and Facebook links
- [ ] Review all text content in all 3 languages

### ✅ SEO & Meta

- [ ] Update `app/layout.tsx` metadata
- [ ] Add favicon (replace `app/favicon.ico`)
- [ ] Add Open Graph images
- [ ] Create `robots.txt`
- [ ] Create `sitemap.xml`
- [ ] Add Google Analytics (optional)

### ✅ Performance

- [ ] Optimize all images (WebP format, proper sizes)
- [ ] Test on mobile devices
- [ ] Test on different browsers
- [ ] Check loading speed with Lighthouse
- [ ] Verify all animations are smooth

### ✅ Functionality

- [ ] Test language toggle on all pages
- [ ] Test all navigation links
- [ ] Test external links (Spotify, Maps, Social)
- [ ] Verify responsive design on all screen sizes
- [ ] Test on iOS and Android

### ✅ Technical

- [ ] Run `npm run build` successfully
- [ ] Fix any TypeScript errors
- [ ] Fix any console warnings
- [ ] Set up domain name
- [ ] Configure SSL certificate
- [ ] Set up email (if needed)

## Quick Fixes Needed

### 1. Add Real Images

```bash
# Create images directory
mkdir -p public/images/gallery

# Add your images there, then update Gallery.tsx
```

### 2. Google Maps

Get embed code from: https://www.google.com/maps/place/Calea+Călărași+323

Replace placeholder in `app/components/Location.tsx`

### 3. Spotify Playlist

1. Create a public playlist
2. Get shareable link
3. Update `app/components/MusicSection.tsx`

### 4. Contact Info

Update in `app/components/Location.tsx`:
- Phone number
- Email (if needed)
- Opening hours (verify they're correct)

### 5. Social Media

Update in `app/components/Footer.tsx`:
- Instagram handle
- Facebook page
- Any other social links

## Deployment Steps

### Option 1: Vercel (Easiest)

```bash
# Install Vercel CLI
npm i -g vercel

# Login
vercel login

# Deploy
vercel --prod
```

### Option 2: Netlify

1. Push to GitHub
2. Connect repository in Netlify
3. Build command: `npm run build`
4. Publish directory: `.next`

### Option 3: Custom Server

```bash
# Build
npm run build

# Start
npm start

# Or use PM2
pm2 start npm --name "zumaut" -- start
```

## Post-Deployment

- [ ] Test live site on multiple devices
- [ ] Submit to Google Search Console
- [ ] Share on social media
- [ ] Monitor analytics
- [ ] Set up error tracking (Sentry, etc.)

## Environment Variables (if needed)

Create `.env.production`:

```env
NEXT_PUBLIC_SITE_URL=https://zumaut.ro
NEXT_PUBLIC_GOOGLE_MAPS_KEY=your_key
```

## Domain Setup

1. Purchase domain (e.g., zumaut.ro)
2. Point DNS to hosting provider
3. Configure SSL certificate
4. Update `NEXT_PUBLIC_SITE_URL`

## Maintenance

### Regular Updates

- Update menu prices seasonally
- Refresh gallery images monthly
- Update Spotify playlist weekly
- Check for broken links monthly

### Technical Updates

```bash
# Update dependencies
npm update

# Check for security issues
npm audit

# Rebuild
npm run build
```

## Support Contacts

- **Hosting**: [Your hosting provider]
- **Domain**: [Your domain registrar]
- **Developer**: [Your contact]

---

Good luck with the launch! 🎉☕
