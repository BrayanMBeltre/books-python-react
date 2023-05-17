import { TBook } from "@/types";
import { Link } from "react-router-dom";

type Props = TBook;

export const BookCard = ({ id, title, author }: Props) => {
  return (
    <Link to={`/book/${id}`}>
      <div className="rounded-xl bg-primary  p-4 h-[100px] flex flex-col justify-between ">
        <h4 className="font-bold text-lg line-clamp-2 ">{title}</h4>
        <h5 className="text-right text-sm ">{author}</h5>
      </div>
    </Link>
  );
};

export default BookCard;
