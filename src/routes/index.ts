import { NextFunction, Request, Response, Router } from 'express';
import userRouter from './users';

const router = Router();

/* GET home page. */
// router.get('/', function(req: Request, res: Response, next: NextFunction) {
//   res.render('index', { title: 'Express' });
// });
router.use("/", userRouter);

export default router;
