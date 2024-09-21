import About from "@/components/About";
import Banner from "@/components/Banner";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HowToBuy from "@/components/HowToBuy";
import PreHowToBuy from "@/components/PreHowToBuy";
import Roadmap from "@/components/Roadmap";

export default function Home() {
  return (
    <div className="font-sofadi">
      <section id="home">
        <Header />
      </section>

      <Banner />
      <section id="about">
        <About />
      </section>
      <section id="pre-how-to-buy">
        <PreHowToBuy />
      </section>
      <section id="how-to-buy">
        <HowToBuy />
      </section>
      <section id="roadmap">
        <Roadmap />
      </section>
      <Footer />
    </div>
  );
}
