import { Tooltip } from "@mui/material";

interface SocialMediaIconProps {
  imgSrc: string;
  title: string;
}

export default function SocialMediaIcon({
  imgSrc,
  title,
}: SocialMediaIconProps) {
  return (
    <Tooltip title={title} placement="bottom" arrow>
      <div className="flex items-center justify-center h-12 w-12 rounded-full  cursor-pointer hover:bg-secondary transition-all ease-linear duration-300">
        <img src={imgSrc} alt="" />
      </div>
    </Tooltip>
  );
}
