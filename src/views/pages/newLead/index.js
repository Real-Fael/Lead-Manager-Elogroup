
const newLeadTreatment = (event)=>{
    event.preventDefault();
    
    const userInput = document.getElementById("user");
    const passInput = document.getElementById("password");
    const confirmPassInput = document.getElementById("confirmPass");
    console.log(userInput.value);
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
    const regexPass= new RegExp("^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})")
    
    if(!regexPass.test(passInput.value))  passVerify=false;
    
    if(!passVerify){
        alert("A senha deve possuir ao menos 8 caracteres, contendo no mínimo uma letra, um numero e um caracter especial");
        return;
    }

   
}


function NewLead() {
  return (
    <>
        <form>
            <label htmlFor ="user">Usuário: </label>
            <input id="user" name="user" type="text"></input>
            <label htmlFor ="password">Senha: </label>
            <input id="password" name="password" type="password"></input>
            <label htmlFor ="confirmPass">Confirme sua Senha: </label>
            <input id="confirmPass" name="confirmPass" type="password"></input>
            <p> <button type="submit" onClick={newLeadTreatment}>Registrar</button> </p>

        </form>
    </>

  );
}

export default NewLead;
