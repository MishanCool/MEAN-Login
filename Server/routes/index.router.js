 const express = require('express');
 const router = express.Router();

 //ctrl mean controller
 const ctrlUser = require('../controllers/user.controller');

 router.post('/register', ctrlUser.register); //('uri', function wich can handal, user sing up request in the client side)
 router.post('/authenticate', ctrlUser.authenticate);

 //can configer routing middleware inside this application
 module.exports = router;