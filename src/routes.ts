import { ComponentType } from "react";
import { About } from "./Pages/About";
import { Home } from "./Pages/Home";

export type JosesarandaRoute = {
  name: string;
  path: string;
  page: ComponentType;
};

export const routes : JosesarandaRoute[] = [
  {
    name: 'Home',
    path: '/',
    page: Home
  },{
    name: 'About',
    path: '/about',
    page: About
  }
];

