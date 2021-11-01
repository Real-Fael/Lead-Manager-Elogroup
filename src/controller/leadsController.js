import LeadService from "../services/leadService";



class LeadsControllers {
 
        
    
    static registryNewLead(name,phoneNumber,email,rpa,digitalProduct,
        analytics,rpm,userId){
        
        if (!(name && phoneNumber && email)){
            // eslint-disable-next-line
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

    static mouseDragController(leadList, targetId){
        let arr_temp= leadList;
        console.log(arr_temp);
        if (leadList[targetId].Status==="Dados Confirmados")
            arr_temp[targetId].Status="Reuniao Agendada";
        if (leadList[targetId].Status==="Cliente em Potencial")
            arr_temp[targetId].Status="Dados Confirmados";
        
        console.log(`dragEnd:`,arr_temp);
        LeadsControllers.updateLeads(arr_temp);
        return arr_temp;
    }

    static updateLeads(leads){
        LeadService.updateLeads(leads);
    }

}

export default LeadsControllers;