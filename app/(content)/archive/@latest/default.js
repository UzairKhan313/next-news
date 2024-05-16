import NewsList from "@/components/news-list";
import { getLatestNews } from "@/lib/news";

const LatestNewsPage = async () => {
  const news = await getLatestNews();
  return (
    <>
      <h1>Latest New</h1>
      <NewsList news={news} />
    </>
  );
};
export default LatestNewsPage;
