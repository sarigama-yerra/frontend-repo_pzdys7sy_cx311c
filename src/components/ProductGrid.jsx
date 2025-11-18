import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Loader2 } from "lucide-react";

const API_BASE = import.meta.env.VITE_BACKEND_URL || "";

export default function ProductGrid() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      try {
        const res = await fetch(`${API_BASE}/api/products`);
        const data = await res.json();
        setItems(data.items || []);
      } catch (e) {
        console.error(e);
      } finally {
        setLoading(false);
      }
    }
    load();
  }, []);

  if (loading) {
    return (
      <div className="py-16 flex items-center justify-center text-white">
        <Loader2 className="w-6 h-6 mr-2 animate-spin" /> Loading products...
      </div>
    );
  }

  return (
    <section id="shop" className="max-w-7xl mx-auto px-6 py-12">
      <div className="flex items-end justify-between gap-4 mb-6">
        <h2 className="text-2xl md:text-3xl font-bold text-white">Shop the collection</h2>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((p) => (
          <motion.a
            key={p.id}
            href={p.etsy_url || "#"}
            target="_blank"
            rel="noreferrer"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="group rounded-2xl overflow-hidden bg-white/5 border border-white/10 hover:border-white/20 transition backdrop-blur"
          >
            <div className="aspect-square overflow-hidden">
              <img
                src={p.image_url || "https://images.unsplash.com/photo-1512295767273-ac109ac3acfa?q=80&w=1200&auto=format&fit=crop"}
                alt={p.title}
                className="w-full h-full object-cover group-hover:scale-105 transition"
              />
            </div>
            <div className="p-4 flex items-center justify-between">
              <div>
                <div className="font-semibold text-white">{p.title}</div>
                <div className="text-sm text-white/70">${p.price?.toFixed?.(2) || p.price}</div>
              </div>
              <div className="inline-flex items-center gap-1 text-emerald-300 group-hover:gap-2 transition">
                View <ExternalLink className="w-4 h-4" />
              </div>
            </div>
          </motion.a>
        ))}
      </div>

      {items.length === 0 && (
        <div className="text-center text-white/80 mt-12">
          No products yet. Add a few via the backend or ask me to seed sample items.
        </div>
      )}
    </section>
  );
}
