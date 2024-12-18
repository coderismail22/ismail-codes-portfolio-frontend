import clsx from "clsx";
import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { scroller } from "react-scroll"; // Add scroller from react-scroll
import { FaBars } from "react-icons/fa";
import { TbLayoutSidebarLeftCollapse } from "react-icons/tb";

const navitems = [
  { title: "Home", path: "/", isScroll: false },
  { title: "Projects", path: "/projects", isScroll: false },
  { title: "Services", path: "services", isScroll: true },
  { title: "FAQ", path: "faq", isScroll: true },
  { title: "Blog", path: "/blog", isScroll: false },
  { title: "Notes", path: "/notes", isScroll: false },
  { title: "Contact", path: "contact", isScroll: true },
];

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
    document.body.classList.toggle("overflow-hidden", !isSidebarOpen);
  };

  const closeSidebarWithDelay = () => {
    setTimeout(() => {
      setIsSidebarOpen(false);
      document.body.classList.remove("overflow-hidden");
    }, 200); // Adjust delay as needed
  };

  const handleScrollNavigation = (elementId: string) => {
    if (location.pathname !== "/") {
      // If user is not on the home page, navigate to home and scroll after navigation
      navigate("/");
      setTimeout(() => {
        scroller.scrollTo(elementId, {
          smooth: true,
          duration: 500,
          offset: -80, // Offset to adjust for any fixed header
        });
      }, 100); // Give some time for the home page to load
    } else {
      // If already on the home page, directly scroll to the section
      scroller.scrollTo(elementId, {
        smooth: true,
        duration: 500,
        offset: -80,
      });
    }
  };

  return (
    <main className="mx-auto h-[70px] flex flex-col justify-between z-[9999] px-5 text-white bg-[#26283b]">
      <nav className="flex justify-between items-center px-5">
        <div className="flex items-center justify-between lg:justify-center w-full">
          <div>
            <Link to="/">
              {/* LOGO */}
              <img
                src="/ic.gif"
                // width={"120px"}
                className="w-[120px] h-full"
                alt="IC Logo"
              />
            </Link>
          </div>

          <section className="w-[50px]">
            {/* MENU for Mobile */}
            <h1
              className="text-3xl cursor-pointer lg:hidden"
              onClick={toggleSidebar}
            >
              <FaBars />
            </h1>
          </section>
        </div>

        <section className="flex items-center justify-center gap-10 xl:gap-16 2xl:gap-20 text-center">
          {/* Navbar For Larger Displays */}
          {navitems.map((item, index) =>
            item.isScroll ? (
              <button
                key={index}
                onClick={() => handleScrollNavigation(item.path)} // Handle scroll navigation
                className="hover:text-blue-500 hover:cursor-pointer hidden lg:inline-block font-montserrat font-bold text-center text-sm md:text-base w-[50px]"
              >
                {item.title}
              </button>
            ) : (
              <Link
                key={index}
                to={item.path}
                className="hover:text-blue-500 hover:cursor-pointer hidden lg:inline-block font-montserrat font-bold text-center text-sm md:text-base w-[50px]"
              >
                {item.title}
              </Link>
            )
          )}
        </section>

        {/* Mobile Sidebar */}
        <div
          className={clsx(
            "fixed inset-0 z-[10000] lg:hidden bg-black/50 backdrop-blur-sm transition-all",
            isSidebarOpen ? "translate-x-0" : "-translate-x-full"
          )}
          onClick={toggleSidebar} // Close sidebar when background is clicked
        >
          <section
            className="overflow-scroll text-white bg-black/90 h-screen w-56 absolute left-0 top-0 flex flex-col items-center gap-8 py-16"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the sidebar
          >
            <p className="text-center">
              <TbLayoutSidebarLeftCollapse size="30" onClick={toggleSidebar} />
            </p>

            {navitems.map((item, index) =>
              item.isScroll ? (
                <button
                  key={index}
                  onClick={() => {
                    closeSidebarWithDelay(); // Close the sidebar
                    handleScrollNavigation(item.path); // Perform scroll navigation
                  }}
                  className="font-bold flex flex-col items-center justify-center"
                >
                  {item.title}
                </button>
              ) : (
                <Link
                  key={index}
                  to={item.path}
                  className="font-bold flex flex-col items-center justify-center"
                  onClick={closeSidebarWithDelay} // Close sidebar with delay
                >
                  {item.title}
                </Link>
              )
            )}
          </section>
        </div>
      </nav>
    </main>
  );
};

export default Navbar;
