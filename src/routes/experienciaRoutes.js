import express from "express";
import { 
  listarExperiencias,
  buscarExperienciaPorId,
  criarExperiencia,
  atualizarExperiencia,
  excluirExperiencia
} from "../controllers/experienciaController.js";

const router = express.Router();

router.get("/", listarExperiencias);
router.get("/:id", buscarExperienciaPorId);   // ✅ ADICIONE ISTO
router.post("/", criarExperiencia);
router.put("/:id", atualizarExperiencia);
router.delete("/:id", excluirExperiencia);

export default router;
