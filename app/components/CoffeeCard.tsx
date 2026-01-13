'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

interface CoffeeCardProps {
  name: string;
  description: string;
  icon: string;
  recommended?: boolean;
}

export default function CoffeeCard({ name, description, icon, recommended }: CoffeeCardProps) {
  const { t } = useLanguage();

  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
      className="relative bg-cream border border-espresso/10 rounded-2xl p-6 hover:shadow-xl transition-shadow"
    >
      {recommended && (
        <div className="absolute -top-3 -right-3 bg-olive text-cream text-xs px-3 py-1 rounded-full font-medium">
          {t('coffee.recommended')}
        </div>
      )}
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="font-serif text-2xl text-espresso mb-2">{name}</h3>
      <p className="text-espresso/70 text-sm leading-relaxed">{description}</p>
    </motion.div>
  );
}
