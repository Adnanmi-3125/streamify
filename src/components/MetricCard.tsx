import { LucideIcon } from "lucide-react";
import { CardContent } from "./ui/card";

export type MetricCardProps = {
  label: string;
  icon: LucideIcon;
  amount: string;
  description: string;
};
const MetricCard: React.FC<MetricCardProps> = (props) => {
  return (
    <CardContent className="flex w-full flex-col gap-3 rounded-xl border p-5 shadow">
      <div className="flex justify-between gap-2">
        <p className="text-sm">{props.label}</p>
        <props.icon className="h-4 w-4 text-gray-400" />
      </div>
      <div className="flex flex-col gap-1">
        <h2 className="text-2xl font-semibold">{props.amount}</h2>
        <p className="text-xs text-gray-500">{props.description}</p>
      </div>
    </CardContent>
  );
};

export default MetricCard;
