class Parties {
    constructor(){
        this.parties = [ 
            {id:1, name:'Party 1', slogan:'Hello citizen', logoUrl:'image/logo.jpg' },
            {id:2, name:'Party 2', slogan:'Hello citizen', logoUrl:'image/logo.jpg' },
            {id:3, name:'Party 3', slogan:'Hello citizen', logoUrl:'image/logo.jpg' },
        
        ]
    }
    
    static getAllParties(party){
        return this.parties;
    }
}
module.exports = Parties;