import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/Header/Header'
import Home from './sections/Home/Home';


function AppRouter() {
    return (
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path="/" element={<Home/>} />
            </Routes>
        </BrowserRouter>
    )
}

export default AppRouter;
