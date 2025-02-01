import { cn } from "@/lib/utils";

interface ServiceCardProps {
  title: string;
  icon: React.ReactNode;
  className?: string;
}

const ServiceCard = ({ title, icon, className }: ServiceCardProps) => {
  return (
    <div
      className={cn(
        "bg-white rounded-lg shadow-md p-6 flex flex-col items-center justify-center gap-4 hover:shadow-lg transition-shadow cursor-pointer",
        className
      )}
    >
      <div className="text-support-navy w-12 h-12">{icon}</div>
      <h3 className="text-support-navy text-center font-medium">{title}</h3>
    </div>
  );
};

export default ServiceCard;