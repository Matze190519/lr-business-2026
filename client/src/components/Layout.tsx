import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, Instagram, Facebook, Linkedin } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Produkte", href: "/produkte" },
    { name: "Business", href: "/business" },
    { name: "Über Uns", href: "/ueber-uns" },
    { name: "Kontakt", href: "/kontakt" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-black/90 backdrop-blur-md border-b border-white/10 py-4" : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center px-4">
        <Link href="/">
          <a className="text-2xl font-bold text-white tracking-wider flex items-center gap-2">
            <span className="text-gold-gradient font-serif text-3xl">LR</span>
            <span className="text-sm font-light tracking-[0.2em] uppercase hidden sm:block">Health & Beauty</span>
          </a>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link key={link.name} href={link.href}>
              <a
                className={`text-sm uppercase tracking-widest transition-colors duration-300 hover:text-[#FCF6BA] ${
                  location === link.href ? "text-gold-gradient font-semibold" : "text-white/80"
                }`}
              >
                {link.name}
              </a>
            </Link>
          ))}
          <Button className="bg-gold-gradient text-black font-bold hover:glow-gold transition-all duration-300 border-none rounded-none px-6">
            PARTNER WERDEN
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-black/95 backdrop-blur-xl border-b border-white/10 md:hidden flex flex-col items-center py-8 gap-6"
          >
            {navLinks.map((link) => (
              <Link key={link.name} href={link.href}>
                <a
                  className="text-xl text-white hover:text-gold-gradient font-serif"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              </Link>
            ))}
            <Button className="bg-gold-gradient text-black font-bold w-3/4 mt-4">
              PARTNER WERDEN
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

export function Footer() {
  return (
    <footer className="bg-[#050505] border-t border-white/10 pt-20 pb-10 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-gold-gradient opacity-5 blur-[150px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <h3 className="text-3xl font-serif text-gold-gradient mb-6">LR</h3>
            <p className="text-white/60 text-sm leading-relaxed mb-6">
              Mehr Qualität für Ihr Leben. Entdecken Sie exklusive Gesundheits- und Schönheitsprodukte und eine einzigartige Business-Chance.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-white/60 hover:text-[#FCF6BA] transition-colors"><Instagram size={20} /></a>
              <a href="#" className="text-white/60 hover:text-[#FCF6BA] transition-colors"><Facebook size={20} /></a>
              <a href="#" className="text-white/60 hover:text-[#FCF6BA] transition-colors"><Linkedin size={20} /></a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-serif mb-6 tracking-widest">PRODUKTE</h4>
            <ul className="space-y-3 text-sm text-white/60">
              <li><a href="#" className="hover:text-white transition-colors">Aloe Vera</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Nahrungsergänzung</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Parfums</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Zeitgard</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-serif mb-6 tracking-widest">BUSINESS</h4>
            <ul className="space-y-3 text-sm text-white/60">
              <li><a href="#" className="hover:text-white transition-colors">Geschäftsmodell</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Karriereplan</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Autokonzept</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Erfolgsgeschichten</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-serif mb-6 tracking-widest">KONTAKT</h4>
            <ul className="space-y-3 text-sm text-white/60">
              <li>MVM Business Management</li>
              <li>Dubai, UAE</li>
              <li>info@lr-business.eu</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/40">
          <p>&copy; 2026 MVM Business Management. Alle Rechte vorbehalten.</p>
          <div className="flex gap-6">
            <Link href="/impressum"><a className="hover:text-white transition-colors">Impressum</a></Link>
            <Link href="/datenschutz"><a className="hover:text-white transition-colors">Datenschutz</a></Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-[#BF953F] selection:text-black">
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
