import { TBook } from "@/types";
import BookCard, { BookCardSkeleton } from "./BookCard";

type Props = {
  books: Array<TBook>;
};

const BookList = ({ books }: Props) => {
  return (
    <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {books.map((props) => (
        <li key={props.id}>
          <BookCard {...props} />
        </li>
      ))}
    </ul>
  );
};

export const BookListSkeleton = () => {
  return (
    <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {[...Array(12)].map((_, index) => (
        <li key={index}>
          <BookCardSkeleton />
        </li>
      ))}
    </ul>
  );
};

export default BookList;
