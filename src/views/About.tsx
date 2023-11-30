import aboutpage from "../assets/aboutpage.jpeg";
import SocialMediaIcon from "../components/SocialMediaIcon";
import instaIcon from "../assets/instaIcon.svg";
import linkedInIcon from "../assets/linkedInIcon.svg";
import githubIcon from "../assets/githubIcon.svg";
import aboutIllustration from "../assets/aboutIllustration.svg";
import Reveal from "../components/Reveal";
import { motion } from "framer-motion";
import { transition } from "../utils/transition";
import { fadeIn, scale } from "../utils/variants";

export default function About() {
  return (
    <div
      id="about"
      className="min-h-screen flex items-center justify-center relative"
      style={{
        background: `url(${aboutpage})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="max-w-screen-2xl flex flex-col xl:flex-row xl:justify-between items-center xl:items-start gap-12 w-full  py-16 px-12">
        <div className="flex-1 flex flex-col gap-4">
          <Reveal>
            <h2 className="text-center xl:text-start text-4xl sm:text-5xl lg:text-[64px] font-bold text-textPrimary">
              About <span className="text-secondary">me</span>
            </h2>
          </Reveal>
          <Reveal>
            <p className="text-center xl:text-start text-base sm:text-lg text-textSecondary">
              My name is Stella. <br />I am a highly adaptable and disciplined
              professional with a strong drive for learning and achieving goals.
              Building upon my technical skills in self-taught coding and a
              proactive approach to exploring new technologies, my experience as
              an Account Executive and Global Sales and Marketing Coordinator
              has developed my strong communication and coordination abilities.{" "}
              <br />
              The blend of soft skills and technical proficiency equips me to
              not only independently translate business requirements into
              technical implementations but also collaborate seamlessly with
              stakeholders, fostering effective communication and coordination.{" "}
              <br />
              My commitment to continuous learning ensures that I am always
              exploring new technologies to optimize performance, striving to
              deliver more efficient results.
            </p>
          </Reveal>

          <motion.div
            variants={fadeIn("up")}
            transition={transition()}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            className="flex items-center justify-center xl:justify-start gap-6 "
          >
            <a href="https://www.linkedin.com/in/stella-jin-75694253">
              <SocialMediaIcon imgSrc={linkedInIcon} title="linkedIn" />
            </a>
            <a href="https://www.github.com/stella-jin-ys">
              <SocialMediaIcon imgSrc={githubIcon} title="github" />
            </a>
            <a href="https://www.instagram.com/whyungrybird/">
              <SocialMediaIcon imgSrc={instaIcon} title="insta" />
            </a>
          </motion.div>
          <div className="flex-1 flex items-center justify-center ">
            <motion.img
              variants={scale()}
              transition={transition()}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false }}
              src={aboutIllustration}
              alt=""
              className="max-w-[400px] sm:-w-[300px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
