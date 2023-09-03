import { Portfolio } from "@/models/portfolio";
import portfolioStyles from "@/pages/portfolio/portfolio.module.scss";
import { FunctionComponent } from "react";

type PortfolioHeaderProps = Omit<Portfolio, "id">;

export const PortfolioHeader: FunctionComponent<PortfolioHeaderProps> = ({
  name,
  holdings,
}: PortfolioHeaderProps) => {
  // calculate the total valuation of the portfolio by looping through the holdings and adding the value of each holding to the total
  const totalValuation =
    holdings.reduce((previousValue, currentValue) => {
      return (
        previousValue + (currentValue.lastPrice / 100) * currentValue.shares
      );
    }, 0) || 0;

  // format the total valuation as a currency
  const formattedTotalValuation = new Intl.NumberFormat("en-GB", {
    style: "currency",
    currency: "GBP",
  }).format(totalValuation);

  return (
    <section className={portfolioStyles.portfolio__section}>
      <h1>{name}</h1>
      <p>Valuation</p>
      <span>{formattedTotalValuation}</span>
    </section>
  );
};
