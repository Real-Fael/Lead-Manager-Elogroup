import {React} from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Nav, Navbar } from "react-bootstrap";
import UsersControllers from "../controller/UsersController";



function MenuBar(){
    let navOptions;
    if(UsersControllers.getSession().id<0){
        navOptions = (<>
            <Nav className="me-auto">
            </Nav>
            <Nav>
                <Nav.Link href="/register">Cadastrar</Nav.Link>
                <Nav.Link  href="/login">Login</Nav.Link>
            </Nav>
        </>);
    }else{
        navOptions = (<>
            <Nav className="me-auto">
                <Nav.Link href="/lead">Lead</Nav.Link>
                <Nav.Link href="/newLead">NewLead</Nav.Link>
            </Nav>
            <Nav>
                <Nav.Link  href="/login" onClick={UsersControllers.logout}>Sair</Nav.Link>
            </Nav>
            </>)
    }
    return(
        <>
       <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="/">ELO<b>GROUP</b></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    {navOptions}
                </Navbar.Collapse>
            </Container>
        </Navbar>

        </>
    )

}

export default MenuBar;