import {React} from "react"
import {Route, BrowserRouter} from "react-router-dom"
import BadRoute from "./views/pages/badRoute"

import Home from "./views/pages/home"
import Login from "./views/pages/login"

const Routes = () => {
    return(
        <BrowserRouter>
            <Route component = { Home }  path="/" exact />
            <Route component = { Login }  path="/login" />
            <Route component = { BadRoute }/>
        </BrowserRouter>
    )
 }
 
 export default Routes;