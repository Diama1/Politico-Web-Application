import express from 'express';
import partyController from '../controllers/partyController';
const router = express.Router();



router.post('/', partyController.createPart);


export default router;