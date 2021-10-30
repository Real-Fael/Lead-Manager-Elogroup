import {React} from "react"
import {Route, BrowserRouter} from "react-router-dom"
//import BadRoute from "./views/pages/badRoute"

import Home from "./views/pages/home"
import Login from "./views/pages/login"
import NewLead from "./views/pages/newLead"
import Register from "./views/pages/register"

const Routes = () => {
    return(
        <BrowserRouter>
            <Route component = { Home }  path="/" exact />
            <Route component = { Login }  path="/login" />
            <Route component = { Register } path ="/register" />
            <Route component = { NewLead } path ="/newlead"/>
        </BrowserRouter>
    )
 }
 
 export default Routes;