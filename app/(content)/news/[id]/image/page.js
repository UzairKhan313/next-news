import { DUMMY_NEWS } from "@/dummy-news";

const FullScreenImage = ({ params }) => {
  const newsSlug = params.id;
  const newsItem = DUMMY_NEWS.find((item) => newsSlug === item.slug);

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
