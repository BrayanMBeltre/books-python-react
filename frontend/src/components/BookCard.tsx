import { TBook } from "@/types";
import { Link } from "react-router-dom";

type Props = TBook;

export const BookCard = ({ id, title, author, total_pages }: Props) => {
  return (
    <Link to={`/book/${id}`}>
      <div className="rounded-xl bg-primary gap-4 p-4 h-[100px] flex flex-col justify-between ">
        <h4 className="font-bold text-lg line-clamp-2 ">{title}</h4>
        <div className="flex justify-between text-sm">
          <h5>Pages: {total_pages}</h5>
          <h5>{author}</h5>
        </div>
      </div>
    </Link>
  );
};

export const BookCardSkeleton = () => {
  return <div className="rounded-xl bg-neutral h-[100px] animate-pulse" />;
};

export default BookCard;
