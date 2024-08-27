import React from "react";

import { UserActivityChart } from "./charts/UserActivityChart";
import { TopStreamedSongsBarChart } from "./charts/TopStreamedSongsBarChart";
import { RevenueDistributionChart } from "./charts/RevenueDistributionChart";
import {
  RevenueDistributionData,
  TopSongData,
  UserGrowthData,
} from "@/data/data";

interface ChartsProps {
  userGrowth: UserGrowthData[];
  revenueDistribution: RevenueDistributionData[];
  topSongs: TopSongData[];
}

const Charts: React.FC<ChartsProps> = ({
  userGrowth,
  revenueDistribution,
  topSongs,
}) => {
  return (
    <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
      <UserActivityChart data={userGrowth} />
      <RevenueDistributionChart data={revenueDistribution} />
      <TopStreamedSongsBarChart data={topSongs} />
    </div>
  );
};

export default Charts;
