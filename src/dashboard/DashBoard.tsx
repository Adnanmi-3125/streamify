import KeyMetrics from "../components/KeyMetrics";
import Charts from "../components/Charts";
import { SubNav } from "../components/ui/sub-nav";
import { SubNavItem } from "../components/ui/sub-nav-item";
import TableIndex from "../components/table";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ModeToggle } from "@/components/Toggle";
import { useAnalyticsContext } from "@/context/AnalyticsDataContext";
import { DateRange } from "react-day-picker";
import { DateRangePickerWithPresets } from "@/components/DateRangePickerWithPresets";

const DashBoard: React.FC = () => {
  const {
    metrics,
    userGrowth,
    revenueDistribution,
    topSongs,
    loading,
    setDateRange,
  } = useAnalyticsContext();

  const handleDateRangeChange = (range: DateRange) => {
    setDateRange(range);
  };

  return (
    <div className="container mx-auto p-4">
      <header className="flex items-center justify-between pb-6">
        <h1 className="text-3xl font-bold">Streamify</h1>
        <div className="flex items-center gap-4 pb-6">
          <ModeToggle />
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>
      </header>
      <SubNav>
        <SubNavItem className="active">Overview</SubNavItem>
        <SubNavItem>Analytics</SubNavItem>
        <SubNavItem>Reports</SubNavItem>
        <SubNavItem>Notifications</SubNavItem>
      </SubNav>
      <div className="mt-4 flex items-center w-full justify-end  pb-6">
        <DateRangePickerWithPresets onChange={handleDateRangeChange} />
      </div>
      <KeyMetrics metrics={metrics} loading={loading} />

      <Charts
        userGrowth={userGrowth}
        revenueDistribution={revenueDistribution}
        topSongs={topSongs}
        loading={loading}
      />
      <TableIndex />
    </div>
  );
};

export default DashBoard;
