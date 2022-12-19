const express = require('express');
const router = express();
const userController = require('../controllers/userController');

router.post('/adduser',(userController.adduser));
router.post('/login',(userController.login));
router.post('/send_message',(userController.send_message));
router.get('/all_users',(userController.all_users));
router.get('/get_messages/:userId/:receiverId',(userController.get_messages));
// router.get('/get_messages',(userController.get_messages));

module.exports = router;