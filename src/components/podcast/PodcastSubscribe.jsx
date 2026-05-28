import { motion } from 'framer-motion';
import Button from '../ui/Button';

export default function PodcastSubscribe() {
  return (
    <section className="py-20 bg-bg-soft">
      <div className="max-w-[1200px] mx-auto px-6">
        <motion.div
          className="bg-gradient-to-br from-dark to-primary rounded-2xl px-10 lg:px-15 py-10 flex flex-col lg:flex-row items-center justify-between gap-8 shadow-[0_20px_40px_rgba(0,71,250,0.2)]"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex-1 text-center lg:text-left">
            <h2 className="font-heading text-[28px] font-bold text-white mb-2">Never Miss An Episode</h2>
            <p className="text-white/90">
              Subscribe to our newsletter to get new episodes, transcripts, and exclusive focus strategies delivered straight to your inbox.
            </p>
          </div>

          <form
            className="flex gap-3 w-full max-w-[400px] flex-shrink-0"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="email"
              placeholder="Your email address"
              required
              className="flex-1 px-5 py-3.5 border-none rounded text-base outline-none focus:ring-2 focus:ring-white/50"
            />
            <Button type="submit" variant="white" size="large">Subscribe</Button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
