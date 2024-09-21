import About from "@/components/About";
import Banner from "@/components/Banner";
// import CA from "@/components/CA";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HowToBuy from "@/components/HowToBuy";
import PreHowToBuy from "@/components/PreHowToBuy";
import Roadmap from "@/components/Roadmap";
// import RoadmapGirl from "@/components/RoadmapGirl";

export default function Home() {
  return (
    <div className="font-sofadi">
      {/* <div className="h-screen w-screen bg-white">

      </div> */}
      <section id="home">
        <Header />
      </section>

      <Banner />
      {/* <CA /> */}
      <section id="about">
        <About />
      </section>
      <section id="roadmap">
        <Roadmap />
      </section>
      <section id="how-to-buy">
        <HowToBuy />
      </section>

      <section id="pre-how-to-buy">
        <PreHowToBuy />
      </section>
      <Footer />
    </div>
  );
}
