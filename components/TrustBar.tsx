export default function TrustBar() {
  const trustItems = [
    "30+ Years Experience",
    "State Licensed & Insured",
    "Commercial & Residential",
    "24/7 Dispatch",
    "Broward & Palm Beach"
  ];

  return (
    <div className="bg-[var(--color-ice-blue)] w-full py-4 md:h-[60px] flex items-center justify-center">
      <div className="max-w-7xl mx-auto px-4 w-full">
        <div className="flex flex-wrap justify-center md:justify-between items-center gap-x-8 gap-y-3 text-[var(--color-text-dark)] font-bold text-sm text-center">
          {trustItems.map((item, index) => (
            <div key={index} className="flex items-center gap-3">
              <span>{item}</span>
              {index < trustItems.length - 1 && (
                <span className="hidden md:inline-block text-[var(--color-navy-light)]/30">|</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
