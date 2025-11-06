import { Phone, Hospital, Building2, Car } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const emergencyServices = [
  {
    name: "Police",
    icon: Phone,
    number: "999",
    description: "Emergency police response",
    color: "text-primary"
  },
  {
    name: "Hospital",
    icon: Hospital,
    number: "911",
    description: "Medical emergencies",
    color: "text-destructive"
  },
  {
    name: "Embassy",
    icon: Building2,
    number: "+254 20 123 4567",
    description: "Consular assistance",
    color: "text-secondary"
  },
  {
    name: "Safe Taxi",
    icon: Car,
    number: "+254 700 123 456",
    description: "Verified transport",
    color: "text-accent"
  }
];

const EmergencyContacts = () => {
  return (
    <section className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Emergency Assistance
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Quick access to critical contacts when you need help fast
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {emergencyServices.map((service) => {
            const Icon = service.icon;
            return (
              <Card 
                key={service.name}
                className="shadow-card hover:shadow-elevated transition-all duration-300 border-2"
              >
                <CardHeader>
                  <div className="flex justify-center mb-4">
                    <div className={`p-4 rounded-full bg-gradient-hero`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <CardTitle className="text-center text-xl">
                    {service.name}
                  </CardTitle>
                  <CardDescription className="text-center">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="text-center">
                    <p className="text-2xl font-bold text-primary">
                      {service.number}
                    </p>
                  </div>
                  <Button 
                    className="w-full bg-gradient-hero hover:opacity-90 transition-opacity"
                    size="lg"
                  >
                    <Phone className="mr-2 h-4 w-4" />
                    Call Now
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* SOS Button */}
        <div className="mt-12 text-center">
          <Button 
            size="lg"
            className="bg-destructive hover:bg-destructive/90 text-destructive-foreground px-12 py-6 text-xl rounded-xl shadow-elevated"
          >
            <AlertTriangle className="mr-3 h-6 w-6" />
            EMERGENCY SOS
          </Button>
          <p className="mt-4 text-sm text-muted-foreground">
            Instantly alert emergency contacts and share your location
          </p>
        </div>
      </div>
    </section>
  );
};

const AlertTriangle = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"/>
    <path d="M12 9v4"/>
    <path d="M12 17h.01"/>
  </svg>
);

export default EmergencyContacts;