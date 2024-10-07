import { Typewriter } from "react-simple-typewriter";
import VideoPlayer from "../VideoPlayer/VideoPlayer";
import { GrDocumentPdf } from "react-icons/gr";

const HeroSection = () => {
  return (
    <section className="my-5 flex items-center justify-center px-4 md:px-8">
      <div className="grid grid-cols-1 md:grid-cols-2  items-center justify-center gap-8">
        {/* Hero Text */}
        <div className="order-2 md:order-1 text-center items-center justify-center space-y-4 ">
          <h1 className="text-3xl md:text-5xl font-bold text-gray-400">
            Hi, It's Ismail
          </h1>
          <p className="text-lg md:text-xl text-gray-400">
            <span>I am a </span>
            <span className="text-blue-400 font-semibold">
              <Typewriter
                words={[
                  "Passionate MERN Stack Developer",
                  "UI/UX Enthusiast",
                  "Content Maker",
                ]}
                loop={false} // Set true to repeat the animation
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </span>
          </p>
          <div>
            <a
              href="#"
              className="animate-bounce flex gap-2 items-center justify-center px-2 py-3 w-1/2 mx-auto mt-4 text-white bg-blue-600 rounded-full shadow hover:bg-blue-700 transition-all duration-1000"
            >
              My Resume
              <GrDocumentPdf />
            </a>
          </div>
        </div>
        {/* Profile Image */}
        <div className="order-1 md:order-2 flex flex-col items-center justify-center">
          {/* <img
            src="/src/assets/profile.png"
            alt="Profile"
            className="w-96 md:w-[484px] object-cover object-center rounded-full  border-blue-500 border-[5px] "
          /> */}
          {/* <div className="w-96 h-96 rounded-full overflow-hidden border-blue-500 border-[5px] flex items-center justify-center">
            <video
              className="w-full h-full object-cover"
              autoPlay
              muted 
              loop
              controls
              controlsList="noremoteplayback"
            >
              <source src="/src/assets/bio.mp4" type="video/mp4" />
            </video>
          </div> */}

          {/* Final */}
          <VideoPlayer />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
