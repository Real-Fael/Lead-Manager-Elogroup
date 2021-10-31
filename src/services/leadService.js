import LocalStorage from "./apiServices/localStorage";

class LeadService{

    
    static registryNewLead(name,phoneNumber,email,rpa,digitalProduct,
        analytics,rpm){
        const lead= {
            name,
            phoneNumber,
            email,
            rpa,
            digitalProduct,
            analytics,
            rpm,
            Status:"Cliente em Potencial"
        }
        LocalStorage.storeLead(lead);
    }

   

}


export default LeadService;