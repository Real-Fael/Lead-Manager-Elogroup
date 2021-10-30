import React from "react";



class Register extends React.Component{

    constructor(props){
        super(props);
        this.refForm= React.createRef();
        this.validationPass= "^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})"
    }

    mySubmit = (event) => {
        event.preventDefault();
        const userInput=this.refForm.current.user;
        const passInput=this.refForm.current.password;
        const confirmPassInput=this.refForm.current.confirmPass;

        if (!(userInput.value && passInput.value && confirmPassInput.value)) {
            alert("Usuario e senha deve ser preenchido");
            return;
        }
        if (passInput.value !== confirmPassInput.value){
            alert("As senhas devem ser iguais");
            return;
        }
        let passVerify = true;
        //Expressão regular para verificar se existe letras e números caracteres especiais e tamanho de no mínimo 8 
        const regexPass= new RegExp(this.validationPass);
        
        if(!regexPass.test(passInput.value))  passVerify=false;
        
        if(!passVerify){
            alert("A senha deve possuir ao menos 8 caracteres, contendo no mínimo uma letra, um numero e um caracter especial");
            return;
        }

        let logins = [];
        if (window.localStorage.hasOwnProperty("logins"))
            logins = JSON.parse(window.localStorage.getItem("logins"))
        

        console.log("Pegando do localStorage");
        console.log(logins);
        
        logins.push({
            user:userInput.value,
            password:passInput.value
        })

        console.log("Colocando no vetor");
        console.log(logins);
        window.localStorage.setItem("logins",JSON.stringify(logins));

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
