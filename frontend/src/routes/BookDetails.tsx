import BookDetailsCard from "@/components/BookDetailsCard";
import EmptyCard from "@/components/EmptyCard";
import Layout from "@/components/Layout";
import PageList from "@/components/PageList";
import useGetBook from "@/hooks/useGetBook";
import useGetPagesFromBook from "@/hooks/useGetPagesFromBook";
import { useParams } from "react-router-dom";

const BookDetailsPage = () => {
  const { bookId } = useParams();

  const bookData = useGetBook({ bookId });

  const pagesData = useGetPagesFromBook({ bookId });

  return (
    <Layout>
      {bookData.data ? <BookDetailsCard {...bookData.data} /> : <EmptyCard />}

      <div className="text-xl font-semibold my-4 flex gap-4 items-center">
        <h4 className=" ">Pages</h4>
        <div className="w-full h-1 bg-white" />
        <p>{pagesData.data?.length}</p>
      </div>

      {pagesData.data && pagesData.data?.length > 0 ? (
        <PageList pages={pagesData.data} />
      ) : (
        <EmptyCard />
      )}
    </Layout>
  );
};

export default BookDetailsPage;
