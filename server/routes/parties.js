const express = require('express');
const router = express.Router();
const partyControl = require('../controllers/partycontroller')

// const get_parties = partyModel.getAllParties();
const Parties = [ 
    {id:1, name:'Party 1', slogan:'Hello citizen', logoUrl:'image/logo.jpg' },
    {id:2, name:'Party 2', slogan:'Hello citizen', logoUrl:'image/logo.jpg' },
    {id:3, name:'Party 3', slogan:'Hello citizen', logoUrl:'image/logo.jpg' },

]
// This is api that gets all parties

router.get('/', (req, res, next) => {
    console.log('Parties list');
    res.send({ Parties});
    


});

router.post('/', (req, res) => {
res.status(201);
const id = req.body.id;
const name = req.body.name;
const slogan = req.body.slogan;
const logoUrl = req.body.logoUrl;

const Partyexist = Parties.find((party) => {
    party.id === parseInt(id,10)

})
if(Partyexist) {
    res.send('party Already exist')

}
else {
    Parties.push({id, name, slogan,logoUrl});
    res.send(Parties);
}

})

router.put('/:id',(req, res) => {
const id = req.body.id;
const partyIndex = Parties.findIndex(party => {
    return party.id ===parseInt(id,10)
})
if (partyIndex > -1){
    Parties[partyIndex].description=description;
    res.send(Parties);

}
})

router.delete('/:id', (req,res) => {
res.status(200)
const id = req.params.id;
const partyIndex = Parties.findIndex(party => {
    return party.id === parseInt(id,10)
})

if (partyIndex != -1){
    Parties.splice(partyIndex, 1)
    res.send(Parties)
}
else{
    res.send('party is not found')
}


})

module.exports = router;