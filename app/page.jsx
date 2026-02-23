import Header from "../components/Header/header";
import Home from "../components/Home/home";
import About from "../components/About/about";
import Skill from "../components/Skill/skill";
import Qualification from "../components/Qualification/Qualification";
import Portfolio from "../components/Project/portfolio";
import Contact from "../components/Contact/contact";
import Footer from "../components/Footer/footer";

export default function Page() {
  return (
    <>
      <Header />

      <main>
        <Home />
        <About />
        <Skill />
        <Qualification />
        <Portfolio />
        <Contact />
        <Footer />
      </main>
    </>
  );
}