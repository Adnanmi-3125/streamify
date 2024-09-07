import React from "react";
import CustomCard from "./MetricCard";
import { LucideIcon } from "lucide-react";
import withSkeletonLoading from "@/components/hoc/withSkeletonLoading";

type Metric = {
  title: string;
  icon: LucideIcon;
  value: string;
  description: string;
  createdAt: string;
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

const skeletonLayout = [
  { width: "w-24", height: "h-4 mb-1" },
  { width: "w-36", height: "h-6 mb-1" },
  { width: "w-20", height: "h-2" },
];

const KeyMetricsWithSkeletonLoading = withSkeletonLoading(KeyMetrics);

export default (props: KeyMetricsProps & { loading: boolean }) => (
  <KeyMetricsWithSkeletonLoading
    {...props}
    skeletonCount={5}
    skeletonLayout={skeletonLayout}
    wrapperClass="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5 pb-6"
  />
);
