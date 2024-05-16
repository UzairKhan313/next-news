import Link from "next/link";

import NewsList from "@/components/news-list";
// import { DUMMY_NEWS } from "@/dummy-news";
import {
  getAvailableNewsMonths,
  getAvailableNewsYears,
  getNewsForYear,
  getNewsForYearAndMonth,
} from "@/lib/news";

const FilteredNewsPage = async ({ params }) => {
  const { filter } = params; // filter will return array of all the matches routes.
  const selectedYear = filter?.[0];
  const selectedMonth = filter?.[1];

  let news;
  let links = await getAvailableNewsYears();

  // Getting news for selected Year
  if (selectedYear && !selectedMonth) {
    news = await getNewsForYear(selectedYear);
    links = getAvailableNewsMonths(selectedYear);
  }

  // Getting news for selected year and selected month.
  if (selectedYear && selectedMonth) {
    news = await getNewsForYearAndMonth(selectedYear, selectedMonth);
    links = [];
  }

  let newsContent = (
    <p style={{ color: "white" }}>No News found for the selected period.</p>
  );

  if (news && news.length > 0) {
    newsContent = <NewsList news={news} />;
  }

  const availableYears = await getAvailableNewsYears();

  if (
    (selectedYear && !availableYears.includes(selectedYear)) ||
    (selectedMonth &&
      !getAvailableNewsMonths(selectedYear).includes(selectedMonth))
  ) {
    throw new Error("Invalid filter");
  }
  return (
    <>
      <header id="archive-header">
        <nav>
          <ul>
            {links.map((link) => {
              const href = selectedYear
                ? `/archive/${selectedYear}/${link}`
                : `/archive/${link}`;
              return (
                <li key={link}>
                  <Link href={href}>{link}</Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </header>
      {newsContent}
    </>
  );
};

export default FilteredNewsPage;
