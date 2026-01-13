# 🌍 Language System Reference

## Overview

ZUMAUT supports three languages:
- 🇷🇴 **Romanian** (ro) - Default
- 🇭🇺 **Hungarian** (hu)
- 🇬🇧 **English** (en)

## How It Works

The language system uses React Context to manage state across the entire application.

### Architecture

```
LanguageContext.tsx
├── Stores current language
├── Provides translation function
└── Contains all translations

Components
└── Use useLanguage() hook to access translations
```

## Using Translations in Components

### Basic Usage

```tsx
'use client';

import { useLanguage } from '../context/LanguageContext';

export default function MyComponent() {
  const { t } = useLanguage();
  
  return (
    <div>
      <h1>{t('nav.home')}</h1>
      <p>{t('hero.description')}</p>
    </div>
  );
}
```

### Getting Current Language

```tsx
const { language } = useLanguage();

// language will be 'ro', 'hu', or 'en'
```

### Changing Language

```tsx
const { setLanguage } = useLanguage();

<button onClick={() => setLanguage('hu')}>
  Magyar
</button>
```

## Translation Keys

### Navigation
```
nav.home        → Home / Acasă / Kezdőlap
nav.menu        → Menu / Meniu / Menü
nav.about       → About / Despre Noi / Rólunk
```

### Hero Section
```
hero.tagline        → "Zoom Out. Take a Moment."
hero.description    → Main description text
hero.visit          → "Visit Us" button
hero.menu           → "See Menu" button
```

### Coffee Section
```
coffee.title            → Section title
coffee.subtitle         → Section subtitle
coffee.recommended      → "Recommended" badge
coffee.espresso         → "Espresso"
coffee.espresso.desc    → Espresso description
coffee.cappuccino       → "Cappuccino"
coffee.cappuccino.desc  → Cappuccino description
coffee.flatwhite        → "Flat White"
coffee.flatwhite.desc   → Flat White description
coffee.coldbrew         → "Cold Brew"
coffee.coldbrew.desc    → Cold Brew description
```

### Gallery
```
gallery.title     → "ZUMAUT Atmosphere"
gallery.subtitle  → "A place where you feel at home"
```

### Music Section
```
music.title        → "Sounds We Love"
music.description  → Description text
music.playlist     → "Listen to Our Playlist"
```

### Location
```
location.title     → "Come Meet Us"
location.address   → Full address
location.hours     → "Hours"
location.weekdays  → Weekday hours
location.weekend   → Weekend hours
```

## Adding New Translations

### Step 1: Add to Context

Edit `app/context/LanguageContext.tsx`:

```typescript
const translations = {
  ro: {
    'section.new.key': 'Text în română',
  },
  hu: {
    'section.new.key': 'Szöveg magyarul',
  },
  en: {
    'section.new.key': 'Text in English',
  },
};
```

### Step 2: Use in Component

```tsx
const { t } = useLanguage();

<p>{t('section.new.key')}</p>
```

## Best Practices

### ✅ DO

- Use descriptive key names: `coffee.espresso.desc`
- Group related translations: `nav.*`, `coffee.*`
- Keep translations consistent across languages
- Test all three languages before deploying

### ❌ DON'T

- Hardcode text in components
- Use generic keys like `text1`, `text2`
- Forget to add translations for all languages
- Use HTML in translation strings

## Complex Content

### Dynamic Content

For content that changes based on language:

```tsx
const { language } = useLanguage();

const menuData = {
  ro: { /* Romanian menu */ },
  hu: { /* Hungarian menu */ },
  en: { /* English menu */ },
};

const menu = menuData[language];
```

See `app/menu/page.tsx` and `app/about/page.tsx` for examples.

### Interpolation

For dynamic values in translations:

```tsx
// In translations
'welcome.message': 'Welcome, {name}!'

// In component
const message = t('welcome.message').replace('{name}', userName);
```

## Language Toggle Component

The `LanguageToggle` component shows all three languages with flags:

```tsx
<LanguageToggle />
```

Features:
- Visual feedback for current language
- Smooth transitions
- Accessible
- Mobile-friendly

## Testing Translations

### Manual Testing

1. Click each language in the toggle
2. Navigate through all pages
3. Verify all text changes correctly
4. Check for missing translations

### Common Issues

**Text doesn't change:**
- Check if component uses `useLanguage()`
- Verify translation key exists
- Check for typos in key names

**Missing translations:**
- Add to all three language objects
- Rebuild the app

## Translation Guidelines

### Romanian (ro)
- Formal but friendly tone
- Use diacritics: ă, â, î, ș, ț
- Address customers with "tu" (informal)

### Hungarian (hu)
- Warm, welcoming tone
- Use proper Hungarian grammar
- Maintain consistency with Romanian version

### English (en)
- Casual, friendly tone
- American English spelling
- Keep it simple and clear

## Future Enhancements

Possible improvements:
- [ ] Add more languages
- [ ] Persist language choice in localStorage
- [ ] Add language detection based on browser
- [ ] Create admin panel for translations
- [ ] Add translation validation

## Quick Reference

```tsx
// Import
import { useLanguage } from '../context/LanguageContext';

// Get translation function
const { t } = useLanguage();

// Get current language
const { language } = useLanguage();

// Change language
const { setLanguage } = useLanguage();
setLanguage('hu');

// Use translation
<h1>{t('nav.home')}</h1>
```

---

Need help? Check `app/context/LanguageContext.tsx` for all available translations.
