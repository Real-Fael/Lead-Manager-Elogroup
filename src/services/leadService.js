import LocalStorage from "./apiServices/localStorage";

class LeadService{

    
    static registryNewLead(name,phoneNumber,email,rpa,digitalProduct,
        analytics,rpm,userId){
        const lead= {
            name,
            phoneNumber,
            email,
            rpa,
            digitalProduct,
            analytics,
            rpm,
            Status:"Cliente em Potencial",
            userIdFk:userId
        }
        LocalStorage.storeLead(lead);
    }

    static getLeadsFromUser(id){
        const leadList= LocalStorage.getLeadList();
        //Filtra os leads de acordo com a chave
        return leadList.filter((value,index) => {
            value.id=index;//usado para manter o index do vetor original
            if(!value.hasOwnProperty("userIdFk"))
                return false
            if(value.userIdFk===id)
                return true
            return false
        })


    }

    static updateLeads(leads){
        let leadList = LocalStorage.getLeadList();
        console.log(`original:`,leadList);
        console.log(`alterada:`,leads);
        const newLeadList = leadList.map((value,index) => {
            let aux= value;
            for(let i=0; i<leads.length;i++){
                if (leads[i].id===index){//Atualiza os status das leads que foram modificadas 
                    aux.Status=leads[i].Status;
                }
            }
            return aux;
        });
        console.log(`nova:`, newLeadList);
        LocalStorage.storeLeadList(newLeadList);

    }

   

}


export default LeadService;