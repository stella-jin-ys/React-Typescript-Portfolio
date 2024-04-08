import car from "./assets/car.jpeg";
import dashboard from "./assets/dashboard.jpeg";
import shop from "./assets/shop.jpeg";
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
    img: shop,
    title: "3D Shop",
    link: "https://stella-ai-3d-shop.netlify.app/",
  },

  {
    id: 1,
    category: "next",
    img: car,
    title: "Car Rental website",
    link: "https://stella-car-rent-website.netlify.app/",
  },
  {
    id: 2,
    category: "react",
    img: dashboard,
    title: "Dashboard website",
    link: "https://stella-admin-board.netlify.app/",
  },
];
