const Router = require('express');
const router = new Router();

const userRouter = require('./userRouter');
const characterRouter = require('./characterRouter');
const commentRouter = require('./commentRouter');

router.use('/user', userRouter);
router.use('/character', characterRouter);
router.use('/comment', commentRouter);

module.exports = router;