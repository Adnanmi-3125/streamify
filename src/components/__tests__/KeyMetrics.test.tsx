import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import KeyMetrics from "../KeyMetrics";
import { LucideIcon, LucideProps } from "lucide-react";

jest.mock("../MetricCard", () => ({
  __esModule: true,
  default: ({
    label,
    icon: Icon,
    amount,
    description,
  }: {
    label: string;
    icon: LucideIcon;
    amount: string;
    description: string;
  }) => (
    <div data-testid="metric-card">
      <h2>{label}</h2>
      <Icon data-testid="mock-icon" className="icon" />
      <span>{amount}</span>
      <p>{description}</p>
    </div>
  ),
}));

const MockIcon: LucideIcon = React.forwardRef<SVGSVGElement, LucideProps>(
  (props, ref) => (
    <svg ref={ref} data-testid="mock-icon" {...props}>
      icon
    </svg>
  )
);

const mockMetrics = [
  {
    title: "Title 1",
    icon: MockIcon,
    value: "Value1",
    description: "Description1",
    createdAt: "2023-01-01",
  },
  {
    title: "Title 2",
    icon: MockIcon,
    value: "Value2",
    description: "Description2",
    createdAt: "2023-01-01",
  },
  {
    title: "Title 3",
    icon: MockIcon,
    value: "Value3",
    description: "Description3",
    createdAt: "2023-01-01",
  },
  {
    title: "Title 4",
    icon: MockIcon,
    value: "Value4",
    description: "Description4",
    createdAt: "2023-01-01",
  },
  {
    title: "Title 5",
    icon: MockIcon,
    value: "Value5",
    description: "Description5",
    createdAt: "2023-01-01",
  },
];

const skeletonLayout = [
  { width: "w-24", height: "h-4 mb-1" },
  { width: "w-36", height: "h-6 mb-1" },
  { width: "w-20", height: "h-2" },
];

describe("KeyMetrics Component", () => {
  it("renders skeletons during loading", () => {
    render(<KeyMetrics metrics={mockMetrics} loading={true} />);

    expect(screen.getAllByTestId("skeleton")).toHaveLength(
      5 * skeletonLayout.length
    );
  });

  it("renders actual metrics when not loading", async () => {
    render(<KeyMetrics metrics={mockMetrics} loading={false} />);

    await waitFor(() => {
      mockMetrics.forEach((metric) => {
        expect(screen.getByText(metric.title)).toBeInTheDocument();
        expect(screen.getByText(metric.value)).toBeInTheDocument();
        expect(screen.getByText(metric.description)).toBeInTheDocument();
        expect(screen.getAllByTestId("mock-icon")).toHaveLength(5);
      });
    });
  });
});
