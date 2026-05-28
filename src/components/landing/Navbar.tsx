import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '@/assets/logo.png';
import { Menu, X, ArrowRight, Phone, Mail, MapPin } from 'lucide-react';

const navLinks = [
  { label: 'Leistungen', href: '/leistungen' },
  { label: 'Software', href: '/software' },
  { label: 'Methodik', href: '/methodik' },
  { label: 'Team', href: '/team' },
  { label: 'Karriere', href: '/karriere' },
  { label: 'Kontakt', href: '/kontakt' },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => setMobileOpen(false), [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  return (
    <>
      {/* Top announcement bar */}
      <div className="relative z-[60] hidden md:block bg-foreground text-background">
        <div className="max-w-7xl mx-auto px-6 h-9 flex items-center justify-between text-[11px] font-mono uppercase tracking-[0.2em]">
          <div className="flex items-center gap-2">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full rounded-full bg-primary-glow opacity-75 animate-ping" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-primary-glow" />
            </span>
            <span>Neue Slots für Q1 2026 verfügbar</span>
          </div>
          <div className="flex items-center gap-6 text-background/70">
            <a href="tel:+4971124086840" className="hover:text-background transition-colors flex items-center gap-1.5"><Phone size={11}/> +49 711 24086840</a>
            <span className="hidden lg:inline">Filderstadt · DE</span>
          </div>
        </div>
      </div>

      {/* Main header bar */}
      <header
        className={`sticky top-0 z-50 w-full transition-all duration-300 ${
          scrolled
            ? 'bg-background/85 backdrop-blur-xl border-b border-border shadow-sm'
            : 'bg-background/40 backdrop-blur-md border-b border-transparent'
        }`}
      >
        <div className={`max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between transition-all duration-300 ${scrolled ? 'h-16' : 'h-20'}`}>
          {/* Logo */}
          <Link to="/" className="shrink-0 flex items-center">
            <img
              src={logo}
              alt="for.tel Solutions"
              loading="eager"
              fetchPriority="high"
              draggable={false}
              onContextMenu={(e) => e.preventDefault()}
              className={`w-auto object-contain hover:scale-105 transition-all duration-300 ${scrolled ? 'h-8' : 'h-10'}`}
            />
          </Link>

          {/* Desktop nav links */}
          <nav className="hidden lg:flex items-center gap-9">
            {navLinks.map((link) => {
              const active = location.pathname === link.href;
              return (
                <Link
                  key={link.href}
                  to={link.href}
                  className={`relative text-sm font-medium transition-colors group ${
                    active ? 'text-foreground' : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  {link.label}
                  <span className={`absolute -bottom-1.5 left-0 right-0 h-px bg-primary transition-transform origin-left ${active ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`} />
                </Link>
              );
            })}
          </nav>

          {/* Right side: CTA */}
          <div className="flex items-center gap-3">
            <Link
              to="/kontakt"
              className="hidden md:inline-flex items-center gap-2 px-5 h-11 rounded-xl bg-primary text-primary-foreground text-sm font-semibold shadow-md shadow-primary/25 hover:shadow-primary/40 hover:translate-y-[-1px] transition-all whitespace-nowrap"
            >
              Projekt starten
              <ArrowRight size={15} />
            </Link>

            {/* Mobile burger */}
            <button
              className="lg:hidden p-2.5 rounded-xl border border-border bg-background/70 hover:bg-background transition-colors text-foreground"
              onClick={() => setMobileOpen(true)}
              aria-label="Menü öffnen"
            >
              <Menu size={22} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile sidebar */}
      <div
        className={`lg:hidden fixed inset-0 z-[80] transition-opacity duration-300 ${
          mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="absolute inset-0 bg-foreground/30 backdrop-blur-sm" onClick={() => setMobileOpen(false)} />
        <div
          className={`absolute inset-y-0 right-0 w-[88%] max-w-[360px] bg-background shadow-2xl flex flex-col transition-transform duration-300 ease-out ${
            mobileOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex items-center justify-between px-6 pt-6 pb-4 border-b border-border">
            <Link to="/" onClick={() => setMobileOpen(false)}>
              <img src={logo} alt="for.tel Solutions" className="h-8" draggable={false} onContextMenu={(e) => e.preventDefault()} />
            </Link>
            <button
              onClick={() => setMobileOpen(false)}
              className="p-1.5 text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Menü schließen"
            >
              <X size={22} />
            </button>
          </div>

          <nav className="flex-1 flex flex-col px-6 pt-8 gap-1 overflow-y-auto">
            {navLinks.map((link, i) => (
              <Link
                key={link.href}
                to={link.href}
                onClick={() => setMobileOpen(false)}
                className={`py-3.5 text-xl font-display font-semibold border-b border-border/50 flex items-center justify-between group transition-colors ${
                  location.pathname === link.href ? 'text-primary' : 'text-foreground hover:text-primary'
                }`}
              >
                <span><span className="text-xs font-mono text-muted-foreground mr-3">0{i + 1}</span>{link.label}</span>
                <ArrowRight size={16} className="text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
              </Link>
            ))}
          </nav>

          <div className="px-6 py-6 border-t border-border bg-muted/30 space-y-3">
            <div className="space-y-2 text-sm text-muted-foreground">
              <a href="tel:+4971124086840" className="flex items-center gap-2.5 hover:text-foreground transition-colors"><Phone size={14} className="text-primary"/> +49 711 24086840</a>
              <a href="mailto:info@fortel.de" className="flex items-center gap-2.5 hover:text-foreground transition-colors"><Mail size={14} className="text-primary"/> info@fortel.de</a>
              <div className="flex items-center gap-2.5"><MapPin size={14} className="text-primary"/> Filderstadt, DE</div>
            </div>
            <Link
              to="/kontakt"
              onClick={() => setMobileOpen(false)}
              className="flex items-center justify-center gap-2 w-full px-6 py-3.5 rounded-xl bg-primary text-primary-foreground font-semibold"
            >
              Projekt starten
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
