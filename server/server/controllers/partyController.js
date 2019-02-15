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
    },

    getOne(req, res) {
        const getoneparty = partymodal.getOneParty(req.params.id);
        res.status(200).send({
            status:200,
            data:getoneparty
        })
    },
    EditParty(req, res) {
        let editparty = partymodal.getOneParty(req.params.id);
        if (!editparty) {
            res.status(404).send({
                status:404,
                message:"Party does not exist"
            });
        } 
        else {
            const editparty = partymodal.editParty(req.params.id,req.body);
            res.status(200).send({
                status:200,
                data: editparty
            });

        }  
    },
    partyDelete(req,res) {
        let party_to_delete = partymodal.getOneParty(req.params.id);
        if (!party_to_delete) {
            res.status(404).send({
                status:404,
                message:"Party does not exist"
            });
        } 
        else {
            const delete_party = partymodal.deleteParty(req.params.id);
            res.status(200).send({
                status:200,
                data: delete_party
            });

        }  

    }
    

}

export default partyController;
