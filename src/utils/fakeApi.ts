import data from '../data/data';

const simulateNetworkLatency = (ms: number) => {
  return new Promise(resolve => setTimeout(resolve, ms));
};

export const fetchMetrics = async () => {
  await simulateNetworkLatency(500);
  return data.metrics;
};

export const fetchUserGrowth = async () => {
  await simulateNetworkLatency(500);
  return data.userGrowth;
};

export const fetchRevenueDistribution = async () => {
  await simulateNetworkLatency(500);
  return data.revenueDistribution;
};

export const fetchTopSongs = async () => {
  await simulateNetworkLatency(500);
  return data.topSongs;
};

export const fetchStreams = async () => {
  await simulateNetworkLatency(500);
  return data.streams;
};
