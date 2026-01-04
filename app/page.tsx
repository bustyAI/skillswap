import { Navbar, HeroCardRight } from "./components/layout";

export default function Home() {
  return (
    <div className=" overflow-hidden">
      <div className="flex flex-row justify-between">
        <Navbar />
        <HeroCardRight />
      </div>
    </div>
  );
}
