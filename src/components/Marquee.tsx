const ITEMS = [
  "EMBEDDED SYSTEMS",
  "FULL-STACK APPS",
  "COMPUTER VISION",
  "PRODUCT ENGINEERING",
  "ESP32 FIRMWARE",
  "REAL HARDWARE, REAL SHIP DATES",
];

export default function Marquee() {
  const loop = [...ITEMS, ...ITEMS];

  return (
    <div className="marquee-strip bg-[var(--color-ink)] text-white overflow-hidden">
      <div className="marquee-inner py-4">
        <div className="marquee-track">
          {loop.map((item, i) => (
            <span
              key={i}
              className="font-mono text-sm tracking-widest whitespace-nowrap px-6 flex items-center gap-6"
            >
              {item}
              <span className="text-[var(--color-purple-300)]" aria-hidden>
                ✦
              </span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
