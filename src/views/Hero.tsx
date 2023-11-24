import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";
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
          <h1 className="w-full xl:w-fit text-center xl:text-start text-4xl sm:text-6xl lg:text-8xl font-bolt text-textPrimary uppercase">
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
          </h1>
          <div className="my-12 flex flex-col sm:flex-row items-center gap-6 justify-center xl:justify-start">
            <Button secondary>Contact me</Button>
          </div>
        </div>

        <img
          src={homeIlustation}
          alt=""
          className="max-w-[400px] sm:-w-[300px]"
        />
      </div>
      {/*   <div className="absolute bottom-0 left-0 w-full h-[1px] bg-divider" /> */}
    </div>
  );
}
