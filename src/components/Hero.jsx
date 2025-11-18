import { motion } from "framer-motion";
import { ShoppingBag, Star, Sparkles } from "lucide-react";

export default function Hero({ onShopNow }) {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(1000px_600px_at_10%_-10%,rgba(99,102,241,0.35),transparent_60%),radial-gradient(800px_500px_at_90%_0%,rgba(16,185,129,0.3),transparent_60%)]" />
      <div className="relative max-w-7xl mx-auto px-6 pt-24 pb-16 grid md:grid-cols-2 gap-10 items-center">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur border border-white/20 px-3 py-1 text-xs text-white mb-6">
            <Sparkles className="w-3.5 h-3.5 text-emerald-300" /> Handcrafted finds, shipped with love
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white">
            Discover Unique, Handmade Treasures
          </h1>
          <p className="mt-4 text-slate-200/90 text-lg">
            Curated pieces that tell a story — thoughtfully designed and ready to delight.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <button onClick={onShopNow} className="inline-flex items-center gap-2 bg-emerald-400 text-emerald-950 font-semibold px-5 py-3 rounded-xl shadow-lg shadow-emerald-400/30 hover:shadow-emerald-400/40 hover:translate-y-[-1px] transition">
              <ShoppingBag className="w-5 h-5" /> Shop the collection
            </button>
            <a href="#reviews" className="inline-flex items-center gap-2 text-white/90 hover:text-white">
              <Star className="w-5 h-5 text-yellow-300" /> 500+ 5-star reviews
            </a>
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: 0.1 }} className="relative">
          <div className="aspect-[4/5] rounded-3xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur border border-white/20 overflow-hidden shadow-2xl">
            <img src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1640&auto=format&fit=crop" alt="Featured" className="w-full h-full object-cover" />
          </div>
          <div className="absolute -bottom-6 -right-6 bg-white/10 border border-white/20 backdrop-blur rounded-2xl p-4 text-white shadow-xl">
            <div className="text-xs uppercase tracking-wide text-white/70">Best-seller</div>
            <div className="font-semibold">Eco Resin Tray</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
