import { LucideIcon } from "lucide-react";

export type Metric = {
  title: string;
  value: string;
  icon: LucideIcon;
  description: string;
};

export type UserGrowthData = {
  month: string;
  totalUsers: number;
  activeUsers: number;
};

export type RevenueDistributionData = {
  name: string;
  value: number;
};

export type TopSongData = {
  name: string;
  streams: number;
};

export type Stream = {
  id: string;
  songName: string;
  artist: string;
  dateStreamed: string;
  streamCount: number;
  userId: string;
};

export interface SkeletonBlock {
  width: string;
  height: string;
  className?: string;
}

export interface WithSkeletonLoadingProps {
  loading: boolean;
  skeletonLayout: SkeletonBlock[];
  skeletonCount: number;
  wrapperClass: string;
  headerClassName?: string;
}
