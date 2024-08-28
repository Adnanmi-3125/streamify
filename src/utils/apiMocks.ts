import metrics from "@/data/metrics";
import revenueDistribution from "@/data/revenueDistribution";
import streams from "@/data/streams";
import topSongs from "@/data/topSongs";
import userGrowth from "@/data/userGrowth";


const simulateNetworkLatency = (ms: number) => {
  return new Promise(resolve => setTimeout(resolve, ms));
};

export const fetchMetrics = async () => {
  await simulateNetworkLatency(500);
  return metrics;
};

export const fetchUserGrowth = async () => {
  await simulateNetworkLatency(500);
  return userGrowth;
};

export const fetchRevenueDistribution = async () => {
  await simulateNetworkLatency(500);
  return revenueDistribution;
};

export const fetchTopSongs = async () => {
  await simulateNetworkLatency(500);
  return topSongs;
};

export const fetchStreams = async () => {
  await simulateNetworkLatency(500);
  return streams;
};
