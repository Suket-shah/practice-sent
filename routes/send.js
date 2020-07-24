const express = require("express");
const router = express.Router();

const path = require("path");
const fs = require('fs');

router.get("/send-packages", (req, res, next)=>{
    res.render("send");
});

router.post("/send-packages", (req, res, next)=>{
    fs.readFile("./senders.json","utf8", (err, data) =>{
        if(err){
            return console.error(err);
        }
         const file = JSON.parse(data);
        file.senders.push(req.body);
        fs.writeFile('./senders.json', JSON.stringify(file), () => console.log('New Sender!'));
    } )
});

module.exports = router;