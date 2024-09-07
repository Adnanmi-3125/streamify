import { Metric, RevenueDistributionData, TopSongData } from "@/@types";
import {
  Calendar,
  BarChart2,
  DollarSign,
  Star,
  LucideIcon,
} from "lucide-react";
import { DateRange } from "react-day-picker";

export const iconMap: { [key: string]: LucideIcon } = {
  "Total Users": Calendar,
  "Active Users": BarChart2,
  "Total Streams": BarChart2,
  Revenue: DollarSign,
  "Top Artist": Star,
};

export const calculateDescription = (
  currentValue: number,
  previousValue: number
): string => {
  const difference = currentValue - previousValue;
  return `${difference >= 0 ? "+" : "-"}${Math.abs(difference)} since last month`;
};

export const getPreviousValue = (
  data: Metric[],
  title: string,
  date: string
): number => {
  const previousData = data.find(
    (item) =>
      item.title === title &&
      new Date(item.createdAt).getTime() < new Date(date).getTime()
  );
  return previousData
    ? parseFloat(previousData.value.replace(/[^0-9.-]+/g, ""))
    : 0;
};

export const filterByDateRange = <T>(
  data: T[],
  dateRange: DateRange,
  dateField: keyof T
): T[] => {
  if (!dateRange.from || !dateRange.to) return data;
  const fromTime = new Date(dateRange.from).setHours(0, 0, 0, 0);
  const toTime = new Date(dateRange.to).setHours(23, 59, 59, 999);
  return data.filter((item) => {
    const date = new Date(item[dateField] as unknown as string).getTime();
    return date >= fromTime && date <= toTime;
  });
};

export const getTopFiveSongs = (data: TopSongData[]): TopSongData[] => {
  return data.sort((a, b) => b.streams - a.streams).slice(0, 5);
};

export const summarizeByCategory = (
  data: RevenueDistributionData[]
): RevenueDistributionData[] => {
  const summary = data.reduce(
    (acc, item) => {
      if (!acc[item.name]) acc[item.name] = { ...item, value: 0 };
      acc[item.name].value += item.value;
      return acc;
    },
    {} as { [key: string]: RevenueDistributionData }
  );
  return Object.values(summary);
};

const aggregateMetricDescription = (
  data: Metric[],
  title: string,
  currentValue: number
): string => {
  return calculateDescription(
    currentValue,
    getPreviousValue(data, title, new Date().toISOString())
  );
};

export const aggregateMetrics = (
  data: Metric[],
  iconMap: { [key: string]: LucideIcon }
): Metric[] => {
  const metrics = {
    "Total Users": 0,
    "Active Users": 0,
    "Total Streams": 0,
    Revenue: 0,
    topArtists: {} as { [key: string]: number },
  };

  data.forEach((item) => {
    switch (item.title) {
      case "Total Users":
        metrics["Total Users"] += parseFloat(item.value);
        break;
      case "Active Users":
        metrics["Active Users"] += parseFloat(item.value);
        break;
      case "Total Streams":
        metrics["Total Streams"] += parseFloat(item.value);
        break;
      case "Revenue":
        metrics.Revenue += parseFloat(item.value.replace(/[^0-9.-]+/g, ""));
        break;
      case "Top Artist":
        metrics.topArtists[item.value] =
          (metrics.topArtists[item.value] || 0) + 1;
        break;
    }
  });

  const topArtist = Object.keys(metrics.topArtists).reduce(
    (a, b) => (metrics.topArtists[a] > metrics.topArtists[b] ? a : b),
    "Unknown Artist"
  );

  return [
    {
      title: "Total Users",
      value: metrics["Total Users"].toString(),
      icon: iconMap["Total Users"],
      description: aggregateMetricDescription(
        data,
        "Total Users",
        metrics["Total Users"]
      ),
      createdAt: new Date().toISOString(),
    },
    {
      title: "Active Users",
      value: metrics["Active Users"].toString(),
      icon: iconMap["Active Users"],
      description: aggregateMetricDescription(
        data,
        "Active Users",
        metrics["Active Users"]
      ),
      createdAt: new Date().toISOString(),
    },
    {
      title: "Total Streams",
      value: metrics["Total Streams"].toString(),
      icon: iconMap["Total Streams"],
      description: aggregateMetricDescription(
        data,
        "Total Streams",
        metrics["Total Streams"]
      ),
      createdAt: new Date().toISOString(),
    },
    {
      title: "Revenue",
      value: metrics.Revenue.toString(),
      icon: iconMap["Revenue"],
      description: aggregateMetricDescription(data, "Revenue", metrics.Revenue),
      createdAt: new Date().toISOString(),
    },
    {
      title: "Top Artist",
      value: topArtist,
      icon: iconMap["Top Artist"],
      description: "Most streamed this month",
      createdAt: new Date().toISOString(),
    },
  ];
};
