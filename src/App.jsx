import { useRef } from "react";
import Hero from "./components/Hero";
import ProductGrid from "./components/ProductGrid";
import Reviews from "./components/Reviews";
import Footer from "./components/Footer";

function App() {
  const shopRef = useRef(null);
  const scrollToShop = () => {
    const el = document.getElementById("shop");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-slate-950">
      {/* gradient background */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(800px_400px_at_10%_-10%,rgba(59,130,246,0.25),transparent_60%),radial-gradient(600px_400px_at_90%_0%,rgba(16,185,129,0.2),transparent_60%)]" />
      <header className="sticky top-0 z-40 backdrop-blur bg-slate-950/60 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 h-14 flex items-center justify-between text-white">
          <div className="font-extrabold tracking-tight">Your Etsy Shop</div>
          <nav className="flex items-center gap-6 text-sm">
            <a href="#shop" className="hover:text-emerald-300">Shop</a>
            <a href="#reviews" className="hover:text-emerald-300">Reviews</a>
            <a href="https://etsy.com" target="_blank" rel="noreferrer" className="bg-white text-slate-900 font-semibold px-3 py-1.5 rounded-lg hover:opacity-90">Visit Etsy</a>
          </nav>
        </div>
      </header>

      <Hero onShopNow={scrollToShop} />
      <ProductGrid ref={shopRef} />
      <Reviews />
      <Footer />
    </div>
  );
}

export default App;
