import Hero from "../components/Hero";
import Showcase from "../components/Showcase";
import LogosCarrossel from "../components/LogosCarrossel";
import ShowcaseSecond from "../components/ShowcaseSecond";
import Team from "../components/Team";
import Depoimentos from "../components/Depoimentos";
import Visit from "../components/Visit";

export default function Home() {
  return (
    <>
      <Hero />
      <Showcase />
      <LogosCarrossel />
      <Team />
      <ShowcaseSecond />
      <Depoimentos />
      <Visit />
    </>
  );
}
