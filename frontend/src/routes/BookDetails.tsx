import BookDetailsCard, {
  BookDetailsCardSkeleton,
} from "@/components/BookDetailsCard";
import EmptyCard from "@/components/EmptyCard";
import GoBackButton from "@/components/GoBackButton";
import Layout from "@/components/Layout";
import PageList, { PageListSkeleton } from "@/components/PageList";
import useGetBook from "@/hooks/useGetBook";
import useGetPagesFromBook from "@/hooks/useGetPagesFromBook";
import { useParams } from "react-router-dom";
import { TbNotesOff } from "react-icons/tb";

const BookDetailsPage = () => {
  const { bookId } = useParams();

  const bookData = useGetBook({ bookId });

  const pagesData = useGetPagesFromBook({ bookId });

  return (
    <Layout leftHeaderContent={<GoBackButton to={"/"} />}>
      {bookData.isLoading && <BookDetailsCardSkeleton />}

      {bookData.data ? (
        <BookDetailsCard {...bookData.data} />
      ) : (
        <EmptyCard
          icon={TbNotesOff}
          message="Book Data Not Found"
          className="h-[200px]"
        />
      )}

      <div className="text-xl font-semibold my-4 flex gap-4 items-center">
        <h4 className=" ">Pages</h4>
        <div className="w-full h-1 bg-white" />
        <p>{pagesData.data?.length}</p>
      </div>

      {pagesData.isLoading && <PageListSkeleton />}

      {pagesData.data && pagesData.data?.length > 0 ? (
        <PageList pages={pagesData.data} />
      ) : (
        <EmptyCard className="h-[400px]" />
      )}
    </Layout>
  );
};

export default BookDetailsPage;
