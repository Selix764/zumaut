'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

const images = [
  { id: 1, alt: 'Interior cozy', aspect: 'aspect-square' },
  { id: 2, alt: 'Coffee close-up', aspect: 'aspect-[4/3]' },
  { id: 3, alt: 'Atmosphere', aspect: 'aspect-square' },
  { id: 4, alt: 'Barista at work', aspect: 'aspect-[4/3]' },
  { id: 5, alt: 'Coffee details', aspect: 'aspect-square' },
  { id: 6, alt: 'Cozy corner', aspect: 'aspect-[4/3]' },
];

export default function Gallery() {
  const { t } = useLanguage();

  return (
    <section className="py-20 px-6 bg-terracotta/10">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-5xl text-espresso mb-4">{t('gallery.title')}</h2>
          <p className="text-espresso/70 text-lg">
            {t('gallery.subtitle')}
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className={`${image.aspect} bg-espresso/20 rounded-2xl overflow-hidden cursor-pointer`}
            >
              <div className="w-full h-full flex items-center justify-center text-espresso/30">
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
            </motion.div>
          ))}
        </div>

        <p className="text-center text-espresso/50 text-sm mt-8">
          * Adaugă propriile imagini în folderul /public/images
        </p>
      </div>
    </section>
  );
}
