import { TEST_PORTFOLIO } from "@/mocks/portfolio.mocks";
import { render, screen } from "@testing-library/react";
import { HoldingsTable } from "./holdings-table";

describe("HoldingsTable", () => {
  it("should render without crashing", () => {
    render(<HoldingsTable holdings={[]} />);
  });

  it("should render the correct columns", () => {
    render(<HoldingsTable holdings={TEST_PORTFOLIO.holdings} />);
    expect(screen.getByText("Name")).toBeInTheDocument();
    expect(screen.getByText("Sector")).toBeInTheDocument();
    expect(screen.getByText("Shares")).toBeInTheDocument();
    expect(screen.getByText("Last Price")).toBeInTheDocument();
    expect(screen.getByText("Change")).toBeInTheDocument();
  });

  it("should render all holdings data correctly", () => {
    render(<HoldingsTable holdings={TEST_PORTFOLIO.holdings} />);
    const holding = TEST_PORTFOLIO.holdings[0];

    expect(screen.getByText(holding.name)).toBeInTheDocument();
    expect(screen.getByText(holding.sector.name)).toBeInTheDocument();
    expect(
      screen.getByText(holding.shares.toLocaleString()),
    ).toBeInTheDocument();
    expect(
      screen.getByText(holding.lastPrice.toFixed(2) + "p"),
    ).toBeInTheDocument();
    expect(
      screen.getByText("+" + holding.change.toFixed(2)),
    ).toBeInTheDocument();
  });
});
