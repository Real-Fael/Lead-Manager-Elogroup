class LocalStorage{
    static getUserLoginInformation(userName){
        let exists= null;
        let logins = this.getLoginsList();
        for(let i=0;i<logins.length;i++){
            if(logins[i].user===userName) {
                exists={...logins[i], id:i};
                break;
            }
        }
        return exists;


    }
    static getLoginsList(){
        let logins = [];
        if (window.localStorage.hasOwnProperty("logins"))
            logins = JSON.parse(window.localStorage.getItem("logins"));

        return logins;
    }


    static storeUserLogin(user,password){
        
        //caso retorne um objeto ja existe esse usuario
        if (this.getUserLoginInformation(user)) throw "Usuário ja cadastrado"
        
        let logins = this.getLoginsList();
        logins.push({
            user,
            password
        })
        window.localStorage.setItem("logins",JSON.stringify(logins));
    }

    static storeSession({id,user}){
        window.sessionStorage.setItem("session",JSON.stringify({id,user}));

    }
    static deleteThisSession(){
        window.sessionStorage.removeItem("session");
    }

    static getLeadList(){
        let leads = [];
        if (window.localStorage.hasOwnProperty("leads"))
            leads = JSON.parse(window.localStorage.getItem("leads"));

        return leads;
    }
    static storeLead(lead){
        let leads = this.getLeadList();
        leads.push(lead)
        window.localStorage.setItem("leads",JSON.stringify(leads));
      
    }

}

export default LocalStorage;