import { Button, Logo } from "../ui";

const Navbar: React.FC = () => {
  return (
    <nav className="m-8 grow">
      <div className="flex flex-row justify-between">
        <Logo />
        <div className=" content-center space-x-4">
          <Button text="Sign Up" />
          <Button text="Login" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
