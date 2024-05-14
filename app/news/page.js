import Link from "next/link";

const NewsPage = () => {
  return (
    <>
      <h1>News Page</h1>
      <ul>
        <li>
          <Link href="/news/first-news-item">First News</Link>
        </li>
        <li>
          <Link href="/news/second-news-item">Second News</Link>
        </li>
        <li>
          <Link href="/news/third-news-item">Third News Item</Link>
        </li>
      </ul>
    </>
  );
};

export default NewsPage;
