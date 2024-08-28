import { render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import Charts from "../Charts";

jest.mock("../charts/UserActivityChart", () => ({
  __esModule: true,
  default: () => <div>UserActivityChart Mock</div>,
}));

jest.mock("../charts/TopStreamedSongsBarChart", () => ({
  __esModule: true,
  default: () => <div>TopStreamedSongsBarChart Mock</div>,
}));

jest.mock("../charts/RevenueDistributionChart", () => ({
  __esModule: true,
  default: () => <div>RevenueDistributionChart Mock</div>,
}));

const mockUserGrowth = [{ month: "Jan", totalUsers: 1000, activeUsers: 500 }];
const mockRevenueDistribution = [{ name: "Subscriptions", value: 2000 }];
const mockTopSongs = [{ name: "Song 1", artist: "Artist 1", streams: 1000 }];

const skeletonLayout = [
  { width: "w-full", height: "h-6 mb-2" },
  { width: "w-full", height: "h-4 mb-2" },
  { width: "w-full", height: "h-52 mb-2" },
  { width: "w-2/3", height: "h-4 mb-2" },
  { width: "w-1/2", height: "h-4 mb-2" },
];

describe("Charts Component", () => {
  it("renders skeletons during loading", () => {
    render(
      <Charts
        userGrowth={mockUserGrowth}
        revenueDistribution={mockRevenueDistribution}
        topSongs={mockTopSongs}
        loading={true}
      />
    );

    expect(screen.getAllByTestId("skeleton")).toHaveLength(
      3 * skeletonLayout.length
    );
  });

  it("renders actual charts when not loading", async () => {
    render(
      <Charts
        userGrowth={mockUserGrowth}
        revenueDistribution={mockRevenueDistribution}
        topSongs={mockTopSongs}
        loading={false}
      />
    );

    await waitFor(() => {
      expect(screen.getByText("UserActivityChart Mock")).toBeInTheDocument();
      expect(
        screen.getByText("TopStreamedSongsBarChart Mock")
      ).toBeInTheDocument();
      expect(
        screen.getByText("RevenueDistributionChart Mock")
      ).toBeInTheDocument();
    });
  });
});
