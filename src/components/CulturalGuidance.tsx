import { Globe, Users, BookOpen } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const culturalTips = [
  {
    title: "Greeting Customs",
    description: "Handshakes are common. Use your right hand and maintain eye contact as a sign of respect.",
    icon: Users,
    category: "Social Etiquette"
  },
  {
    title: "Dress Code",
    description: "Modest dress is appreciated, especially in rural areas and religious sites. Cover shoulders and knees.",
    icon: BookOpen,
    category: "Appearance"
  },
  {
    title: "Dining Etiquette",
    description: "Wait to be shown where to sit. It's polite to try local dishes and accept hospitality graciously.",
    icon: Globe,
    category: "Food & Dining"
  }
];

const CulturalGuidance = () => {
  return (
    <section className="py-20 px-4 bg-gradient-card">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-secondary/10 text-secondary border-secondary/20">
            Cultural Intelligence
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Respect Local Customs
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            AI-powered cultural insights help you navigate social norms with confidence
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {culturalTips.map((tip, index) => {
            const Icon = tip.icon;
            return (
              <Card 
                key={index}
                className="shadow-card hover:shadow-elevated transition-all duration-300 border-2 hover:border-primary/30"
              >
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-3 rounded-lg bg-secondary/10">
                      <Icon className="w-6 h-6 text-secondary" />
                    </div>
                    <Badge variant="outline" className="text-xs">
                      {tip.category}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl">{tip.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    {tip.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Additional Info */}
        <Card className="mt-12 border-2 border-accent/30 bg-accent/5">
          <CardContent className="p-8 text-center">
            <Globe className="w-12 h-12 text-accent mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-foreground mb-3">
              Personalized for Your Destination
            </h3>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
              Our AI analyzes your specific location to provide relevant cultural guidance, 
              behavioral tips, and social norms to help you blend in and show respect.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default CulturalGuidance;