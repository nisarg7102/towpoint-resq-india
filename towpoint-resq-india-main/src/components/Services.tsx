import { Truck, Wrench, Battery, Fuel, Key, AlertCircle, Map, Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const services = [
  {
    icon: Truck,
    title: "Car Towing",
    description: "Professional towing for all vehicle types - sedans, SUVs, luxury cars. Safe transport to your destination.",
    features: ["All vehicle types", "Long distance available", "GPS tracked"]
  },
  {
    icon: Wrench,
    title: "Flat Tyre Assistance",
    description: "Quick flat tyre repair or replacement service. We carry spare tyres and tools for instant help.",
    features: ["On-spot repair", "Tyre replacement", "All tyre sizes"]
  },
  {
    icon: Battery,
    title: "Battery Jump-Start",
    description: "Dead battery? Get instant jump-start service and battery check. We'll get you moving fast.",
    features: ["Instant jump-start", "Battery testing", "Battery replacement"]
  },
  {
    icon: Fuel,
    title: "Fuel Delivery",
    description: "Ran out of fuel? We deliver petrol or diesel directly to your location, anytime.",
    features: ["Petrol & diesel", "Emergency delivery", "24×7 available"]
  },
  {
    icon: Key,
    title: "Key Lockout Service",
    description: "Locked your keys inside? Professional lockout service without damaging your vehicle.",
    features: ["No damage", "All car models", "Quick response"]
  },
  {
    icon: AlertCircle,
    title: "Accident Recovery",
    description: "Complete accident recovery and vehicle transportation to nearest garage or home.",
    features: ["Insurance help", "Safe recovery", "Documentation support"]
  },
  {
    icon: Map,
    title: "Long Distance Transport",
    description: "Reliable long-distance vehicle transportation across Gujarat and neighboring states.",
    features: ["Interstate transport", "Secure handling", "Tracked delivery"]
  },
  {
    icon: Clock,
    title: "On-Spot Repair",
    description: "Minor repairs and mechanical fixes on the spot. Experienced technicians with tools.",
    features: ["Quick diagnosis", "Common repairs", "Expert mechanics"]
  }
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <div className="flex items-center justify-center gap-3 mb-4">
            <img src="/favicon.ico" alt="TowPoint Logo" className="w-12 h-12 md:w-16 md:h-16" />
            <h2 className="text-3xl md:text-5xl font-bold text-primary">
              Our Services
            </h2>
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive roadside assistance and towing solutions for all your emergency needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-large transition-smooth hover:-translate-y-2 border-2 hover:border-primary/30 animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                <div className="w-14 h-14 rounded-xl hero-gradient flex items-center justify-center mb-4 group-hover:scale-110 transition-smooth">
                  <service.icon className="w-7 h-7 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-smooth">
                  {service.title}
                </h3>
                
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                  {service.description}
                </p>

                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-secondary"></div>
                      <span className="text-foreground/80">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a href="tel:+919825131493">
            <button className="px-8 py-4 bg-secondary hover:bg-secondary-hover text-secondary-foreground font-bold rounded-lg shadow-medium hover:shadow-glow transition-smooth text-lg">
              Get Instant Help - Call 98251 31493
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
