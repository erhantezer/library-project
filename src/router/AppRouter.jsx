import { BrowserRouter, Route, Routes } from "react-router-dom"
import Navbar from "../components/navbar/Navbar"
import { GlobalStyles } from "../styles/Global.styles"
import Home from "../pages/home/Home"
import Login from "../pages/login/Login"
import Register from "../pages/register/Register"
import PrivateRouter from "./PrivateRouter"
import About from "../pages/about/About"
import Detail from "../pages/detail/Detail"
import Footer from "../components/footer/Footer"
import { useState } from "react"

const AppRouter = () => {
    const [currentUser, setCurrentUser] = useState(
        sessionStorage.getItem("user")
    );

    return (
        <BrowserRouter>
            <Navbar currentUser={currentUser} setCurrentUser={setCurrentUser} />
            <GlobalStyles/>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="login" element={<Login setCurrentUser={setCurrentUser} />} />
                <Route path="register" element={<Register/>} />
                <Route  element={<PrivateRouter/>}>
                    <Route path="about" element={<About/>} />
                    <Route path="detail/:id" element={<Detail/>} />
                </Route>
            </Routes>
            <Footer/>
        </BrowserRouter>
    )
}

export default AppRouter