import contact from "../assets/contact.jpeg";
import contactIllustration from "../assets/contactIllustration.svg";
import LabelInput from "../components/LabelInput";
import Button from "../components/Button";
import { motion } from "framer-motion";
import Reveal from "../components/Reveal";
import { fadeIn, scale } from "../utils/variants";
import { transition } from "../utils/transition";

export default function Contact() {
  return (
    <div
      id="contact"
      className="min-h-screen flex items-center justify-center relative "
      style={{
        background: `url(${contact})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover ",
      }}
    >
      <div className="max-w-screen-2xl flex flex-col xl:flex-row xl:justify-between items-center xl:items-start gap-12 w-full pt-20 pb-20 sm:pb-16 px-12">
        <div className="flex-1 flex flex-col gap-4">
          <Reveal>
            <h2 className="text-center xl:text-start text-4xl sm:text-5xl lg:text-[64px] font-bold text-textPrimary">
              Get in touch <span className="text-secondary">today!</span>
            </h2>
          </Reveal>

          <motion.img
            variants={scale()}
            transition={transition()}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            src={contactIllustration}
            alt=""
            className="max-w-[400px] sm:-w-[300px]"
          />
        </div>
        <motion.div
          variants={fadeIn("up")}
          transition={transition()}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          className="flex-1 flex flex-col gap-6 w-full max-w-[696px]
          "
        >
          <div className="flex flex-col sm:flex-row items-center gap-6">
            <LabelInput labelText="Your name" placeholderText="Name" />
            <LabelInput labelText="Your email" placeholderText="Email" />
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-6">
            <LabelInput
              labelText="Your message"
              placeholderText="Leave a massage..."
              textarea
            />
          </div>
          <Button secondary>Send Message</Button>
        </motion.div>
      </div>
    </div>
  );
}
