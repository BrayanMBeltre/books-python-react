import BookList from "@/components/BookList";
import Layout from "@/components/Layout";
import EmptyCard from "@/components/EmptyCard";
import useGetBooks from "@/hooks/useGetBooks";

const HomePage = () => {
  const booksData = useGetBooks();

  return (
    <Layout>
      {booksData.data && booksData.data?.length > 0 ? (
        <BookList books={booksData.data} />
      ) : (
        <EmptyCard />
      )}
    </Layout>
  );
};

export default HomePage;
