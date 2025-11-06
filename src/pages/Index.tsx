import Hero from "@/components/Hero";
import RiskDashboard from "@/components/RiskDashboard";
import EmergencyContacts from "@/components/EmergencyContacts";
import CulturalGuidance from "@/components/CulturalGuidance";
import Features from "@/components/Features";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <RiskDashboard />
      <Features />
      <CulturalGuidance />
      <EmergencyContacts />
    </div>
  );
};

export default Index;