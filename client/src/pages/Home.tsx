import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Star, ShieldCheck, TrendingUp, Users, Banknote, Car, Globe } from "lucide-react";
import { Link } from "wouter";

export default function Home() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <div ref={containerRef} className="relative w-full overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <motion.div 
          style={{ y, opacity }}
          className="absolute inset-0 z-0"
        >
          <div className="absolute inset-0 bg-[url('/images/hero-luxury-2026.jpg')] bg-cover bg-center opacity-40" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#050505]/80 via-transparent to-[#050505]" />
        </motion.div>

        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="text-6xl md:text-8xl lg:text-9xl font-serif font-bold mb-8 leading-tight"
          >
            <span className="block text-white">DEFINE</span>
            <span className="text-gold-gradient">EXCELLENCE</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto mb-12 font-light tracking-wide"
          >
            Willkommen in der Elite des Network Marketing. Ein Geschäftsmodell für diejenigen, die mehr vom Leben erwarten: Finanzielle Freiheit, zeitliche Unabhängigkeit und ein Lifestyle der Extraklasse.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <Link href="/business" className="group relative inline-flex items-center gap-4 px-12 py-4 bg-transparent border border-[#BF953F]/30 overflow-hidden transition-all duration-500 hover:border-[#BF953F]">
                <span className="absolute inset-0 bg-gold-gradient opacity-0 group-hover:opacity-10 transition-opacity duration-500" />
                <span className="relative text-[#BF953F] text-sm uppercase tracking-[0.2em] font-medium group-hover:text-white transition-colors duration-300">
                  Discover The Business
                </span>
                <ArrowRight className="w-4 h-4 text-[#BF953F] group-hover:text-white transition-colors duration-300 group-hover:translate-x-2 transform" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-32 relative">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
              <h2 className="text-4xl md:text-6xl font-serif mb-8">
                THE <span className="text-gold-gradient">VISION</span>
              </h2>
              <p className="text-white/60 text-lg leading-relaxed mb-8 font-light">
                Wir definieren Erfolg neu. Nicht durch harte Arbeit allein, sondern durch intelligente Systeme, exklusive Produkte und eine Gemeinschaft, die sich gegenseitig an die Spitze hebt.
              </p>
              <div className="grid grid-cols-2 gap-8 mt-12">
                <div className="glass-panel p-8 border-l-2 border-[#BF953F]">
                  <h3 className="text-3xl font-serif text-white mb-2">40+</h3>
                  <p className="text-xs uppercase tracking-widest text-[#BF953F]">Jahre Erfolg</p>
                </div>
                <div className="glass-panel p-8 border-l-2 border-[#BF953F]">
                  <h3 className="text-3xl font-serif text-white mb-2">29</h3>
                  <p className="text-xs uppercase tracking-widest text-[#BF953F]">Länder Weltweit</p>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2 }}
              className="relative aspect-[4/5] overflow-hidden"
            >
              <div className="absolute inset-0 bg-gold-gradient opacity-20 blur-[100px]" />
              <img 
                src="/images/business-lifestyle.jpg" 
                alt="Vision" 
                className="relative z-10 w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Fast Track Bonus Section */}
      <section className="py-32 bg-[#080808] relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/gold-texture-hd.jpg')] bg-cover bg-center opacity-5" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-24">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="text-4xl md:text-7xl font-serif mb-6"
            >
              FAST TRACK <span className="text-gold-gradient">BONUS</span>
            </motion.h2>
            <p className="text-white/60 text-xl max-w-3xl mx-auto font-light">
              Ihr garantierter Einstieg in die finanzielle Unabhängigkeit. Planbar, sicher und transparent.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { level: "Level 1", income: "250€", title: "Junior Manager", desc: "Der erste Schritt in Ihre Karriere. Bauen Sie ein kleines Team auf und sichern Sie sich Ihr erstes festes Einkommen." },
              { level: "Level 2", income: "500€", title: "Manager", desc: "Erweitern Sie Ihren Einfluss. Helfen Sie anderen erfolgreich zu werden und verdoppeln Sie Ihr Einkommen." },
              { level: "Level 3", income: "1.000€", title: "Junior Team Leader", desc: "Führen Sie Führungskräfte. Genießen Sie finanzielle Freiheit und fahren Sie Ihren Traumwagen." },
              { level: "Level 4", income: "1.250€", title: "Team Leader", desc: "Die Elite. Ein Einkommen, das Ihnen echte Freiheit ermöglicht." },
            ].slice(0, 3).map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="glass-panel p-10 border border-[#BF953F]/10 hover:border-[#BF953F]/50 transition-all duration-500 group relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                  <Banknote className="w-24 h-24 text-[#BF953F]" />
                </div>
                <h3 className="text-[#BF953F] text-sm uppercase tracking-widest mb-2">{item.level}</h3>
                <div className="text-5xl font-serif text-white mb-4 group-hover:text-gold-gradient transition-colors">
                  {item.income}<span className="text-lg text-white/40 font-sans font-light">/mtl.*</span>
                </div>
                <h4 className="text-2xl text-white mb-4">{item.title}</h4>
                <p className="text-white/50 font-light leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
          
          <div className="text-center mt-16">
            <p className="text-white/30 text-sm italic">*Garantierter Mindestbonus bei Erreichung der Qualifikationskriterien im Fast Track Programm.</p>
          </div>
        </div>
      </section>

      {/* Auto Concept Teaser */}
      <section className="py-32 bg-[#020202] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#BF953F]/5 to-transparent" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-end justify-between mb-24">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
              <h2 className="text-4xl md:text-7xl font-serif mb-4">
                DRIVE <span className="text-gold-gradient">AMBITION</span>
              </h2>
              <p className="text-white/40 uppercase tracking-widest text-sm">Das LR Autokonzept</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              <Link href="/autokonzept" className="text-white hover:text-[#BF953F] transition-colors uppercase tracking-widest text-sm flex items-center gap-4 group">
                  Fahrzeuge Ansehen
                  <span className="w-12 h-[1px] bg-white/20 group-hover:bg-[#BF953F] transition-colors" />
              </Link>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "Mercedes-Benz", image: "/images/mercedes-car.png" },
              { name: "Audi", image: "/images/audi-car.png" },
              { name: "Porsche", image: "/images/porsche-car.png" },
            ].map((car, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="group relative aspect-[16/9] overflow-hidden cursor-pointer bg-[#0a0a0a] rounded-lg border border-white/5 hover:border-[#BF953F]/30 transition-colors"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10" />
                <img 
                  src={car.image} 
                  alt={car.name}
                  className="w-full h-full object-contain p-8 transform group-hover:scale-105 transition-transform duration-1000"
                />
                <div className="absolute bottom-6 left-6 z-20">
                  <h3 className="text-2xl font-serif text-white mb-1 translate-y-2 opacity-80 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                    {car.name}
                  </h3>
                  <div className="w-12 h-[1px] bg-[#BF953F] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Freedom & Lifestyle Grid */}
      <section className="py-32 relative">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { icon: Globe, title: "Absolute Freiheit", desc: "Arbeiten Sie wann, wo und mit wem Sie wollen. Ihr Büro ist dort, wo Sie sind." },
              { icon: TrendingUp, title: "Unbegrenztes Einkommen", desc: "Keine Gehaltsverhandlungen mehr. Ihr Einkommen wächst mit Ihrem Erfolg – ohne Limit." },
              { icon: Users, title: "Starkes Netzwerk", desc: "Werden Sie Teil einer globalen Elite von Unternehmern, die sich gegenseitig unterstützen." },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="glass-panel p-12 hover:border-[#BF953F]/50 transition-colors duration-500 group"
              >
                <feature.icon className="w-12 h-12 text-[#BF953F] mb-8 group-hover:scale-110 transition-transform duration-500" />
                <h3 className="text-xl font-serif text-white mb-4">{feature.title}</h3>
                <p className="text-white/50 font-light leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-48 relative overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 bg-[url('/images/gold-texture-hd.jpg')] bg-cover bg-center opacity-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-[#050505]" />
        
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="text-5xl md:text-8xl font-serif mb-12"
          >
            READY TO <span className="text-gold-gradient">ASCEND?</span>
          </motion.h2>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <a
              href="https://shop.lrworld.com/home/de/de?PHP=82F6242C29606626150B08E52027520C"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-16 py-5 bg-gold-gradient text-black font-bold uppercase tracking-[0.2em] hover:glow-white transition-all duration-500 transform hover:-translate-y-1"
            >
              Jetzt Starten
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
