
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  BarChart, 
  Bar, 
  ResponsiveContainer, 
  Tooltip, 
  Cell 
} from 'recharts';
import { 
  ChevronDown, 
  Check, 
  ArrowRight, 
  Play, 
  FileText, 
  TrendingUp, 
  CreditCard, 
  Target, 
  PenTool, 
  Clock, 
  Menu, 
  X, 
  Star,
  AlertCircle,
  Search,
  Smartphone
} from 'lucide-react';

// --- Constants ---
const CTA_LINK = "http://lynk.id/firstpage.template/p4emxk1r4m23";
const LOGO_URL = "https://ik.imagekit.io/hijar/favicon_orange_nZdGmQxhG.png?updatedAt=1769044850518&ik-s=26c0fe12b748484130c41f9eb73212542dc82a4d";
const APP_NAME = "Aplikasi Manajemen Keuangan UMKM";
const WHATSAPP_LINK = "https://wa.me/6282133279965?text=Halo%20Admin,%20Saya%20ingin%20bertanya%20mengenai%20produk%20Aplikasi%20Manajemen%20Keuangan%20UMKM%20yang%20kamu%20tawarkan.";

const MOCK_DATA = [
  { name: 'Jan', profit: 4000 },
  { name: 'Feb', profit: 3000 },
  { name: 'Mar', profit: 2000 },
  { name: 'Apr', profit: 2780 },
  { name: 'May', profit: 1890 },
  { name: 'Jun', profit: 2390 },
];

// --- Components ---

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-6 flex items-center justify-between">
        <a href="#" className="flex items-center gap-3">
          <img src={LOGO_URL} alt="Logo" className="w-10 h-10 object-contain" />
          <span className="text-lg font-black tracking-tighter hidden sm:inline-block leading-tight max-w-[180px]">First Page Template</span>
        </a>
        
        <nav className="hidden md:flex items-center gap-8">
          <a href="#masalah" className="text-sm font-semibold hover:text-primary transition-colors">Masalah</a>
          <a href="#fitur" className="text-sm font-semibold hover:text-primary transition-colors">Fitur</a>
          <a href="#harga" className="text-sm font-semibold hover:text-primary transition-colors">Harga</a>
          <a href="#faq" className="text-sm font-semibold hover:text-primary transition-colors">FAQ</a>
          <a href={CTA_LINK} className="bg-primary hover:bg-orange-600 text-white px-6 py-2.5 rounded-full text-sm font-bold transition-all shadow-lg shadow-primary/20">
            Mulai Sekarang
          </a>
        </nav>

        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-white border-b p-6 flex flex-col gap-4 md:hidden shadow-xl"
          >
            <a href="#masalah" onClick={() => setIsOpen(false)} className="font-semibold py-2 border-b">Masalah</a>
            <a href="#fitur" onClick={() => setIsOpen(false)} className="font-semibold py-2 border-b">Fitur</a>
            <a href="#harga" onClick={() => setIsOpen(false)} className="font-semibold py-2 border-b">Harga</a>
            <a href="#faq" onClick={() => setIsOpen(false)} className="font-semibold py-2 border-b">FAQ</a>
            <a href={CTA_LINK} className="bg-primary text-white text-center py-3 rounded-xl font-bold">Mulai Sekarang</a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

