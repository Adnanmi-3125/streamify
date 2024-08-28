import { FC, lazy, Suspense } from "react";
import withSkeletonLoading from "@/components/hoc/withSkeletonLoading";
import {
  RevenueDistributionData,
  TopSongData,
  UserGrowthData,
} from "@/data/data";

const UserActivityChart = lazy(() => import("./charts/UserActivityChart"));
const TopStreamedSongsBarChart = lazy(
  () => import("./charts/TopStreamedSongsBarChart")
);
const RevenueDistributionChart = lazy(
  () => import("./charts/RevenueDistributionChart")
);

interface ChartsProps {
  userGrowth: UserGrowthData[];
  revenueDistribution: RevenueDistributionData[];
  topSongs: TopSongData[];
}

const Charts: FC<ChartsProps> = ({
  userGrowth,
  revenueDistribution,
  topSongs,
}) => {
  return (
    <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
      <Suspense fallback={<div>Loading User Activity...</div>}>
        <UserActivityChart data={userGrowth} />
      </Suspense>
      <Suspense fallback={<div>Loading Revenue Distribution...</div>}>
        <RevenueDistributionChart data={revenueDistribution} />
      </Suspense>
      <Suspense fallback={<div>Loading Top Streamed Songs...</div>}>
        <TopStreamedSongsBarChart data={topSongs} />
      </Suspense>
    </div>
  );
};

const skeletonLayout = [
  { width: "w-full", height: "h-6 mb-2" },
  { width: "w-full", height: "h-4 mb-2" },
  { width: "w-full", height: "h-52 mb-2" },
  { width: "w-2/3", height: "h-4 mb-2" },
  { width: "w-1/2", height: "h-4 mb-2" },
];

const ChartsWithSkeletonLoading = withSkeletonLoading(Charts);

export default (props: ChartsProps & { loading: boolean }) => (
  <ChartsWithSkeletonLoading
    skeletonCount={3}
    {...props}
    skeletonLayout={skeletonLayout}
    wrapperClass="grid grid-cols-1 gap-6 lg:grid-cols-3"
  />
);
