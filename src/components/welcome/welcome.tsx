import Link from "next/link";
import { FunctionComponent } from "react";
import styles from "./welcome.module.scss";

export const Welcome: FunctionComponent = () => {
  return (
    <div className={styles.welcome}>
      <h1>Welcome to the Stockopedia Front-end Challenge</h1>
      <p>
        We expect you to spend a few hours on this project, but don&apos;t worry
        if you don&apos;t finish everything within that timeframe. Please let us
        know which areas you weren&apos;t able to complete and how you plan to
        finish them if given more time.
      </p>

      <div className={styles.welcome__links}>
        <Link href="/api/portfolio/1" target="_blank">
          View portfolio mock data
        </Link>

        <Link href="/portfolio/1">Go to portfolio ID 1</Link>
      </div>
    </div>
  );
};