const Hero = () => (
  <section className="relative pt-32 pb-20 overflow-hidden">
    <div className="absolute -top-20 -right-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl -z-10" />
    <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
      >
        <div className="inline-block px-4 py-2 bg-accent text-primary rounded-full text-xs font-bold mb-6 tracking-wide uppercase">
          Solusi Keuangan UMKM No. 1 di Indonesia
        </div>
        <h1 className="text-5xl lg:text-7xl font-serif font-black leading-tight mb-8">
          Urus Keuangan Bisnis Jadi Lebih <span className="text-primary">Tenang</span>, Nggak Pake Pusing.
        </h1>
        <p className="text-lg text-zinc-600 mb-10 leading-relaxed max-w-lg">
          Lupakan buku catatan yang sering terselip atau rekap berantakan di Excel. Ubah input harianmu menjadi <strong>'Buku Rekap Otomatis'</strong> yang rapi. Kamu yang input datanya, biarkan kami yang rapiin laporannya.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <a href={CTA_LINK} className="bg-primary hover:bg-orange-600 text-white px-8 py-4 rounded-2xl text-lg font-bold shadow-xl shadow-primary/30 flex items-center justify-center gap-3 transition-transform hover:-translate-y-1">
            Aku Mau Rapikan Keuanganku Sekarang
            <ArrowRight size={20} />
          </a>
        </div>
        <div className="mt-8 flex items-center gap-4 text-zinc-500 text-sm">
          <div className="flex -space-x-2">
            {[1, 2, 3, 4].map((i) => (
              <img key={i} src={`https://picsum.photos/seed/${i + 10}/40/40`} className="w-8 h-8 rounded-full border-2 border-white" alt="User" />
            ))}
          </div>
          <p>Puluhan UMKM sudah lebih maju hari ini</p>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="relative"
      >
        <div className="relative bg-white p-4 rounded-[2.5rem] shadow-2xl border border-zinc-100 rotate-2">
          <img 
            src="https://picsum.photos/seed/dashboard/800/600" 
            className="rounded-[2rem] w-full" 
            alt="App Preview" 
          />
          <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-3xl shadow-xl border border-zinc-100 -rotate-3 hidden md:block">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-green-100 text-green-600 rounded-full flex items-center justify-center">
                <TrendingUp size={20} />
              </div>
              <div>
                <p className="text-xs text-zinc-400 font-bold uppercase tracking-widest">Profit Bulan Ini</p>
                <p className="text-xl font-black">Rp 12,450,000</p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

const ProblemSection = () => (
  <section id="masalah" className="py-24 bg-zinc-50 relative overflow-hidden">
    <div className="container mx-auto px-6 relative z-10">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-4xl md:text-5xl font-serif font-black mb-6 leading-tight">
          Jujur, Apakah Kamu Sering Mengalami Ini?
        </h2>
        <p className="text-zinc-600 text-lg leading-relaxed">
          Membangun bisnis itu sudah melelahkan. Jangan biarkan urusan rekap data bikin kamu makin tertekan.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          {
            icon: <AlertCircle className="w-8 h-8 text-red-500" />,
            title: "Buku Catatan Sering Hilang atau Terselip?",
            desc: "Sudah capek jualan seharian, pas mau rekap malah bukunya hilang atau nota penjualannya ketumpuk. Akhirnya data cuma ada di awang-awang."
          },
          {
            icon: <Search className="w-8 h-8 text-orange-500" />,
            title: "Uang Ada, Tapi Kok Nggak Tahu Untungnya?",
            desc: "Omzet kelihatan besar, tapi pas akhir bulan saldo di rekening kok tipis? Kamu bingung uangnya 'lari' ke mana karena pengeluaran kecil nggak pernah tercatat."
          },
          {
            icon: <Smartphone className="w-8 h-8 text-blue-500" />,
            title: "Excel Terlalu Rumit & Nggak Bisa Dibuka di HP?",
            desc: "Pernah coba pakai Excel tapi pusing sama rumusnya? Belum lagi susah kalau harus buka laptop tiap kali ada transaksi masuk. Pengennya yang simpel aja!"
          }
        ].map((item, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="bg-white p-8 rounded-3xl border border-zinc-200 shadow-xl shadow-zinc-200/50 hover:shadow-2xl hover:border-primary/20 transition-all group"
          >
            <div className="mb-6 w-14 h-14 rounded-2xl bg-zinc-50 flex items-center justify-center group-hover:scale-110 transition-transform">
              {item.icon}
            </div>
            <h3 className="text-xl font-bold mb-4 leading-snug">{item.title}</h3>
            <p className="text-zinc-500 leading-relaxed text-sm">
              {item.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
    
    {/* Subtle Decorative Elements for "Pressure" feel */}
    <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
      <div className="absolute top-10 left-10 w-64 h-64 bg-zinc-400 rounded-full blur-[100px]" />
      <div className="absolute bottom-10 right-10 w-64 h-64 bg-zinc-300 rounded-full blur-[100px]" />
    </div>
  </section>
);

const BentoGrid = () => (
  <section id="fitur" className="py-24 bg-white overflow-hidden">
    <div className="container mx-auto px-6">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <h2 className="text-4xl font-serif font-bold mb-4">Solusi Cerdas Untuk Bisnis Anda</h2>
        <p className="text-zinc-500">Kami menghapus kerumitan akuntansi. Fokus pada penjualan, serahkan rekap pada kami.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-auto md:auto-rows-[minmax(250px,auto)]">
        {/* Large: Visualisasi Cash Flow */}
        <motion.div 
          whileHover={{ y: -5 }}
          className="md:col-span-2 md:row-span-2 bg-slate-50 p-6 md:p-8 rounded-3xl border border-zinc-200 flex flex-col justify-between group overflow-hidden"
        >
          <div>
            <div className="w-12 h-12 bg-orange-100 text-primary rounded-xl flex items-center justify-center mb-6">
              <TrendingUp size={28} />
            </div>
            <h3 className="text-2xl font-bold mb-3">Pantau Performa Bisnis Kamu.</h3>
            <p className="text-zinc-600 leading-relaxed max-w-md text-sm md:text-base">
              Bukan sekadar angka, tapi cerita. Lihat arus kas dan keuntungan bersihmu lewat grafik yang mudah dimengerti. Gak perlu menebak-nebak, "Duit sisa berapa ya bulan ini?"
            </p>
          </div>
          <div className="h-48 md:h-64 mt-6">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={MOCK_DATA}>
                <Tooltip 
                  cursor={{fill: '#eee'}} 
                  contentStyle={{borderRadius: '16px', border: 'none', boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)'}}
                />
                <Bar dataKey="profit">
                  {MOCK_DATA.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={index === 5 ? '#FF5C00' : '#FFD6CC'} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </motion.div>

        {/* Medium: Manajemen Transaksi */}
        <motion.div 
          whileHover={{ y: -5 }}
          className="bg-white p-6 md:p-8 rounded-3xl border border-zinc-200 flex flex-col justify-between overflow-hidden"
        >
          <div>
            <div className="w-10 h-10 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center mb-4">
              <PenTool size={20} />
            </div>
            <h3 className="text-xl font-bold mb-2">Mudah Input Data.</h3>
            <p className="text-sm text-zinc-500 leading-snug">Input transaksi harian semudah mengisi formulir di HP. Semua tersimpan rapi.</p>
          </div>
          <div className="space-y-2 mt-6">
            <div className="h-8 bg-zinc-100 rounded-lg w-full"></div>
            <div className="h-8 bg-zinc-100 rounded-lg w-2/3"></div>
            <div className="h-10 bg-primary/10 rounded-lg w-full flex items-center px-4 text-primary text-[10px] font-bold tracking-widest">SIMPAN DATA</div>
          </div>
        </motion.div>

        {/* Small: Laporan PDF */}
        <motion.div 
          whileHover={{ y: -5 }}
          className="bg-white p-6 md:p-8 rounded-3xl border border-zinc-200 flex flex-col items-center justify-center text-center overflow-hidden"
        >
          <div className="w-16 h-16 bg-red-100 text-red-600 rounded-full flex items-center justify-center mb-4">
            <FileText size={32} />
          </div>
          <h3 className="font-bold mb-1">Laporan Siap Saji.</h3>
          <p className="text-xs text-zinc-500">Download PDF dalam satu klik. Profesional!</p>
        </motion.div>

        {/* Small: Pinjaman & Utang */}
        <motion.div 
          whileHover={{ y: -5 }}
          className="bg-zinc-900 text-white p-6 md:p-8 rounded-3xl flex flex-col justify-between overflow-hidden"
        >
          <div className="w-10 h-10 bg-white/10 text-white rounded-lg flex items-center justify-center">
            <CreditCard size={20} />
          </div>
          <div className="mt-4">
            <h3 className="font-bold mb-1">Bebas Was-was Utang.</h3>
            <div className="w-full bg-white/10 h-1.5 rounded-full mt-4 overflow-hidden">
              <div className="bg-primary h-full w-[70%]" />
            </div>
            <p className="text-[10px] mt-2 text-zinc-400">70% Cicilan Lunas</p>
          </div>
        </motion.div>

        {/* Medium: Target Profit */}
        <motion.div 
          whileHover={{ y: -5 }}
          className="md:col-span-1 bg-accent p-6 md:p-8 rounded-3xl border border-primary/20 flex flex-col justify-between overflow-hidden"
        >
          <div className="w-10 h-10 bg-primary text-white rounded-lg flex items-center justify-center">
            <Target size={20} />
          </div>
          <div className="mt-4">
            <h3 className="text-xl font-bold mb-1">Kejar Target!</h3>
            <p className="text-xs text-zinc-600">Pantau target profit tahunanmu.</p>
            <div className="mt-2 text-3xl font-black text-primary">Rp 500 Jt</div>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

const VideoDemo = () => (
  <section className="py-24 bg-zinc-900 text-white overflow-hidden">
    <div className="container mx-auto px-6 text-center">
      <h2 className="text-4xl font-serif font-bold mb-4">Lihat Betapa Mudah Menatanya</h2>
      <p className="text-zinc-400 mb-12 max-w-2xl mx-auto">
        Cek video singkat ini untuk lihat gimana 'Teras Digital' keuanganmu bekerja. Dari input manual yang simpel sampai jadi grafik yang keren.
      </p>
      <div className="relative max-w-4xl mx-auto aspect-video rounded-[2.5rem] overflow-hidden group shadow-2xl">
        <img src="https://picsum.photos/seed/video-placeholder/1200/675" className="w-full h-full object-cover opacity-50 transition-transform duration-700 group-hover:scale-110" alt="Video Demo" />
        <div className="absolute inset-0 flex items-center justify-center">
          <button className="w-24 h-24 bg-primary text-white rounded-full flex items-center justify-center hover:scale-110 transition-transform shadow-2xl ring-8 ring-white/10">
            <Play size={40} fill="currentColor" />
          </button>
        </div>
      </div>
    </div>
  </section>
);

const Testimonial = () => (
  <section className="py-24 bg-white">
    <div className="container mx-auto px-6">
      <div className="max-w-4xl mx-auto text-center relative">
        <div className="absolute -top-10 left-1/2 -translate-x-1/2 text-9xl text-zinc-100 font-serif -z-10">“</div>
        <h2 className="text-3xl font-serif font-bold mb-12">Mereka yang Akhirnya Bisa Tidur Nyenyak.</h2>
        <div className="bg-slate-50 p-8 md:p-12 rounded-[2.5rem] md:rounded-[3rem] border border-zinc-100 shadow-sm">
          <div className="flex justify-center gap-1 mb-8">
            {[1, 2, 3, 4, 5].map(i => <Star key={i} size={20} className="fill-primary text-primary" />)}
          </div>
          <p className="text-xl md:text-2xl font-medium leading-relaxed italic text-zinc-700 mb-10">
            "Dulu rekap di buku sering hilang. Sejak pakai sistem ini, tiap malam tinggal input sebentar sambil santai. Besok paginya, laporan sudah rapi. Benar-benar bikin tenang!"
          </p>
          <div className="flex items-center justify-center gap-4">
            <img src="https://picsum.photos/seed/maya/100/100" className="w-14 h-14 md:w-16 md:h-16 rounded-full border-4 border-white shadow-md" alt="Ibu Maya" />
            <div className="text-left">
              <p className="font-bold text-lg">Ibu Maya</p>
              <p className="text-xs text-primary font-bold tracking-widest uppercase">Pemilik Bisnis Frozen Food</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Pricing = () => (
  <section id="harga" className="py-24 bg-slate-50">
    <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
      <div>
        <h2 className="text-4xl font-serif font-bold mb-12">Cara Kerja Kami</h2>
        <div className="space-y-8">
          {[
            { step: '1', title: 'Amankan Akses', text: 'Klik tombol beli dan selesaikan pembayaran.' },
            { step: '2', title: 'Terima Akses', text: 'Link aplikasi dikirimkan ke email/WhatsApp kamu.' },
            { step: '3', title: 'Tonton Panduan', text: 'Pelajari cara pakainya lewat Video Panduan Penggunaan.' },
            { step: '4', title: 'Mulai Rapikan', text: 'Masukkan data pertamamu dan nikmati bisnis yang lebih teratur!' },
          ].map((item, idx) => (
            <div key={idx} className="flex gap-6 items-start group">
              <div className="w-12 h-12 bg-primary text-white rounded-2xl flex items-center justify-center flex-shrink-0 font-black shadow-lg shadow-primary/20 group-hover:scale-110 transition-transform">
                {item.step}
              </div>
              <div>
                <h4 className="text-xl font-bold mb-1">{item.title}</h4>
                <p className="text-zinc-500">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="bg-white p-8 md:p-12 rounded-[2.5rem] md:rounded-[3rem] shadow-2xl border-4 border-primary relative overflow-hidden transform md:hover:-rotate-1 transition-transform">
        <div className="absolute top-0 right-0 p-4">
          <div className="bg-primary text-white text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-widest">Sekali Bayar</div>
        </div>
        <h3 className="text-zinc-500 font-bold uppercase tracking-widest text-sm mb-4">Investment</h3>
        <div className="flex items-baseline gap-2 mb-8">
          <span className="text-5xl md:text-6xl font-black">Rp199k</span>
          <span className="text-zinc-400 line-through">Rp499k</span>
        </div>
        <ul className="space-y-4 mb-10">
          {[
            'Template file spreadsheet',
            'Aplikasi pencatatan keuangan siap pakai',
            'Video panduan penggunan',
            'Akses Selamanya',
            'Update Fitur Gratis'
          ].map((feature, i) => (
            <li key={i} className="flex items-center gap-3 font-semibold text-sm md:text-base">
              <div className="w-6 h-6 bg-green-100 text-green-600 rounded-full flex items-center justify-center flex-shrink-0">
                <Check size={14} strokeWidth={4} />
              </div>
              {feature}
            </li>
          ))}
        </ul>
        <a href={CTA_LINK} className="w-full bg-primary hover:bg-orange-600 text-white py-5 rounded-2xl text-xl font-black text-center block shadow-xl shadow-primary/30 transition-all hover:scale-[1.02]">
          Beli Sekarang
        </a>
        <p className="text-center text-xs text-zinc-400 mt-6 flex items-center justify-center gap-2">
          <Clock size={12} /> Terbatas untuk 50 pembeli pertama
        </p>
      </div>
    </div>
  </section>
);

const FAQItem = ({ question, answer }: { question: string, answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-zinc-200">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex items-center justify-between text-left group"
      >
        <span className="text-lg font-bold group-hover:text-primary transition-colors">{question}</span>
        <ChevronDown className={`transition-transform duration-300 ${isOpen ? 'rotate-180 text-primary' : ''}`} />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-zinc-600 leading-relaxed">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FAQ = () => (
  <section id="faq" className="py-24 bg-white">
    <div className="container mx-auto px-6 max-w-3xl">
      <h2 className="text-4xl font-serif font-bold mb-16 text-center">Tanya Jawab</h2>
      <div className="space-y-2">
        <FAQItem 
          question="Saya gaptek, apa bisa pakainya?" 
          answer="Tenang, inputnya semudah ngetik di WhatsApp, dan sudah ada video panduan lengkap yang nggak pakai bahasa IT berat."
        />
        <FAQItem 
          question="Datanya aman nggak?" 
          answer="Sangat aman! Data disimpan di Google Drive kamu sendiri. Kami cuma bantu buatkan sistemnya, kamu yang pegang kuncinya."
        />
        <FAQItem 
          question="Apa perlu bayar bulanan?" 
          answer="Nggak perlu. Sekali beli, sistem ini jadi milik kamu selamanya."
        />
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-white pt-24 pb-12 border-t border-zinc-100">
    <div className="container mx-auto px-6">
      <div className="bg-primary p-12 lg:p-24 rounded-[3rem] text-center text-white relative overflow-hidden mb-24">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-32 -mt-32" />
        <h2 className="text-4xl lg:text-6xl font-serif font-bold mb-8 relative z-10 leading-tight">Siap Buat Bisnis Kamu<br/>Naik Kelas?</h2>
        <a href={CTA_LINK} className="bg-white text-primary px-12 py-5 rounded-2xl text-xl font-black inline-block shadow-2xl hover:scale-105 transition-transform relative z-10">
          Beli Sekarang – Rp199.000
        </a>
      </div>
      
      <div className="flex flex-col md:flex-row justify-between items-center gap-8 pt-12 border-t border-zinc-100">
        <div className="flex items-center gap-3">
          <img src={LOGO_URL} alt="Logo" className="w-8 h-8 object-contain" />
          <span className="text-xl font-black tracking-tighter">First Page Template</span>
        </div>
        <p className="text-zinc-500 text-sm">© 2024 First Page Template. Semua Hak Dilindungi.</p>
        <div className="flex gap-8 text-sm font-bold">
          <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Kontak</a>
        </div>
      </div>
    </div>
  </footer>
);

const StickyCTA = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 500);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div 
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          exit={{ y: 100 }}
          className="fixed bottom-0 left-0 right-0 z-[60] p-4 flex justify-center md:hidden"
        >
          <a 
            href={CTA_LINK} 
            className="w-full bg-primary text-white py-4 rounded-2xl text-lg font-black text-center shadow-2xl flex items-center justify-center gap-3 active:scale-95 transition-transform"
          >
            Beli Sekarang – Rp199rb
            <ArrowRight size={20} />
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default function App() {
  return (
    <div className="min-h-screen selection:bg-primary/20">
      <Header />
      <Hero />
      <ProblemSection />
      <BentoGrid />
      <VideoDemo />
      <Testimonial />
      <Pricing />
      <FAQ />
      <Footer />
      <StickyCTA />
    </div>
  );
}
