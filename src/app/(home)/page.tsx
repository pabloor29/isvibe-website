import Footer from "../../../components/Footer";
import HeroBanner from "../../../components/HeroBanner";
import IntroRestaurant from "../../../components/IntroRestaurant";
import IntroTeam from "../../../components/IntroTeam";
import Navbar from "../../../components/Navbar";

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroBanner />
      <IntroRestaurant />
      <IntroTeam />
      <Footer />
    </main>
  );
}
