'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-cream to-terracotta/20">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-olive rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-terracotta rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <h1 className="font-serif text-6xl md:text-8xl font-bold text-espresso mb-6">
            ZUMAUT
          </h1>
          <p className="font-serif text-2xl md:text-3xl text-olive mb-8 italic">
            {t('hero.tagline')}
          </p>
          <p className="text-lg md:text-xl text-espresso/80 max-w-2xl mx-auto mb-12 leading-relaxed">
            {t('hero.description')}
          </p>
        </motion.div>

        <div
          
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#location"
            className="px-8 py-4 bg-espresso text-cream rounded-full hover:bg-olive transition-all duration-300 hover:scale-105"
          >
            {t('hero.visit')}
          </a>
          <a
            href="/menu"
            className="px-8 py-4 border-2 border-espresso text-espresso rounded-full hover:bg-olive hover:border-olive hover:text-cream transition-all duration-300 hover:scale-105"
          >
            {t('hero.menu')}
          </a>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="animate-bounce">
          <svg className="w-6 h-6 text-espresso/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </motion.div>
    </section>
  );
}
