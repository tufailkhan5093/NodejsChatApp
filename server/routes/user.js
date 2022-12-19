const express = require('express');
const router = express();
const multer = require('multer');
const path = require('path');
const userController = require('../controllers/userController');

let x = 1;
const uploadimage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, `./public/images`)
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + '-'+ Date.now() + '-' + x++ + path.extname(file.originalname))
    }
})
const upload = multer({
    storage: uploadimage,
});


router.post('/adduser', upload.single('image'),(userController.adduser));
router.post('/login',(userController.login));
router.post('/send_message',(userController.send_message));
router.get('/all_users',(userController.all_users));
router.get('/get_messages/:userId/:receiverId',(userController.get_messages));
// router.get('/get_messages',(userController.get_messages));

module.exports = router;