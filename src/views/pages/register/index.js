import React from "react";
import UsersControllers from "../../../controller/UsersController";



class Register extends React.Component{

    constructor(props){
        super(props);
        this.refForm= React.createRef();
    }

    mySubmit = (event) => {
        event.preventDefault();
        const userInput=this.refForm.current.user;
        const passInput=this.refForm.current.password;
        const confirmPassInput=this.refForm.current.confirmPass;
       try{
           UsersControllers.registryCheck(userInput.value,passInput.value,confirmPassInput.value);

       }catch(e){
           alert(e);
           return;
       } 

        return;
    }  

    render() {
        return (
            <>
                <form ref={this.refForm}>
                    <label htmlFor ="user">Usuário: </label>
                    <input id="user" name="user" type="text"></input>
                    <label htmlFor ="password">Senha: </label>
                    <input id="password" name="password" type="password"></input>
                    <label htmlFor ="confirmPass">Confirme sua Senha: </label>
                    <input id="confirmPass" name="confirmPass" type="password"></input>
                    <p> <button onClick={this.mySubmit} type="submit" >Registrar</button> </p>

                </form>
            </>

        );
    }
}

export default Register;
