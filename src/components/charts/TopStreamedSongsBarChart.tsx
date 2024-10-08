import { TrendingUp } from "lucide-react";
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";
import { format } from "date-fns";
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
import { TopSongData } from "@/@types";
import { useAnalyticsContext } from "@/context/AnalyticsDataContext";

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig;

const TopStreamedSongsBarChart = ({ data }: { data: TopSongData[] }) => {
  const { dateRange } = useAnalyticsContext();

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-xl">Top 5 Streamed Song</CardTitle>
        <CardDescription>Showing Top 5 songs</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart accessibilityLayer data={data}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="name"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Bar dataKey="streams" fill="var(--color-desktop)" radius={8} />
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="flex gap-2 font-medium leading-none">
          Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
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

export default TopStreamedSongsBarChart;
