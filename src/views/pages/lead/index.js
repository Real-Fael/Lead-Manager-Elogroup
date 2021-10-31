import React from "react";
import LocalStorage from "../../../services/apiServices/localStorage";



class Lead extends React.Component {
    constructor(props){
        super(props);
        this.refForm = React.createRef();
        

    }
    checkClick = (event)=>{

    }
    leadSubmit = (event)=>{
        event.preventDefault();
       

         
    }


  render(){
      return (
        <>
            <form ref={this.refForm}>
                <label htmlFor ="name">Nome: </label>
                <input id="name" name="name" type="text"></input>
                <label htmlFor ="phoneNumber">Telefone: </label>
                <input id="phoneNumber" name="phoneNumber" type="tel"></input>
                <label htmlFor ="email">Email: </label>
                <input id="email" name="email" type="email"></input>
                
                <p> <button type="submit" onClick={this.leadSubmit}>Salvar</button> </p>
    
            </form>
        </>
    
      );

  } 
}

export default Lead;
