import React from "react";
import { BrowserRouter } from "react-router-dom";

import Header from "./header/Header";
import Routes from "./routes/Routes";
import Footer from "./footer/Footer";

//MainMenu

import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Services from "./pages/services/Services";
import Gallery from "./pages/gallery/Gallery";
import Contact from "./pages/contact/Contact";
import Franchise from "./pages/franchise/Franchise";

//SubMenu

import Careers from "./pages/about/careers/Careers";
import News from "./pages/about/news/News";
import Partners from "./pages/about/partners/Partners";
import VehicleWraps from "./pages/services/service/vehicleWraps/VehicleWraps";
import PartialWraps from "./pages/services/service/partialWraps/PartialWraps";
import Design from "./pages/services/service/design/Design";
import PaintProtection from "./pages/services/service/paintProtection/PaintProtection";
import WindowTinting from "./pages/services/service/windowTinting/WindowTinting";

class App extends React.Component {
  render() {
    const routes = [
      { path: "/", component: Home },
      { path: "/about", component: About },
      { path: "/services", component: Services },
      { path: "/gallery", component: Gallery },
      { path: "/contact", component: Contact },
      { path: "/franchise", component: Franchise },
      { path: "/about/news", component: News },
      { path: "/about/patners", component: Partners },
      { path: "/about/careers", component: Careers },
      { path: "/services/vehiclewraps", component: VehicleWraps },
      { path: "/services/partialwraps", component: PartialWraps },
      { path: "/services/design", component: Design },
      { path: "/services/paintprotection", component: PaintProtection },
      { path: "/services/windowtinting", component: WindowTinting },
    ];

    const generateRoutes = (routesArray) =>
      routesArray.map((element, index) => (
        <Routes
          key={index}
          routePath={element.path}
          routeComponent={element.component}
        />
      ));
    return (
      <BrowserRouter>
        <Header />
        {generateRoutes(routes)}
        <Footer />
      </BrowserRouter>
    );
  }
}

export default App;
