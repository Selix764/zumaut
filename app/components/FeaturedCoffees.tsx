'use client';

import { motion } from 'framer-motion';
import CoffeeCard from './CoffeeCard';
import { useLanguage } from '../context/LanguageContext';

export default function FeaturedCoffees() {
  const { t } = useLanguage();

  const coffees = [
    {
      name: t('coffee.espresso'),
      description: t('coffee.espresso.desc'),
      icon: '☕',
      recommended: true,
    },
    {
      name: t('coffee.cappuccino'),
      description: t('coffee.cappuccino.desc'),
      icon: '🥛',
      recommended: false,
    },
    {
      name: t('coffee.flatwhite'),
      description: t('coffee.flatwhite.desc'),
      icon: '☕',
      recommended: true,
    },
    {
      name: t('coffee.coldbrew'),
      description: t('coffee.coldbrew.desc'),
      icon: '🧊',
      recommended: false,
    },
  ];

  return (
    <section className="py-20 px-6 bg-stone-300">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-5xl text-espresso mb-4">{t('coffee.title')}</h2>
          <p className="text-espresso/70 text-lg max-w-2xl mx-auto">
            {t('coffee.subtitle')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {coffees.map((coffee, index) => (
            <motion.div
              key={coffee.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <CoffeeCard {...coffee} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
