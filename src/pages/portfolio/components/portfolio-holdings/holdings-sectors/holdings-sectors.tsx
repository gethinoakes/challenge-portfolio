import { Sector } from "@/models/sector";
import { FunctionComponent } from "react";
import { PortfolioHoldingsProps } from "../portfolio-holdings";
import styles from "./holdings-sectors.module.scss";

export const HoldingsSectors: FunctionComponent<PortfolioHoldingsProps> = ({
  holdings,
}: PortfolioHoldingsProps) => {
  let uniqueSectors: Sector[] = [];

  // loop through the holdings and add each sector to the uniqueSectors array if it doesn't already exist
  holdings.forEach((holding) => {
    if (!uniqueSectors.some((sector) => sector.id === holding.sector.id)) {
      uniqueSectors.push(holding.sector);
    }
  });

  return (
    <>
      <p>Sectors:</p>
      <div className={styles.sectors}>
        {uniqueSectors.map((sector) => {
          return (
            <span key={sector.id} className={styles.sectors__sector}>
              {sector.name}
            </span>
          );
        })}
      </div>
    </>
  );
};
