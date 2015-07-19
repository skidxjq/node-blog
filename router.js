/**
 * Created by mac on 15-7-11.
 */
var express = require('express');
var router  = express.Router();

router.get("/index",userController.index);