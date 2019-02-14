import express from 'express';
import partyController from '../controllers/partyController';
const router = express.Router();



router.post('/', partyController.createPart);
router.get('/',partyController.getAllParties);


export default router;