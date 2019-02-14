import express from 'express';
import officeControl from '../controllers/officeController';
const router = express.Router();



router.post('/',officeControl.officeCreate);



export default router;
