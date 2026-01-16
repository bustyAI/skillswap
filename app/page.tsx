import { Navbar, HeroCardRight } from "./components/layout";

export default function Home() {
  return (
    <div className=" overflow-hidden">
      <div className="flex flex-row">
        <Navbar />
        <HeroCardRight />
      </div>
    </div>
  );
}
