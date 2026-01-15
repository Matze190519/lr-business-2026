import { motion } from "framer-motion";
import { BarChart3, TrendingUp, ShieldCheck, Zap } from "lucide-react";

export default function FastTrack() {
  const levels = [
    { level: 1, bonus: 250, title: "Junior Manager", pw: "4.000 PW" },
    { level: 2, bonus: 500, title: "Manager", pw: "8.000 PW" },
    { level: 3, bonus: 1000, title: "Junior Team Leader", pw: "12.000 PW" },
    { level: 4, bonus: 1250, title: "Team Leader", pw: "16.000 PW" },
  ];

  return (
    <div className="w-full h-full flex flex-col">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-2xl font-display font-bold text-white flex items-center gap-2">
            <Zap className="text-[#D4AF37] w-6 h-6" />
            FAST TRACK
          </h3>
          <p className="text-white/50 text-sm font-mono mt-1">GUARANTEED MONTHLY BONUS</p>
        </div>
        <div className="bg-[#D4AF37]/10 px-3 py-1 rounded border border-[#D4AF37]/20">
          <span className="text-[#D4AF37] font-mono text-xs font-bold">LIVE DATA</span>
        </div>
      </div>

      <div className="flex-1 flex items-end gap-4 mt-4">
        {levels.map((item, index) => (
          <div key={index} className="flex-1 flex flex-col justify-end group">
            <div className="relative w-full bg-white/5 rounded-t-lg overflow-hidden border-x border-t border-white/10 group-hover:border-[#D4AF37]/50 transition-colors duration-500">
              <motion.div
                initial={{ height: "0%" }}
                whileInView={{ height: `${(item.bonus / 1250) * 100}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, delay: index * 0.2, ease: "circOut" }}
                className="w-full bg-gradient-to-t from-[#D4AF37]/20 to-[#D4AF37]/80 absolute bottom-0 left-0"
              />
              <div className="absolute inset-0 flex flex-col justify-end p-2 items-center z-10">
                <span className="text-white font-display font-bold text-lg md:text-xl mb-1">{item.bonus}€</span>
              </div>
            </div>
            <div className="mt-3 text-center">
              <span className="block text-white/40 text-[10px] font-mono uppercase tracking-wider mb-1">Level {item.level}</span>
              <span className="block text-white/80 text-xs font-bold truncate">{item.title}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 grid grid-cols-2 gap-4">
        <div className="bg-white/5 p-3 rounded border border-white/10 flex items-center gap-3">
          <ShieldCheck className="text-[#D4AF37] w-5 h-5" />
          <div>
            <span className="block text-white text-xs font-bold">12 MONTHS</span>
            <span className="block text-white/40 text-[10px]">Guaranteed Duration</span>
          </div>
        </div>
        <div className="bg-white/5 p-3 rounded border border-white/10 flex items-center gap-3">
          <TrendingUp className="text-[#D4AF37] w-5 h-5" />
          <div>
            <span className="block text-white text-xs font-bold">SCALABLE</span>
            <span className="block text-white/40 text-[10px]">Unlimited Growth</span>
          </div>
        </div>
      </div>
    </div>
  );
}
