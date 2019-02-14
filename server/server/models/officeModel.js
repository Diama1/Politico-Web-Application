class Politicoffice {

    constructor() {
        this.offices = []
    }
    
    createOffice(office){
        const office_info= {
            id:this.offices.length + 1,
            name:office.body.name,
            requirement: office.body.requirement,
            responsibility:office.body.responsibility
        }
        
        this.offices.push(office_info);
        return office_info;
        
    
}


    

    
    
    


}

export default new Politicoffice;