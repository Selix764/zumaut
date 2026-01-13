'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

export default function MusicSection() {
  const { t } = useLanguage();

  return (
    <section className="py-20 px-6 bg-olive/10">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-6xl mb-6">🎵</div>
          <h2 className="font-serif text-5xl text-espresso mb-6">{t('music.title')}</h2>
          <p className="text-espresso/70 text-lg mb-8 leading-relaxed">
            {t('music.description')}
          </p>

          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            className="inline-block"
          >
            <a
              href="https://open.spotify.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 bg-espresso text-cream rounded-full hover:bg-olive transition-all duration-300"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
              </svg>
              {t('music.playlist')}
            </a>
          </motion.div>

          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-espresso/60">
            <div>Indie</div>
            <div>Chill</div>
            <div>Acoustic</div>
            <div>Reggae-Chill</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
