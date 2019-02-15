import express from 'express';
import partyController from '../controllers/partyController';
const router = express.Router();



router.post('/', partyController.createPart);
router.get('/',partyController.getAllParties);
router.get('/:id',partyController.getOne);
router.put('/:id',partyController.EditParty);
router.delete('/:id',partyController.partyDelete);



export default router;