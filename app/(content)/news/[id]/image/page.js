// import { DUMMY_NEWS } from "@/dummy-news";
import { getNewsItem } from "@/lib/news";

const FullScreenImage = async ({ params }) => {
  const newsSlug = params.id;
  // const newsItem = DUMMY_NEWS.find((item) => newsSlug === item.slug);
  const newsItem = await getNewsItem(newsSlug);

  if (!newsItem) {
    notFound();
  }
  return (
    <div className="fullscreen-image">
      <img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />
    </div>
  );
};

export default FullScreenImage;
