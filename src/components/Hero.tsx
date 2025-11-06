import { Shield, MapPin, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-shield.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-secondary/85 to-primary/90" />
      </div>

      {/* Content */}
      <div className="container relative z-10 px-4 py-20 mx-auto">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Logo/Icon */}
          <div className="flex justify-center mb-6">
            <div className="relative">
              <Shield className="w-24 h-24 text-white animate-pulse" strokeWidth={1.5} />
              <div className="absolute inset-0 bg-white/20 blur-xl rounded-full" />
            </div>
          </div>

          {/* Heading */}
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight">
              SafiriShield
            </h1>
            <p className="text-2xl md:text-3xl text-white/90 font-medium">
              AI-Powered Travel Risk Intelligence
            </p>
          </div>

          {/* Description */}
          <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            Real-time safety alerts, cultural guidance, and emergency assistance 
            to keep you protected wherever you travel.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Button 
              size="lg" 
              className="bg-white text-primary hover:bg-white/90 shadow-elevated text-lg px-8 py-6 rounded-xl"
            >
              <MapPin className="mr-2 h-5 w-5" />
              Check Your Location
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="bg-white/10 text-white border-white/30 hover:bg-white/20 text-lg px-8 py-6 rounded-xl backdrop-blur-sm"
            >
              <AlertTriangle className="mr-2 h-5 w-5" />
              Emergency Mode
            </Button>
          </div>

          {/* Features Pills */}
          <div className="flex flex-wrap gap-3 justify-center pt-8">
            {["Real-Time Alerts", "Cultural Guidance", "Emergency Routing"].map((feature) => (
              <span 
                key={feature}
                className="px-6 py-2 bg-white/20 backdrop-blur-md text-white rounded-full text-sm font-medium border border-white/30"
              >
                {feature}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10" />
    </section>
  );
};

export default Hero;