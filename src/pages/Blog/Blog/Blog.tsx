import axios from "axios";
import { useState, useEffect, useCallback } from "react";
import { RotatingLines } from "react-loader-spinner";
import moment from "moment";
import debounce from "lodash.debounce"; // Debouncing utility
import DatePicker from "react-datepicker"; // Datepicker for filtering dates
import "react-datepicker/dist/react-datepicker.css"; // Datepicker styles
import { Link } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";
import { BsCalendar } from "react-icons/bs";
import { FaSearch } from "react-icons/fa";

const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [visibleBlogs, setVisibleBlogs] = useState(6); // Initial 6 visible blogs
  const [searchQuery, setSearchQuery] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const fetchBlogs = async () => {
    setLoading(true);
    try {
      const { data } = await axios.get(
        "https://fsdg-blog-login-server.vercel.app/api/posts"
      );
      setBlogs(data);
    } catch (error) {
      console.error("Error fetching blogs:", error);
      setError("Something went wrong while fetching the blogs.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  // Load More Button Handler
  const loadMore = () => {
    setVisibleBlogs((prevVisibleBlogs) => prevVisibleBlogs + 6); // Load 6 more blogs
  };

  // Debounced Search Handler
  const debouncedSearch = useCallback(
    debounce((query) => setSearchQuery(query), 300), // Debouncing search input
    []
  );

  const handleSearchChange = (e: { target: { value: any } }) => {
    debouncedSearch(e.target.value);
  };

  // Filter Blogs Based on Search Query and Date Range
  const filteredBlogs = blogs.filter((blog) => {
    const matchesSearch =
      blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      blog.content.toLowerCase().includes(searchQuery.toLowerCase());

    const blogDate = moment(blog.createdAt);
    const matchesDateRange =
      (!startDate || blogDate.isSameOrAfter(moment(startDate))) &&
      (!endDate || blogDate.isSameOrBefore(moment(endDate)));

    return matchesSearch && matchesDateRange;
  });

  // Loading Spinner
  if (loading) {
    return (
      <div className="h-screen flex items-center justify-center">
        <RotatingLines
          visible={true}
          // height="46"
          width="46"
          // color="grey"
          strokeWidth="5"
          animationDuration="0.75"
          ariaLabel="rotating-lines-loading"
        />
      </div>
    );
  }

  // Error Message
  if (error) {
    return (
      <p className="text-red-500 text-xl text-center font-bold py-10 border-2 border-red-500 rounded-md m-5">
        {error}
      </p>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row gap-4 justify-between items-center mb-8">
        {/* Search Bar */}
        <div className="relative w-full md:w-1/2">
          <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
          <input
            type="text"
            placeholder="Search blogs by title or content..."
            className="border px-10 py-2 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
            onChange={handleSearchChange}
          />
        </div>

        {/* Date Filters */}
        <div className="flex flex-col md:flex-row gap-4 items-center justify-center">
          <div className="relative w-full md:w-auto">
            <DatePicker
              showIcon
              icon={<BsCalendar />}
              toggleCalendarOnIconClick
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              className="border px-10 py-2 text-center rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholderText="Start Date"
              isClearable
            />
          </div>
          <div className="relative w-full md:w-auto">
            <DatePicker
              showIcon
              icon={<BsCalendar />}
              toggleCalendarOnIconClick
              selected={endDate}
              onChange={(date) => setEndDate(date)}
              className="border text-center px-10 py-2 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholderText="End Date"
              isClearable
            />
          </div>
        </div>
      </div>

      {filteredBlogs.length === 0 ? (
        <p className="text-center text-gray-600 text-xl font-semibold mt-6">
          There&apos;s no post to show
        </p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredBlogs.slice(0, visibleBlogs).map((blog) => (
            <div
              key={blog._id}
              className="p-4 border border-gray-200 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg hover:border-gray-300 bg-white"
            >
              {/* Title */}
              <div className="text-lg md:text-xl font-semibold text-gray-800 mb-3">
                {blog.title}
              </div>
              {/* Content */}
              <div>
                <p
                  dangerouslySetInnerHTML={{
                    __html:
                      blog.content.substring(0, 100) +
                      (blog.content.length > 100 ? "..." : ""),
                  }}
                  className="text-gray-600 text-sm md:text-base mb-4"
                ></p>
              </div>
              {/* Post Cover Image */}
              {blog.imgUrl && (
                <img
                  src={blog.imgUrl}
                  alt={blog.title}
                  className="w-full h-40 object-cover rounded-md mb-4"
                />
              )}
              {/* Author */}
              <p className="text-gray-500 text-sm mt-2">
                <span className="font-bold">Author:</span> {blog.author}
              </p>
              {/* Date */}
              <p className="text-gray-500 text-sm">
                <span className="font-bold">Published:</span>{" "}
                {moment(blog.createdAt).format("YYYY-MM-DD")}
              </p>
              <Link
                to={`/blogs/${blog._id}`}
                className="flex gap-2 items-center justify-center bg-black text-white p-3 mt-4 hover:bg-gray-800 transition-colors duration-300"
              >
                <button className="font-palanquin">Read more</button>
                <FaArrowRightLong />
              </Link>
            </div>
          ))}
        </div>
      )}

      {/* More Posts Button */}
      {visibleBlogs < filteredBlogs.length && (
        <div className="flex justify-center mt-6">
          <button
            onClick={loadMore}
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors duration-300"
          >
            More Posts
          </button>
        </div>
      )}
    </div>
  );
};

export default Blog;
