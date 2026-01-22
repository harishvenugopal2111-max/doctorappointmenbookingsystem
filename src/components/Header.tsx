import { motion } from 'framer-motion';
import { Stethoscope, Heart } from 'lucide-react';

export function Header() {
  return (
    <header className="gradient-primary py-8 md:py-12">
      <div className="container max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center text-center"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-14 h-14 rounded-2xl bg-primary-foreground/20 backdrop-blur-sm flex items-center justify-center">
              <Stethoscope className="w-7 h-7 text-primary-foreground" />
            </div>
          </div>
          <h1 className="text-3xl md:text-4xl font-display font-bold text-primary-foreground mb-2">
            Doctor Appointment
          </h1>
          <p className="text-primary-foreground/80 flex items-center gap-2">
            Book your appointment with ease
            <Heart className="w-4 h-4 text-primary-foreground/80" />
          </p>
        </motion.div>
      </div>
    </header>
  );
}
