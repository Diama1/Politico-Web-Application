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
    getOneParty(id){
        return this.parties.find(party => party.id === parseInt(id,10));
    

    }

    editParty(id,party){

        const partyIndex = this.parties.findIndex(party => {
            return party.id === parseInt(id,10);
        });
        if (partyIndex > -1){
            this.parties[partyIndex].name = party.name;

            return this.parties[partyIndex];
        }
        
        
    }
    deleteParty(id){

        const partyIndex = this.parties.findIndex(party => {
            return party.id === parseInt(id,10);
        });
        if (partyIndex > -1){
            this.parties.splice(partyIndex,1);
            return this.parties;
        }
        
        
        
    }

    


}

export default new Party;