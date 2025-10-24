import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    name: "Rajesh Patel",
    location: "Ahmedabad",
    rating: 5,
    text: "Amazing service! My car broke down at 2 AM on the highway. TowPoint arrived in just 25 minutes. Professional and courteous team.",
    service: "Car Towing"
  },
  {
    name: "Priya Shah",
    location: "Gandhinagar",
    rating: 5,
    text: "Got a flat tyre near SG Highway. They arrived quickly and fixed it on the spot. Very affordable and reliable service.",
    service: "Flat Tyre Repair"
  },
  {
    name: "Karan Mehta",
    location: "Vadodara",
    rating: 5,
    text: "My battery died in a parking lot. Called TowPoint and they jump-started my car within 20 minutes. Highly recommend!",
    service: "Battery Jump-Start"
  },
  {
    name: "Neha Desai",
    location: "Ahmedabad",
    rating: 5,
    text: "Locked my keys in the car at midnight. TowPoint helped me without any damage to my vehicle. Excellent 24×7 service!",
    service: "Key Lockout Service"
  },
  {
    name: "Amit Singh",
    location: "Surat",
    rating: 5,
    text: "Needed long-distance towing from Surat to Ahmedabad. Safe delivery and reasonable pricing. Very satisfied with the service.",
    service: "Long Distance Towing"
  },
  {
    name: "Meera Joshi",
    location: "Rajkot",
    rating: 5,
    text: "Professional team with modern equipment. They handled my luxury car with extreme care during towing. Five stars!",
    service: "Luxury Car Towing"
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-6 h-6 fill-secondary text-secondary" />
            ))}
          </div>
          
          <div className="flex items-center justify-center gap-3 mb-4">
            <img src="/favicon.ico" alt="TowPoint Logo" className="w-12 h-12 md:w-16 md:h-16" />
            <h2 className="text-3xl md:text-5xl font-bold text-primary">
              Customer Reviews
            </h2>
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Trusted by thousands of customers across Gujarat for reliable roadside assistance
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="group hover:shadow-large transition-smooth hover:-translate-y-1 border-2 animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <Quote className="w-8 h-8 text-secondary/30" />
                  <div className="flex gap-0.5">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-secondary text-secondary" />
                    ))}
                  </div>
                </div>

                <p className="text-foreground/90 mb-6 leading-relaxed italic">
                  "{testimonial.text}"
                </p>

                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <div>
                    <p className="font-bold text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs font-semibold text-primary">{testimonial.service}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center bg-muted/50 rounded-2xl p-8 max-w-4xl mx-auto border-2 border-border">
          <div className="flex items-center justify-center gap-2 mb-3">
            <Star className="w-8 h-8 fill-secondary text-secondary" />
            <p className="text-4xl font-bold text-foreground">4.9/5</p>
          </div>
          <p className="text-lg font-semibold text-foreground mb-2">
            Average Rating from 10,000+ Customers
          </p>
          <p className="text-muted-foreground">
            Join thousands of satisfied customers who trust TowPoint for emergency roadside assistance
          </p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
