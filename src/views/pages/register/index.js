import React from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import { Redirect } from "react-router";

import MenuBar from "../../../components/menuBar";

import UsersControllers from "../../../controller/UsersController";



class Register extends React.Component{

    constructor(props){
        super(props);
        this.refForm= React.createRef();
    
        this.state= {
            redirect:false,
            
        }
    }

    mySubmit = (event) => {
        event.preventDefault();
        const userInput=this.refForm.current.user;
        const passInput=this.refForm.current.password;
        const confirmPassInput=this.refForm.current.confirmPass;
        try{
            UsersControllers.registryCheck(userInput.value,passInput.value,confirmPassInput.value);
            alert("Usuario Criado com sucesso");
            
            this.setState({
                redirect:true,
                
            })
        }catch(e){
            alert(e);
            
            return;
        } 

        return;
    }  

    render() {
        
        if(this.state.redirect) {
            return <Redirect to="/login" />
          }

        return (
            <>
                <MenuBar ></MenuBar> 
                <Container className="mt-4">
                    <Row >
                        <Col></Col>
                        <Col >
                            <Form ref={this.refForm} onSubmit={this.mySubmit}>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Usuário: *</Form.Label>
                                    <Form.Control name="user" type="text" placeholder="Usuário" required />
                                    <Form.Text className="text-muted">
                                    Nunca compartilhe sua senha com terceiros.
                                    </Form.Text>
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>Password: *</Form.Label>
                                    <Form.Control name="password" type="password" placeholder="Password" required/>
                                    <Form.Text className="text-muted">
                                    A senha deve possuir ao menos 8 caracteres, contendo no mínimo uma letra, um numero e um caracter especial.
                                    </Form.Text>
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
                                    <Form.Label>Confirme sua Senha: *</Form.Label>
                                    <Form.Control name="confirmPass" type="password" placeholder="Password" required/>
                                </Form.Group>
                                
                                <Button  variant="primary" type="submit" >
                                    Registrar
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

export default Register;
