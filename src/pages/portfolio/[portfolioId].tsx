import { Portfolio } from "@/models/portfolio";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import { PortfolioHeader } from "./components/portfolio-header/portfolio-header";
import { PortfolioHoldings } from "./components/portfolio-holdings/portfolio-holdings";
import styles from "./portfolio.module.scss";

const Portfolio = () => {
  const router = useRouter();
  const { portfolioId } = router.query;
  const [portfolioData, setPortfolioData] = useState<Portfolio | null>(null);
  const [portfolioNotFound, setPortfolioNotFound] = useState(false);

  useEffect(() => {
    if (!portfolioId) return;

    fetch(`/api/portfolio/${portfolioId}`)
      .then((res) => {
        if (!res.ok) {
          setPortfolioNotFound(true);
          throw new Error("Portfolio not found");
        }

        return res.json();
      })
      .then((data: Portfolio) => {
        setPortfolioData(data);
        console.log(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [portfolioId]);

  return (
    <>
      <Head>
        <title>
          {`${
            portfolioData ? portfolioData.name : "Portfolio not found"
          } | Stockopedia Challenge`}
        </title>
        <meta
          name="description"
          content="Stockopedia Challenge - Front-end Technical Test"
        />
      </Head>

      <div className={styles.portfolio}>
        {portfolioNotFound && (
          <section
            className={`${styles.portfolio__section} ${styles.portfolio__sectionNotFound}`}
          >
            <h1>Portfolio not found</h1>
            <p>
              We apologise, but we could not locate a portfolio associated with
              the ID {portfolioId}.
            </p>
          </section>
        )}

        {portfolioData && (
          <>
            <PortfolioHeader
              name={portfolioData.name}
              holdings={portfolioData.holdings}
            />
            <PortfolioHoldings holdings={portfolioData.holdings} />
          </>
        )}
      </div>
    </>
  );
};

export default Portfolio;
