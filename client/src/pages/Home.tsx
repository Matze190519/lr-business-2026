import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, Star, Check, Play } from "lucide-react";

const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

export default function Home() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/hero-bg.jpg" 
            alt="Luxury Abstract Background" 
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-[#050505]" />
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-4xl mx-auto"
          >
            <motion.span variants={fadeInUp} className="inline-block text-gold-gradient text-sm md:text-base tracking-[0.3em] uppercase font-bold mb-6 border border-[#BF953F]/30 px-4 py-2 rounded-full backdrop-blur-sm">
              Welcome to the Future of Business
            </motion.span>
            
            <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-white mb-8 leading-tight">
              MORE QUALITY <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#BF953F] via-[#FCF6BA] to-[#B38728] drop-shadow-[0_0_15px_rgba(191,149,63,0.3)]">
                FOR YOUR LIFE
              </span>
            </motion.h1>
            
            <motion.p variants={fadeInUp} className="text-lg md:text-xl text-white/70 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
              Entdecken Sie eine Welt voller Möglichkeiten. Exklusive Produkte, finanzielle Freiheit und ein Lifestyle, der keine Grenzen kennt.
            </motion.p>
            
            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button className="bg-gold-gradient text-black font-bold text-lg px-10 py-6 rounded-none hover:glow-gold transition-all duration-500 transform hover:scale-105">
                JETZT STARTEN
              </Button>
              <Button variant="outline" className="border-white/20 text-white hover:bg-white/5 hover:border-[#FCF6BA] text-lg px-10 py-6 rounded-none backdrop-blur-md transition-all duration-300">
                MEHR ERFAHREN
              </Button>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-[10px] tracking-[0.2em] text-white/40 uppercase">Scroll</span>
          <div className="w-[1px] h-16 bg-gradient-to-b from-[#BF953F] to-transparent" />
        </motion.div>
      </section>

      {/* Intro / Vision Section */}
      <section className="py-32 bg-[#050505] relative">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-serif text-white mb-8 leading-tight">
                EINE VISION <br />
                <span className="text-gold-gradient">AUS GOLD & ERFOLG</span>
              </h2>
              <p className="text-white/60 text-lg mb-6 leading-relaxed">
                LR Health & Beauty ist mehr als nur ein Unternehmen. Es ist eine Bewegung. Seit 1985 setzen wir Maßstäbe in der Direktvertriebsbranche. Mit Produkten "Made in Germany" und einem Geschäftsmodell, das jedem die Chance gibt, über sich hinauszuwachsen.
              </p>
              <p className="text-white/60 text-lg mb-8 leading-relaxed">
                Wir glauben daran, dass wahrer Luxus nicht nur materiell ist, sondern auch bedeutet, Zeit für das Wesentliche zu haben. Gesundheit, Schönheit und Freiheit.
              </p>
              
              <div className="grid grid-cols-2 gap-8 mt-12">
                <div>
                  <h3 className="text-4xl font-serif text-[#FCF6BA] mb-2">40+</h3>
                  <p className="text-sm tracking-widest text-white/40 uppercase">Jahre Erfahrung</p>
                </div>
                <div>
                  <h3 className="text-4xl font-serif text-[#FCF6BA] mb-2">28+</h3>
                  <p className="text-sm tracking-widest text-white/40 uppercase">Länder Weltweit</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="absolute -inset-4 bg-gold-gradient opacity-20 blur-2xl rounded-full" />
              <img 
                src="/images/business-lifestyle.jpg" 
                alt="Business Lifestyle" 
                className="relative z-10 w-full h-auto border border-white/10 shadow-2xl"
              />
              <div className="absolute -bottom-10 -left-10 bg-black/80 backdrop-blur-xl border border-[#BF953F]/30 p-8 max-w-xs z-20 hidden md:block">
                <p className="font-serif text-xl text-white italic">"Erfolg ist kein Zufall. Es ist eine Entscheidung."</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Products Showcase */}
      <section className="py-32 bg-[#080808] relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-[#BF953F]/5 to-transparent pointer-events-none" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-20">
            <span className="text-[#BF953F] tracking-[0.2em] text-sm uppercase font-bold">Excellence</span>
            <h2 className="text-4xl md:text-6xl font-serif text-white mt-4 mb-6">PREMIUM PRODUKTE</h2>
            <div className="w-24 h-[2px] bg-gold-gradient mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "LR ZEITGARD",
                desc: "High-End Anti-Age Management für zeitlose Schönheit.",
                icon: "✨"
              },
              {
                title: "ALOE VERA",
                desc: "Die Kraft der Natur, veredelt durch Wissenschaft.",
                icon: "🌿"
              },
              {
                title: "LR LIFETAKT",
                desc: "Ihre tägliche Unterstützung für mehr Vitalität.",
                icon: "💪"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                className="group relative bg-[#050505] border border-white/5 p-10 hover:border-[#BF953F]/50 transition-all duration-500"
              >
                <div className="absolute inset-0 bg-gradient-to-b from-[#BF953F]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="text-4xl mb-6">{item.icon}</div>
                <h3 className="text-2xl font-serif text-white mb-4 group-hover:text-[#FCF6BA] transition-colors">{item.title}</h3>
                <p className="text-white/50 leading-relaxed mb-8">{item.desc}</p>
                
                <a href="#" className="inline-flex items-center text-[#BF953F] text-sm tracking-widest uppercase group-hover:text-white transition-colors">
                  Entdecken <ArrowRight size={16} className="ml-2" />
                </a>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-20 relative">
            <img 
              src="/images/products-showcase.jpg" 
              alt="Premium Products" 
              className="w-full h-[500px] object-cover filter brightness-75 hover:brightness-100 transition-all duration-700"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-20 h-20 rounded-full bg-white/10 backdrop-blur-md border border-white/30 flex items-center justify-center cursor-pointer hover:scale-110 transition-transform duration-300 group">
                <Play fill="white" className="text-white ml-1 group-hover:text-[#FCF6BA] transition-colors" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Business Opportunity */}
      <section className="py-32 bg-[#050505] relative">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto bg-gradient-to-br from-[#0A0A0A] to-[#000000] border border-white/10 p-12 md:p-20 relative overflow-hidden">
            {/* Gold Glow Effect */}
            <div className="absolute -top-20 -right-20 w-96 h-96 bg-[#BF953F] opacity-10 blur-[100px] rounded-full" />
            
            <div className="relative z-10 text-center">
              <h2 className="text-3xl md:text-5xl font-serif text-white mb-8">
                IHR WEG ZUR <span className="text-gold-gradient">FINANZIELLEN FREIHEIT</span>
              </h2>
              <p className="text-white/60 text-lg mb-12 max-w-2xl mx-auto">
                Starten Sie Ihr eigenes Business ohne Risiko. Mit dem LR Autokonzept, fairen Bonusplänen und einer starken Community im Rücken.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 text-left">
                <div className="flex items-start gap-4">
                  <div className="bg-[#BF953F]/20 p-2 rounded-full text-[#FCF6BA]"><Check size={20} /></div>
                  <div>
                    <h4 className="text-white font-bold mb-1">Freie Zeiteinteilung</h4>
                    <p className="text-white/40 text-sm">Arbeiten Sie wann und wo Sie wollen.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-[#BF953F]/20 p-2 rounded-full text-[#FCF6BA]"><Check size={20} /></div>
                  <div>
                    <h4 className="text-white font-bold mb-1">Kein Risiko</h4>
                    <p className="text-white/40 text-sm">Geringe Startkosten, keine Lagerhaltung.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-[#BF953F]/20 p-2 rounded-full text-[#FCF6BA]"><Check size={20} /></div>
                  <div>
                    <h4 className="text-white font-bold mb-1">Unbegrenzte Chancen</h4>
                    <p className="text-white/40 text-sm">Faire Aufstiegschancen für jeden.</p>
                  </div>
                </div>
              </div>
              
              <Button className="bg-gold-gradient text-black font-bold text-lg px-12 py-6 rounded-none hover:glow-gold w-full md:w-auto">
                JETZT PARTNER WERDEN
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
