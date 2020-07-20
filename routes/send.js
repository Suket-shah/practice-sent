const express = require("express");
const router = express.Router();

router.get("/send-packages", (req, res, next)=>{
    res.render("send");
});

module.exports = router;