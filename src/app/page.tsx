import Contact from "./sections/Contact";
import Header from "./sections/Header";
import Projects from "./sections/Projects";
import Services from "./sections/Services";
import Skilles from "./sections/Skilles";

export default function Home() {
  return (
    <>
    <Header/>
    <Services/>
    <Skilles/>
    <Projects/>
    <Contact/>
    </>
  );
}
