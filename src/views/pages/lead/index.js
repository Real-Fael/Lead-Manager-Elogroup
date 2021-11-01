import React from "react";
import UsersControllers from "../../../controller/UsersController";
import { Redirect } from "react-router" 
import LeadsControllers from "../../../controller/leadsController";
import MenuBar from "../../../components/menuBar";
import { Table, Button,Col, Row, Container } from "react-bootstrap";


class Lead extends React.Component {
    constructor(props){
        super(props);
        this.refForm = React.createRef();
        const{id,user}= UsersControllers.getSession();      
        const list = LeadsControllers.getLeadsFromUser(id);
    
        this.state={
            redirect:false,
            leadList:list,
            session:{
                id,
                user
            }
        }

    }
   
    redirectNewLead= (event)=>{
        this.setState({redirect:true});
    }
    mouseDragEnd = (event)=>{
        console.log(event.target.id);
        

        this.setState({
            leadList: LeadsControllers.mouseDragController(this.state.leadList,event.target.id)
        })
        
    }

  render(){
    if (this.state.session.id<0){//Para ser uma sessão válida o id deve ser maior que 0
        return <Redirect to="/login" />;
    }

    if(this.state.redirect) {
        return <Redirect to="/newLead" />;
    }
      return (
        <>
            <MenuBar ></MenuBar>
            <Container className="mt-4">
                <Row >
                    <Col></Col>
                    <Col xs={7} >
                    <Row>
                        <Col ></Col>
                        <Col xs={7}>
                        <h2>Bem Vindo(a) {this.state.session.user.toUpperCase()} !!!</h2>

                        </Col>
                        <Col></Col>
                    </Row>

                        <h3>Painel de Leads</h3>  
                        
                        <div className="d-grid w-25 mb-3 mt-3">  
                            
                            <Button onClick={this.redirectNewLead}  >Novo Lead (+)</Button>

                            
                        </div>
                        <Table striped bordered hover >
                            <thead>
                                <tr>
                                    <th>Cliente em Potencial</th>
                                    <th>Dados Confirmados</th>
                                    <th>Reunião Agendada</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.state.leadList.map((value,index)=>{
                                            if(value.Status==="Cliente em Potencial"){
                                                return(<tr key={index}>
                                                    <td id={index} draggable={true} onDragEnd={this.mouseDragEnd}>{value.name}</td>
                                                    <td></td>
                                                    <td></td>
                                                </tr>)
                                            }
                                            if(value.Status==="Dados Confirmados"){
                                                return(<tr key={index}>
                                                    <td></td>
                                                    <td id={index} draggable={true} onDragEnd={this.mouseDragEnd}>{value.name}</td>
                                                    <td></td>
                                                </tr>)
                                            }       
                                            if(value.Status==="Reuniao Agendada"){
                                                return(<tr key={index}>
                                                    <td></td>
                                                    <td></td>
                                                    <td id={index} draggable={true} onDragEnd={this.mouseDragEnd}>{value.name}</td>
                                                </tr>)
                                            }   
                                            return<></>
                                        })}
                            </tbody>
                        </Table>
                    </Col>
                    <Col></Col>
                </Row>
            </Container>

        </>
    
      );

  } 
}

export default Lead;
