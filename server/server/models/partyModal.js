class Party {

    constructor() {
        this.parties = []
    }
    
    createParty(party){
        const newParty= {
            id:this.parties.length + 1,
            name:party.body.name,
            slogan: party.body.slogan,
            logoUrl:party.body.logoUrl
        }
        
        this.parties.push(newParty);
        return newParty;
        
    
}

    

    getAllParties(){
        return this.parties;
    }


}

export default new Party;