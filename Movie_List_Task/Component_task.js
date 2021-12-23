import react from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Login from "./Login"
import SignUp from "./SignUp"
import Movie_Home from "./Movie_Home"
import CompanyInfo from "./CompanyInfo"

function Component_task() {
    return (
        <div>

            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/home" element={<Movie_Home />} />
                    <Route path="/companyinfo" element={<CompanyInfo/>} />
                    <Route path="/signup" element={<SignUp />} />
                </Routes>
            </BrowserRouter>


        </div>
    )
}


export default Component_task