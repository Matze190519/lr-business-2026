import { motion } from "framer-motion";
import { Link } from "wouter";
import { Check, ArrowRight } from "lucide-react";

export default function Autokonzept() {
  return (
    <div className="min-h-screen bg-[#050505] pt-24">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/car-showroom-bg.jpg')] bg-cover bg-center opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-transparent to-[#050505]" />
        
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-5xl md:text-8xl font-serif mb-8"
          >
            THE <span className="text-gold-gradient">FLEET</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-xl text-white/60 max-w-3xl mx-auto font-light leading-relaxed"
          >
            Belohnung auf höchstem Niveau. Fahren Sie Premium-Fahrzeuge zu unschlagbaren Konditionen. Ein Statement für Ihren Erfolg.
          </motion.p>
        </div>
      </section>

      {/* Car Showcase */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          {[
            {
              brand: "MERCEDES-BENZ",
              model: "GLE SUV",
              image: "/images/mercedes-black.jpg",
              desc: "Souveräne Eleganz trifft auf kraftvolle Performance. Der perfekte Begleiter für Ihren Aufstieg.",
              specs: ["Ab Junior Manager", "Keine Anzahlung", "Inkl. Versicherung"]
            },
            {
              brand: "AUDI",
              model: "Q8",
              image: "/images/audi-black.jpg",
              desc: "Progressives Design und innovative Technologie. Ein Fahrzeug für Visionäre.",
              specs: ["Ab Manager", "Full-Service Leasing", "Freie Konfiguration"]
            },
            {
              brand: "PORSCHE",
              model: "911",
              image: "/images/porsche-black.jpg",
              desc: "Die Ikone des Sportwagenbaus. Für diejenigen, die das Ziel schon erreicht haben.",
              specs: ["Ab Orgaleiter", "Exklusive Konditionen", "Performance Pur"]
            }
          ].map((car, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-16 mb-32`}
            >
              <div className="w-full lg:w-1/2 relative group">
                <div className="absolute inset-0 bg-gold-gradient opacity-0 group-hover:opacity-10 transition-opacity duration-700 blur-2xl" />
                <img 
                  src={car.image} 
                  alt={`${car.brand} ${car.model}`}
                  className="w-full h-auto object-cover relative z-10 grayscale group-hover:grayscale-0 transition-all duration-1000"
                />
              </div>
              
              <div className="w-full lg:w-1/2">
                <h3 className="text-sm uppercase tracking-[0.3em] text-[#BF953F] mb-4">{car.brand}</h3>
                <h2 className="text-4xl md:text-6xl font-serif text-white mb-8">{car.model}</h2>
                <p className="text-white/60 text-lg font-light leading-relaxed mb-12">
                  {car.desc}
                </p>
                
                <ul className="space-y-6 mb-12">
                  {car.specs.map((spec, i) => (
                    <li key={i} className="flex items-center gap-4 text-white/80">
                      <div className="w-6 h-6 rounded-full border border-[#BF953F] flex items-center justify-center">
                        <Check className="w-3 h-3 text-[#BF953F]" />
                      </div>
                      <span className="uppercase tracking-widest text-sm">{spec}</span>
                    </li>
                  ))}
                </ul>

                <Link href="/kontakt">
                  <a className="inline-flex items-center gap-4 text-white hover:text-[#BF953F] transition-colors uppercase tracking-widest text-sm group">
                    Anfrage Starten
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" />
                  </a>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 bg-[#020202] text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-6xl font-serif mb-12">
            YOUR KEY TO <span className="text-gold-gradient">FREEDOM</span>
          </h2>
          <Link href="/kontakt">
            <a className="inline-block px-16 py-5 bg-transparent border border-[#BF953F] text-[#BF953F] font-bold uppercase tracking-[0.2em] hover:bg-[#BF953F] hover:text-black transition-all duration-500">
              Jetzt Einsteigen
            </a>
          </Link>
        </div>
      </section>
    </div>
  );
}
