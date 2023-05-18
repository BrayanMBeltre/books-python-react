import { TBook } from "@/types";

type Props = TBook;

const BookDetailsCard = ({ author, title }: Props) => {
  return (
    <div className="min-h-[200px]">
      <h1 className="font-bold text-3xl">{title}</h1>
      <h2 className="text-xl">{author}</h2>
    </div>
  );
};

export const BookDetailsCardSkeleton = () => {
  return <div className="rounded-xl bg-neutral min-h-[200px] animate-pulse" />;
};

export default BookDetailsCard;
