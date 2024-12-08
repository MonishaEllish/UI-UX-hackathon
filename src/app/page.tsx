
import Header from "./components/Header";

import Hero from "./components/Hero";
import SecondPage from "./components/Secondpage";
import TopPicks from "./components/TopPicks";
import AsgaardSofa from "./components/Asgaardsofa";
import Blogs from "./components/Blogs";
import Instagram from "./components/Instagram";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <SecondPage/>
      <TopPicks/>
      <AsgaardSofa/>
      <Blogs/>
      <Instagram/>
      <Footer/>
    </>
  );
}
