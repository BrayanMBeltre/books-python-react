import BookList, { BookListSkeleton } from "@/components/BookList";
import Layout from "@/components/Layout";
import EmptyCard from "@/components/EmptyCard";
import useGetBooks from "@/hooks/useGetBooks";

const HomePage = () => {
  const booksData = useGetBooks();

  return (
    <Layout>
      {booksData.isLoading && <BookListSkeleton />}

      {booksData.data && booksData.data?.length > 0 ? (
        <BookList books={booksData.data} />
      ) : (
        <EmptyCard className="min-h-[400px]" />
      )}
    </Layout>
  );
};

export default HomePage;
