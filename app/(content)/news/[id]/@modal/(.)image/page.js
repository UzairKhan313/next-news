"use client";

import { DUMMY_NEWS } from "@/dummy-news";

import { useRouter, notFound } from "next/navigation";

const InterceptedImagePage = ({ params }) => {
  const router = useRouter();

  const newsSlug = params.id;
  console.log(newsSlug);
  const newsItem = DUMMY_NEWS.find((item) => newsSlug === item.slug);

  if (!newsItem) {
    notFound();
  }
  return (
    <>
      <div className="modal-backdrop" onClick={router.back} />
      <dialog className="modal" open>
        <div className="fullscreen-image">
          <img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />
        </div>
      </dialog>
    </>
  );
};

export default InterceptedImagePage;
