import { TEST_PORTFOLIO } from "@/mocks/portfolio.mocks";
import { render, screen } from "@testing-library/react";
import { PortfolioHoldings } from "./portfolio-holdings";

describe("PortfolioHoldings", () => {
  it("should render the portfolio holdings count", () => {
    render(<PortfolioHoldings holdings={TEST_PORTFOLIO.holdings} />);
    expect(screen.getByText("Holdings (2)")).toBeInTheDocument();
  });
});
