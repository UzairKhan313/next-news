import NewsList from "@/components/news-list";
import { getLatestNews } from "@/lib/news";

const LatestNewsPage = () => {
  const news = getLatestNews();
  return (
    <>
      <h1>Latest New</h1>
      <NewsList news={news} />
    </>
  );
};
export default LatestNewsPage;
