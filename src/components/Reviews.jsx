import { motion } from "framer-motion";
import { Star } from "lucide-react";

const REVIEWS = [
  {
    name: "Ava",
    text: "Absolutely gorgeous and arrived so fast. The packaging felt like a gift!",
  },
  {
    name: "Noah",
    text: "Beautiful craftsmanship. Exactly as pictured and even better in person.",
  },
  {
    name: "Mia",
    text: "Great communication and quality. Will definitely order again!",
  },
];

export default function Reviews() {
  return (
    <section id="reviews" className="max-w-7xl mx-auto px-6 py-16">
      <h2 className="text-2xl md:text-3xl font-bold text-white mb-8">What customers say</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {REVIEWS.map((r, idx) => (
          <motion.div
            key={r.name}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.05 }}
            className="rounded-2xl bg-white/5 border border-white/10 p-6 text-white/90 backdrop-blur"
          >
            <div className="flex gap-1 mb-3">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="w-4 h-4 text-yellow-300 fill-yellow-300" />
              ))}
            </div>
            <p className="">{r.text}</p>
            <div className="mt-4 text-sm text-white/60">— {r.name}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
