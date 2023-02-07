import { Router } from "express";
import * as ApiController from '../controllers/apiControllwe';

const router = Router();

router.get('/ping',ApiController.ping);
router.get('/rt',ApiController.random);
router.get('/nome/:nome',ApiController.Nome);
router.post('/inserirData',ApiController.createCliente);
router.get('/buscaEmpresa',ApiController.buscaEmpresa);



export default router;