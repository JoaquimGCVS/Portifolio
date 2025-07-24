import { useEffect } from "react";
import Home from './Home/Home';
import Sobre from './Sobre/Sobre';
import { useLocation } from "react-router-dom";

const OnePage = ({ scrollTo }) => {
  const location = useLocation();

  useEffect(() => {
    if (scrollTo) {
      const section = document.getElementById(scrollTo);
      if (section) section.scrollIntoView({ behavior: "smooth" });
    }
  }, [location, scrollTo]);

  return (
    <>
      <Home />
      <Sobre />
    </>
  );
};

export default OnePage;