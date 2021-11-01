import '../../../App.css';
import React from 'react';
import UsersControllers from '../../../controller/UsersController';
import { Redirect } from 'react-router';
import { Form, Button, Col, Row, Container } from 'react-bootstrap';
import MenuBar from '../../../components/menuBar';

//import 'bootstrap/dist/css/bootstrap.min.css';
class Login extends React.Component {
  constructor(props){
    super(props);
    this.refForm = React.createRef();
    this.state={
      redirect:false
    }
  }
  mySubmit = (event) => {
    event.preventDefault();
    const userInput=this.refForm.current.user;
    const passInput=this.refForm.current.password;
   try{
      UsersControllers.loginCheck(userInput.value,passInput.value);
      alert("Logado com sucesso")
      this.setState({
        redirect:true
      })

   }catch(e){
       alert(e);
       return;
   } 

    return;
}  

  render(){

    if(this.state.redirect) {
      return <Redirect to="/lead" />
    }

    return(
      <>
        <MenuBar ></MenuBar>
        <Container className="mt-4">
          <Row >
            <Col></Col>
            <Col >
              <Form ref={this.refForm} onSubmit={this.mySubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Usuário:</Form.Label>
                  <Form.Control name="user" type="text" placeholder="Usuário" required />
                  <Form.Text className="text-muted">
                    Nunca compartilhe sua senha com terceiros.
                  </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control name="password" type="password" placeholder="Password" required/>
                </Form.Group>
                <Button variant="primary" type="submit" >
                  Entrar
                </Button>
              </Form>
            </Col>
            <Col></Col>


          </Row>
        </Container>
      </>
    );

  } 
}

export default Login;
