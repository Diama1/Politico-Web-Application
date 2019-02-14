import partymodal from '../models/partyModal';

const partyController= {

    createPart(req, res) {
        if (!req.body.name || !req.body.slogan) {
          return res.status(400).send({
            status: 400,
            message: 'name and slogan Address could not be empty',
          })
        }
        
        const newparty = partymodal.createParty(req);
         res.status(201).send({
             status: 201,
             data: newparty
         }
         )
    },

    getAllParties(req, res) {
        const getparty = partymodal.getAllParties();
        res.status(200).send({
            status:200,
            data:getparty
        })
    }
}

export default partyController;
