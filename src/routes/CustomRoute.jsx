import { Route, Routes } from "react-router-dom"
import { Homepage } from "../Pages/Homepage"
import { SinglePhoto } from "../Pages/SinglePhoto"


export  function CustomRoute() {
    return (
        <Routes>


                <Route path="/" element={<Homepage/>}/>
                <Route path="/:id" element={<SinglePhoto/>}/>

        </Routes>
    )
}