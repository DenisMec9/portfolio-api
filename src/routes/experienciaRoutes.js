import express from 'express';
import {
  list,
  getById,
  create,
  update,
  remove
} from '../controllers/experienciaController.js';

const router = express.Router();

router.get('/', list);
router.get('/:id', getById);
router.post('/', create);
router.put('/:id', update);
router.delete('/:id', remove);

export default router;
