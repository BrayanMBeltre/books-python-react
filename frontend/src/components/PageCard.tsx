import { TPage } from "@/types";
import { Link } from "react-router-dom";

type Props = TPage;

export const PageCard = ({ book, number, txt }: Props) => {
  return (
    <Link to={`/book/${book}/page/${number}`}>
      <div className="rounded-xl bg-primary  p-4 h-[200px] flex flex-col justify-between ">
        <h4 className="font-semibold text-lg line-clamp-4 ">{txt}</h4>

        <h5 className="text-sm ">Page number - {number}</h5>
      </div>
    </Link>
  );
};

export const PageCardSkeleton = () => {
  return <div className="rounded-xl bg-neutral h-[200px] animate-pulse" />;
};

export default PageCard;
