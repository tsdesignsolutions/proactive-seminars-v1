import { motion } from 'framer-motion';
import Button from '../ui/Button';
import Badge from '../ui/Badge';
import bookCover from '../../assets/images/Book_Cover_Reference.jpg';

export default function BookHero() {
  return (
    <header className="py-30 bg-gradient-to-br from-bg-soft to-white relative">
      <div className="max-w-[1200px] mx-auto px-6 flex flex-col-reverse lg:flex-row items-center gap-15">
        {/* Book Cover */}
        <motion.div
          className="flex-1 relative"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <motion.img
            src={bookCover}
            alt="The Safer Side of Work and Life Book Cover"
            className="max-w-full rounded-xl shadow-[-20px_20px_60px_rgba(0,0,0,0.15)]"
            style={{ transform: 'perspective(1000px) rotateY(-5deg)' }}
            whileHover={{ rotateY: 0 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
          />
        </motion.div>

        {/* Content */}
        <motion.div
          className="flex-[1.2] text-center lg:text-left"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Badge className="mb-6">Releasing Late 2025</Badge>
          <h1 className="font-heading text-[42px] lg:text-[48px] font-bold text-dark mb-5 leading-[1.1]">
            The Safer Side of Work and Life
          </h1>
          <p className="text-lg text-text-muted mb-10">
            Robert Phillips&apos; highly anticipated upcoming book dives deep into the intersection of well-being, situational confidence, and organizational performance. Discover why distracted employees are your biggest unrecognized risk and learn actionable strategies to build resilient, high-performing cultures.
          </p>
          <div className="flex gap-4 justify-center lg:justify-start">
            <Button href="#waitlist" size="large">Join the Waitlist</Button>
            <Button href="#chapters" variant="outline" size="large">What&apos;s Inside</Button>
          </div>
        </motion.div>
      </div>
    </header>
  );
}
