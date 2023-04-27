import express from 'express';

import {
  generateLongUrlFromShortUrl,
  generateShortUrl,
} from '../controller/url.js';

const router = express.Router();

router.post('/', generateShortUrl);
router.get('/shorten.com/:shortCode', generateLongUrlFromShortUrl);

export default router;
