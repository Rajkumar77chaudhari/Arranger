import Head from "next/head";
import CardsContainer from "../components/cardContainer/CardsContainer";
import { IntroSection } from "../components/Introsection/IntroSection";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

const Home = () => {
  
  return (
    <>
      <Head>
        <title>Arranger</title>
      </Head>

      <Navbar />
      <IntroSection />
      <CardsContainer />
      <Footer />
    </>
  );
};

export default Home;
