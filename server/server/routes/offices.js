import express from 'express';
import officeControl from '../controllers/officeController';
const router = express.Router();



router.post('/',officeControl.officeCreate);
router.get('/',officeControl.getAllOffices)



export default router;
