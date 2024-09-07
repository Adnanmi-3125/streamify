import { LucideIcon } from "lucide-react";

export type Metric = {
  title: string;
  value: string;
  icon: LucideIcon; 
  description: string;
  createdAt: string;  
};

export type UserGrowthData = {
  month: string;
  totalUsers: number;
  activeUsers: number;
  createdAt: string;  
};

export type RevenueDistributionData = {
  name: string;
  value: number;
  createdAt: string; 
};

export type TopSongData = {
  name: string;
  streams: number;
  createdAt: string;  
};

export type Stream = {
  id: string;
  songName: string;
  artist: string;
  dateStreamed: string;
  streamCount: number;
  userId: string;
  createdAt: string;  
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
