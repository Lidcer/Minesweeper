import bodyParser from 'body-parser';
//import * as fileUpload from 'express-fileupload';
import { Router } from 'express';

export function apiRouter() {
  const router = Router();
  router.use(bodyParser.urlencoded({ extended: false }));
  router.use(bodyParser.json());
  //router.use(fileUpload.default()); enables file upload


  return router;
}
