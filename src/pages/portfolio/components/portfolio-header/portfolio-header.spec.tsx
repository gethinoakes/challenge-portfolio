import { TEST_PORTFOLIO } from "@/mocks/portfolio.mocks";
import { render, screen } from "@testing-library/react";
import { PortfolioHeader } from "./portfolio-header";

describe("PortfolioHeader Component", () => {
  it("should render the portfolio name", () => {
    render(
      <PortfolioHeader
        name="Test Portfolio"
        holdings={TEST_PORTFOLIO.holdings}
      />,
    );
  });

  it("calculate and render the total valuation of the portfolio", () => {
    render(
      <PortfolioHeader
        name="My Portfolio"
        holdings={TEST_PORTFOLIO.holdings}
      />,
    );

    expect(screen.getByText("£9,060.00")).toBeInTheDocument();
  });

  it("display £0.00 when there are no holdings", () => {
    render(<PortfolioHeader name="My Portfolio" holdings={[]} />);
    expect(screen.getByText("£0.00")).toBeInTheDocument();
  });
});
