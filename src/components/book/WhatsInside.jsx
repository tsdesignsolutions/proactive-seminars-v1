import { motion } from 'framer-motion';
import { Target, ShieldCheck, TrendUp } from '@phosphor-icons/react';
import SectionTitle from '../ui/SectionTitle';

const cards = [
  { icon: Target, title: 'The Cost of Distraction', desc: 'Uncover the hidden financial and cultural impacts of a workforce operating with fractured focus and constant overwhelm.' },
  { icon: ShieldCheck, title: 'Situational Confidence', desc: 'Moving beyond fear-based awareness training to build genuine preparedness that empowers employees on and off the clock.' },
  { icon: TrendUp, title: 'Resilient Performance', desc: 'Proven leadership strategies to support the whole person, combat chronic burnout, and drive measurable organizational ROI.' },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.5, delay: i * 0.15, ease: 'easeOut' },
  }),
};

export default function WhatsInside() {
  return (
    <section className="py-25 bg-white" id="chapters">
      <div className="max-w-[1200px] mx-auto px-6">
        <SectionTitle>What You&apos;ll Discover</SectionTitle>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-15">
          {cards.map((card, i) => (
            <motion.div
              key={card.title}
              className="bg-bg-soft p-10 rounded-2xl border border-border"
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover={{ y: -5, borderColor: 'var(--color-primary)' }}
            >
              <card.icon size={40} className="text-primary mb-5" />
              <h3 className="font-heading text-[22px] font-semibold text-dark mb-3">{card.title}</h3>
              <p className="text-sm text-text-muted leading-relaxed">{card.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
