'use client';

import { motion } from 'framer-motion';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { useLanguage } from '../context/LanguageContext';

const menuCategories = {
  ro: {
    espresso: {
      title: 'Espresso',
      items: [
        { name: 'Espresso', price: '8 lei' },
        { name: 'Espresso Dublu', price: '12 lei' },
        { name: 'Americano', price: '10 lei' },
        { name: 'Lungo', price: '10 lei' },
      ],
    },
    milk: {
      title: 'Cu Lapte',
      items: [
        { name: 'Cappuccino', price: '12 lei', recommended: true },
        { name: 'Flat White', price: '14 lei', recommended: true },
        { name: 'Latte', price: '13 lei' },
        { name: 'Cortado', price: '11 lei' },
      ],
    },
    cold: {
      title: 'Reci',
      items: [
        { name: 'Cold Brew', price: '15 lei' },
        { name: 'Iced Latte', price: '14 lei' },
        { name: 'Iced Americano', price: '12 lei' },
        { name: 'Affogato', price: '16 lei' },
      ],
    },
    other: {
      title: 'Altele',
      items: [
        { name: 'Ceai', price: '8 lei' },
        { name: 'Ciocolată Caldă', price: '12 lei' },
        { name: 'Fresh Portocale', price: '14 lei' },
        { name: 'Limonadă', price: '12 lei' },
      ],
    },
  },
  hu: {
    espresso: {
      title: 'Eszpresszó',
      items: [
        { name: 'Eszpresszó', price: '8 lei' },
        { name: 'Dupla Eszpresszó', price: '12 lei' },
        { name: 'Americano', price: '10 lei' },
        { name: 'Lungo', price: '10 lei' },
      ],
    },
    milk: {
      title: 'Tejjel',
      items: [
        { name: 'Cappuccino', price: '12 lei', recommended: true },
        { name: 'Flat White', price: '14 lei', recommended: true },
        { name: 'Latte', price: '13 lei' },
        { name: 'Cortado', price: '11 lei' },
      ],
    },
    cold: {
      title: 'Hideg',
      items: [
        { name: 'Cold Brew', price: '15 lei' },
        { name: 'Jeges Latte', price: '14 lei' },
        { name: 'Jeges Americano', price: '12 lei' },
        { name: 'Affogato', price: '16 lei' },
      ],
    },
    other: {
      title: 'Egyéb',
      items: [
        { name: 'Tea', price: '8 lei' },
        { name: 'Forró Csokoládé', price: '12 lei' },
        { name: 'Friss Narancslé', price: '14 lei' },
        { name: 'Limonádé', price: '12 lei' },
      ],
    },
  },
  en: {
    espresso: {
      title: 'Espresso',
      items: [
        { name: 'Espresso', price: '8 lei' },
        { name: 'Double Espresso', price: '12 lei' },
        { name: 'Americano', price: '10 lei' },
        { name: 'Lungo', price: '10 lei' },
      ],
    },
    milk: {
      title: 'With Milk',
      items: [
        { name: 'Cappuccino', price: '12 lei', recommended: true },
        { name: 'Flat White', price: '14 lei', recommended: true },
        { name: 'Latte', price: '13 lei' },
        { name: 'Cortado', price: '11 lei' },
      ],
    },
    cold: {
      title: 'Cold',
      items: [
        { name: 'Cold Brew', price: '15 lei' },
        { name: 'Iced Latte', price: '14 lei' },
        { name: 'Iced Americano', price: '12 lei' },
        { name: 'Affogato', price: '16 lei' },
      ],
    },
    other: {
      title: 'Other',
      items: [
        { name: 'Tea', price: '8 lei' },
        { name: 'Hot Chocolate', price: '12 lei' },
        { name: 'Fresh Orange Juice', price: '14 lei' },
        { name: 'Lemonade', price: '12 lei' },
      ],
    },
  },
};

export default function MenuPage() {
  const { language, t } = useLanguage();
  const menu = menuCategories[language];

  return (
    <>
      <Navigation />
      <main className="pt-24 pb-20 px-6 min-h-screen bg-cream">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="font-serif text-6xl text-espresso mb-4">{t('nav.menu')}</h1>
            <p className="text-espresso/70 text-lg">
              Julius Meinl Coffee
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {Object.entries(menu).map(([key, category], categoryIndex) => (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
                className="bg-white rounded-2xl p-8 border border-espresso/10"
              >
                <h2 className="font-serif text-3xl text-espresso mb-6 pb-3 border-b border-espresso/10">
                  {category.title}
                </h2>
                <div className="space-y-4">
                  {category.items.map((item, index) => (
                    <div key={index} className="flex justify-between items-start">
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <span className="text-espresso font-medium">{item.name}</span>
                          {'recommended' in item && item.recommended && (
                            <span className="text-xs bg-olive text-cream px-2 py-0.5 rounded-full">
                              {t('coffee.recommended')}
                            </span>
                          )}
                        </div>
                      </div>
                      <span className="text-olive font-medium ml-4">{item.price}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-12 text-center"
          >
            <p className="text-espresso/60 text-sm italic">
              * Prețurile pot varia / Prices may vary / Az árak változhatnak
            </p>
          </motion.div>
        </div>
      </main>
      <Footer />
    </>
  );
}
