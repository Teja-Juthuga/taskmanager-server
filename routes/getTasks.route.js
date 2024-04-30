const express = require("express");
const router = express.Router();
const pool = require("../database/connectDB");

router.get("/", (req, res) => {
    
    pool.query(`SELECT * FROM Tasks`, (err, results) => {
        if (err){
            console.log('Error: ' + err);
            res.status(500).send('Error fetching data from database');
        }else{
            res.json(results)
        }
    })
    
});

module.exports = router;
