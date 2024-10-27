const express = require("express");
const { request } = require("http");
const path = require("path");
const router = express.Router();

router.get('/page1',(req,res)=>{
    res.sendFile(path.join(__dirname,'../public','/index.html'));
});
module.exports=router;