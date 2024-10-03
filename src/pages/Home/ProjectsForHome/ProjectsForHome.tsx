import ProjectCard from "@/components/ProjectCard/ProjectCard";
import { useEffect, useState } from "react";
import { RotatingLines } from "react-loader-spinner";
import axios from "axios";
import { TProject } from "./projectsforhome.type";

const ProjectsForHome = () => {
  const [projects, setProjects] = useState<TProject[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchPosts = async () => {
    setLoading(true);
    try {
      const { data } = await axios.get("http://localhost:5000/api/v1/project");

      setProjects(data?.data);
    } catch (error) {
      console.error("Error fetching projects:", error);
      setError("Something went wrong while fetching the blogs.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

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
    <>
      <h1 className="uppercase text-3xl lg:text-4xl text-center text-white font-bold my-8 overline">
        Latest Projects
      </h1>
      {projects.length === 0 ? (
        <p className="text-center text-red-600 text-xl font-semibold mt-6 border p-10 mx-2">
          There&apos;s nothing to show
        </p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center items-center px-16 my-20 gap-2">
          {projects.map((project) => (
            <ProjectCard key={project?._id} project={project} />
          ))}
        </div>
      )}
    </>
  );
};

export default ProjectsForHome;
