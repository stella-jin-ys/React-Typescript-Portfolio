import car from "./assets/car.jpeg";
import dashboard from "./assets/dashboard.jpeg";
interface Project {
  id: number;
  category: string;
  img: string;
  title: string;
  link: string;
}

export const projects: Project[] = [
  {
    id: 0,
    category: "react",
    img: dashboard,
    title: "Dashboard website",
    link: "https://stella-admin-board.netlify.app/",
  },
  {
    id: 1,
    category: "next",
    img: car,
    title: "Car Rental website",
    link: "https://car-rent-website.netlify.app/",
  },
];
