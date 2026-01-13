'use client';

import { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'ro' | 'hu' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  ro: {
    // Navigation
    'nav.home': 'Acasă',
    'nav.menu': 'Meniu',
    'nav.about': 'Despre Noi',
    
    // Hero
    'hero.tagline': 'Zoom Out. Take a Moment.',
    'hero.description': 'Un loc unde timpul încetinește, cafeaua e bună, muzica e perfectă și atmosfera te îmbrățișează.',
    'hero.visit': 'Vizitează-ne',
    'hero.menu': 'Vezi Meniul',
    
    // Coffee Section
    'coffee.title': 'Cafeaua Noastră',
    'coffee.subtitle': 'Folosim cafea Julius Meinl, pregătită cu atenție și pasiune.',
    'coffee.recommended': 'Recomandat',
    'coffee.espresso': 'Espresso',
    'coffee.espresso.desc': 'Intens, aromat, perfect pentru un moment de pauză.',
    'coffee.cappuccino': 'Cappuccino',
    'coffee.cappuccino.desc': 'Cremos, echilibrat, cu spumă fină de lapte.',
    'coffee.flatwhite': 'Flat White',
    'coffee.flatwhite.desc': 'Smooth, velvety, pentru cunoscători.',
    'coffee.coldbrew': 'Cold Brew',
    'coffee.coldbrew.desc': 'Răcoritor, dulce natural, perfect pentru vară.',
    
    // Gallery
    'gallery.title': 'Atmosfera ZUMAUT',
    'gallery.subtitle': 'Un loc unde te simți acasă',
    
    // Music
    'music.title': 'Sounds We Love',
    'music.description': 'Muzica face parte din identitatea noastră. Indie, chill, acoustic, reggae-chill — sunete care te ajută să te relaxezi și să te bucuri de moment.',
    'music.playlist': 'Ascultă Playlist-ul Nostru',
    
    // Location
    'location.title': 'Vino să ne Cunoști',
    'location.address': 'Calea Călărași 323, Sector 3, București',
    'location.hours': 'Program',
    'location.weekdays': 'Luni - Vineri: 8:00 - 20:00',
    'location.weekend': 'Sâmbătă - Duminică: 9:00 - 21:00',
  },
  hu: {
    // Navigation
    'nav.home': 'Kezdőlap',
    'nav.menu': 'Menü',
    'nav.about': 'Rólunk',
    
    // Hero
    'hero.tagline': 'Zoom Out. Vegyél egy Pillanatot.',
    'hero.description': 'Egy hely, ahol lelassul az idő, a kávé finom, a zene tökéletes és a hangulat átölel.',
    'hero.visit': 'Látogass el',
    'hero.menu': 'Menü Megtekintése',
    
    // Coffee Section
    'coffee.title': 'A Mi Kávénk',
    'coffee.subtitle': 'Julius Meinl kávét használunk, gondosan és szenvedéllyel készítve.',
    'coffee.recommended': 'Ajánlott',
    'coffee.espresso': 'Eszpresszó',
    'coffee.espresso.desc': 'Intenzív, aromás, tökéletes egy kis szünetre.',
    'coffee.cappuccino': 'Cappuccino',
    'coffee.cappuccino.desc': 'Krémes, kiegyensúlyozott, finom tejhabbal.',
    'coffee.flatwhite': 'Flat White',
    'coffee.flatwhite.desc': 'Sima, bársonyos, ismerősöknek.',
    'coffee.coldbrew': 'Cold Brew',
    'coffee.coldbrew.desc': 'Frissítő, természetesen édes, tökéletes nyárra.',
    
    // Gallery
    'gallery.title': 'ZUMAUT Hangulat',
    'gallery.subtitle': 'Egy hely, ahol otthon érzed magad',
    
    // Music
    'music.title': 'Sounds We Love',
    'music.description': 'A zene a személyiségünk része. Indie, chill, akusztikus, reggae-chill — hangok, amelyek segítenek ellazulni és élvezni a pillanatot.',
    'music.playlist': 'Hallgasd a Lejátszási Listánkat',
    
    // Location
    'location.title': 'Gyere és Ismerd Meg',
    'location.address': 'Calea Călărași 323, 3. Kerület, Bukarest',
    'location.hours': 'Nyitvatartás',
    'location.weekdays': 'Hétfő - Péntek: 8:00 - 20:00',
    'location.weekend': 'Szombat - Vasárnap: 9:00 - 21:00',
  },
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.menu': 'Menu',
    'nav.about': 'About Us',
    
    // Hero
    'hero.tagline': 'Zoom Out. Take a Moment.',
    'hero.description': 'A place where time slows down, coffee is good, music is perfect, and the atmosphere embraces you.',
    'hero.visit': 'Visit Us',
    'hero.menu': 'See Menu',
    
    // Coffee Section
    'coffee.title': 'Our Coffee',
    'coffee.subtitle': 'We use Julius Meinl coffee, prepared with care and passion.',
    'coffee.recommended': 'Recommended',
    'coffee.espresso': 'Espresso',
    'coffee.espresso.desc': 'Intense, aromatic, perfect for a moment of pause.',
    'coffee.cappuccino': 'Cappuccino',
    'coffee.cappuccino.desc': 'Creamy, balanced, with fine milk foam.',
    'coffee.flatwhite': 'Flat White',
    'coffee.flatwhite.desc': 'Smooth, velvety, for connoisseurs.',
    'coffee.coldbrew': 'Cold Brew',
    'coffee.coldbrew.desc': 'Refreshing, naturally sweet, perfect for summer.',
    
    // Gallery
    'gallery.title': 'ZUMAUT Atmosphere',
    'gallery.subtitle': 'A place where you feel at home',
    
    // Music
    'music.title': 'Sounds We Love',
    'music.description': 'Music is part of our identity. Indie, chill, acoustic, reggae-chill — sounds that help you relax and enjoy the moment.',
    'music.playlist': 'Listen to Our Playlist',
    
    // Location
    'location.title': 'Come Meet Us',
    'location.address': 'Calea Călărași 323, Sector 3, Bucharest',
    'location.hours': 'Hours',
    'location.weekdays': 'Monday - Friday: 8:00 AM - 8:00 PM',
    'location.weekend': 'Saturday - Sunday: 9:00 AM - 9:00 PM',
  },
};

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('ro');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations.ro] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
}
