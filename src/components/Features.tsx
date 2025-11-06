import { Bell, Brain, MapPin, Shield, Zap, Globe2 } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const features = [
  {
    title: "Real-Time Risk Detection",
    description: "AI analyzes current events, crime data, and weather patterns to assess your location's safety level instantly.",
    icon: Brain,
    gradient: "from-primary to-secondary"
  },
  {
    title: "Proactive Alerts",
    description: "Get notified about safety threats, riots, crime spikes, and weather hazards before they affect you.",
    icon: Bell,
    gradient: "from-warning to-destructive"
  },
  {
    title: "Cultural Intelligence",
    description: "AI-generated behavioral guidance and social rules tailored to your specific location and culture.",
    icon: Globe2,
    gradient: "from-accent to-secondary"
  },
  {
    title: "Emergency Routing",
    description: "One-tap access to local police, hospitals, embassies, and verified safe transport options.",
    icon: MapPin,
    gradient: "from-success to-accent"
  },
  {
    title: "Instant SOS Mode",
    description: "Single-tap emergency broadcast sends your location to designated contacts and local authorities.",
    icon: Zap,
    gradient: "from-destructive to-warning"
  },
  {
    title: "Offline Safety Maps",
    description: "Pre-cached city safety data ensures you stay protected even without internet connection.",
    icon: Shield,
    gradient: "from-secondary to-primary"
  }
];

const Features = () => {
  return (
    <section className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Comprehensive Protection
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Everything you need to stay safe and informed while traveling, 
            powered by advanced AI technology
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card 
                key={index}
                className="shadow-card hover:shadow-elevated transition-all duration-300 border-2 group hover:border-primary/30"
              >
                <CardHeader>
                  <div className="mb-4">
                    <div className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${feature.gradient} group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                  </div>
                  <CardTitle className="text-2xl group-hover:text-primary transition-colors">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;