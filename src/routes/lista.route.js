import { Router } from "express";
import { getAll, insertLista, getOne, updateLista, deleteLista } from '../controllers/lista.controller.js';

const router = Router();

router.get('/', getAll);
router.get('/:code', getOne);
router.post('/', insertLista);
router.put('/:code', updateLista);
router.delete('/:code', deleteLista); 

export default router;
