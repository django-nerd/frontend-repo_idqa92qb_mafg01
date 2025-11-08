import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Upload, FileText, Eye } from "lucide-react";

const steps = [
  { key: "upload", title: "Upload a photo", icon: Upload },
  { key: "note", title: "Write a note", icon: FileText },
  { key: "preview", title: "Preview", icon: Eye },
];

export default function Customize() {
  const [step, setStep] = useState(0);
  const [image, setImage] = useState("");
  const [note, setNote] = useState("");

  const next = () => setStep((s) => Math.min(s + 1, steps.length - 1));
  const back = () => setStep((s) => Math.max(s - 1, 0));

  return (
    <section id="customize" className="relative py-16 sm:py-20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_10%,rgba(255,192,203,0.15),transparent_40%),radial-gradient(circle_at_90%_20%,rgba(255,228,196,0.18),transparent_45%)]" />
      <div className="relative max-w-5xl mx-auto px-6">
        <motion.h2
          className="text-3xl sm:text-4xl font-bold text-rose-900/90"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
        >
          Customize Your Gift
        </motion.h2>

        <div className="mt-6 flex flex-wrap items-center gap-3">
          {steps.map((s, i) => {
            const Icon = s.icon;
            const active = i === step;
            return (
              <div key={s.key} className={`flex items-center gap-2 px-3 py-2 rounded-full text-sm border ${active ? "bg-rose-500 text-white border-rose-400" : "bg-white/70 text-rose-700 border-rose-200"}`}>
                <Icon className="h-4 w-4" />
                <span>{s.title}</span>
              </div>
            );
          })}
        </div>

        <div className="mt-8 rounded-3xl bg-white/80 backdrop-blur ring-1 ring-rose-200/60 shadow-md overflow-hidden">
          <AnimatePresence mode="wait">
            {step === 0 && (
              <motion.div
                key="step-upload"
                initial={{ rotateY: 90, opacity: 0 }}
                animate={{ rotateY: 0, opacity: 1 }}
                exit={{ rotateY: -90, opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="p-6"
              >
                <p className="text-rose-800/80">Upload a photo to be included in your gift.</p>
                <div className="mt-4">
                  <input
                    type="text"
                    placeholder="Paste image URL (for preview)"
                    value={image}
                    onChange={(e) => setImage(e.target.value)}
                    className="w-full rounded-xl border border-rose-200 bg-white/70 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-rose-300"
                  />
                </div>
                <div className="mt-6 flex justify-end">
                  <button onClick={next} className="px-5 py-2 rounded-full bg-rose-500 text-white shadow hover:shadow-lg">Next</button>
                </div>
              </motion.div>
            )}

            {step === 1 && (
              <motion.div
                key="step-note"
                initial={{ rotateY: 90, opacity: 0 }}
                animate={{ rotateY: 0, opacity: 1 }}
                exit={{ rotateY: -90, opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="p-6"
              >
                <p className="text-rose-800/80">Write a sweet note to go along with your gift.</p>
                <textarea
                  rows={4}
                  value={note}
                  onChange={(e) => setNote(e.target.value)}
                  placeholder="Because love deserves effort…"
                  className="mt-4 w-full rounded-xl border border-rose-200 bg-white/70 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-rose-300"
                />
                <div className="mt-6 flex justify-between">
                  <button onClick={back} className="px-5 py-2 rounded-full bg-rose-100 text-rose-700 border border-rose-200">Back</button>
                  <button onClick={next} className="px-5 py-2 rounded-full bg-rose-500 text-white shadow hover:shadow-lg">Next</button>
                </div>
              </motion.div>
            )}

            {step === 2 && (
              <motion.div
                key="step-preview"
                initial={{ rotateY: 90, opacity: 0 }}
                animate={{ rotateY: 0, opacity: 1 }}
                exit={{ rotateY: -90, opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="p-6"
              >
                <div className="grid md:grid-cols-2 gap-6 items-start">
                  <div className="rounded-2xl overflow-hidden ring-1 ring-rose-200/60 bg-white">
                    <div className="aspect-[4/3] bg-rose-50/60 flex items-center justify-center">
                      {image ? (
                        <img src={image} alt="Preview" className="h-full w-full object-cover" />
                      ) : (
                        <span className="text-rose-400">Your photo preview will appear here</span>
                      )}
                    </div>
                  </div>
                  <div>
                    <div className="rounded-2xl p-4 bg-amber-50/60 ring-1 ring-amber-200/60">
                      <p className="text-rose-900/90 whitespace-pre-wrap">{note || "Write a heartfelt message and see it here."}</p>
                    </div>
                    <div className="mt-6 flex gap-3">
                      <button onClick={back} className="px-5 py-2 rounded-full bg-rose-100 text-rose-700 border border-rose-200">Back</button>
                      <motion.button
                        whileHover={{ scale: 1.03, boxShadow: "0 8px 24px rgba(244, 63, 94, 0.35)" }}
                        whileTap={{ scale: 0.98 }}
                        className="px-5 py-2 rounded-full bg-rose-500 text-white shadow"
                      >
                        Looks Perfect ✨
                      </motion.button>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
