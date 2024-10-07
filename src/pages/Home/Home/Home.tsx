import HeroSection from "../HeroSection/HeroSection";
import Services from "../Services/Services";
import Skills from "../Skills/Skills";
import Tools from "../Tools/Tools";
import { Element } from "react-scroll";
import ProjectsForHome from "../ProjectsForHome/ProjectsForHome";
import Contact from "@/pages/Contact/Contact/Contact";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <Skills />
      <Tools />
      <ProjectsForHome />

      {/* React Scroll Based Component */}
      <Element name="services">
        <Services />
      </Element>
      {/* React Scroll Based Component */}
      <Element name="contact">
        <Contact />
      </Element>
    </div>
  );
};

export default Home;
