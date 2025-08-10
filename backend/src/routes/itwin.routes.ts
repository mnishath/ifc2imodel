import { Router } from 'express';
import { listITwins, listIModels } from '../controllers/itwin.controller';
import { requireAuth } from '../middleware/requireAuth';

const router = Router();

router.get('/itwins', requireAuth, listITwins);
router.get('/itwins/:itwinId/imodels', requireAuth, listIModels);

export default router;