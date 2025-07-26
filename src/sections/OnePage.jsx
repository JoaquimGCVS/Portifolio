import { useEffect } from "react";
import Home from './Home/Home';
import Sobre from './Sobre/Sobre';
import { useLocation } from "react-router-dom";
import Projetos from "./Projetos/Projetos";
import Contato from "./Contato/Contato";

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
      <Projetos />
      <Contato />
    </>
  );
};

export default OnePage;