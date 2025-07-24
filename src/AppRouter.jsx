import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/Header/Header'
import OnePage from './sections/OnePage';


function AppRouter() {
    return (
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path="/" element={<OnePage scrollTo="home"/>} />
                <Route path="/sobre" element={<OnePage scrollTo="sobre"/>} />
            </Routes>
        </BrowserRouter>
    )
}

export default AppRouter;
