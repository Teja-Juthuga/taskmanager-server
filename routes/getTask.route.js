const express = require("express");
const router = express.Router();
const pool = require("../database/connectDB");

router.get("/:id", (req, res) => {
    // console.log(req.params.id)
    const taskId  = req.params.id;   
    const getTaskQuery = `
        SELECT
            *
        FROM
            Tasks
        WHERE
            id = ${taskId}`;

    pool.query(getTaskQuery, (err, results) => {
        if (err){
            console.log('Error: ' + err);
            res.status(500).send('Error fetching data from database');
        }else{
            res.json(results)
        }
    })
    
});

module.exports = router;
