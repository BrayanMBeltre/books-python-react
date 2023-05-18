import clsxm from "@/utils/clsxm";

type Props = {
  children?: string;
  className?: string;
};

const PageContentHTML = ({ children, className }: Props) => {
  return (
    <div
      className={clsxm("prose", className)}
      dangerouslySetInnerHTML={{ __html: children || "" }}
    />
  );
};

export default PageContentHTML;
