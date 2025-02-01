import Header from "@/components/Header";
import ServiceCard from "@/components/ServiceCard";
import WhatsAppButton from "@/components/WhatsAppButton";
import {
  HelpCircle,
  Home,
  Stethoscope,
  Shield,
  Shirt,
  TrendingUp,
  Building2,
  Scale,
  Users,
  User,
  Baby,
} from "lucide-react";

const Index = () => {
  const services = [
    { title: "Where to go first", icon: <HelpCircle className="w-full h-full" /> },
    { title: "Shelter", icon: <Home className="w-full h-full" /> },
    { title: "Health & Wellbeing", icon: <Stethoscope className="w-full h-full" /> },
    { title: "Dentist", icon: <Stethoscope className="w-full h-full" /> },
    { title: "Safety & Protection", icon: <Shield className="w-full h-full" /> },
    { title: "Food & Clothing", icon: <Shirt className="w-full h-full" /> },
    { title: "Work", icon: <TrendingUp className="w-full h-full" /> },
    { title: "Asylum & Return", icon: <Building2 className="w-full h-full" /> },
    { title: "Legal Advice", icon: <Scale className="w-full h-full" /> },
    { title: "Search Missing Relatives", icon: <Users className="w-full h-full" /> },
    { title: "Women", icon: <User className="w-full h-full" /> },
    { title: "Children & Youth", icon: <Baby className="w-full h-full" /> },
  ];

  return (
    <div className="min-h-screen bg-support-cream">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-3xl mx-auto mb-12">
          <h1 className="text-4xl font-bold text-support-navy mb-6">
            Support in The Hague
          </h1>
          <p className="text-gray-700 mb-4">
            This site is by the Netherlands Red Cross for people who are
            undocumented: without legal status or BSN. We do not share your
            personal details.
          </p>
          <p className="text-gray-700 mb-6">
            Find information for local services like legal support, health, and
            shelter.
          </p>
          <div className="bg-white rounded-lg p-6 shadow-md">
            <h2 className="font-semibold text-support-navy mb-2">Questions?</h2>
            <p className="text-gray-700">
              Please contact our WhatsApp helpdesk:{" "}
              <a
                href="tel:+31970102869"
                className="text-support-navy font-semibold hover:underline"
              >
                +31 9 70 10 28 69 64
              </a>
            </p>
            <p className="text-gray-700 mt-2">
              Opening hours: Monday - Friday: 10:00 - 18:00
              <br />
              Weekends/Holidays: limited capacity
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              icon={service.icon}
            />
          ))}
        </div>
      </main>

      <WhatsAppButton />
    </div>
  );
};

export default Index;