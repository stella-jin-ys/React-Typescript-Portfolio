import { useState } from "react";
import projectPage from "../assets/projects.jpeg";
import Button from "../components/Button";
import Card from "../components/Card";
import Reveal from "../components/Reveal";
import { motion } from "framer-motion";
import { projects } from "../data";

export default function Projects() {
  const [activeCat, setActiveCat] = useState<string>("react");
  const filteredProjects = () => {
    if (activeCat === "react") {
      return projects.filter((item) => item.category === "react");
    } else {
      return projects.filter((item) => item.category === "python");
    }
  };
  return (
    <div
      id="projects"
      className="min-h-screen relative"
      style={{
        background: `url(${projectPage})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover ",
      }}
    >
      <div className="max-w-screen-2xl w-full py-16 px-12 mx-auto">
        <div className="flex-1 flex flex-col gap-4">
          <h2 className="text-center xl:text-start text-4xl sm:text-5xl lg:text-[64px] font-bold text-textPrimary">
            My recent <span className="text-secondary">projects</span>
          </h2>
          <div
            className="flex items-center gap-4 justify-center xl:justify-start
            flex-col sm:flex-row"
          >
            <Button
              secondary={activeCat === "react" ? true : false}
              onClick={() => setActiveCat("react")}
            >
              React
            </Button>
            <Button
              secondary={activeCat === "python" ? true : false}
              onClick={() => setActiveCat("python")}
            >
              Python
            </Button>
          </div>

          <div className="flex gap-12 mt-12 flex-wrap justify-center ">
            {filteredProjects().map((item) => (
              <Card imgSrc={item.img} title={item.title} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
