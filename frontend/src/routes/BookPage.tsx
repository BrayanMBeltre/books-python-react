import Button from "@/components/Button";
import GoBackButton from "@/components/GoBackButton";
import Layout from "@/components/Layout";
import PageContentHTML from "@/components/PageContentHTML";
import { pageFormats } from "@/constant";
import useGetBook from "@/hooks/useGetBook";
import useGetPageFromBook from "@/hooks/useGetPageFromBook";
import { TPageFormats } from "@/types";
import clsxm from "@/utils/clsxm";
import { Link, useParams, useNavigate } from "react-router-dom";

const BookPagePage = () => {
  const params = useParams();
  const navigate = useNavigate();
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
    <Layout leftHeaderContent={<GoBackButton to={`/book/${bookId}`} />}>
      <div className="flex ">
        {bookData.isLoading ? (
          <div className="h-[36px] bg-neutral rounded-xl animate-pulse" />
        ) : (
          <h1 className="font-bold text-3xl">{bookData.data?.title}</h1>
        )}
      </div>

      <div className="flex md:flex-row flex-col items-center gap-4 my-4">
        <div className="flex gap-2">
          {pageFormats.map((format) => {
            const isActive = format === pageFormat;
            return (
              <Button
                onClick={() =>
                  navigate(`/book/${bookId}/page/${pageId}/${format}`)
                }
                className={clsxm(
                  "btn-sm",
                  "uppercase",
                  isActive ? "bg-primary" : "bg-neutral"
                )}
              >
                {format}
              </Button>
            );
          })}
        </div>
        <div className="h-1 bg-white w-full"></div>
        <p>{pageId}</p>
        <div className="h-1 bg-white w-full"></div>
      </div>

      <div className="min-h-[500px]">
        {pageFormat === "html" && (
          <PageContentHTML>{pageData.data?.html}</PageContentHTML>
        )}

        {pageFormat === "txt" && <div>{pageData.data?.txt}</div>}
      </div>

      <div className="flex items-center mx-auto justify-center gap-4">
        <Button
          onClick={() =>
            navigate(
              `/book/${bookId}/page/${
                pageId > 1 ? pageId - 1 : pageId
              }/${pageFormat}`
            )
          }
          isLoading={pageData.isLoading}
          disabled={pageId === 1}
        >
          back Page
        </Button>

        <Button
          isLoading={pageData.isLoading}
          onClick={() =>
            navigate(`/book/${bookId}/page/${pageId + 1}/${pageFormat}`)
          }
          disabled={bookData.data && bookData.data?.total_pages <= pageId}
        >
          Next Page
        </Button>
      </div>
    </Layout>
  );
};

export default BookPagePage;
