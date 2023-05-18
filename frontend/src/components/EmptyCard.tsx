import clsxm from "@/utils/clsxm";
import { IconType } from "react-icons";
import { BsBookmarkX } from "react-icons/bs";

type Props = {
  icon?: IconType;
  message?: string;
  className?: string;
};

const EmptyCard = ({ icon: Icon, message, className }: Props) => {
  return (
    <div
      className={clsxm(
        "w-full flex-col flex justify-center items-center gap-4 ",
        className
      )}
    >
      {Icon ? (
        <Icon className={"h-[50px] w-[50px]"} />
      ) : (
        <BsBookmarkX className={"h-[50px] w-[50px]"} />
      )}
      <p className="text-xl font-semibold">{message || "No items"}</p>
    </div>
  );
};

export default EmptyCard;
