import { motion } from "framer-motion";
import { Link } from "wouter";
import { Check, ArrowRight, Car, Gauge, Fuel } from "lucide-react";

export default function Autokonzept() {
  return (
    <div className="min-h-screen bg-[#050505] pt-24">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/garage-porsche.jpg')] bg-cover bg-center opacity-20 blur-sm" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-[#050505]/90 to-[#050505]" />
        
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8"
          >
            <Car className="w-4 h-4 text-[#D4AF37]" />
            <span className="text-[#D4AF37] font-mono text-xs uppercase tracking-widest">Fleet Management</span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "circOut" }}
            className="text-6xl md:text-9xl font-display font-bold text-white mb-8 tracking-tighter"
          >
            THE <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-white">FLEET</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-xl text-white/60 max-w-3xl mx-auto font-light leading-relaxed font-mono"
          >
            MOBILITY AS AN INCENTIVE. DRIVE PREMIUM.
          </motion.p>
        </div>
      </section>

      {/* Car Showcase */}
      <section className="py-24 relative">
        {/* Background Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] opacity-20 pointer-events-none" />

        <div className="container mx-auto px-6 relative z-10">
          {[
            {
              brand: "MERCEDES-BENZ",
              model: "CLA COUPÉ",
              image: "/images/garage-mercedes.jpg",
              level: "JUNIOR MANAGER",
              specs: [
                { label: "Leasing", value: "ab 0€" },
                { label: "Power", value: "136 PS" },
                { label: "Type", value: "Coupé" }
              ]
            },
            {
              brand: "PORSCHE",
              model: "911 CARRERA",
              image: "/images/garage-porsche.jpg",
              level: "ORGALEITER",
              specs: [
                { label: "Leasing", value: "Sonderkondition" },
                { label: "Power", value: "385 PS" },
                { label: "Type", value: "Sport" }
              ]
            }
          ].map((car, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="mb-48 last:mb-0"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                {/* Tech Specs Panel */}
                <div className={`lg:col-span-4 ${index % 2 === 1 ? 'lg:order-2' : 'lg:order-1'}`}>
                  <div className="glass-panel p-8 rounded-2xl border-l-4 border-[#D4AF37]">
                    <h3 className="text-[#D4AF37] font-mono text-xs uppercase tracking-widest mb-2">{car.brand}</h3>
                    <h2 className="text-4xl font-display font-bold text-white mb-8">{car.model}</h2>
                    
                    <div className="space-y-6">
                      {car.specs.map((spec, i) => (
                        <div key={i} className="flex items-center justify-between border-b border-white/10 pb-4">
                          <span className="text-white/40 font-mono text-sm uppercase">{spec.label}</span>
                          <span className="text-white font-bold font-display">{spec.value}</span>
                        </div>
                      ))}
                    </div>

                    <div className="mt-8 pt-8 border-t border-white/10">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-2 h-2 bg-[#D4AF37] rounded-full animate-pulse" />
                        <span className="text-white font-bold text-sm uppercase">Qualifikation</span>
                      </div>
                      <p className="text-white/60 text-sm">{car.level} Status erforderlich</p>
                    </div>
                  </div>
                </div>

                {/* Car Visual */}
                <div className={`lg:col-span-8 ${index % 2 === 1 ? 'lg:order-1' : 'lg:order-2'}`}>
                  <div className="relative group rounded-2xl overflow-hidden border border-white/10">
                    <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent z-10" />
                    <img 
                      src={car.image} 
                      alt={`${car.brand} ${car.model}`}
                      className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-1000"
                    />
                    
                    {/* Interactive Hotspots */}
                    <div className="absolute bottom-8 left-8 z-20 flex gap-4">
                      <button className="px-6 py-3 bg-[#D4AF37] text-black font-bold uppercase tracking-wider hover:bg-white transition-colors">
                        Konfigurieren
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 bg-[#020202] text-center border-t border-white/5">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-12">
            DRIVE YOUR <span className="text-[#D4AF37]">SUCCESS</span>
          </h2>
          <Link href="/kontakt" className="inline-flex items-center gap-4 px-12 py-5 border border-[#D4AF37] text-[#D4AF37] font-bold uppercase tracking-[0.2em] hover:bg-[#D4AF37] hover:text-black transition-all duration-500">
              Jetzt Einsteigen <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
