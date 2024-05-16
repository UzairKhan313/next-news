import React from "react";
import { DUMMY_NEWS } from "@/dummy-news";
import { notFound } from "next/navigation";
import Link from "next/link";

const page = ({ params }) => {
  const newsSlug = params.id;
  const newsItem = DUMMY_NEWS.find((item) => newsSlug === item.slug);

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

export default page;
