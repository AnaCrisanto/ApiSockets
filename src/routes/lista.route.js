import { Router } from "express";
import { getAll, insertList, getOne, updateList, deleteList } from '../controllers/lista.controller.js';

const router = Router();

router.get('/', getAll);
router.get('/:_id', getOne);
router.post('/', insertList);
router.put('/:_id', updateList);
router.delete('/:_id', deleteList); 

export default router;
