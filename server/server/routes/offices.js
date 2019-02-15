import express from 'express';
import officeControl from '../controllers/officeController';
const router = express.Router();



router.post('/',officeControl.officeCreate);
router.get('/',officeControl.getAllOffices)
router.get('/:id',officeControl.getOne);


export default router;
