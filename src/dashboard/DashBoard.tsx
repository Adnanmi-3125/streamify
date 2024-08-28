import KeyMetrics from "../components/KeyMetrics";
import Charts from "../components/Charts";
import { DatePicker } from "../components/ui/datePicker";
import { Subnav } from "../components/ui/subnav";
import { SubnavItem } from "../components/ui/subnavItem";
import TableIndex from "../components/table";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ModeToggle } from "@/components/Toggle";
import { useAnalyticsContext } from "@/context/AnalyticsDataContext";

const DashBoard: React.FC = () => {
  const { metrics, userGrowth, revenueDistribution, topSongs, loading } =
    useAnalyticsContext();

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
      <Subnav>
        <SubnavItem className="active">Overview</SubnavItem>
        <SubnavItem>Analytics</SubnavItem>
        <SubnavItem>Reports</SubnavItem>
        <SubnavItem>Notifications</SubnavItem>
      </Subnav>
      <div className="mt-4 flex items-center pb-6">
        <DatePicker />
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
