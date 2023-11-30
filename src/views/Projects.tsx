import { useState } from "react";
import projectPage from "../assets/projects.jpeg";
import Button from "../components/Button";
import Card from "../components/Card";
import Reveal from "../components/Reveal";
import { fadeIn } from "../utils/variants";
import { transition } from "../utils/transition";
import { motion } from "framer-motion";
import SocialMediaIcon from "../components/SocialMediaIcon";
import { projects } from "../data";
import reactIcon from "../assets/react-svgrepo-com.svg";
import nextIcon from "../assets/nextjs-svgrepo-com.svg";
import tsIcon from "../assets/typescript-svgrepo.svg";
import nodeIcon from "../assets/node-js-svgrepo-com.svg";
import tailwindIcon from "../assets/tailwindcss-svgrepo-com.svg";
import muiIcon from "../assets/material-ui-svgrepo-com.svg";

export default function Projects() {
  const [activeCat, setActiveCat] = useState<string>("react");
  const filteredProjects = () => {
    if (activeCat === "react") {
      return projects;
    } else {
      return projects.filter((item) => item.category === "next");
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
          <Reveal>
            <h2 className="text-center xl:text-start text-4xl sm:text-5xl lg:text-[64px] font-bold text-textPrimary">
              Recent ongoing <span className="text-secondary">projects</span>
            </h2>
          </Reveal>

          <motion.div
            variants={fadeIn("up")}
            transition={transition()}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            className="flex items-center gap-4 justify-center xl:justify-start
            flex-col sm:flex-row"
          >
            <Button
              secondary={activeCat === "react" ? true : false}
              onClick={() => setActiveCat("react")}
            >
              React.JS
            </Button>
            <Button
              secondary={activeCat === "next" ? true : false}
              onClick={() => setActiveCat("next")}
            >
              Next.JS
            </Button>
          </motion.div>

          <motion.div
            variants={fadeIn("up")}
            transition={transition()}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            className="flex gap-12 mt-12 flex-wrap justify-center "
          >
            {filteredProjects().map((item) => (
              <Card imgSrc={item.img} title={item.title} link={item.link} />
            ))}
          </motion.div>
          <Reveal>
            <h2 className="text-center xl:text-start text-4xl sm:text-5xl lg:text-[64px] font-bold text-textPrimary mt-9">
              Tech <span className="text-secondary">stacks</span>
            </h2>
          </Reveal>
          <motion.div
            variants={fadeIn("up")}
            transition={transition()}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            className="flex items-center justify-center xl:justify-start gap-6 "
          >
            <SocialMediaIcon imgSrc={reactIcon} title="react" />
            <SocialMediaIcon imgSrc={nextIcon} title="next" />
            <SocialMediaIcon imgSrc={tsIcon} title="typescript" />
            <SocialMediaIcon imgSrc={tailwindIcon} title="next" />
            <SocialMediaIcon imgSrc={muiIcon} title="typescript" />
            <SocialMediaIcon imgSrc={nodeIcon} title="react" />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
