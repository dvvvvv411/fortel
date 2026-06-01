import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

interface PageHeroProps {
  title: string;
  highlight?: string;
  subtitle: string;
  breadcrumb: { label: string; href?: string }[];
  eyebrow?: string;
  meta?: { label: string; value: string }[];
}

const PageHero = ({ title, highlight, subtitle, breadcrumb, eyebrow, meta }: PageHeroProps) => {
  return (
    <section className="relative pt-28 md:pt-32 pb-16 md:pb-20 overflow-hidden bg-muted/40 border-b border-border">
      {/* Single dezenter Glow oben mittig — wie Landing-Hero */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1100px] h-[420px] rounded-full bg-primary/[0.05] blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        {/* Breadcrumb */}
        <nav className="hero-animate hero-animate-1 flex items-center gap-1.5 mb-8 text-xs uppercase tracking-wider">
          {breadcrumb.map((item, i) => (
            <span key={i} className="flex items-center gap-1.5">
              {i > 0 && <ChevronRight size={12} className="text-muted-foreground/50" />}
              {item.href ? (
                <Link to={item.href} className="text-muted-foreground hover:text-foreground transition-colors font-medium">
                  {item.label}
                </Link>
              ) : (
                <span className="text-foreground font-semibold">{item.label}</span>
              )}
            </span>
          ))}
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-end">
          {/* Headline-Spalte */}
          <div className={meta && meta.length > 0 ? 'lg:col-span-7' : 'lg:col-span-12 max-w-4xl'}>
            {eyebrow && (
              <div className="hero-animate hero-animate-1 inline-flex items-center gap-2 px-4 py-2 bg-primary/5 border border-primary/10 rounded-full mb-6">
                <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                <span className="text-primary text-xs font-semibold tracking-wide uppercase">
                  {eyebrow}
                </span>
              </div>
            )}

            <h1 className="hero-animate hero-animate-2 font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-foreground tracking-tight leading-[1.08] mb-6">
              {title}
              {highlight && (
                <>
                  {' '}
                  <span className="text-primary">{highlight}</span>
                </>
              )}
            </h1>

            <p className="hero-animate hero-animate-3 text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl">
              {subtitle}
            </p>
          </div>

          {/* Optionaler Meta-Block */}
          {meta && meta.length > 0 && (
            <div className="hero-animate hero-animate-4 lg:col-span-5">
              <div className="rounded-md border border-border bg-background shadow-sm divide-y divide-border">
                {meta.map((m) => (
                  <div key={m.label} className="flex items-baseline justify-between gap-6 px-5 py-4">
                    <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground shrink-0">
                      {m.label}
                    </span>
                    <span className="font-display text-sm sm:text-base font-bold text-foreground text-right">
                      {m.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default PageHero;
