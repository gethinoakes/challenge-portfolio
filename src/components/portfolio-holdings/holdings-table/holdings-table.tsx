import { FunctionComponent } from "react";
import { PortfolioHoldingsProps } from "../portfolio-holdings";
import styles from "./holdings-table.module.scss";

export const HoldingsTable: FunctionComponent<PortfolioHoldingsProps> = ({
  holdings,
}: PortfolioHoldingsProps) => {
  return (
    <div className={styles.holdingsTableContainer}>
      <table className={styles.holdingsTable}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Sector</th>
            <th className={styles.numberCol}>Shares</th>
            <th className={styles.numberCol}>Last Price</th>
            <th className={styles.numberCol}>Change</th>
          </tr>
        </thead>

        <tbody>
          {holdings.map((holding) => {
            return (
              <tr key={holding.id}>
                <td>{holding.name}</td>
                <td>{holding.sector.name}</td>
                <td className={styles.numberCol}>
                  {holding.shares.toLocaleString()}
                </td>
                <td className={styles.numberCol}>
                  {holding.lastPrice.toFixed(2)}p
                </td>
                <td
                  className={`${styles.numberCol} ${
                    holding.change > 0
                      ? styles.positiveChange
                      : styles.negativeChange
                  }`}
                >
                  {holding.change > 0 && "+"}
                  {holding.change.toFixed(2)}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
