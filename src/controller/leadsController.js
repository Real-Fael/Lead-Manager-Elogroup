import LeadService from "../services/leadService";



class LeadsControllers {
 
        
    
    static registryNewLead(name,phoneNumber,email,rpa,digitalProduct,
        analytics,rpm){
        
        if (!(name && phoneNumber && email)){
            throw "todos os campos devem ser prenchidos";
            
        }
        try{
            LeadService.registryNewLead(name,phoneNumber,email,rpa,digitalProduct,
                analytics,rpm);

        }catch(e){
            throw e;
        }
       
    }


}

export default LeadsControllers;