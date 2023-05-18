import { TPage } from "@/types";
import PageCard, { PageCardSkeleton } from "./PageCard";

type Props = {
  pages: Array<TPage>;
};

const PageList = ({ pages }: Props) => {
  return (
    <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {pages.map((props) => (
        <li key={props.id}>
          <PageCard {...props} />
        </li>
      ))}
    </ul>
  );
};

export const PageListSkeleton = () => {
  return (
    <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {[...Array(4)].map((_, index) => (
        <li key={index}>
          <PageCardSkeleton />
        </li>
      ))}
    </ul>
  );
};

export default PageList;
