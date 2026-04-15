import { Mountain } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-[#d6c8a4] bg-[#e9dec3]">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center gap-6">
          <div className="flex items-center gap-2 text-[#b8964f]">
            <Mountain size={32} />
            <span className="text-2xl font-light tracking-wider text-[#2d2212]">
              KAILASH
            </span>
          </div>

          <p className="text-[#5b4518] text-center max-w-md">
            Sacred journey to Mount Kailash — where life transforms
          </p>

          <div className="h-px w-32 bg-[#cdbb95]"></div>

          <p className="text-[#7a6536] text-sm">
            © {currentYear} Kailash Expedition
          </p>
        </div>
      </div>
    </footer>
  );
}
