import { useState, useEffect } from 'react';
import data, { Metric, UserGrowthData, RevenueDistributionData, TopSongData, Stream } from '../data/data';


const useFetchData = () => {
  const [metrics, setMetrics] = useState<Metric[]>([]);
  const [userGrowth, setUserGrowth] = useState<UserGrowthData[]>([]);
  const [revenueDistribution, setRevenueDistribution] = useState<RevenueDistributionData[]>([]);
  const [topSongs, setTopSongs] = useState<TopSongData[]>([]);
  const [streams, setStreams] = useState<Stream[]>([]);

  useEffect(() => {
    // Mock fetching data
    setMetrics(data.metrics);
    setUserGrowth(data.userGrowth);
    setRevenueDistribution(data.revenueDistribution);
    setTopSongs(data.topSongs);
    setStreams(data.streams);
  }, []);

  return { metrics, userGrowth, revenueDistribution, topSongs, streams, setStreams ,setMetrics};
};

export default useFetchData;
