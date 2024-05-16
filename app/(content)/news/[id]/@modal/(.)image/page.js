import ModalBackdrop from "@/components/modal-backdrop";
// import { DUMMY_NEWS } from "@/dummy-news";
import { getNewsItem } from "@/lib/news";

import { notFound } from "next/navigation";

const InterceptedImagePage = async ({ params }) => {
  const newsSlug = params.id;
  const newsItem = await getNewsItem(newsSlug);

  if (!newsItem) {
    notFound();
  }
  return (
    <>
      <ModalBackdrop />
      <dialog className="modal" open>
        <div className="fullscreen-image">
          <img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />
        </div>
      </dialog>
    </>
  );
};

export default InterceptedImagePage;
