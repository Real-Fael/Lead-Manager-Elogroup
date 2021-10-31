import React from "react";
import { Redirect } from "react-router";
import LeadsControllers from "../../../controller/leadsController";
import LocalStorage from "../../../services/apiServices/localStorage";



class NewLead extends React.Component {
    constructor(props){
        super(props);
        this.refForm = React.createRef();
        this.state={
            rpa:false,
            digitalProduct:false,
            analytics:false,
            rpm:false,
            checkAll:false,
            redirect:false
        }

    }
    newLeadSubmit = (event)=>{
        event.preventDefault();
        const nameInput=this.refForm.current.name
        const phoneNumberInput=this.refForm.current.phoneNumber
        const emailInput=this.refForm.current.email
        try{
           
            LeadsControllers.registryNewLead(nameInput.value, phoneNumberInput.value,
                 emailInput.value, this.state.rpa, this.state.digitalProduct, this.state.analytics, this.state.rpm);  
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
    if(this.state.redirect) {
        return <Redirect to="/lead" />
    }
  
    return (
        <>
            <form ref={this.refForm}>
                <label htmlFor ="name">Nome: </label>
                <input id="name" name="name" type="text"></input>
                <label htmlFor ="phoneNumber">Telefone: </label>
                <input id="phoneNumber" name="phoneNumber" type="tel"></input>
                <label htmlFor ="email">Email: </label>
                <input id="email" name="email" type="email"></input>
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
                <p> <button type="submit" onClick={this.newLeadSubmit}>Salvar</button> </p>
    
            </form>
        </>
    
      );

  } 
}

export default NewLead;
