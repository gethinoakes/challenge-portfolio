import { Portfolio } from "@/models/portfolio";
import { Sector } from "@/models/sector";

export const CONSUMER_CYCLICALS: Sector = {
  id: 1,
  name: "Consumer Cyclicals",
};

export const BASIC_MATERIALS: Sector = {
  id: 2,
  name: "Basic Materials",
};

export const CONSUMER_DEFENSIVES: Sector = {
  id: 3,
  name: "Consumer Defensives",
};

export const JOHNS_PORTFOLIO: Portfolio = {
  id: 1,
  name: "John's Stocks & Shares ISA Portfolio",
  holdings: [
    {
      id: 1,
      name: "Reach",
      sector: CONSUMER_CYCLICALS,
      lastPrice: 89.9,
      change: 0.8,
      shares: 10000,
    },
    {
      id: 2,
      name: "Sylvania Platinum",
      sector: BASIC_MATERIALS,
      lastPrice: 91,
      change: 1.5,
      shares: 3000,
    },
    {
      id: 3,
      name: "Associated British Foods",
      sector: CONSUMER_DEFENSIVES,
      lastPrice: 1886.5,
      change: -97.5,
      shares: 100,
    },
    {
      id: 4,
      name: "Virgin Wines UK",
      sector: CONSUMER_DEFENSIVES,
      lastPrice: 39,
      change: -3.25,
      shares: 10000,
    },
  ],
};

export const TEST_PORTFOLIO: Portfolio = {
  id: 2,
  name: "Test Portfolio",
  holdings: [
    {
      id: 1,
      name: "Test holding 1",
      sector: CONSUMER_CYCLICALS,
      lastPrice: 60,
      change: 0.6,
      shares: 100,
    },
    {
      id: 2,
      name: "Test holding 2",
      sector: BASIC_MATERIALS,
      lastPrice: 900,
      change: 1.2,
      shares: 1000,
    },
    {
      id: 3,
      name: "Test holding 3",
      sector: BASIC_MATERIALS,
      lastPrice: 500,
      change: 1.5,
      shares: 200,
    },
  ],
};
