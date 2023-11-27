import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";
import { transition } from "../utils/transition";
import { fadeIn, scale } from "../utils/variants";
import homepage from "../assets/homepage.jpeg";
import homeIlustation from "../assets/homeIlustation.svg";
import Button from "../components/Button";

export default function Hero() {
  return (
    <div
      id="home"
      className="min-h-screen flex items-center justify-center relative"
      style={{
        background: `url(${homepage})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover ",
      }}
    >
      <div className="max-w-screen-2xl flex flex-col xl:flex-row xl:justify-between items-center xl:items-start gap-12 w-full py-16 px-12">
        <div className="w-full xl:w-fit">
          <motion.h1
            variants={fadeIn("down")}
            transition={transition()}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            className="w-full xl:w-fit text-center xl:text-start text-4xl sm:text-6xl lg:text-8xl font-bolt text-textPrimary uppercase"
          >
            Creative
            <br />
            <span className="text-secondary">
              <Typewriter
                words={["Developer", "Designer"]}
                cursor
                cursorStyle="_"
                typeSpeed={250}
                deleteSpeed={150}
                loop
              />
            </span>
          </motion.h1>
          <motion.div
            variants={fadeIn("up")}
            transition={transition()}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            className="my-12 flex flex-col sm:flex-row items-center gap-6 justify-center xl:justify-start"
          >
            <Button secondary>Contact me</Button>
          </motion.div>
        </div>

        <motion.img
          variants={scale()}
          transition={transition()}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          src={homeIlustation}
          alt=""
          className="max-w-[400px] sm:-w-[300px]"
        />
      </div>
    </div>
  );
}
