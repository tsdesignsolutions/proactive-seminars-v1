import { motion } from 'framer-motion';

export default function SectionTitle({ children, className = '' }) {
  return (
    <motion.h2
      className={`text-center text-[32px] font-bold font-heading text-dark mx-auto mb-15 relative w-fit block after:content-[''] after:absolute after:bottom-[-10px] after:left-1/2 after:-translate-x-1/2 after:w-[60%] after:h-[3px] after:bg-primary ${className}`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      {children}
    </motion.h2>
  );
}
