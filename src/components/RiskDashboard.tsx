import { Shield, AlertCircle, CheckCircle, AlertTriangle } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface RiskLevel {
  level: "low" | "medium" | "high";
  location: string;
  description: string;
  recommendations: string[];
}

const mockRiskData: RiskLevel = {
  level: "low",
  location: "Downtown District, Nairobi",
  description: "This area is generally safe during daytime hours with active police presence.",
  recommendations: [
    "Stay in well-lit areas after dark",
    "Keep valuables secure",
    "Use registered taxi services"
  ]
};

const RiskIndicator = ({ level }: { level: "low" | "medium" | "high" }) => {
  const config = {
    low: {
      icon: CheckCircle,
      color: "text-success",
      bg: "bg-success/10",
      border: "border-success/30",
      label: "Low Risk"
    },
    medium: {
      icon: AlertTriangle,
      color: "text-warning",
      bg: "bg-warning/10",
      border: "border-warning/30",
      label: "Medium Risk"
    },
    high: {
      icon: AlertCircle,
      color: "text-destructive",
      bg: "bg-destructive/10",
      border: "border-destructive/30",
      label: "High Risk"
    }
  };

  const { icon: Icon, color, bg, border, label } = config[level];

  return (
    <div className={`flex items-center gap-3 p-4 rounded-xl ${bg} border ${border}`}>
      <Icon className={`w-8 h-8 ${color}`} />
      <div>
        <p className="text-sm text-muted-foreground">Current Risk Level</p>
        <p className={`text-xl font-bold ${color}`}>{label}</p>
      </div>
    </div>
  );
};

const RiskDashboard = () => {
  return (
    <section className="py-20 px-4 bg-gradient-card">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
            Live Risk Analysis
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Know Your Surroundings
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            AI-powered risk assessment updates in real-time based on your location
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Main Risk Card */}
          <Card className="shadow-card border-2 hover:shadow-elevated transition-all duration-300">
            <CardHeader>
              <div className="flex items-center gap-2 mb-2">
                <Shield className="w-6 h-6 text-primary" />
                <CardTitle className="text-2xl">Location Status</CardTitle>
              </div>
              <CardDescription className="text-base">
                {mockRiskData.location}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <RiskIndicator level={mockRiskData.level} />
              <p className="text-foreground/80 leading-relaxed">
                {mockRiskData.description}
              </p>
            </CardContent>
          </Card>

          {/* Recommendations Card */}
          <Card className="shadow-card border-2 hover:shadow-elevated transition-all duration-300">
            <CardHeader>
              <CardTitle className="text-2xl">Safety Recommendations</CardTitle>
              <CardDescription className="text-base">
                Follow these guidelines to stay safe
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {mockRiskData.recommendations.map((rec, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                    <span className="text-foreground/80">{rec}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default RiskDashboard;