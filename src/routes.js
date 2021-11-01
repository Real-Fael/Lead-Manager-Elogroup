import {React} from "react"
import {Route, BrowserRouter} from "react-router-dom"
//import BadRoute from "./views/pages/badRoute"


import Lead from "./views/pages/lead"
import Login from "./views/pages/login"
import NewLead from "./views/pages/newLead"
import Register from "./views/pages/register"

const Routes = () => {
    return(
        <BrowserRouter>
            <Route component = { Register }  path="/" exact />
            <Route component = { Login }  path="/login" />
            <Route component = { Register } path ="/register" />
            <Route component = { NewLead } path ="/newlead"/>
            <Route component = { Lead } path ="/lead"/>
        </BrowserRouter>
    )
 }
 
 export default Routes;