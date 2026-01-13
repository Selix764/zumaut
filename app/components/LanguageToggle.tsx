'use client';

import { useLanguage } from '../context/LanguageContext';
import { motion } from 'framer-motion';

const languages = [
  { code: 'ro' as const, label: 'RO', flag: '🇷🇴' },
  { code: 'hu' as const, label: 'HU', flag: '🇭🇺' },
  { code: 'en' as const, label: 'EN', flag: '🇬🇧' },
];

export default function LanguageToggle() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center gap-2 bg-espresso/5 rounded-full p-1">
      {languages.map((lang) => (
        <motion.button
          key={lang.code}
          onClick={() => setLanguage(lang.code)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={`
            relative px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-300
            ${language === lang.code 
              ? 'bg-espresso text-cream' 
              : 'text-espresso/60 hover:text-espresso'
            }
          `}
        >
          <span className="flex items-center gap-1.5">
            <span className="text-base">{lang.flag}</span>
            <span>{lang.label}</span>
          </span>
        </motion.button>
      ))}
    </div>
  );
}
