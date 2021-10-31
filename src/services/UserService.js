import LocalStorage from "./apiServices/localStorage";

class UserService{

    static validationPass= "^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})"
   
    static registryLogins(user,password,confirmPassword){
        if (password !== confirmPassword)
            throw "As senhas devem ser iguais";
        
        let passVerify = true;
        //Expressão regular para verificar se existe letras e números caracteres especiais e tamanho de no mínimo 8 
        const regexPass= new RegExp(this.validationPass);
        
        if(!regexPass.test(password))  passVerify=false;
        
        if(!passVerify)
            throw "A senha deve possuir ao menos 8 caracteres, contendo no mínimo uma letra, um numero e um caracter especial"
        
        try{
            LocalStorage.storeUserLogin(user,password);

        }catch(e){
            throw e;
        }
    }

    static loginValidate(user,password){
        let loginInformation= LocalStorage.getUserLoginInformation(user);

        if (!loginInformation) throw "Usuário incorreto";

        if (password!==loginInformation.password) throw "Senha incorreta";
        
        LocalStorage.storeSession(loginInformation);
    }

}


export default UserService;