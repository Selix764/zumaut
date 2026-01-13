'use client';

import { motion } from 'framer-motion';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { useLanguage } from '../context/LanguageContext';

const aboutContent = {
  ro: {
    title: 'Despre ZUMAUT',
    subtitle: 'Mai mult decât o cafenea',
    story: {
      title: 'Povestea Noastră',
      text: 'ZUMAUT s-a născut din dorința de a crea un spațiu unde timpul să încetinească. Un loc unde cafeaua nu e doar o băutură, ci o experiență. Unde muzica creează atmosfera perfectă pentru conversații autentice sau momente de liniște.',
    },
    philosophy: {
      title: 'Filosofia Noastră',
      points: [
        'Zoom Out - Ia o pauză de la agitația zilnică',
        'Good Vibes Only - Atmosferă caldă și prietenoasă',
        'Slow Coffee - Cafea pregătită cu atenție și pasiune',
        'Music Matters - Sunete care îți hrănesc sufletul',
      ],
    },
    values: {
      title: 'Ce Ne Definește',
      items: [
        {
          icon: '☕',
          title: 'Calitate',
          text: 'Folosim cafea Julius Meinl, pregătită de barista cu experiență.',
        },
        {
          icon: '🎵',
          title: 'Muzică',
          text: 'Playlist-uri curate cu grijă: indie, chill, acoustic, reggae-chill.',
        },
        {
          icon: '🤝',
          title: 'Comunitate',
          text: 'Un spațiu pentru freelanceri, studenți, creativi și localnici.',
        },
        {
          icon: '✨',
          title: 'Atmosferă',
          text: 'Design cozy, lumină caldă, detalii care contează.',
        },
      ],
    },
  },
  hu: {
    title: 'ZUMAUT-ról',
    subtitle: 'Több mint egy kávézó',
    story: {
      title: 'A Mi Történetünk',
      text: 'A ZUMAUT abból a vágyból született, hogy létrehozzunk egy teret, ahol lelassul az idő. Egy hely, ahol a kávé nem csak egy ital, hanem egy élmény. Ahol a zene megteremti a tökéletes hangulatot az őszinte beszélgetésekhez vagy a csendes pillanatokhoz.',
    },
    philosophy: {
      title: 'Filozófiánk',
      points: [
        'Zoom Out - Vegyél egy szünetet a napi rohanástól',
        'Good Vibes Only - Meleg és barátságos légkör',
        'Slow Coffee - Gondosan és szenvedéllyel készített kávé',
        'Music Matters - Hangok, amelyek táplálják a lelked',
      ],
    },
    values: {
      title: 'Ami Meghatároz Minket',
      items: [
        {
          icon: '☕',
          title: 'Minőség',
          text: 'Julius Meinl kávét használunk, tapasztalt barista készíti.',
        },
        {
          icon: '🎵',
          title: 'Zene',
          text: 'Gondosan válogatott lejátszási listák: indie, chill, akusztikus, reggae-chill.',
        },
        {
          icon: '🤝',
          title: 'Közösség',
          text: 'Tér szabadúszóknak, diákoknak, kreatívoknak és helyieknek.',
        },
        {
          icon: '✨',
          title: 'Hangulat',
          text: 'Hangulatos design, meleg fény, részletek, amelyek számítanak.',
        },
      ],
    },
  },
  en: {
    title: 'About ZUMAUT',
    subtitle: 'More than a coffee shop',
    story: {
      title: 'Our Story',
      text: 'ZUMAUT was born from the desire to create a space where time slows down. A place where coffee is not just a drink, but an experience. Where music creates the perfect atmosphere for authentic conversations or moments of peace.',
    },
    philosophy: {
      title: 'Our Philosophy',
      points: [
        'Zoom Out - Take a break from daily rush',
        'Good Vibes Only - Warm and friendly atmosphere',
        'Slow Coffee - Coffee prepared with care and passion',
        'Music Matters - Sounds that nourish your soul',
      ],
    },
    values: {
      title: 'What Defines Us',
      items: [
        {
          icon: '☕',
          title: 'Quality',
          text: 'We use Julius Meinl coffee, prepared by experienced baristas.',
        },
        {
          icon: '🎵',
          title: 'Music',
          text: 'Carefully curated playlists: indie, chill, acoustic, reggae-chill.',
        },
        {
          icon: '🤝',
          title: 'Community',
          text: 'A space for freelancers, students, creatives, and locals.',
        },
        {
          icon: '✨',
          title: 'Atmosphere',
          text: 'Cozy design, warm light, details that matter.',
        },
      ],
    },
  },
};

export default function AboutPage() {
  const { language } = useLanguage();
  const content = aboutContent[language];

  return (
    <>
      <Navigation />
      <main className="pt-24 pb-20 px-6 min-h-screen bg-cream">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="font-serif text-6xl text-espresso mb-4">{content.title}</h1>
            <p className="text-olive text-xl italic">{content.subtitle}</p>
          </motion.div>

          {/* Story */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-16"
          >
            <h2 className="font-serif text-4xl text-espresso mb-6">{content.story.title}</h2>
            <p className="text-espresso/80 text-lg leading-relaxed">
              {content.story.text}
            </p>
          </motion.div>

          {/* Philosophy */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-16 bg-olive/10 rounded-2xl p-8"
          >
            <h2 className="font-serif text-4xl text-espresso mb-6">{content.philosophy.title}</h2>
            <div className="space-y-3">
              {content.philosophy.points.map((point, index) => (
                <div key={index} className="flex items-start gap-3">
                  <span className="text-olive mt-1">✓</span>
                  <p className="text-espresso/80 text-lg">{point}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Values */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h2 className="font-serif text-4xl text-espresso mb-8 text-center">
              {content.values.title}
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {content.values.items.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  className="bg-white rounded-2xl p-6 border border-espresso/10"
                >
                  <div className="text-4xl mb-3">{item.icon}</div>
                  <h3 className="font-serif text-2xl text-espresso mb-2">{item.title}</h3>
                  <p className="text-espresso/70 leading-relaxed">{item.text}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-16 text-center"
          >
            <p className="font-serif text-2xl text-espresso mb-6 italic">
              Vino să ne cunoști. Te așteptăm cu o cafea bună. ☕
            </p>
            <a
              href="/"
              className="inline-block px-8 py-4 bg-espresso text-cream rounded-full hover:bg-olive transition-all duration-300 hover:scale-105"
            >
              Înapoi Acasă
            </a>
          </motion.div>
        </div>
      </main>
      <Footer />
    </>
  );
}
