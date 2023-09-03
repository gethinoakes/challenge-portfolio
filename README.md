# Notes

- I used client-side data fetching for the portfolio data as I am assuming SEO is not a concern for a users portfolio page. If SEO was a concern I would have used server-side data fetching using `getServerSideProps` because that method would mean that the data is fetched server-side and the page is pre-rendered.
- I have placed the components for the portfolio page within its folder as they are only used by that page in this case. If some or all of the components were also used elsewhere I would have placed them in the `.src/components` folder.
- To reduce the number of files and boilerplate, the loading and not found states for the portfolio page are handled within the portfolio page component. If they were more complex or used by more than just the portfolio page I would create separate components for them.

# Requirements

The objective of this exercise is to create a simple portfolio page using the data provided in the mock API.

Users should be able to navigate to `http://localhost:3000/portfolio/1` and see the portfolio page as per this design:

[Portfolio Design](https://www.figma.com/file/oqTtZgTdo28PbBbCSlN4lx/John's-ISA-Portfolio?node-id=0-1)

When a user navigates to `http://localhost:3000/portfolio/123`, they should see the page not found design:

[Page Not Found Design](https://www.figma.com/file/oqTtZgTdo28PbBbCSlN4lx/John's-ISA-Portfolio?node-id=17%3A316&t=h0cyIs2C62dUjLL4-1)

## Data

Mock data is served via a REST API `/api/portfolio/[portfolio-id]`. Currently, there is only one portfolio with ID `1`, and you can query the data at this URL: `http://localhost:3000/api/portfolio/1`. This API returns status 200 and `Portfolio` data when the portfolio is found, otherwise, it returns status 404 and `{ message: "Portfolio not found" }` message.

You should implement two pages:

1. Portfolio page - this page should display the portfolio data if the portfolio ID is valid.
2. Page not found - this page should display the page not found design if the portfolio ID is invalid.

## Design Breakdown

The page should be responsive and should work on mobile, tablet, and desktop screens. Please use the following breakpoints:

- Mobile: <768px
- Tablet: 768px - 991px
- Desktop: >992px

The page is broken down into two main sections:

1. Header
2. Portfolio holdings

### Header

The header element should display the portfolio name and the portfolio valuation. The header name comes from the API; however, it's up to you to calculate the portfolio valuation.

The portfolio valuation is calculated by summing up the value of all holdings, and the value of each holding is its price times the number of shares. The price of each holding is provided in the API.

Valuation should be displayed in GBP and should be formatted as follows: `£1,234,567.89`.

**Please note, security prices returned in the API are in pence.**

### Portfolio Holdings

This section is divided into three subsections:

1. Header
2. Sectors
3. Security table

#### Header

This is a simple header that displays the total number of holdings in the portfolio.

#### Sectors

This section displays a list of sectors from your portfolio holdings, and duplicate sectors should be filtered out.

#### Security Table

This section displays a table of all holdings in the portfolio. The table should display:

- Security name
- Sector name
- Number of shares
- Last price (price of the security in pence, formatted as `1,234.56p`)
- Change (change in price of the security in pence, formatted as `+1,234.56` or `-1,234.56`; the text should be green if the change is positive and red if the change is negative).

We expect you to spend a few hours on this project, but don't worry if you don't finish everything within that timeframe. Please let us know which areas you weren't able to complete and how you plan to finish them if given more time.

## Styling

The project is configured to support SCSS modules and BEM naming convention.

```scss
// button.component.scss
$color: rgba(0, 0, 0, 0.8);

.button {
    color: $color;
}

.button--primary { ... }

.button__text { ... }
```

```tsx
// button.component.tsx
import { FunctionComponent } from "react";
import styles from "./button.component.scss";

export const Button: FunctionComponent = () => (
  <button className={styles.button + " " + styles.buttonPrimary}>
    <span className={styles.button__text}>Click me</span>
  </button>
);
```

## Testing

The project is configured to use Jest and React Testing Library. You can run tests with `npm run test`.

---

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
