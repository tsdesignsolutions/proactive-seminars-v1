import { motion } from 'framer-motion';
import { MicrophoneStage, SpotifyLogo, ApplePodcastsLogo } from '@phosphor-icons/react';
import Button from '../ui/Button';
import Badge from '../ui/Badge';

export default function PodcastHero() {
  return (
    <header className="py-30 pb-20 bg-gradient-to-br from-bg-soft to-white relative">
      <div className="max-w-[1200px] mx-auto px-6 flex flex-col lg:flex-row items-center gap-15">
        {/* Content */}
        <motion.div
          className="flex-[1.5] text-center lg:text-left"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Badge className="mb-6">New Episode Every Tuesday</Badge>
          <h1 className="font-heading text-[42px] lg:text-[56px] font-bold text-dark mb-5 leading-[1.1]">
            Tune Into The Conversation
          </h1>
          <p className="text-lg text-text-muted mb-10">
            Join Robert Phillips as he speaks with industry leaders, experts, and executives about overcoming distraction, prioritizing employee well-being, and navigating the safer side of work and life.
          </p>
          <div className="flex gap-4 justify-center lg:justify-start flex-wrap">
            <Button
              href="https://open.spotify.com"
              size="large"
              icon={<SpotifyLogo weight="fill" size={24} />}
            >
              Listen on Spotify
            </Button>
            <Button
              href="https://podcasts.apple.com"
              variant="outline"
              size="large"
              icon={<ApplePodcastsLogo weight="fill" size={24} />}
            >
              Apple Podcasts
            </Button>
          </div>
        </motion.div>

        {/* Podcast Cover */}
        <motion.div
          className="flex-1 flex justify-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <div className="w-full max-w-[400px] aspect-square bg-white rounded-3xl shadow-[0_30px_60px_rgba(0,0,0,0.1)] flex items-center justify-center border border-border relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent z-[1]" />
            <div className="text-center text-primary z-[2]">
              <MicrophoneStage size={64} className="mx-auto mb-4" />
              <h3 className="font-heading text-2xl font-bold text-dark">
                The Safer Side<br />Podcast
              </h3>
            </div>
          </div>
        </motion.div>
      </div>
    </header>
  );
}
