import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
  useCallback,
  useMemo,
} from "react";
import {
  fetchMetrics,
  fetchUserGrowth,
  fetchRevenueDistribution,
  fetchTopSongs,
  fetchStreams,
} from "../utils/apiMocks";
import { useToast } from "@/components/ui/use-toast";
import { DateRange } from "react-day-picker";
import {
  Metric,
  UserGrowthData,
  RevenueDistributionData,
  TopSongData,
  Stream,
} from "@/@types";

import {
  iconMap,
  filterByDateRange,
  getTopFiveSongs,
  summarizeByCategory,
  aggregateMetrics,
} from "@/helpers/helper";

interface AnalyticsDataContextType {
  metrics: Metric[];
  userGrowth: UserGrowthData[];
  revenueDistribution: RevenueDistributionData[];
  topSongs: TopSongData[];
  streams: Stream[];
  loading: boolean;
  setDateRange: (range: DateRange) => void;
  dateRange?: DateRange;
}

const AnalyticsDataContext = createContext<
  AnalyticsDataContextType | undefined
>(undefined);

const initialState: Omit<AnalyticsDataContextType, "setDateRange"> = {
  metrics: [],
  userGrowth: [],
  revenueDistribution: [],
  topSongs: [],
  streams: [],
  loading: true,
};

export const AnalyticsDataProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const { toast } = useToast();
  const [state, setState] = useState(initialState);
  const [dateRange, setDateRange] = useState<DateRange>({
    from: new Date("2023-01-01"),
    to: new Date(),
  });

  const fetchData = useCallback(async () => {
    try {
      setState((prev) => ({ ...prev, loading: true }));

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

      setState({
        metrics: aggregateMetrics(
          filterByDateRange(metricsData, dateRange, "createdAt"),
          iconMap
        ),
        userGrowth: filterByDateRange(userGrowthData, dateRange, "createdAt"),
        revenueDistribution: summarizeByCategory(
          filterByDateRange(revenueDistributionData, dateRange, "createdAt")
        ),
        topSongs: getTopFiveSongs(
          filterByDateRange(topSongsData, dateRange, "createdAt")
        ),
        streams: filterByDateRange(streamsData, dateRange, "createdAt"),
        loading: false,
      });
    } catch (error) {
      toast({ variant: "destructive", description: "Failed to fetch data" });
      setState((prev) => ({ ...prev, loading: false }));
    }
  }, [dateRange, toast]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const contextValue = useMemo(
    () => ({ ...state, dateRange, setDateRange }),
    [state, dateRange]
  );

  return (
    <AnalyticsDataContext.Provider value={contextValue}>
      {children}
    </AnalyticsDataContext.Provider>
  );
};

export const useAnalyticsContext = () => {
  const context = useContext(AnalyticsDataContext);
  if (!context) {
    throw new Error(
      "useAnalyticsContext must be used within an AnalyticsDataProvider"
    );
  }
  return context;
};
