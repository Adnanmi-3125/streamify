import * as React from "react";
import { render, waitFor } from "@testing-library/react";
import useFetchData from "./useFetchData";
import data from "../data/data";

const TestComponent = ({ updateData }: { updateData?: Function }) => {
  const {
    metrics,
    userGrowth,
    revenueDistribution,
    topSongs,
    streams,
    setMetrics,
  } = useFetchData();

  React.useEffect(() => {
    if (updateData) {
      updateData(setMetrics);
    }
  }, [updateData, setMetrics]);

  if (
    !metrics.length ||
    !userGrowth.length ||
    !revenueDistribution.length ||
    !topSongs.length ||
    !streams.length
  ) {
    return <div data-testid="loading-state">Loading...</div>;
  }

  return (
    <div>
      <span data-testid="total-users-metric">{metrics[0]?.value}</span>
      <span data-testid="user-growth">{userGrowth.length}</span>
      <span data-testid="revenue-distribution">
        {revenueDistribution.length}
      </span>
      <span data-testid="top-songs">{topSongs.length}</span>
      <span data-testid="streams">{streams.length}</span>
    </div>
  );
};

describe("useFetchData", () => {
  it("should set initial data correctly", async () => {
    const { getByTestId } = render(<TestComponent />);

    await waitFor(() => {
      expect(getByTestId("total-users-metric").textContent).toBe(
        data.metrics[0].value
      );
      expect(getByTestId("user-growth").textContent).toBe(
        data.userGrowth.length.toString()
      );
      expect(getByTestId("revenue-distribution").textContent).toBe(
        data.revenueDistribution.length.toString()
      );
      expect(getByTestId("top-songs").textContent).toBe(
        data.topSongs.length.toString()
      );
      expect(getByTestId("streams").textContent).toBe(
        data.streams.length.toString()
      );
    });
  });

  it("should update metrics correctly", async () => {
    const newMetrics = [
      {
        title: "Total Users",
        value: "13500",
        icon: "",
        description: "+1000 since last month",
      },
      {
        title: "Active Users",
        value: "4800",
        icon: "",
        description: "+300 since last month",
      },
    ]; // Add more items as necessary

    const { getByTestId } = render(
      <TestComponent
        updateData={(setMetrics: Function) => setMetrics(newMetrics)}
      />
    );

    await waitFor(() => {
      expect(getByTestId("total-users-metric").textContent).toBe(
        newMetrics[0].value
      );
    });
  });
});
