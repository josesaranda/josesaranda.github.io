import { ComponentType } from "react";
import { About } from "./Pages/About";
import { Home } from "./Pages/Home";
import { WeddingPage } from "./Pages/Wedding";
import { faHome, faAddressCard, faWineGlass, IconDefinition } from '@fortawesome/free-solid-svg-icons'

export type JosesarandaRoute = {
  name: string;
  path: string;
  page: ComponentType;
  icon: IconDefinition;
  hidden?: boolean;
};

export const routes : JosesarandaRoute[] = [
  {
    name: 'Home',
    path: '/',
    icon: faHome,
    page: Home
  },{
    name: 'About',
    path: '/about',
    icon: faAddressCard,
    page: About
  },
  {
    name: 'Wedding',
    path: '/wedding',
    icon: faWineGlass,
    page: WeddingPage,
    hidden: true
  }
];

