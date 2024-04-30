const express = require("express");
const router = express.Router();
const pool = require("../database/connectDB");

router.get("/", (req, res) => {
    const getAllTasksQuery = `SELECT * FROM Tasks`;
    
    pool.query(getAllTasksQuery , (err, results) => {
        if (err){
            console.log('Error: ' + err);
            res.status(500).send('Error fetching data from database');
        }else{
            res.json(results)
        }
    })
    
});

module.exports = router;
