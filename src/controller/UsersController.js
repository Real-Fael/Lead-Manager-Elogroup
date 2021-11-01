import UserService from "../services/UserService";


class UsersControllers {
 
        
    
    static registryCheck(user,password,confirmPassword){
        
        if (!(user && password && confirmPassword)) 
            throw "Todos os campos devem ser preenchidos";
        
        try{
            UserService.registryLogins(user,password,confirmPassword)

        }catch(e){
            throw e;
        }

       
    }

    static loginCheck(user,password){
        if (!(user && password)) throw "Todos os campos devem ser preenchidos";
        try{
            UserService.loginValidate(user,password)
        }catch(e){
            throw e;
        }


    
    }
    
    static getSession(){
      
      const session= UserService.getSession();
      return (!!session)? session:{id:-1,user:""}//Padronização para quando nao houver sessao ativa
    }

}

export default UsersControllers;