import { Phone, Mail, MapPin, Facebook, Instagram, Twitter } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-secondary">
               <img src="favicon.ico" alt="nothing" />
              </div>
              <div>
                <h3 className="text-xl font-bold">TowPoint</h3>
                <p className="text-xs opacity-90">24×7 Assistance</p>
              </div>
            </div>
            <p className="text-sm opacity-80 leading-relaxed mb-4">
              Gujarat's most trusted roadside assistance and car towing service provider. 
              Available 24 hours for all your emergency needs.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-8 h-8 rounded-full bg-white/10 hover:bg-secondary transition-smooth flex items-center justify-center">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-white/10 hover:bg-secondary transition-smooth flex items-center justify-center">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-white/10 hover:bg-secondary transition-smooth flex items-center justify-center">
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold mb-4">Our Services</h4>
            <ul className="space-y-2 text-sm opacity-80">
              <li>Car Towing</li>
              <li>Flat Tyre Assistance</li>
              <li>Battery Jump-Start</li>
              <li>Fuel Delivery</li>
              <li>Key Lockout Service</li>
              <li>Accident Recovery</li>
              <li>Long Distance Transport</li>
              <li>On-Spot Repair</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-4">Contact Us</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 flex-shrink-0 mt-0.5 text-secondary" />
                <div>
                  <p className="font-semibold mb-1">Call 24×7</p>
                  <a href="tel:+919825131493" className="text-lg font-bold hover:text-secondary transition-smooth">
                    +91 98251 31493
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5 text-secondary" />
                <div>
                  <p className="font-semibold mb-1">Location</p>
                  <p className="opacity-80">Ahmedabad, Gujarat, India</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 flex-shrink-0 mt-0.5 text-secondary" />
                <div>
                  <p className="font-semibold mb-1">Email</p>
                  <a href="mailto:kphbpatel@gmail.com" className="opacity-80 hover:text-secondary transition-smooth">
                    kphbpatel@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
            <p className="opacity-80">
              © {currentYear} TowPoint. All rights reserved.
            </p>
            <div className="flex gap-6 opacity-80">
              <Link to="/privacy-policy" className="hover:text-secondary transition-smooth">Privacy Policy</Link>
              <Link to="/terms-conditions" className="hover:text-secondary transition-smooth">Terms & Conditions</Link>
              <Link to="/refund-policy" className="hover:text-secondary transition-smooth">Refund Policy</Link>
            </div>
          </div>
        </div>
      </div>

      {/* Emergency Banner */}
      <div className="bg-secondary text-secondary-foreground py-3">
        <div className="container mx-auto px-4 text-center">
          <p className="font-bold text-lg">
            🚨 Emergency? Call 98251 31493 for Instant Help - Available 24×7
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
