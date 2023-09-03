import { TEST_PORTFOLIO } from "@/mocks/portfolio.mocks";
import { render, screen } from "@testing-library/react";
import { HoldingsSectors } from "./holdings-sectors";

describe("HoldingsSectors", () => {
  it("should render without crashing and show 'sectors' title", () => {
    render(<HoldingsSectors holdings={[]} />);
    expect(screen.getByText("Sectors:")).toBeInTheDocument();
  });

  it("displays unique sectors", () => {
    render(<HoldingsSectors holdings={TEST_PORTFOLIO.holdings} />);

    // loop through the mock data sectors to ensure they appear
    const uniqueSectorNames = Array.from(
      new Set(TEST_PORTFOLIO.holdings.map((holding) => holding.sector.name)),
    );

    uniqueSectorNames.forEach((sectorName) => {
      expect(screen.getByText(sectorName)).toBeInTheDocument();
    });

    // test to make sure that the displayed sectors are unique by getting all the sector names and comparing the length of the array of unique sector names to the length of the array of all sector names
    const displayedSectors = screen.getAllByTestId("sector-name");
    const displayedSectorNames = displayedSectors.map(
      (sectorElement) => sectorElement.textContent,
    );
    expect(Array.from(new Set(displayedSectorNames)).length).toEqual(
      displayedSectorNames.length,
    );
  });
});
