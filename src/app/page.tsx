import { Nav, Hero, Offers, Visit } from "@/components/site/shell";
import { Plans } from "@/components/site/plans";
import { Handovers } from "@/components/site/handovers";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Plans />
        <Handovers />
        <Offers />
        <Visit />
      </main>
    </>
  );
}
