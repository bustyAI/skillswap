import { Button, Logo } from "../ui";

const Navbar: React.FC = () => {
  return (
    <nav className="flex flex-row m-8">
      <Logo />
      <div className="flex flex-row space-x-4">
        <Button text="Sign Up" />
        <Button text="Login" />
      </div>
    </nav>
  );
};

export default Navbar;
