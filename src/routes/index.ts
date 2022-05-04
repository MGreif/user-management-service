import * as express from 'express';
const router = express.Router();

/* GET home page. */
router.get('/', function (req, res) {
  res.send('user-management-service works!');
});

export default router;
