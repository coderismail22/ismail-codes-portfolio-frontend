import { IoMdArrowRoundBack } from "react-icons/io";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="bg-blue-100 flex items-center p-5 overflow-hidden relative">
      <div className="flex-1 min-h-full min-w-full rounded-3xl bg-white shadow-xl p-10 lg:p-20 text-gray-800 relative md:flex items-center text-center md:text-left">
        <div className="w-full md:w-1/2">
          <div className="mb-10 lg:mb-20">
            <svg
              id="logoipsum"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="15 30 147.778 40"
              className="w-48"
              style={{
                filter:
                  "drop-shadow(5px 5px 10px rgba(0, 0, 0, 0.2)) brightness(1.2)",
                transition: "transform 0.3s ease, filter 0.3s ease",
              }}
            >
              {/* <!-- SVG paths go here --> */}
            </svg>
          </div>
          <div className="mb-10 md:mb-20 text-gray-600 font-light">
            <h1 className="font-black uppercase text-3xl lg:text-5xl text-yellow-500 mb-10">
              You seem to be lost!
            </h1>
            <p>The page you&apos;re looking for isn&apos;t available.</p>
            <p>Try searching again or use the Go Back button below.</p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <IoMdArrowRoundBack />
            <Link
              to="/"
              className="text-lg font-bold outline-none focus:outline-none transform transition-all text-yellow-500 hover:text-yellow-600"
            >
              Go Back
            </Link>
          </div>
        </div>
        <div className="w-full md:w-1/2 text-center">
          <img
            src="/assets/not-found.jpg"
            className="w-full max-w-lg lg:max-w-full mx-auto rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default NotFound;
