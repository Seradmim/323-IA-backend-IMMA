import express from 'express';
import { getCryptos, getGainers, getNewCryptos, addCrypto } from '../controllers/cryptoController.js';

const router = express.Router();

router.route('/').get(getCryptos).post(addCrypto);
router.get('/gainers', getGainers);
router.get('/new', getNewCryptos);

export default router;
