function IconLink({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      aria-label={label}
      className="h-8 w-8 flex items-center justify-center rounded-full text-white/70 hover:text-[var(--color-purple-300)] hover:bg-white/10 transition-colors"
    >
      {children}
    </a>
  );
}

export default function Nav() {
  return (
    <header className="sticky top-0 z-30 bg-[var(--color-ink)] text-white">
      <nav className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between gap-6">
        {/* logo mark */}
        <a href="#top" className="flex items-center gap-2 shrink-0">
          <span
            className="relative flex items-center justify-center h-8 w-8 font-mono text-sm font-bold text-white"
            style={{
              clipPath:
                "polygon(50% 0%, 95% 25%, 95% 75%, 50% 100%, 5% 75%, 5% 25%)",
              background:
                "linear-gradient(135deg, var(--color-blue-500), var(--color-purple-500))",
            }}
          >
            A
          </span>
        </a>

        <div className="hidden md:flex items-center gap-8 text-sm text-white/70">
          <a href="#top" className="nav-link hover:text-white transition-colors">About</a>
          <a href="#work" className="nav-link hover:text-white transition-colors">Work</a>
          <a href="#stack" className="nav-link hover:text-white transition-colors">Stack</a>
          <a href="#contact" className="nav-link hover:text-white transition-colors">Contact</a>
        </div>

        <div className="flex items-center gap-1">
          <IconLink href="mailto:anaumsana123@gmail.com" label="Email">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="3" y="5" width="18" height="14" rx="2" />
              <path d="M3 7l9 6 9-6" />
            </svg>
          </IconLink>
          <IconLink href="#" label="GitHub">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2a10 10 0 00-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.46-1.15-1.11-1.46-1.11-1.46-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.89 1.52 2.34 1.08 2.91.83.09-.65.35-1.08.63-1.33-2.22-.25-4.56-1.11-4.56-4.95 0-1.09.39-1.99 1.03-2.69-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02a9.53 9.53 0 015 0c1.9-1.29 2.74-1.02 2.74-1.02.55 1.37.2 2.39.1 2.64.64.7 1.03 1.6 1.03 2.69 0 3.85-2.34 4.7-4.57 4.94.36.31.68.92.68 1.85v2.74c0 .26.18.58.69.48A10 10 0 0012 2z" />
            </svg>
          </IconLink>
          <IconLink href="#" label="LinkedIn">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
              <path d="M4.98 3.5a2.5 2.5 0 11-.02 5 2.5 2.5 0 01.02-5zM3 9h4v12H3zM9 9h3.8v1.7h.05c.53-1 1.83-2.06 3.77-2.06 4.03 0 4.78 2.65 4.78 6.1V21h-4v-5.6c0-1.34-.02-3.06-1.87-3.06-1.87 0-2.16 1.46-2.16 2.96V21H9z" />
            </svg>
          </IconLink>
        </div>
      </nav>
    </header>
  );
}
