import React from "react";
import UsersControllers from "../../../controller/UsersController";
import { Redirect } from "react-router" 
import LeadsControllers from "../../../controller/leadsController";


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
        let arr_temp= this.state.leadList;
        console.log(arr_temp);
        if (this.state.leadList[event.target.id].Status==="Dados Confirmados")
            arr_temp[event.target.id].Status="Reuniao Agendada";
        if (this.state.leadList[event.target.id].Status==="Cliente em Potencial")
            arr_temp[event.target.id].Status="Dados Confirmados";
        
        console.log(`dragEnd:`,arr_temp);
        LeadsControllers.updateLeads(arr_temp);
        this.setState({leadList:arr_temp})
        
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
            <h2>Painel de Leads</h2>    
            <button onClick={this.redirectNewLead}>Novo Lead (+)</button>
            <table>
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
                

            </table>

        </>
    
      );

  } 
}

export default Lead;
