import { Portfolio } from "@/models/portfolio";
import portfolioStyles from "@/pages/portfolio/portfolio.module.scss";
import { FunctionComponent } from "react";
import { HoldingsSectors } from "./holdings-sectors/holdings-sectors";
import { HoldingsTable } from "./holdings-table/holdings-table";
import styles from "./portfolio-holdings.module.scss";

export type PortfolioHoldingsProps = Omit<Portfolio, "name" | "id">;

export const PortfolioHoldings: FunctionComponent<PortfolioHoldingsProps> = ({
  holdings,
}: PortfolioHoldingsProps) => {
  return (
    <section className={portfolioStyles.portfolio__section}>
      <p className={styles.portfolioHoldings__title}>
        Holdings ({holdings.length})
      </p>
      <span className={styles.portfolioHoldings__separator}></span>

      <HoldingsSectors holdings={holdings} />
      <span className={styles.portfolioHoldings__separator}></span>

      <HoldingsTable holdings={holdings} />
    </section>
  );
};
