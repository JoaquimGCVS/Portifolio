import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "../pages/Home"
import Sobre from "../pages/Sobre"
import Projetos from "../pages/Projetos";
import Contato from "../pages/Contato";
import Header from "../components/Header/Header";

const AppRouter = () => (
    <BrowserRouter>
        <Header />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sobre" element={<Sobre />} />
            <Route path="/projetos" element={<Projetos />} />
            <Route path="/contato" element={<Contato />} />
        </Routes>
    </BrowserRouter>
)


export default AppRouter;