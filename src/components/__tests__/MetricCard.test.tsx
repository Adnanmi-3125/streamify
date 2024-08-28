import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import MetricCard, { MetricCardProps } from "../MetricCard";
import { Calendar } from "lucide-react";

jest.mock("lucide-react", (): unknown => {
  return {
    Calendar: (props: any) => <svg data-testid="icon" {...props} />,
  };
});

describe("MetricCard", () => {
  const mockProps: MetricCardProps = {
    label: "Total Users",
    icon: Calendar,
    amount: "12500",
    description: "+500 since last month",
  };

  it("renders the label correctly", () => {
    render(<MetricCard {...mockProps} />);
    expect(screen.getByText(mockProps.label)).toBeInTheDocument();
  });

  it("renders the icon correctly", () => {
    render(<MetricCard {...mockProps} />);
    const icon = screen.getByTestId("icon");
    expect(icon).toBeInTheDocument();
    expect(icon).toHaveClass("h-4 w-4 text-gray-400");
  });

  it("renders the amount correctly", () => {
    render(<MetricCard {...mockProps} />);
    expect(screen.getByText(mockProps.amount)).toBeInTheDocument();
  });

  it("renders the description correctly", () => {
    render(<MetricCard {...mockProps} />);
    expect(screen.getByText(mockProps.description)).toBeInTheDocument();
  });
});
