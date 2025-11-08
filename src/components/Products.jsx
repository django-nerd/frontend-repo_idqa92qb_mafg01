import React, { useState } from "react";
import { motion } from "framer-motion";
import { Heart } from "lucide-react";

const products = [
  {
    id: "scrap-mini",
    title: "Mini Scrapbook",
    desc: "Pocket-size memories with hand-torn papers and ribbon ties.",
    price: 22,
    image:
      "https://images.unsplash.com/photo-1513530534585-c7b1394c6d51?q=80&w=1600&auto=format&fit=crop",
    tag: "Mini Scrapbooks",
  },
  {
    id: "frame-rose",
    title: "Rose Gold Frame",
    desc: "Foil-kissed frame with soft blush mat for your favourite photo.",
    price: 28,
    image:
      "https://images.unsplash.com/photo-1487412912498-0447578fcca8?q=80&w=1600&auto=format&fit=crop",
    tag: "Frames",
  },
  {
    id: "bday-box",
    title: "Birthday Gift Box",
    desc: "Confetti, note cards, and a tiny ribbon bow — pure joy.",
    price: 35,
    image:
      "https://images.unsplash.com/photo-1602651964063-3e1f7a67f7a3?q=80&w=1600&auto=format&fit=crop",
    tag: "Birthday Gifts",
  },
  {
    id: "anni-card",
    title: "Anniversary Memory Card",
    desc: "Vellum layers and gold edges for your love note.",
    price: 18,
    image:
      "https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1600&auto=format&fit=crop",
    tag: "Anniversary",
  },
];

const filters = ["All", "Birthday Gifts", "Anniversary", "Mini Scrapbooks", "Frames"];

export default function Products() {
  const [active, setActive] = useState("All");
  const filtered = products.filter((p) => (active === "All" ? true : p.tag === active));

  return (
    <section id="shop" className="relative py-16 sm:py-20 bg-gradient-to-b from-rose-50 via-amber-50/40 to-white">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          className="text-3xl sm:text-4xl font-bold text-rose-900/90"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
        >
          Our Favourites
        </motion.h2>

        <div className="mt-6 flex flex-wrap gap-3">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={`px-4 py-2 rounded-full text-sm border transition-all shadow-sm ${
                active === f
                  ? "bg-rose-500 text-white border-rose-400"
                  : "bg-white/70 text-rose-700 border-rose-200 hover:bg-rose-50"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        <motion.div
          className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          initial="hidden"
          animate="show"
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.08 } } }}
        >
          {filtered.map((p) => (
            <motion.div
              key={p.id}
              variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}
              whileHover={{ y: -4 }}
              className="group rounded-3xl overflow-hidden bg-white/80 backdrop-blur ring-1 ring-rose-200/60 shadow-md"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img src={p.image} alt={p.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <div className="p-5">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="text-lg font-semibold text-rose-900/90">{p.title}</h3>
                    <p className="text-sm text-rose-800/80 mt-1">{p.desc}</p>
                  </div>
                  <span className="shrink-0 rounded-full bg-rose-100 text-rose-600 px-3 py-1 text-sm font-semibold">${p.price}</span>
                </div>
                <div className="mt-4 flex items-center justify-between">
                  <button className="px-4 py-2 rounded-full bg-rose-500 text-white text-sm font-medium shadow hover:shadow-lg transition-shadow">Buy Now</button>
                  <button className="inline-flex items-center gap-1 text-rose-600/80 hover:text-rose-600">
                    <Heart className="h-4 w-4" />
                    <span className="text-sm">Wish</span>
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
