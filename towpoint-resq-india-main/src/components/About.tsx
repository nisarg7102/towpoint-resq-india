import { Shield, Users, Award, MapPin } from "lucide-react";
import fleetImage from "@/assets/fleet.jpg";

const About = () => {
  const stats = [
    { icon: Users, value: "10,000+", label: "Happy Customers" },
    { icon: Shield, value: "24×7", label: "Always Available" },
    { icon: Award, value: "5+ Years", label: "Experience" },
    { icon: MapPin, value: "50+", label: "Cities Covered" },
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Centered Headline */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="flex items-center justify-center gap-3 mb-4">
            <img src="/favicon.ico" alt="TowPoint Logo" className="w-12 h-12 md:w-16 md:h-16" />
            <h2 className="text-3xl md:text-5xl font-bold text-primary">
              About TowPoint
            </h2>
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Gujarat's most trusted 24×7 roadside assistance provider with 5+ years of excellence
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Image */}
          <div className="relative animate-fade-in">
            <div className="relative rounded-2xl overflow-hidden shadow-large">
              <img
                src={fleetImage}
                alt="TowPoint professional tow truck fleet - reliable 24x7 roadside assistance vehicles"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent"></div>
            </div>
            
            {/* Floating Badge */}
            <div className="absolute -bottom-6 -right-6 bg-secondary rounded-2xl p-6 shadow-large animate-float">
              <p className="text-4xl font-bold text-secondary-foreground">5+</p>
              <p className="text-sm font-semibold text-secondary-foreground">Years Trust</p>
            </div>
          </div>

          {/* Right: Content */}
          <div className="animate-fade-in">
            
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Founded with a mission to provide reliable and fast roadside assistance, 
              <span className="font-semibold text-foreground"> TowPoint</span> has become Gujarat's 
              most trusted emergency vehicle service provider.
            </p>

            <p className="text-muted-foreground mb-8 leading-relaxed">
              We understand that vehicle breakdowns happen at the most unexpected times. That's why 
              our team of trained professionals is available <span className="font-semibold text-foreground">24 hours a day, 7 days a week</span>, 
              ready to assist you anywhere in Ahmedabad and across Gujarat.
            </p>

            {/* Key Features */}
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-secondary/20 flex items-center justify-center mt-1 flex-shrink-0">
                  <div className="w-2 h-2 rounded-full bg-secondary"></div>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Professional Team</h4>
                  <p className="text-sm text-muted-foreground">Trained and certified drivers with years of experience</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-secondary/20 flex items-center justify-center mt-1 flex-shrink-0">
                  <div className="w-2 h-2 rounded-full bg-secondary"></div>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Modern Fleet</h4>
                  <p className="text-sm text-muted-foreground">Well-maintained tow trucks and service vehicles</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-secondary/20 flex items-center justify-center mt-1 flex-shrink-0">
                  <div className="w-2 h-2 rounded-full bg-secondary"></div>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Quick Response</h4>
                  <p className="text-sm text-muted-foreground">Average response time under 30 minutes in Ahmedabad</p>
                </div>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <div 
                  key={index} 
                  className="bg-muted/50 rounded-xl p-4 border-2 border-border hover:border-primary/30 transition-smooth"
                >
                  <stat.icon className="w-8 h-8 text-primary mb-2" />
                  <p className="text-2xl font-bold text-foreground">{stat.value}</p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
