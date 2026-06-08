import Hero from "../components/Hero";
import Showcase from "../components/Showcase";
import LogosCarrossel from "../components/LogosCarrossel";
import ShowcaseSecond from "../components/ShowcaseSecond";
import Team from "../components/Team";
import Depoimentos from "../components/Depoimentos";
import Visit from "../components/Visit";
import InstagramSection from "../components/Instagram";
<link
  href="https://fonts.googleapis.com/css2?family=Pacifico&display=swap"
  rel="stylesheet"
/>

export default function Home() {
  return (
    <>
      <Hero />
      <Showcase />
      <LogosCarrossel />
      <Team />
      <InstagramSection />
      <ShowcaseSecond />
      <Depoimentos />
      <Visit />
    </>
  );
}
