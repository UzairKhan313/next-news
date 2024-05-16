import { Suspense } from "react";
import Link from "next/link";

import NewsList from "@/components/news-list";
// import { DUMMY_NEWS } from "@/dummy-news";
import {
  getAvailableNewsMonths,
  getAvailableNewsYears,
  getNewsForYear,
  getNewsForYearAndMonth,
} from "@/lib/news";

const FilteredHeader = async ({ year, month }) => {
  const availableYears = await getAvailableNewsYears();

  let links = availableYears;

  if (
    (year && !availableYears.includes(year)) ||
    (month && !getAvailableNewsMonths(year).includes(month))
  ) {
    throw new Error("Invalid filter");
  }

  // Getting news for selected Year
  if (year && !month) {
    links = getAvailableNewsMonths(year);
  }

  if (year && month) {
    links = [];
  }

  return (
    <header id="archive-header">
      <nav>
        <ul>
          {links.map((link) => {
            const href = year ? `/archive/${year}/${link}` : `/archive/${link}`;
            return (
              <li key={link}>
                <Link href={href}>{link}</Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
};

const FilteredNews = async ({ year, month }) => {
  let news;
  if (year && !month) {
    news = await getNewsForYear(year);
  } else if (year && month) {
    news = await getNewsForYearAndMonth(year, month);
  }
  let newsContent = (
    <p style={{ color: "white" }}>No News found for the selected period.</p>
  );

  if (news && news.length > 0) {
    newsContent = <NewsList news={news} />;
  }

  return newsContent;
};

const FilteredNewsPage = async ({ params }) => {
  const { filter } = params; // filter will return array of all the matches routes.
  const selectedYear = filter?.[0];
  const selectedMonth = filter?.[1];

  return (
    <>
      {/* <Suspense fallback={<p>Loading Filter....</p>}>
      </Suspense> */}
      <Suspense fallback={<p>Loading filtered News...</p>}>
        <FilteredHeader year={selectedYear} month={selectedMonth} />
        <FilteredNews year={selectedYear} month={selectedMonth} />
      </Suspense>
    </>
  );
};

export default FilteredNewsPage;
