// import { DUMMY_NEWS } from "@/dummy-news";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getNewsItem } from "@/lib/news";

const NewsDetailPage = async ({ params }) => {
  const newsSlug = params.id;
  // const newsItem = DUMMY_NEWS.find((item) => newsSlug === item.slug);
  const newsItem = await getNewsItem(newsSlug);

  if (!newsItem) {
    notFound();
  }
  return (
    <article className="news-article">
      <header>
        <h1>{newsItem.title}</h1>
        <Link href={`/news/${newsSlug}/image`}>
          <img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />
        </Link>
      </header>
      <time dateTime={newsItem.date}>{newsItem.date}</time>
      <p>{newsItem.content}</p>
    </article>
  );
};

export default NewsDetailPage;
