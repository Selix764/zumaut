'use client';

import Link from 'next/link';
import { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import LanguageToggle from './LanguageToggle';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useLanguage();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-cream/95 backdrop-blur-sm border-b border-espresso/10">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="font-serif text-2xl font-bold text-espresso hover:text-olive transition-colors">
            ZUMAUT
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-espresso hover:text-olive transition-colors">
              {t('nav.home')}
            </Link>
            <Link href="/menu" className="text-espresso hover:text-olive transition-colors">
              {t('nav.menu')}
            </Link>
            <Link href="/about" className="text-espresso hover:text-olive transition-colors">
              {t('nav.about')}
            </Link>
            <LanguageToggle />
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-espresso"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4 flex flex-col gap-4">
            <Link href="/" onClick={() => setIsOpen(false)} className="text-espresso hover:text-olive transition-colors">
              {t('nav.home')}
            </Link>
            <Link href="/menu" onClick={() => setIsOpen(false)} className="text-espresso hover:text-olive transition-colors">
              {t('nav.menu')}
            </Link>
            <Link href="/about" onClick={() => setIsOpen(false)} className="text-espresso hover:text-olive transition-colors">
              {t('nav.about')}
            </Link>
            <div className="pt-2">
              <LanguageToggle />
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
