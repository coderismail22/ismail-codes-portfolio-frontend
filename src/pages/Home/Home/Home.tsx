import HeroSection from "../HeroSection/HeroSection";
import Projects from "../Projects/Projects";
import Resume from "../Resume/Resume";
import Services from "../Services/Services";
import SkillGraph from "../SkillGraph/SkillGraph";
import Skills from "../Skills/Skills";
import Tools from "../Tools/Tools";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <Resume />
      <Services />
      <Projects />
      <Skills />
      <Tools />
      <SkillGraph />
    </div>
  );
};

export default Home;
