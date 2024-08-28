import * as React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { ModeToggle } from "../Toggle";
import { useTheme } from "../../context/ThemeProvider";

jest.mock("lucide-react", () => ({
  Sun: () => <svg data-testid="sun-icon" />,
  Moon: () => <svg data-testid="moon-icon" />,
}));

jest.mock("../../context/ThemeProvider", () => ({
  useTheme: jest.fn(),
}));

type DropdownProps = {
  children: React.ReactNode;
};

type DropdownItemProps = {
  children: React.ReactNode;
  onClick: () => void;
};

jest.mock("../ui/dropdown-menu", () => ({
  DropdownMenu: ({ children }: DropdownProps) => <div>{children}</div>,
  DropdownMenuTrigger: ({ children }: DropdownProps) => <div>{children}</div>,
  DropdownMenuContent: ({ children }: DropdownProps) => <div>{children}</div>,
  DropdownMenuItem: ({ children, onClick }: DropdownItemProps) => (
    <div onClick={onClick}>{children}</div>
  ),
}));

describe("ModeToggle", () => {
  const setTheme = jest.fn();

  beforeEach(() => {
    (useTheme as jest.Mock).mockReturnValue({ setTheme });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("renders the ModeToggle component correctly", () => {
    render(<ModeToggle />);

    const sunIcon = screen.getByTestId("sun-icon");
    const moonIcon = screen.getByTestId("moon-icon");
    expect(sunIcon).toBeInTheDocument();
    expect(moonIcon).toBeInTheDocument();

    const button = screen.getByRole("button", { name: /toggle theme/i });
    expect(button).toBeInTheDocument();
  });

  it("opens the dropdown menu when the button is clicked", () => {
    render(<ModeToggle />);

    const button = screen.getByRole("button", { name: /toggle theme/i });
    fireEvent.click(button);

    expect(screen.getByText("Light")).toBeInTheDocument();
    expect(screen.getByText("Dark")).toBeInTheDocument();
    expect(screen.getByText("System")).toBeInTheDocument();
  });

  it('calls setTheme with "light" when the Light option is clicked', () => {
    render(<ModeToggle />);

    const button = screen.getByRole("button", { name: /toggle theme/i });
    fireEvent.click(button);

    const lightOption = screen.getByText("Light");
    fireEvent.click(lightOption);

    expect(setTheme).toHaveBeenCalledWith("light");
  });

  it('calls setTheme with "dark" when the Dark option is clicked', () => {
    render(<ModeToggle />);

    const button = screen.getByRole("button", { name: /toggle theme/i });
    fireEvent.click(button);

    const darkOption = screen.getByText("Dark");
    fireEvent.click(darkOption);

    expect(setTheme).toHaveBeenCalledWith("dark");
  });

  it('calls setTheme with "system" when the System option is clicked', () => {
    render(<ModeToggle />);

    const button = screen.getByRole("button", { name: /toggle theme/i });
    fireEvent.click(button);

    const systemOption = screen.getByText("System");
    fireEvent.click(systemOption);

    expect(setTheme).toHaveBeenCalledWith("system");
  });
});
