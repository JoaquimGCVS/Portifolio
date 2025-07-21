import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "../pages/Home"
import Sobre from "../pages/Sobre"

const AppRouter = () => (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sobre" element={<Sobre />} />
        </Routes>
    </BrowserRouter>
)


export default AppRouter;