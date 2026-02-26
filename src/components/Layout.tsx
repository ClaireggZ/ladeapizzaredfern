import { Link, useLocation } from "react-router-dom";
import { Home, UtensilsCrossed, MapPin } from "lucide-react";
import { useState, useEffect } from "react";
import laDeaLogo from "@/assets/la-dea-logo.png";

const Header = () => {
  const location = useLocation();
  const isHome = location.pathname === "/";
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    if (!isHome) {
      setScrolled(true);
      return;
    }
    const onScroll = () => setScrolled(window.scrollY > 150);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [isHome]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border/30 transition-transform duration-300 ${
        scrolled ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="container flex items-center justify-center py-2">
        <Link to="/" className="flex items-center">
          <img 
            src={laDeaLogo} 
            alt="LA DEA Pizza & Dolci" 
            className="h-12 w-auto"
          />
        </Link>
      </div>
    </header>
  );
};

const BottomNav = () => {
  const location = useLocation();
  
  const navItems = [
    { path: "/", icon: Home, label: "Home" },
    { path: "/menu", icon: UtensilsCrossed, label: "Menu" },
    { path: "/contact", icon: MapPin, label: "Contact" },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-sm border-t border-border/30 pb-safe">
      <div className="flex items-center justify-around py-2">
        {navItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <Link
              key={item.path}
              to={item.path}
              className={`flex flex-col items-center gap-1 px-6 py-2 rounded-lg transition-all ${
                isActive 
                  ? "text-foreground bg-primary/10" 
                  : "text-foreground/60 hover:text-foreground"
              }`}
            >
              <item.icon className="w-5 h-5" />
              <span className="text-xs font-medium">{item.label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-16 pb-20">
        {children}
      </main>
      <BottomNav />
    </div>
  );
};

export default Layout;
