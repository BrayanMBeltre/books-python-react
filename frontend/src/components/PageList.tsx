import { TPage } from "@/types";
import PageCard from "./PageCard";

type Props = {
  pages: Array<TPage>;
};

const PageList = ({ pages }: Props) => {
  return (
    <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {pages.map((props) => (
        <PageCard key={props.id} {...props} />
      ))}
    </ul>
  );
};

export default PageList;
