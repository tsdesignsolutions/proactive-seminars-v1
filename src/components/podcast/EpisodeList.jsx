import { motion } from 'framer-motion';
import { Play } from '@phosphor-icons/react';
import SectionTitle from '../ui/SectionTitle';
import Button from '../ui/Button';

const episodes = [
  {
    num: '04',
    date: 'Nov 12, 2025',
    duration: '45 min',
    title: 'The ROI of Resilient Leadership',
    desc: "In this episode, Robert sits down with a Fortune 500 CHRO to discuss the direct correlation between resilient leadership, reduced employee turnover, and the company's bottom line.",
  },
  {
    num: '03',
    date: 'Nov 5, 2025',
    duration: '38 min',
    title: 'Reclaiming Deep Focus in a Noisy World',
    desc: "We explore actionable strategies for protecting your team's most valuable asset: their attention. Learn how to architect workflows that minimize distraction and maximize deep, meaningful work.",
  },
  {
    num: '02',
    date: 'Oct 29, 2025',
    duration: '52 min',
    title: 'Situational Confidence for Field Teams',
    desc: 'A deep dive into equipping remote, traveling, and public-facing teams with the awareness tools they need to navigate unfamiliar environments with confidence, not fear.',
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.4, delay: i * 0.12, ease: 'easeOut' },
  }),
};

export default function EpisodeList() {
  return (
    <section className="py-25 bg-white">
      <div className="max-w-[1200px] mx-auto px-6">
        <SectionTitle>Latest Episodes</SectionTitle>

        <div className="flex flex-col gap-6 mt-15 max-w-[900px] mx-auto">
          {episodes.map((ep, i) => (
            <motion.div
              key={ep.num}
              className="bg-white border border-border rounded-2xl p-8 flex flex-col md:flex-row gap-8 items-center shadow-[0_4px_6px_-1px_rgba(0,0,0,0.05)] transition-all duration-250 hover:shadow-[0_15px_30px_-5px_rgba(0,0,0,0.1)] hover:border-primary cursor-pointer group"
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover={{ y: -3 }}
            >
              {/* Play Button */}
              <motion.div
                className="w-16 h-16 rounded-full bg-primary text-white flex items-center justify-center text-[28px] flex-shrink-0 cursor-pointer group-hover:bg-primary-hover transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Play weight="fill" size={28} />
              </motion.div>

              {/* Content */}
              <div className="flex-1 text-center md:text-left">
                <div className="text-sm text-primary font-semibold mb-2 flex flex-wrap items-center gap-4 justify-center md:justify-start">
                  Episode {ep.num}
                  <span className="text-text-muted font-normal">&bull; {ep.date} &bull; {ep.duration}</span>
                </div>
                <h3 className="font-heading text-2xl font-semibold text-dark mb-3">{ep.title}</h3>
                <p className="text-[15px] text-text-muted line-clamp-2">{ep.desc}</p>
              </div>
            </motion.div>
          ))}

          <div className="text-center mt-10">
            <Button href="#" variant="outline" size="large">Load More Episodes</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
