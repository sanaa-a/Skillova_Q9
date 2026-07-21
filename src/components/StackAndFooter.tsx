const STACK = [
  "TypeScript",
  "React",
  "Next.js",
  "Python",
  "Flask",
  "OpenCV",
  "ESP32",
  "PyTorch",
];

export function StackStrip() {
  return (
    <section
      id="stack"
      className="px-6 py-16"
      style={{ background: "var(--color-bg-alt)" }}
    >
      <div className="mx-auto max-w-6xl">
        <p className="font-mono text-xs tracking-widest uppercase text-[var(--color-purple-700)] mb-6">
          Tools of the trade
        </p>
        <div className="flex flex-wrap gap-3">
          {STACK.map((tech) => (
            <span
              key={tech}
              className="stack-pill font-mono text-sm px-4 py-2 rounded-full bg-[var(--color-cream)] border-2 border-[var(--color-ink)] text-[var(--color-ink)]"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer
      id="contact"
      className="footer-texture px-6 py-16 bg-[var(--color-ink)] text-white"
    >
      <div className="mx-auto max-w-6xl flex flex-col sm:flex-row sm:items-end sm:justify-between gap-8">
        <div>
          <h2 className="font-display text-2xl sm:text-3xl font-bold">
            Let&apos;s build something.
          </h2>
          <p className="mt-3 text-sm text-white/60 max-w-sm">
            Open to collaborations.
          </p>
        </div>
        <a
          href="mailto:anaumsana123@gmail.com"
          className="font-mono text-sm px-6 py-3 rounded-full bg-[var(--color-purple-500)] text-[var(--color-ink)] font-semibold hover:bg-[var(--color-blue-300)] transition-colors w-fit"
        >
          anaumsana123@gmail.com
        </a>
      </div>
    </footer>
  );
}
