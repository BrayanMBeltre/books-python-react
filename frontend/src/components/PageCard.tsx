import { TPage } from "@/types";
import { Link } from "react-router-dom";

type Props = TPage;

export const PageCard = ({ id, book, number, txt }: Props) => {
  return (
    <Link to={`/book/${book}/page/${id}`}>
      <div className="rounded-xl bg-primary  p-4 h-[200px] flex flex-col justify-between ">
        <h4 className="font-semibold text-lg line-clamp-4 ">{txt}</h4>

        <h5 className="text-sm ">Page number - {number}</h5>
      </div>
    </Link>
  );
};

export default PageCard;
