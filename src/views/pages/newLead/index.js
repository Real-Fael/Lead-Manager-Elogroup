import React from "react";
import { Redirect } from "react-router";
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
            <form ref={this.refForm} onSubmit={this.newLeadSubmit}>
                <label htmlFor ="name">Nome: </label>
                <input id="name" name="name" type="text" required></input>
                <label htmlFor ="phoneNumber">Telefone: </label>
                <input id="phoneNumber" name="phoneNumber" type="tel" required></input>
                <label htmlFor ="email">Email: </label>
                <input id="email" name="email" type="email" required></input>
                <table>
                    <thead>
                        <tr>
                            <th>
                                <input name="checkAll" type="checkbox" checked={this.state.checkAll} onChange={this.checkClick} ></input>
                            </th>
                            <th>
                                <p>test</p>
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
                </table>
                <p> <button type="submit" >Salvar</button> </p>
    
            </form>
        </>
    
      );

  } 
}

export default NewLead;
