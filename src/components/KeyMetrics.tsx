import React from "react";
import CustomCard from "./MetricCard"; // Ensure the correct import path
import { LucideIcon } from "lucide-react";

type Metric = {
  title: string;
  icon: LucideIcon;
  value: string;
  description: string;
};

interface KeyMetricsProps {
  metrics: Metric[];
}

const KeyMetrics: React.FC<KeyMetricsProps> = ({ metrics }) => {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5 pb-6">
      {metrics.map((metric) => (
        <CustomCard
          key={metric.title}
          label={metric.title}
          icon={metric.icon}
          amount={metric.value}
          description={metric.description}
        />
      ))}
    </div>
  );
};

export default KeyMetrics;
