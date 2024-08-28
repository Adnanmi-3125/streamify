import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
  useMemo,
} from "react";
import {
  Metric,
  UserGrowthData,
  RevenueDistributionData,
  TopSongData,
  Stream,
} from "@/@types";
import {
  fetchMetrics,
  fetchUserGrowth,
  fetchRevenueDistribution,
  fetchTopSongs,
  fetchStreams,
} from "../utils/apiMocks";
import { useToast } from "@/components/ui/use-toast";

interface AnalyticsDataContextType {
  metrics: Metric[];
  userGrowth: UserGrowthData[];
  revenueDistribution: RevenueDistributionData[];
  topSongs: TopSongData[];
  streams: Stream[];
  loading: boolean;
}

const AnalyticsDataContext = createContext<
  AnalyticsDataContextType | undefined
>(undefined);

export const AnalyticsDataProvider: React.FC<{ children: ReactNode }> =
  React.memo(({ children }) => {
    const { toast } = useToast();
    const [metrics, setMetrics] = useState<Metric[]>([]);
    const [userGrowth, setUserGrowth] = useState<UserGrowthData[]>([]);
    const [revenueDistribution, setRevenueDistribution] = useState<
      RevenueDistributionData[]
    >([]);
    const [topSongs, setTopSongs] = useState<TopSongData[]>([]);
    const [streams, setStreams] = useState<Stream[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      const fetchData = async () => {
        try {
          setLoading(true);
          const [
            metricsData,
            userGrowthData,
            revenueDistributionData,
            topSongsData,
            streamsData,
          ] = await Promise.all([
            fetchMetrics(),
            fetchUserGrowth(),
            fetchRevenueDistribution(),
            fetchTopSongs(),
            fetchStreams(),
          ]);

          setMetrics(metricsData);
          setUserGrowth(userGrowthData);
          setRevenueDistribution(revenueDistributionData);
          setTopSongs(topSongsData);
          setStreams(streamsData);
        } catch (error) {
          toast({
            variant: "destructive",
            description: "Failed to fetch data",
          });
        } finally {
          setLoading(false);
        }
      };

      fetchData();
    }, []);

    // useMemo is used in AnalyticsDataProvider to prevent unnecessary re-renders
    const contextValue = useMemo(
      () => ({
        metrics,
        userGrowth,
        revenueDistribution,
        topSongs,
        streams,
        loading,
      }),
      [metrics, userGrowth, revenueDistribution, topSongs, streams, loading]
    );

    return (
      <AnalyticsDataContext.Provider value={contextValue}>
        {children}
      </AnalyticsDataContext.Provider>
    );
  });

export const useAnalyticsContext = () => {
  const context = useContext(AnalyticsDataContext);
  if (context === undefined) {
    throw new Error(
      "useAnalyticsContext must be used within an AnalyticsDataProvider"
    );
  }
  return context;
};
