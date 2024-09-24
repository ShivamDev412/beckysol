import About from "@/components/About";
import Banner from "@/components/Banner";
import CA from "@/components/CA";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HowToBuy from "@/components/HowToBuy";
import PreHowToBuy from "@/components/PreHowToBuy";
import Roadmap from "@/components/Roadmap";
import SocialLinks from "@/components/SocialLinks";


export default function Home() {
  return (
    <div className="font-sofadi">
       <section id="home">
        <Header />
      </section>

      <Banner /> 
      <div className="flex flex-col gap-[0.2in] xl:gap-[1in]">
      <CA /> 
       <section id="about">
        <About />
      </section>
      <SocialLinks />
      <section id="roadmap">
        <Roadmap />
      </section>

      <section id="how-to-buy">
        <HowToBuy />
      </section>
      </div>
      <section id="pre-how-to-buy">
        <PreHowToBuy />
      </section>
      <Footer /> 
      

    </div>
  );
}
