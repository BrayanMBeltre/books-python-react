import Layout from "@/components/Layout";
import useGetBook from "@/hooks/useGetBook";
import useGetPageFromBook from "@/hooks/useGetPageFromBook";
import { TPageFormats } from "@/types";
import { Link, useParams } from "react-router-dom";

const BookPagePage = () => {
  const params = useParams();
  const bookId = params.bookId;
  const pageId = (params?.pageId && parseInt(params?.pageId)) || 0;
  const pageFormat = (params?.format as TPageFormats) || "txt";

  const pageData = useGetPageFromBook({
    bookId,
    pageId,
    pageFormat,
  });

  const bookData = useGetBook({ bookId });

  return (
    <Layout>
      <div className="flex ">
        <h1>{bookData.data?.title}</h1>
      </div>

      <div className="flex items-center gap-4 my-4">
        <div className="h-1 bg-white w-full"></div>
        <p>{pageData.data?.number}</p>
        <div className="h-1 bg-white w-full"></div>
      </div>

      <div className="min-h-[500px]">{pageData.data?.txt}</div>

      <div className="flex items-center mx-auto justify-center gap-4">
        <Link to={`/book/${bookId}/page/${pageId > 1 ? pageId - 1 : pageId}`}>
          back Page
        </Link>
        <Link to={`/book/${bookId}/page/${pageId + 1}`}>Next Page</Link>
      </div>
    </Layout>
  );
};

export default BookPagePage;
