import { Portfolio } from "@/models/portfolio";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect } from "react";

const Portfolio = () => {
  const router = useRouter();
  const { portfolioId } = router.query;

  useEffect(() => {
    if (!portfolioId) return;

    fetch(`/api/portfolio/${portfolioId}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Portfolio not found");
        }

        return res.json();
      })
      .then((data: Portfolio) => {
        console.log(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [portfolioId]);

  return (
    <>
      <Head>
        <title>Portfolio ID: {portfolioId} | Stockopedia Challenge</title>
        <meta
          name="description"
          content="Stockopedia Challenge - Front-end Technical Test"
        />
      </Head>
      <p>Portfolio ID: {portfolioId}</p>
    </>
  );
};

export default Portfolio;
