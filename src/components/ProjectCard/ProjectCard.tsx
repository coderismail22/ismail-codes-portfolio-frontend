import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

import { TProject } from "@/pages/Home/ProjectsForHome/projectsforhome.type";
import { Link } from "react-router-dom";
import { Badge } from "../ui/badge";
import { FaGithub } from "react-icons/fa";
import { VscVmRunning } from "react-icons/vsc";

interface ProjectCardProps {
  project: TProject;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  const {
    coverImage,
    title,
    description,
    liveLink,
    githubLink,
    technologies,
    duration,
  } = project;
  return (
    <Card className="bg-slate-300">
      <CardHeader>
        <CardTitle className="text-2xl  text-black font-semibold">
          {title}
        </CardTitle>
        <CardDescription className="text-black">{description}</CardDescription>
      </CardHeader>
      <CardContent>
        {/*cover image*/}
        <Link target="_blank" to={liveLink}>
          <img src={coverImage} alt="Cover Image" className="rounded-md" />
        </Link>
        {/*Technologies*/}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 mt-2">
          {technologies.map((technology) => (
            <Badge
              variant="outline"
              className="flex flex-col m-1 font-semibold text-black bg-slate-100 hover:bg-slate-200"
            >
              {technology}
            </Badge>
          ))}
        </div>
        {/* Duration */}

        <Badge
          variant="destructive"
          className="flex flex-col m-1 font-semibold"
        >
          Duration: {""}
          {duration}
        </Badge>
      </CardContent>
      <CardFooter className="flex flex-col ">
        <div className="flex gap-5 items-center ">
          <Button variant="outline" className="bg-slate-400">
            <Link
              className="font-bold bold flex gap-2 items-center justify-center"
              target="_blank"
              to={liveLink}
            >
              Live App
              <VscVmRunning />
            </Link>
          </Button>
          <Button variant="outline" className="bg-slate-400">
            <Link
              className="font-bold flex gap-2 items-center justify-center"
              target="_blank"
              to={githubLink}
            >
              GitHub
              <FaGithub />
            </Link>
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;
