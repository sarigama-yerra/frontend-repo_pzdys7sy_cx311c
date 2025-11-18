import { Instagram, Store, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 mt-8">
      <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-4 text-white/80">
        <div className="text-sm">© {new Date().getFullYear()} Your Etsy Shop. All rights reserved.</div>
        <div className="flex items-center gap-4">
          <a href="#" className="hover:text-white inline-flex items-center gap-2"><Instagram className="w-4 h-4" /> Instagram</a>
          <a href="#shop" className="hover:text-white inline-flex items-center gap-2"><Store className="w-4 h-4" /> Shop</a>
          <a href="mailto:hello@example.com" className="hover:text-white inline-flex items-center gap-2"><Mail className="w-4 h-4" /> Contact</a>
        </div>
      </div>
    </footer>
  );
}
