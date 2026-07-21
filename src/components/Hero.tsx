export default function Hero() {
  return (
    <section id="top" className="split-hero relative overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute top-10 left-1/2 -translate-x-1/2 h-[420px] w-[720px] rounded-full blur-3xl opacity-70"
        style={{
          background:
            "radial-gradient(closest-side, var(--color-blue-100), var(--color-purple-100), transparent)",
        }}
      />


      <div aria-hidden className="pointer-events-none absolute inset-0 hidden sm:block">
        <span className="absolute left-[8%] top-[22%] h-4 w-4 rounded-full bg-[var(--color-purple-300)] opacity-70" />
        <span className="absolute left-[14%] top-[62%] h-3 w-3 rounded-full bg-[var(--color-blue-500)] opacity-60" />
        <span className="absolute right-[10%] top-[18%] h-5 w-5 rotate-45 bg-[var(--color-blue-300)] opacity-60 rounded-sm" />
        <span className="absolute right-[16%] top-[68%] h-3 w-3 rounded-full bg-[var(--color-purple-500)] opacity-60" />
      </div>

      <div className="relative mx-auto max-w-6xl px-6 pt-6 pb-24 sm:pt-8 sm:pb-28">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] items-center gap-10 lg:gap-6">
          {/* left*/}
          <div className="text-center lg:text-right order-2 lg:order-1">
            <h1 className="font-display text-4xl sm:text-5xl font-bold text-[var(--color-ink)]">
              Welcome to
            </h1>
          </div>

          {/* center */}
          <div className="order-1 lg:order-2 flex justify-center">
            <DualityMark />
          </div>

          {/* right */}
          <div className="text-center lg:text-left order-3">
            <h1 className="font-mono text-4xl sm:text-5xl font-bold text-[var(--color-ink)]">
              &lt;my portfolio!&gt;
            </h1>
          </div>
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#work"
            className="rounded-full px-6 py-3 bg-[var(--color-ink)] text-white text-sm font-medium hover:bg-[var(--color-purple-700)] transition-colors"
          >
            See the work
          </a>
          <a
            href="#contact"
            className="rounded-full px-6 py-3 border-2 border-[var(--color-ink)] text-sm font-medium text-[var(--color-ink)] hover:bg-[var(--color-ink)] hover:text-white transition-colors"
          >
            Say hello
          </a>
        </div>
      </div>

      <svg
        aria-hidden
        viewBox="0 0 1200 28"
        preserveAspectRatio="none"
        className="wave-seam block"
      >
        <path
          d="M0 0 L60 20 L120 4 L180 22 L240 8 L300 20 L360 6 L420 22 L480 10 L540 20 L600 4 L660 22 L720 8 L780 20 L840 6 L900 22 L960 10 L1020 20 L1080 6 L1140 22 L1200 10 L1200 28 L0 28 Z"
          fill="currentColor"
        />
      </svg>
    </section>
  );
}


function DualityMark() {
  return (
    <svg
      viewBox="0 0 320 320"
      className="w-64 h-64 sm:w-80 sm:h-80"
      role="img"
      aria-label="Abstract mark representing hardware and software combined"
    >
      <defs>
        <linearGradient id="blotGradient" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="var(--color-blue-500)" />
          <stop offset="55%" stopColor="var(--color-purple-500)" />
          <stop offset="100%" stopColor="var(--color-purple-700)" />
        </linearGradient>
        <radialGradient id="glow" cx="50%" cy="42%" r="65%">
          <stop offset="0%" stopColor="white" stopOpacity="0.55" />
          <stop offset="100%" stopColor="white" stopOpacity="0" />
        </radialGradient>
        <filter id="softShadow" x="-40%" y="-40%" width="180%" height="180%">
          <feDropShadow dx="0" dy="10" stdDeviation="14" floodColor="var(--color-purple-700)" floodOpacity="0.35" />
        </filter>
      </defs>

      {/* offset back blob */}
      <path
        d="M168 42
           C 230 36, 278 78, 280 138
           C 282 198, 250 246, 196 272
           C 142 298, 78 284, 48 236
           C 18 188, 24 122, 66 82
           C 96 54, 128 46, 168 42 Z"
        fill="var(--color-blue-300)"
        opacity="0.5"
        transform="translate(10, 14)"
      />


      <path
        filter="url(#softShadow)"
        d="M164 26
           C 226 20, 280 62, 288 126
           C 296 190, 260 244, 202 274
           C 144 304, 72 288, 40 236
           C 8 184, 16 112, 62 70
           C 94 40, 124 32, 164 26 Z"
        fill="url(#blotGradient)"
      />

      <path
        d="M164 26
           C 226 20, 280 62, 288 126
           C 296 190, 260 244, 202 274
           C 144 304, 72 288, 40 236
           C 8 184, 16 112, 62 70
           C 94 40, 124 32, 164 26 Z"
        fill="url(#glow)"
      />


      <circle
        className="duality-ring"
        cx="160"
        cy="160"
        r="145"
        fill="none"
        stroke="var(--color-purple-500)"
        strokeWidth="2"
        strokeDasharray="2 14"
        opacity="0.6"
      />

      {/* circuit  */}
      <g
        stroke="var(--color-ink)"
        strokeWidth="4"
        strokeLinecap="round"
        fill="none"
        opacity="0.85"
      >
        <path d="M44 158 H118 V104 H176" />
        <path d="M176 104 V64" />
        <path d="M118 158 V222 H214" />
        <path d="M214 222 V262" />
        <path d="M176 104 H244 V148" />
        <path d="M244 148 H272" />
      </g>
      <g className="duality-node" fill="var(--color-ink)">
        <circle cx="44" cy="158" r="6" />
      </g>
      <g className="duality-node" fill="var(--color-ink)">
        <circle cx="176" cy="64" r="6" />
      </g>
      <g className="duality-node" fill="var(--color-ink)">
        <circle cx="214" cy="262" r="6" />
      </g>
      <g className="duality-node" fill="var(--color-ink)">
        <circle cx="272" cy="148" r="6" />
      </g>
      <g className="duality-node" fill="var(--color-ink)">
        <circle cx="118" cy="104" r="5" />
      </g>
      <g className="duality-node" fill="var(--color-ink)">
        <circle cx="214" cy="222" r="5" />
      </g>


    </svg>
  );
}
