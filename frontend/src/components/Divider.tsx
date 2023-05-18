import clsxm from "@/utils/clsxm";

type Props = {
  className?: string;
};

const Divider = ({ className }: Props) => {
  return (
    <div className={clsxm("h-1 rounded-full bg-base-content", className)} />
  );
};

export default Divider;
