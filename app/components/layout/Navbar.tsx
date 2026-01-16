import { Button, Logo, Icon } from "../ui";

import { FiSearch } from "react-icons/fi";

const Navbar: React.FC = () => {
  return (
    <nav className="m-8 w-1/2">
      <div className="flex flex-row justify-between">
        <Logo />
        <div className=" content-center space-x-4">
          <Button text="Sign Up" />
          <Button text="Login" />
        </div>
      </div>
      <div className="w-full my-12">
        <div className="max-w-xl p-24 mx-auto">
          {/* Headline */}
          <h1 className="text-5xl font-extrabold leading-[1.05] text-stone-900">
            1-on-1 <span className="text-orange-500">UX design</span>
            <span className="text-stone-900"> |</span>
            <br />
            mentorship
          </h1>

          {/* Supporting text */}
          <p className="mt-6 max-w-lg leading-relaxed text-stone-400">
            The road to career success is often a bumpy one. But imagine how
            much easier it would be if you had an experienced industry leader
            available anytime to offer advice and expert guidance.
          </p>

          {/* Search bar */}
          <div className="mt-10 w-full max-w-md">
            <div className="flex items-center gap-3 rounded-2xl bg-white px-5 py-4 shadow-md shadow-stone-200/70 ring-1 ring-stone-100">
              <input
                className="w-full bg-transparent text-sm text-stone-700 placeholder:text-stone-400 focus:outline-none"
                placeholder="Search for the mentor"
              />
              <button
                type="button"
                className="flex h-10 w-10 items-center justify-center rounded-xl bg-stone-900 text-white"
                aria-label="Search"
              >
                <Icon className="text-white" Icon={FiSearch} size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
