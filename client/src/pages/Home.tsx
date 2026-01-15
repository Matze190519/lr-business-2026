import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, TrendingUp, ShieldCheck, Globe, Zap, Award, BarChart3 } from "lucide-react";
import { Link } from "wouter";

export default function Home() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  return (
    <div ref={containerRef} className="relative w-full bg-[#050505] overflow-hidden">
      
      {/* HERO SECTION: Tech Luxury */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <motion.div style={{ y }} className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[url('/images/hero-tech-luxury.jpg')] bg-cover bg-center opacity-60" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#050505]/90 via-transparent to-[#050505]" />
        </motion.div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: "circOut" }}
              className="flex items-center gap-4 mb-6"
            >
              <div className="h-[1px] w-12 bg-[#D4AF37]" />
              <span className="text-[#D4AF37] font-mono text-sm tracking-[0.3em] uppercase">Est. 1985 • Made in Germany</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2, ease: "circOut" }}
              className="text-7xl md:text-9xl font-display font-bold leading-[0.9] mb-8 text-white"
            >
              BUILD YOUR <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/50">LEGACY.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="text-xl text-white/60 max-w-2xl font-light leading-relaxed mb-12 border-l-2 border-white/10 pl-6"
            >
              Das skalierbare Geschäftsmodell für Unternehmer. Maximale Performance durch deutsche Ingenieurskunst und digitale Systeme.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="flex flex-wrap gap-6"
            >
              <Link href="/business" className="group relative px-8 py-4 bg-[#D4AF37] text-black font-display font-bold uppercase tracking-wider overflow-hidden">
                <span className="relative z-10 flex items-center gap-2">
                  Jetzt Starten <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
              </Link>
              
              <Link href="/autokonzept" className="group px-8 py-4 border border-white/20 text-white font-display font-bold uppercase tracking-wider hover:bg-white/5 transition-colors">
                Zur Fahrzeugflotte
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* BENTO GRID: The Business DNA */}
      <section className="py-32 relative z-10">
        <div className="container mx-auto px-6">
          <div className="flex items-end justify-between mb-16">
            <h2 className="text-4xl md:text-6xl font-display font-bold text-white">
              BUSINESS <span className="text-[#D4AF37]">DNA</span>
            </h2>
            <p className="hidden md:block text-white/40 font-mono text-sm text-right">
              SYSTEM STATUS: ONLINE<br />
              MARKET: GLOBAL
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 auto-rows-[300px]">
            
            {/* Card 1: Fast Track (Large) */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="md:col-span-2 lg:col-span-2 row-span-2 glass-panel rounded-3xl p-8 relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-[url('/images/fast-track-dashboard.jpg')] bg-cover bg-center opacity-40 group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
              <div className="relative z-10 h-full flex flex-col justify-end">
                <div className="flex items-center gap-2 mb-4">
                  <Zap className="text-[#D4AF37] w-6 h-6" />
                  <span className="text-[#D4AF37] font-mono text-xs uppercase tracking-widest">Performance</span>
                </div>
                <h3 className="text-4xl font-display font-bold text-white mb-2">FAST TRACK</h3>
                <p className="text-white/60 mb-6">Garantierter monatlicher Bonus bis zu 1.250€ in den ersten 12 Monaten.</p>
                <div className="grid grid-cols-4 gap-2">
                  {[250, 500, 1000, 1250].map((val, i) => (
                    <div key={i} className="bg-white/5 rounded p-2 text-center border border-white/10">
                      <span className="block text-[#D4AF37] font-mono font-bold">{val}€</span>
                      <span className="text-[10px] text-white/30 uppercase">Lvl {i+1}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Card 2: Global Scale */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="glass-panel rounded-3xl p-8 flex flex-col justify-between group hover:border-[#D4AF37]/50 transition-colors"
            >
              <Globe className="text-white/20 w-12 h-12 group-hover:text-[#D4AF37] transition-colors" />
              <div>
                <h3 className="text-2xl font-display font-bold text-white mb-2">GLOBAL</h3>
                <p className="text-white/50 text-sm">Geschäft in 29 Ländern skalierbar. Keine Grenzen.</p>
              </div>
            </motion.div>

            {/* Card 3: Made in Germany */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="glass-panel rounded-3xl p-8 flex flex-col justify-between group hover:border-[#D4AF37]/50 transition-colors"
            >
              <ShieldCheck className="text-white/20 w-12 h-12 group-hover:text-[#D4AF37] transition-colors" />
              <div>
                <h3 className="text-2xl font-display font-bold text-white mb-2">QUALITY</h3>
                <p className="text-white/50 text-sm">SGS Institut Fresenius zertifiziert. Made in Germany.</p>
              </div>
            </motion.div>

            {/* Card 4: Product Tech (Large) */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="md:col-span-2 glass-panel rounded-3xl p-8 relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-[url('/images/aloe-tech.jpg')] bg-cover bg-center opacity-50 group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-transparent" />
              <div className="relative z-10 h-full flex flex-col justify-center max-w-xs">
                <h3 className="text-3xl font-display font-bold text-white mb-2">BIO-HACKING</h3>
                <p className="text-white/70 text-sm mb-4">Aloe Vera Acemannan-Technologie für maximale Zell-Performance.</p>
                <span className="text-[#D4AF37] font-mono text-xs flex items-center gap-2">
                  <div className="w-2 h-2 bg-[#D4AF37] rounded-full animate-pulse" />
                  LAB GRADE FORMULA
                </span>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* THE GARAGE: Virtual Showroom */}
      <section className="py-32 bg-[#020202] relative overflow-hidden">
        {/* Neon Ceiling Lights Effect */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-1/4 w-[1px] h-full bg-gradient-to-b from-blue-500/20 to-transparent" />
          <div className="absolute top-0 right-1/4 w-[1px] h-full bg-gradient-to-b from-purple-500/20 to-transparent" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-24">
            <h2 className="text-5xl md:text-8xl font-display font-bold text-white mb-6 tracking-tighter">
              THE <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-white">FLEET</span>
            </h2>
            <p className="text-white/40 font-mono uppercase tracking-[0.2em]">Mobilität als Incentive</p>
          </div>

          <div className="space-y-32">
            {/* Car 1: Mercedes */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-900/10 to-purple-900/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <motion.div 
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="relative z-10"
                >
                  <img src="/images/garage-mercedes.jpg" alt="Mercedes" className="w-full rounded-lg shadow-2xl border border-white/5" />
                </motion.div>
                <motion.div 
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="text-left"
                >
                  <h3 className="text-[#D4AF37] font-mono text-sm mb-2">ENTRY LEVEL</h3>
                  <h2 className="text-5xl font-display font-bold text-white mb-6">MERCEDES-BENZ</h2>
                  <ul className="space-y-4 mb-8">
                    <li className="flex items-center gap-4 text-white/70">
                      <div className="w-1 h-1 bg-[#D4AF37]" />
                      <span>CLA Coupé / A-Klasse</span>
                    </li>
                    <li className="flex items-center gap-4 text-white/70">
                      <div className="w-1 h-1 bg-[#D4AF37]" />
                      <span>Ab Junior Manager (4.000 PW)</span>
                    </li>
                    <li className="flex items-center gap-4 text-white/70">
                      <div className="w-1 h-1 bg-[#D4AF37]" />
                      <span>0€ Leasingrate möglich</span>
                    </li>
                  </ul>
                </motion.div>
              </div>
            </div>

            {/* Car 2: Porsche */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-l from-orange-900/10 to-red-900/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center lg:flex-row-reverse">
                <motion.div 
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="text-left lg:text-right order-2 lg:order-1"
                >
                  <h3 className="text-[#D4AF37] font-mono text-sm mb-2">EXECUTIVE LEVEL</h3>
                  <h2 className="text-5xl font-display font-bold text-white mb-6">PORSCHE</h2>
                  <ul className="space-y-4 mb-8 lg:ml-auto lg:mr-0 inline-block text-left">
                    <li className="flex items-center gap-4 text-white/70 lg:flex-row-reverse">
                      <div className="w-1 h-1 bg-[#D4AF37]" />
                      <span>911 / Panamera / Cayenne</span>
                    </li>
                    <li className="flex items-center gap-4 text-white/70 lg:flex-row-reverse">
                      <div className="w-1 h-1 bg-[#D4AF37]" />
                      <span>Ab Orgaleiter Status</span>
                    </li>
                    <li className="flex items-center gap-4 text-white/70 lg:flex-row-reverse">
                      <div className="w-1 h-1 bg-[#D4AF37]" />
                      <span>Exklusive Sonderkonditionen</span>
                    </li>
                  </ul>
                </motion.div>
                <motion.div 
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="relative z-10 order-1 lg:order-2"
                >
                  <img src="/images/garage-porsche.jpg" alt="Porsche" className="w-full rounded-lg shadow-2xl border border-white/5" />
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA: Join the Elite */}
      <section className="py-48 relative flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/hero-tech-luxury.jpg')] bg-cover bg-center opacity-20 blur-sm" />
        <div className="absolute inset-0 bg-[#050505]/80" />
        
        <div className="container mx-auto px-6 relative z-10 text-center">
          <h2 className="text-6xl md:text-9xl font-display font-bold text-white mb-12 tracking-tighter">
            START <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-white">NOW</span>
          </h2>
          <a
            href="https://shop.lrworld.com/home/de/de?PHP=82F6242C29606626150B08E52027520C"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-4 px-12 py-6 bg-[#D4AF37] text-black font-display font-bold text-xl uppercase tracking-widest hover:bg-white transition-colors duration-300"
          >
            Partner Werden <ArrowRight className="w-6 h-6" />
          </a>
        </div>
      </section>

    </div>
  );
}
