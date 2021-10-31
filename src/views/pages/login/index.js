import '../../../App.css';
import React from 'react';
import UsersControllers from '../../../controller/UsersController';
import { Redirect } from 'react-router';

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
      return <Redirect to="/newLead" />
    }

    return(
      <>
        <form ref={this.refForm}>
            <label htmlFor ="user">Usuário: </label>
            <input id="user" name="user" type="text"></input>
            <label htmlFor ="password">Senha: </label>
            <input id="password" name="password" type="password"></input>
            <p> <button onClick={this.mySubmit} type="submit" >Login</button> </p>
  
        </form>
      </>
    );

  } 
}

export default Login;
