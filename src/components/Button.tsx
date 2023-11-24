import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  secondary?: boolean;
  icon?: string;
  onClick?: () => void;
}

export default function Button({
  children,
  secondary,
  icon,
  onClick,
}: ButtonProps) {
  return (
    <div
      onClick={onClick}
      className={`${secondary ? "bg-secondary" : "bg-accent"} ${
        secondary ? "hover:bg-hoverSecondary" : "hover:bg-hoverPrimary"
      } transition-all ease-linear duration-300 py-2.5 px-8 rounded-full text-white text-base sm:text-lg text-center text-bold relative w-full sm:w-fit cursor-pointer`}
    >
      {icon ? (
        <div className="flex items-center gap-2.5 justify-center">
          <p className="[text-shadow:_0_4px_4px_rgb(0_0_0_/_50%)]">
            {children}
          </p>
          <img src={icon} alt="" />
        </div>
      ) : (
        <p className="[text-shadow:_0_4px_4px_rgb(0_0_0_/_50%)]">{children}</p>
      )}
    </div>
  );
}
