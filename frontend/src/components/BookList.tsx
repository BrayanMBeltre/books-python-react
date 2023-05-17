import { TBook } from "@/types";
import BookCard from "./BookCard";

type Props = {
  books: Array<TBook>;
};

const BookList = ({ books }: Props) => {
  return (
    <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {books.map((props) => (
        <BookCard key={props.id} {...props} />
      ))}
    </ul>
  );
};

export default BookList;
