import { TrendingUp } from "lucide-react";
import { Pie, PieChart, Cell } from "recharts";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { RevenueDistributionData } from "@/@types";
import { useAnalyticsContext } from "@/context/AnalyticsDataContext";
import { format } from "date-fns";

const chartConfig: {
  subscriptions: {
    label: string;
    color: string;
  };
  ads: {
    label: string;
    color: string;
  };
} = {
  subscriptions: {
    label: "Subscriptions",
    color: "hsl(var(--chart-1))",
  },
  ads: {
    label: "Ads",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig;

const RevenueDistributionChart = ({
  data,
}: {
  data: RevenueDistributionData[];
}) => {
  const { dateRange } = useAnalyticsContext();
  return (
    <Card className="flex flex-col">
      <CardHeader className=" pb-0">
        <CardTitle className="text-xl">Revenue Distribution</CardTitle>
        <CardDescription>Showing total revenue</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[250px]"
        >
          <PieChart className="w-full">
            <ChartTooltip
              content={<ChartTooltipContent nameKey="value" hideLabel />}
            />
            <Pie data={data} dataKey="value" labelLine={false} nameKey="name">
              {data.map((entry: RevenueDistributionData, index: number) => (
                <Cell
                  key={`cell-${index}`}
                  fill={
                    chartConfig[
                      entry.name.toLowerCase() as keyof typeof chartConfig
                    ]?.color || "hsl(var(--foreground))"
                  }
                />
              ))}
            </Pie>
          </PieChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col gap-2 items-start text-sm">
        <div className="flex gap-2 font-medium leading-none">
          Revenue up by 5.2% this month <TrendingUp className="h-4 w-4" />
        </div>
        <div className="leading-none text-muted-foreground">
          {format(dateRange?.from as Date, "MMMM")} -{" "}
          {format(dateRange?.to as Date, "MMMM")}{" "}
          {format(dateRange?.to as Date, "yyyy")}
        </div>
      </CardFooter>
    </Card>
  );
};

export default RevenueDistributionChart;
