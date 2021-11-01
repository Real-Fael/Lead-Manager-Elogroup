import React from "react";
import { Form, Button, Table, Col, Container, Row } from "react-bootstrap";
import { Redirect } from "react-router";
import MenuBar from "../../../components/menuBar";
import LeadsControllers from "../../../controller/leadsController";
import UsersControllers from "../../../controller/UsersController";



class NewLead extends React.Component {
    constructor(props){
        super(props);
        this.refForm = React.createRef();
        const{id,user}= UsersControllers.getSession();
        this.state={
            rpa:false,
            digitalProduct:false,
            analytics:false,
            rpm:false,
            checkAll:false,
            redirect:false,
            session:{
                id,
                user
            }
        }
    }
    newLeadSubmit = (event)=>{
        event.preventDefault();
        const nameInput=this.refForm.current.name
        const phoneNumberInput=this.refForm.current.phoneNumber
        const emailInput=this.refForm.current.email
        try{
           
            LeadsControllers.registryNewLead(nameInput.value, phoneNumberInput.value,
                 emailInput.value, this.state.rpa, this.state.digitalProduct, 
                 this.state.analytics, this.state.rpm,this.state.session.id);  
            window.alert("Lead incluído com sucesso");
            this.setState({redirect:true});

        }catch (e){
            window.alert(e);
        }
         
    }

    checkClick = (event)=>{
        const target = event.target;

        //Caso o checkbox clicado for o CheckAll, muda todos os estados do outros checkbox
        if (target.name==="checkAll"){
            this.setState({
                rpa:target.checked,
                digitalProduct:target.checked,
                analytics:target.checked,
                rpm:target.checked,
                checkAll:target.checked
            });
            return;
        }
        //muda somente o estado do compenente que chamou o evento
        this.setState({
            [target.name]:target.checked
        })

        

    }

  render(){

    if (this.state.session.id<0){//Para ser uma sessão válida o id deve ser maior que 0
        return <Redirect to="/login" />
    }

    if(this.state.redirect) {
        return <Redirect to="/lead" />
    }
  
    return (
        <>
            <MenuBar ></MenuBar>
            <Form ref={this.refForm} onSubmit={this.newLeadSubmit}>
            <Container className="mt-4">
            <Row >
            <Col></Col>
            <Col className="mt-5" xs={4} >
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Nome: *</Form.Label>
                    <Form.Control name="name" type="text" placeholder="Nome" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPhone">
                    <Form.Label>Telefone: *</Form.Label>
                    <Form.Control name="phoneNumber" type="text" placeholder="(00) 0 0000-0000" required/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email: *</Form.Label>
                    <Form.Control name="email" type="email" placeholder="exemplo@exemplo.com" required/>
                </Form.Group>
                </Col><Col xs={4}>
                <Form.Group className="mb-3" controlId="formOportunidades">
                <h2>Novo Lead</h2>
                <Form.Label>Oportunidades: *</Form.Label>
                <Table striped bordered hover >
                <thead>
                    <tr >
                        <th>
                            <input name="checkAll" type="checkbox" checked={this.state.checkAll} onChange={this.checkClick} ></input>
                        </th>
                        <th>
                            
                        </th>
                    </tr>
                 </thead>
                    <tbody>
                        <tr>
                            <td>
                                <input name="rpa" type="checkbox" checked={this.state.rpa} onChange={this.checkClick}></input>
                            </td>
                            <td>
                                <p>RPA</p>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <input name="digitalProduct"type="checkbox"checked={this.state.digitalProduct} onChange={this.checkClick}></input>
                            </td>
                            <td>
                                <p>Produto Digital</p>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <input name= "analytics" type="checkbox"checked={this.state.analytics} onChange={this.checkClick}></input>
                            </td>
                            <td>
                                <p>Analytics</p>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <input name="rpm" type="checkbox" checked={this.state.rpm} onChange={this.checkClick}></input>
                            </td>
                            <td>
                                <p>RPM</p>
                            </td>
                        </tr>
                    </tbody>
                </Table>
                </Form.Group>
                
                <Button variant="primary" type="submit" >
                    Salvar
                </Button>
            </Col>
            <Col></Col>
            </Row>
        </Container>
            </Form>
        </>
    
      );

  } 
}

export default NewLead;
