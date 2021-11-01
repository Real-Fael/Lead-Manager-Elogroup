import LeadService from "../services/leadService";



class LeadsControllers {
 
        
    
    static registryNewLead(name,phoneNumber,email,rpa,digitalProduct,
        analytics,rpm,userId){
        
        if (!(name && phoneNumber && email)){
            throw "todos os campos devem ser prenchidos";
            
        }
        try{
            LeadService.registryNewLead(name,phoneNumber,email,rpa,digitalProduct,
                analytics,rpm,userId);

        }catch(e){
            throw e;
        }
       
    }

    static getLeadsFromUser(id){
        let leadList=[]
        if (id>=0)
            leadList=LeadService.getLeadsFromUser(id);

        return leadList;


    }
    static updateLeads(leads){
        LeadService.updateLeads(leads);
    }

}

export default LeadsControllers;