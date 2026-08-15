import { ArrowLeft, Sparkles } from "lucide-react";
import { Link } from "wouter";

export default function NotFound() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-[#faf8f5] px-5 sm:px-8 py-16" style={{ fontFamily: "'Inter', system-ui, sans-serif" }}>
      <div className="glass-card max-w-md w-full rounded-3xl p-8 sm:p-12 text-center border border-[#e8e0d8] shadow-xl">
        <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-[#f0ebe5] flex items-center justify-center text-[#4a2040]">
          <Sparkles size={28} className="text-[#c48b71]" />
        </div>

        <p className="text-[11px] tracking-[0.25em] uppercase text-[#8b6f6f] font-semibold mb-2">Poshsaaz Boutique</p>
        <h1
          className="text-5xl font-light text-[#241220] mb-3"
          style={{ fontFamily: "'Cormorant Garamond', serif" }}
        >
          404
        </h1>

        <h2
          className="text-2xl font-light text-[#4a2040] mb-4 italic"
          style={{ fontFamily: "'Cormorant Garamond', serif" }}
        >
          Page not found
        </h2>

        <p className="text-[14px] leading-[1.7] text-[#6b5a5a] mb-8">
          The creation you are looking for may have bloomed elsewhere or been relocated.
        </p>

        <Link
          href="/"
          className="inline-flex items-center justify-center gap-2.5 w-full py-3.5 px-6 rounded-full bg-[#4a2040] text-[#faf8f5] text-[12px] tracking-[0.12em] uppercase font-medium hover:bg-[#33142c] transition-all shadow-md"
        >
          <ArrowLeft size={16} />
          <span>Return to Home</span>
        </Link>
      </div>
    </div>
  );
}
