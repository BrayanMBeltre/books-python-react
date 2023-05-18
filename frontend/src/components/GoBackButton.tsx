import { HiArrowNarrowLeft } from "react-icons/hi";
import { Link } from "react-router-dom";

type Props = {
  to: string;
};

const GoBackButton = ({ to }: Props) => {
  return (
    <Link to={to}>
      <HiArrowNarrowLeft className="h-[20px] w-[20px] text-base-content" />
    </Link>
  );
};

export default GoBackButton;
