import { MapPin, CheckCircle2 } from "lucide-react";

const cities = [
  "Ahmedabad",
  "Gandhinagar",
  "Vadodara",
  "Surat",
  "Rajkot",
  "Mehsana",
  "Anand",
  "Nadiad",
  "Bharuch",
  "Bhavnagar",
  "Jamnagar",
  "Junagadh",
  "Surendranagar",
  "Godhra",
  "Patan",
  "ALL OVER GUJARAT"
];

const Coverage = () => {
  return (
    <section id="coverage" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-primary/10 rounded-full">
            <MapPin className="w-5 h-5 text-primary" />
            <span className="font-semibold text-primary">Wide Coverage</span>
          </div>
          
          <div className="flex items-center justify-center gap-3 mb-4">
            <img src="/favicon.ico" alt="TowPoint Logo" className="w-12 h-12 md:w-16 md:h-16" />
            <h2 className="text-3xl md:text-5xl font-bold text-primary">
              Coverage Area
            </h2>
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Serving Ahmedabad and major cities across Gujarat with fast, reliable roadside assistance
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="bg-card rounded-2xl shadow-large p-8 md:p-12 border-2 border-border">
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-foreground mb-2">
                Primary Service Area: Ahmedabad
              </h3>
              <p className="text-muted-foreground">
                Complete 24×7 coverage across all zones of Ahmedabad with average response time under 30 minutes
              </p>
            </div>

            <div className="mb-8">
              <h4 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                <CheckCircle2 className="w-6 h-6 text-secondary" />
                Cities We Cover in Gujarat
              </h4>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {cities.map((city, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 p-3 bg-muted/50 rounded-lg hover:bg-primary/5 transition-smooth group"
                  >
                    <div className="w-2 h-2 rounded-full bg-secondary group-hover:scale-125 transition-smooth"></div>
                    <span className="font-medium text-foreground text-sm">{city}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <p className="text-muted-foreground mb-4">
              Don't see your city? Call us and we'll help you anyway!
            </p>
            <a href="tel:+919825131493">
              <button className="px-8 py-4 bg-primary hover:bg-primary-hover text-primary-foreground font-bold rounded-lg shadow-medium transition-smooth text-lg">
                Call 98251 31493 for Assistance
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Coverage;
