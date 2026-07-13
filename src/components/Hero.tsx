import { motion } from 'motion/react';
import { Phone, Award, Sparkles, Navigation, Send, ArrowRight } from 'lucide-react';
import { contactData } from '../data';

export default function Hero() {
  return (
    <section className="relative w-full py-8 md:py-12 px-4 flex flex-col items-center justify-center overflow-hidden">
      {/* Decorative backdrop blobs */}
      <div className="absolute top-1/4 right-0 w-64 h-64 bg-brand-red/10 rounded-full blur-3xl pointer-events-none animate-pulse-slow" />
      <div className="absolute -bottom-10 left-0 w-48 h-48 bg-brand-gold/5 rounded-full blur-2xl pointer-events-none animate-pulse-slow-reverse" />

      {/* Elegant Cover Banner Image */}
      <motion.div 
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="w-full relative rounded-2xl overflow-hidden mb-0 aspect-[2.4/1] border border-white/10 group shadow-[0_8px_32px_rgba(0,0,0,0.5)] bg-premium-dark/40"
      >
        <img 
          src="https://i.postimg.cc/Pfc27D5D/anh-bia-hy.jpg"
          alt="Premium Real Estate City Skyline Cover"
          referrerPolicy="no-referrer"
          fetchPriority="high"
          decoding="async"
          className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-premium-dark/80 via-transparent to-black/10 pointer-events-none" />
      </motion.div>

      {/* Avatar Container with Glassmorphism Border */}
      <div className="relative z-10 -mt-16 md:-mt-20 mb-6">
        <motion.div 
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: 'spring', stiffness: 100, delay: 0.1 }}
          className="relative w-32 h-32 md:w-36 md:h-36 rounded-full p-1.5 bg-gradient-to-tr from-brand-red via-brand-gold to-brand-red-dark shadow-[0_0_30px_rgba(215,25,32,0.4)]"
        >
          <div className="w-full h-full rounded-full overflow-hidden bg-premium-dark border-2 border-premium-dark flex items-center justify-center">
            {/* Professional businesswoman portrait */}
            <img 
              id="hero-avatar-image"
              src="https://i.postimg.cc/9MywDqTy/anh-hoang-yen.png" 
              alt="Hoàng Yến - Chuyên viên tư vấn BĐS cao cấp" 
              referrerPolicy="no-referrer"
              fetchPriority="high"
              decoding="async"
              className="w-full h-full object-cover transition-all duration-500 hover:scale-105"
            />
          </div>
          {/* Active indicator dot */}
          <span className="absolute bottom-2 right-2 w-4 h-4 bg-green-500 rounded-full border-3 border-premium-dark animate-pulse" />
        </motion.div>

        {/* Decorative elements behind avatar */}
        <div className="absolute inset-0 bg-brand-red/10 rounded-full blur-xl -z-10 animate-ping opacity-30" />
      </div>

      {/* Principal Brand and Title */}
      <div className="text-center max-w-lg mb-6">
        <motion.h1 
          id="hero-name-title"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.4 }}
          className="text-3xl sm:text-4xl font-display font-black text-white mt-1 uppercase tracking-tight"
        >
          Hoàng Yến
          <span className="block text-xs text-brand-gold mt-1.5 font-sans font-bold tracking-widest uppercase">
            Hoàng Yến BĐS
          </span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.4 }}
          className="text-sm font-medium text-gray-300 mt-2.5 max-w-md mx-auto leading-relaxed"
        >
          Chuyên viên tư vấn BĐS cao cấp tại các dự án <span className="text-brand-gold font-semibold underline decoration-brand-red/50">Vinhomes Smart City</span>, <span className="text-brand-gold font-semibold underline decoration-brand-red/50">Imperia Sky Park</span> & <span className="text-brand-gold font-semibold underline decoration-brand-red/50">Hà Nội Sesson Garden</span>. Đồng hành hỗ trợ giải pháp an cư, phân tích dòng tiền đầu tư tối ưu.
        </motion.p>
      </div>

      {/* Slogan Container (Glass Box) */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5, duration: 0.4 }}
        className="w-full max-w-sm glass-card-red rounded-2xl p-4 mb-8 text-center border border-white/15"
      >
        <blockquote className="text-base font-serif font-semibold italic text-white leading-relaxed">
          &ldquo;Tận tâm đồng hành – Phân tích chuẩn xác – An tâm tuyệt đối&rdquo;
        </blockquote>
        <p className="text-[11px] text-gray-400 font-sans mt-2">
          Bất động sản là câu chuyện của <span className="text-brand-gold font-bold">giá trị vững bền</span>.
        </p>
      </motion.div>

      {/* Quick Core Call To Actions */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="w-full max-w-sm flex flex-col gap-3"
      >
        <a 
          href={contactData.zaloChatUrl}
          target="_blank"
          rel="noreferrer"
          className="w-full bg-brand-red hover:bg-brand-red/90 text-white font-bold py-3.5 px-6 rounded-2xl transition-all shadow-[0_4px_25px_rgba(215,25,32,0.3)] hover:shadow-[0_4px_30px_rgba(215,25,32,0.65)] hover:-translate-y-0.5 flex items-center justify-center gap-2.5 cursor-pointer text-sm"
        >
          <Send className="w-4 h-4 fill-white" />
          NHẮN ZALO TƯ VẤN NGAY
        </a>

        <div className="grid grid-cols-2 gap-3">
          <a 
            href={`tel:${contactData.phone}`}
            className="bg-white/5 hover:bg-white/10 text-white font-semibold py-3 px-4 rounded-xl transition-all border border-white/10 text-xs text-center flex items-center justify-center gap-1.5 cursor-pointer"
          >
            <Phone className="w-3.5 h-3.5 text-brand-red" />
            GỌI CHO HOÀNG YẾN
          </a>

          <a 
            href="#interactive-calculator"
            className="bg-white/5 hover:bg-white/10 text-brand-gold font-semibold py-3 px-4 rounded-xl transition-all border border-brand-gold/20 text-xs text-center flex items-center justify-center gap-1.5 cursor-pointer"
          >
            💎 TÍNH DÒNG TIỀN
          </a>
        </div>
      </motion.div>
    </section>
  );
}
