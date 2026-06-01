import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

interface PageHeroProps {
  title: string;
  highlight?: string;
  subtitle: string;
  breadcrumb: { label: string; href?: string }[];
  eyebrow?: string;
}

const PageHero = ({ title, highlight, subtitle, breadcrumb, eyebrow }: PageHeroProps) => {
  return (
    <section className="relative pt-28 md:pt-32 pb-16 md:pb-20 overflow-hidden bg-muted/40 border-b border-border">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1100px] h-[420px] rounded-full bg-primary/[0.05] blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
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

        {eyebrow && (
          <div className="hero-animate hero-animate-1 inline-flex items-center gap-2 px-4 py-2 bg-primary/5 border border-primary/10 rounded-full mb-6">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            <span className="text-primary text-xs font-semibold tracking-wide uppercase">
              {eyebrow}
            </span>
          </div>
        )}

        <h1 className="hero-animate hero-animate-2 font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-foreground tracking-tight leading-[1.08] mb-6 max-w-4xl">
          {title}
          {highlight && (
            <>
              {' '}
              <span className="text-primary">{highlight}</span>
            </>
          )}
        </h1>

        <p className="hero-animate hero-animate-3 text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl">
          {subtitle}
        </p>
      </div>
    </section>
  );
};

export default PageHero;
