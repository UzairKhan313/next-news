"use client";

import NewsList from "@/components/news-list";
import { useEffect, useState } from "react";

const NewsPage = () => {
  const [news, setNews] = useState();
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchNews() {
      setLoading(true);
      const response = await fetch("http://localhost:8080/news");

      if (!response.ok) {
        setError("Faild to fetch news.");
        setLoading(false);
      }

      const news = await response.json();
      setNews(news);
      setLoading(false);
    }

    fetchNews();
  }, []);

  if (loading) {
    return <p>Loading....</p>;
  }
  if (error) {
    return <p>{error}</p>;
  }

  let newsContent;
  if (news) {
    newsContent = <NewsList news={news} />;
  }
  return (
    <>
      <h1>News Page</h1>
      {newsContent}
    </>
  );
};

export default NewsPage;
