import dashboard from "./assets/dashboard.jpeg";
import ecommerce from "./assets/python.jpeg";
import reactIcon from "./assets/react.jpeg";
import pythonIcon from "./assets/python.jpeg";
import nodejs from "./assets/nodejs.svg";

interface Project {
  id: number;
  category: string;
  img: string;
  title: string;
}

export const projects: Project[] = [
  {
    id: 0,
    category: "react",
    img: reactIcon,
    title: "Dashboard website",
  },
  {
    id: 1,
    category: "python",
    img: ecommerce,
    title: "Ecommerce website",
  },
  {
    id: 2,
    category: "react",
    img: reactIcon,
    title: "Dashboard website2",
  },
  {
    id: 3,
    category: "python",
    img: ecommerce,
    title: "Ecommerce website2",
  },
  {
    id: 4,
    category: "react",
    img: reactIcon,
    title: "Dashboard website3",
  },
  {
    id: 5,
    category: "python",
    img: ecommerce,
    title: "Ecommerce website3",
  },
];
