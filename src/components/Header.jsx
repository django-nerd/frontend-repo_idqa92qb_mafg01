import { motion } from "framer-motion";
import { Sparkles, Gift } from "lucide-react";

const FloatingRibbon = () => {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <motion.div
        className="absolute -left-10 top-0 h-[200%] w-24 bg-gradient-to-b from-rose-200/60 via-pink-100/40 to-amber-100/0 blur-2xl rounded-full"
        animate={{ y: [0, -80, 0], rotate: [0, 5, -3, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute right-0 -top-10 h-[200%] w-24 bg-gradient-to-b from-amber-200/60 via-rose-100/40 to-pink-100/0 blur-2xl rounded-full"
        animate={{ y: [0, 60, 0], rotate: [0, -4, 2, 0] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
};

export default function Header({ onShopClick }) {
  return (
    <section id="home" className="relative isolate">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(255,182,193,0.25),transparent_40%),radial-gradient(circle_at_80%_20%,rgba(255,228,196,0.25),transparent_45%),linear-gradient(180deg,#fff,rgba(255,240,245,0.7))]" />
      <FloatingRibbon />

      <div className="relative max-w-6xl mx-auto px-6 pt-24 pb-16 sm:pt-28 sm:pb-24">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-10 w-10 rounded-full bg-rose-100 flex items-center justify-center shadow-inner">
              <Gift className="h-5 w-5 text-rose-500" />
            </div>
            <span className="font-semibold tracking-wide text-rose-600">Give A Gift</span>
          </div>
          <nav className="hidden sm:flex items-center gap-6 text-sm text-rose-700/80">
            <a href="#home" className="hover:text-rose-600 transition-colors">Home</a>
            <a href="#shop" className="hover:text-rose-600 transition-colors">Shop</a>
            <a href="#customize" className="hover:text-rose-600 transition-colors">Customize</a>
            <a href="#contact" className="hover:text-rose-600 transition-colors">Contact</a>
          </nav>
        </div>

        <div className="grid md:grid-cols-2 gap-10 items-center mt-14">
          <div>
            <motion.h1
              className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-rose-900/90 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              Make every memory gift-worthy
              <motion.span
                className="inline-block ml-2 align-middle"
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 1, 0, 1] }}
                transition={{ duration: 2.4, repeat: Infinity }}
              >
                💝
              </motion.span>
            </motion.h1>
            <motion.p
              className="mt-5 text-rose-800/80 text-base sm:text-lg"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              Personalized, handcrafted keepsakes that feel like warm hugs. Soft textures, cozy colors, and little sparkles that make you smile.
            </motion.p>

            <div className="mt-8 flex items-center gap-4">
              <motion.button
                whileHover={{ scale: 1.03, boxShadow: "0 8px 24px rgba(244, 63, 94, 0.35)" }}
                whileTap={{ scale: 0.98 }}
                onClick={onShopClick}
                className="px-6 py-3 rounded-full bg-rose-500 text-white font-semibold shadow-md shadow-rose-300 hover:brightness-105 focus:outline-none focus:ring-4 focus:ring-rose-300"
              >
                Shop Now
              </motion.button>
              <motion.div
                className="flex items-center gap-2 text-rose-700/80"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                <Sparkles className="h-5 w-5 text-amber-500" />
                <span>Handmade with love</span>
              </motion.div>
            </div>
          </div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="aspect-[4/3] rounded-3xl overflow-hidden ring-1 ring-rose-200/60 shadow-xl bg-white/70 backdrop-blur">
              <img
                alt="Hands wrapping a gift"
                className="h-full w-full object-cover"
                src="https://images.unsplash.com/photo-1601333144130-8cbb312386b6?q=80&w=1600&auto=format&fit=crop"
              />
            </div>
            <motion.div
              className="absolute -bottom-5 -left-5 bg-white/70 backdrop-blur rounded-2xl px-4 py-3 shadow-md ring-1 ring-rose-200/60"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <div className="text-sm text-rose-800">Because love deserves effort ✨</div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
