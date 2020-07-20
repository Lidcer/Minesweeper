import { Router } from 'express';
import { getManifest } from './manifest-manager';

export function pagesRouter() {
  const router = Router();

  router.get(`/unsupported-browser**`, async (_, res) => {
    const manifest = await getManifest();
    res.render('unsupported-browser.ejs', { manifest });
  });

  router.get(`/terms-of-service**`, async (_, res) => {
    const manifest = await getManifest();
    res.render('terms-of-service.ejs', { manifest });
  });

  router.get(`/**`, async (_, res) => {
    const manifest = await getManifest();
    res.render('page.ejs', { manifest });
  });

  return router;
}
