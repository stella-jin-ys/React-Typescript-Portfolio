import aboutpage from "../assets/aboutpage.jpeg";
import SocialMediaIcon from "../components/SocialMediaIcon";
import instaIcon from "../assets/instaIcon.svg";
import linkedInIcon from "../assets/linkedInIcon.svg";
import githubIcon from "../assets/githubIcon.svg";
import aboutIllustration from "../assets/aboutIllustration.svg";

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
          <h2 className="text-center xl:text-start text-4xl sm:text-5xl lg:text-[64px] font-bold text-textPrimary">
            About <span className="text-secondary">me</span>
          </h2>
          <p className="text-center xl:text-start text-base sm:text-lg text-textSecondary">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
            omnis, facilis beatae mollitia totam exercitationem ad. Saepe ex
            voluptas, nesciunt sequi recusandae quam earum? Libero ipsam illum
            perferendis cum nisi.
          </p>
          <div className="flex items-center justify-center xl:justify-start gap-6 ">
            <SocialMediaIcon imgSrc={instaIcon} title="insta" />
            <SocialMediaIcon imgSrc={linkedInIcon} title="linkedIn" />
            <SocialMediaIcon imgSrc={githubIcon} title="github" />
          </div>
          <div className="flex-1 flex items-center justify-center">
            <img
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
