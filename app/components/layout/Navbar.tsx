import { Button, Logo } from "../ui";

const Navbar: React.FC = () => {
  return (
    <div className="flex flex-row justify-between content-center m-4">
      <Logo />
      <div className="flex flex-row space-x-4">
        <Button text="Sign Up" />
        <Button text="Login" />
      </div>
    </div>
  );
};

export default Navbar;
