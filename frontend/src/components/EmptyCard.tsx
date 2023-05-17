import { IconType } from "react-icons";
import { FiLoader } from "react-icons/fi";

type Props = {
  icon?: IconType;
  message?: string;
};

const EmptyCard = ({ icon: Icon, message }: Props) => {
  return (
    <div>
      {Icon ? <Icon /> : <FiLoader />}
      <p>{message || "No items"}</p>
    </div>
  );
};

export default EmptyCard;
