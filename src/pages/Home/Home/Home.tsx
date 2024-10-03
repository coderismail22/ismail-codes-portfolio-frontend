// import HeroSection from "../HeroSection/HeroSection";
// import Projects from "../Projects/Projects";
import Services from "../Services/Services";
// import SkillGraph from "../SkillGraph/SkillGraph";
// import Skills from "../Skills/Skills";
// import Tools from "../Tools/Tools";

const Home = () => {
  const darkStyle = {
    backgroundColor: "#121212",
    color: "#ffffff",
    height: "100vh",
    margin: "0",
  };

  return (
    <div
    // style={darkStyle}
    // style={{
    // backgroundImage:
    //   "url(https://img.freepik.com/free-vector/dark-black-background-design-with-stripes_1017-38064.jpg?w=996&t=st=1727926653~exp=1727927253~hmac=326c7ef1c28c3dbbed12c231fcb7c79be79b3a4f8b7feda33c0f5c3e08fa691b)",
    // backgroundPosition: "center",
    // backgroundSize: "cover",
    // backgroundRepeat: "repeat-y",
    // }}
    >
      {/* <HeroSection /> */}
      <Services />
      {/* <Projects /> */}
      {/* <Skills /> */}
      {/* <Tools /> */}
    </div>
  );
};

export default Home;
