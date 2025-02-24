import Footer from "../../../components/Footer";
import HeroBanner from "../../../components/HeroBanner";
import IntroCuisine from "../../../components/IntroCuisine";
import IntroRestaurant from "../../../components/IntroRestaurant";
import IntroSalles from "../../../components/IntroSalles";
import IntroTeam from "../../../components/IntroTeam";
import Navbar from "../../../components/Navbar";

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroBanner />
      <IntroRestaurant />
      <IntroTeam />
      <IntroCuisine />
      <IntroSalles />
      <Footer />
    </main>
  );
}
