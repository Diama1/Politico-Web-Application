
import officemodel from '../models/officeModel';

const officeController= {

    officeCreate(req, res) {
        if (!req.body.name || !req.body.requirement || !req.body.responsibility ) {
          return res.status(400).send({
            status: 400,
            message: 'name and requirement or responsiblity could not be empty',
          })
        }
        
        const newoffice = officemodel.createOffice(req);
         res.status(201).send({
             status: 201,
             data: newoffice
         }
         )
    },

    

    
    

}

export default officeController;
