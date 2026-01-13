'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

export default function Location() {
  const { t } = useLanguage();

  return (
    <section id="location" className="py-20 px-6 bg-stone-300">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-5xl text-espresso mb-4">{t('location.title')}</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Map Placeholder */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-espresso/10 rounded-2xl overflow-hidden aspect-[4/3] flex items-center justify-center"
          >
            <div className="text-center p-8">
              <svg className="w-16 h-16 mx-auto mb-4 text-espresso/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <p className="text-espresso/50 text-sm">
                Google Maps embed here
              </p>
            </div>
          </motion.div>

          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div>
              <h3 className="font-serif text-2xl text-espresso mb-3 flex items-center gap-2">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Adresă
              </h3>
              <p className="text-espresso/70 text-lg leading-relaxed">
                {t('location.address')}
              </p>
              <a
                href="https://maps.google.com/?q=Calea+Calarasi+323+Bucuresti"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-3 text-olive hover:text-espresso transition-colors underline"
              >
                Deschide în Google Maps
              </a>
            </div>

            <div>
              <h3 className="font-serif text-2xl text-espresso mb-3 flex items-center gap-2">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {t('location.hours')}
              </h3>
              <div className="space-y-2 text-espresso/70">
                <p>{t('location.weekdays')}</p>
                <p>{t('location.weekend')}</p>
              </div>
            </div>

            <div className="pt-4">
              <motion.a
                href="tel:+40123456789"
                whileHover={{ scale: 1.05 }}
                className="inline-flex items-center gap-2 px-6 py-3 bg-espresso text-cream rounded-full hover:bg-olive transition-all duration-300"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Sună-ne
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
