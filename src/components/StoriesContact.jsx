import { motion } from "framer-motion";
import { MessageCircle, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    text: "She cried happy tears. The details, the textures — perfection!",
    author: "Ananya",
    photo: "https://images.unsplash.com/photo-1544006659-f0b21884ce1d?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: 2,
    text: "Felt like opening a box of memories. So warm and personal!",
    author: "Rohan",
    photo: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: 3,
    text: "The scrapbook looked straight out of a dream.",
    author: "Mira",
    photo: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: 4,
    text: "Every corner had love. Worth every smile!",
    author: "Kabir",
    photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1000&auto=format&fit=crop",
  },
];

export default function StoriesContact() {
  return (
    <section id="stories" className="relative">
      <div className="max-w-6xl mx-auto px-6 py-16 sm:py-20">
        <motion.h2
          className="text-3xl sm:text-4xl font-bold text-rose-900/90"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
        >
          Real stories. Real smiles.
        </motion.h2>

        <div className="mt-8 overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          <div className="grid grid-flow-col auto-cols-[minmax(260px,1fr)] gap-4">
            {testimonials.map((t, idx) => (
              <motion.div
                key={t.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="rounded-3xl bg-white/80 backdrop-blur ring-1 ring-rose-200/60 shadow p-5"
              >
                <div className="flex items-center gap-3">
                  <img src={t.photo} alt={t.author} className="h-10 w-10 rounded-full object-cover" />
                  <div className="text-sm font-medium text-rose-900/90">{t.author}</div>
                </div>
                <div className="mt-3 text-rose-800/90 flex items-start gap-2">
                  <Quote className="h-4 w-4 text-rose-400 mt-1" />
                  <p>{t.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div id="contact" className="mt-16 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-2xl font-semibold text-rose-900/90">Have an idea? Let's wrap it with love.</h3>
            <p className="mt-2 text-rose-800/80">Message us for quick orders, custom requests, or just to say hi!</p>
          </div>
          <div className="flex md:justify-end">
            <a
              href="https://wa.me/15551234567?text=Hi%20Give%20A%20Gift!%20I%20want%20to%20order%20a%20handmade%20gift."
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-emerald-500 text-white font-semibold shadow hover:shadow-lg"
            >
              <MessageCircle className="h-5 w-5" />
              Send a Smile
            </a>
          </div>
        </div>

        <p className="mt-16 text-center text-rose-700/80">
          From handmade hearts to heartfelt clicks — every gift tells a story.
        </p>
      </div>
    </section>
  );
}
