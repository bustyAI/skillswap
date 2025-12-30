type ButtonProps = {
  text: string;
};

const Button: React.FC<ButtonProps> = ({ text }) => {
  return (
    <button type="button" className="btn-nav">
      {text}
    </button>
  );
};

export default Button;
