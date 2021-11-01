import LocalStorage from "./apiServices/localStorage";

class UserService{

    static validationPass= "^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})"
   
    static registryLogins(user,password,confirmPassword){
        if (password !== confirmPassword)
            // eslint-disable-next-line
            throw "As senhas devem ser iguais";
        
        let passVerify = true;
        //Expressão regular para verificar se existe letras e números caracteres especiais e tamanho de no mínimo 8 
        const regexPass= new RegExp(this.validationPass);
        
        if(!regexPass.test(password))  passVerify=false;
        
        if(!passVerify)
            // eslint-disable-next-line
            throw "A senha deve possuir ao menos 8 caracteres, contendo no mínimo uma letra, um numero e um caracter especial"
        
        try{
            LocalStorage.storeUserLogin(user,password);

        }catch(e){
            throw e;
        }
    }

    static loginValidate(user,password){
        let loginInformation= LocalStorage.getUserLoginInformation(user);
        // eslint-disable-next-line
        if (!loginInformation) throw "Usuário incorreto";
        // eslint-disable-next-line
        if (password!==loginInformation.password) throw "Senha incorreta";
        
        LocalStorage.storeSession(loginInformation);
    }

    static getSession(){
        return LocalStorage.getSession();
    }
    static logout(){
        LocalStorage.deleteThisSession();
    }

}


export default UserService;