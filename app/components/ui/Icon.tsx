import type { IconType } from "react-icons";
type IconProps = {
  Icon: IconType;
  size?: number;
  className?: string;
};

const Icon: React.FC<IconProps> = ({ Icon, size, className }) => {
  return (
    <span className={className}>
      <Icon size={size} />
    </span>
  );
};

export default Icon;
