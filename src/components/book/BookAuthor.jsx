import { motion } from 'framer-motion';
import Badge from '../ui/Badge';
import Button from '../ui/Button';
import portraitImage from '../../assets/images/robert_studio_portrait.png';

export default function BookAuthor() {
  return (
    <section className="py-25 bg-bg-soft" id="author">
      <div className="max-w-[1200px] mx-auto px-6 flex flex-col lg:flex-row items-center gap-15">
        {/* Image */}
        <motion.div
          className="flex-1"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <img
            src={portraitImage}
            alt="Robert Phillips Portrait"
            loading="lazy"
            className="rounded-2xl shadow-[0_20px_40px_rgba(0,0,0,0.1)]"
          />
        </motion.div>

        {/* Content */}
        <motion.div
          className="flex-1 text-center lg:text-left"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          <Badge className="mb-4">About The Author</Badge>
          <h2 className="font-heading text-4xl font-bold text-dark mb-6">Robert Phillips</h2>
          <p className="text-base text-text-muted mb-5">
            Robert Phillips is a highly sought-after consultant, speaker, and author who helps organizations identify the real costs of fractured focus on their most valuable asset—their people.
          </p>
          <p className="text-base text-text-muted mb-8">
            Drawing from decades of experience, his work is direct, plain-spoken, and built for real-world application, helping countless organizations build cultures of well-being, vigilance, and top-tier performance.
          </p>
          <Button to="/#contact">Book Robert to Speak</Button>
        </motion.div>
      </div>
    </section>
  );
}
