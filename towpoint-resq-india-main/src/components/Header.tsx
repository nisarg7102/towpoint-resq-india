import { Phone, Menu, X, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

interface HeaderProps {
  showBackButton?: boolean;
}

const Header = ({ showBackButton = false }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/services", label: "Services" },
    { path: "/about", label: "About" },
    { path: "/coverage", label: "Coverage" },
    { path: "/testimonials", label: "Reviews" },
    { path: "/contact", label: "Contact" },
  ];

  const isActive = (path: string) => {
    if (path === "/") {
      return location.pathname === "/";
    }
    return location.pathname.startsWith(path);
  };

  return (
    <>
      <header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 border-b shadow-soft">
        <div className="container mx-auto px-4">
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2">
              <div className="flex items-center justify-center w-10 h-10 rounded-full hero-gradient">
                <img src="favicon.ico" alt="nothing" />
                {/* <Phone className="w-5 h-5 text-white" /> */}
              </div>
              <div>
                <h1 className="text-xl font-bold text-primary">TowPoint</h1>
                <p className="text-xs text-muted-foreground">24×7 Assistance</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-6">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`text-sm font-medium hover:text-primary transition-smooth ${
                    isActive(item.path) ? "text-primary" : "text-foreground"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            {/* CTA Buttons */}
            <div className="flex items-center gap-3">
              <a href="tel:+919825131493" className="hidden sm:block">
                <Button variant="default" size="sm" className="gap-2 bg-primary hover:bg-primary-hover">
                  <Phone className="w-4 h-4" />
                  <span className="font-semibold">98251 31493</span>
                </Button>
              </a>
              
              {/* Back Button */}
              {showBackButton && (
                <Link to="/" className="hidden sm:block">
                  <Button variant="default" size="sm" className="gap-2 bg-primary hover:bg-primary-hover">
                    <ArrowLeft className="w-4 h-4" />
                    <span className="font-semibold">Back</span>
                  </Button>
                </Link>
              )}
              
              {/* Mobile Menu Toggle */}
              <Button
                variant="ghost"
                size="sm"
                className="md:hidden"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 top-16 z-40 bg-background md:hidden animate-fade-in">
          <nav className="flex flex-col p-4 gap-2">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`p-3 text-left font-medium hover:bg-muted rounded-lg transition-smooth ${
                  isActive(item.path) ? "text-primary" : "text-foreground"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <a href="tel:+919825131493" className="mt-4">
              <Button className="w-full gap-2 bg-primary hover:bg-primary-hover" size="lg">
                <Phone className="w-5 h-5" />
                Call Now: 98251 31493
              </Button>
            </a>
            
            {/* Back Button for Mobile */}
            {showBackButton && (
              <Link to="/" onClick={() => setIsMenuOpen(false)}>
                <Button className="w-full gap-2 bg-primary hover:bg-primary-hover" size="lg">
                  <ArrowLeft className="w-5 h-5" />
                  Back
                </Button>
              </Link>
            )}
          </nav>
        </div>
      )}
    </>
  );
};

export default Header;
