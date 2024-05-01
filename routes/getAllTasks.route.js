const express = require("express");
const router = express.Router();

const jwt = require("jsonwebtoken");
const authenticateToken = require("../middleware");

const pool = require("../database/connectDB");

router.get("/", authenticateToken ,(req, res) => {
    const getAllTasksQuery = `SELECT * FROM Tasks`;    pool.query(getAllTasksQuery , (err, results) => {
        if (err){
            console.log('Error: ' + err);
            res.status(500).send('Error fetching data from database');
        }else{
            res.json(results)
        }
    })

    
     /* 
      **** Step 1 *****
    const getAllTasksQuery = `SELECT * FROM Tasks`;
    
    pool.query(getAllTasksQuery , (err, results) => {
        if (err){
            console.log('Error: ' + err);
            res.status(500).send('Error fetching data from database');
        }else{
            res.json(results)
        }
    })
    */

    /*
        ******* Step 2 **********
    let jwtToken;
    const authHeader = req.headers["authorization"];
    if (authHeader !== undefined) {
        jwtToken = authHeader.split(" ")[1];
    }

    if (jwtToken === undefined) {
        res.status(401);
        res.send("Invalid Access Token");
      } else {
        jwt.verify(jwtToken, "MY_SECRET_TOKEN", async (error, payload) => {
            if (error) {
              res.send("Invalid Access Token");
            } else {
                authenticateToken();
                const getAllTasksQuery = `SELECT * FROM Tasks`;

                pool.query(getAllTasksQuery , (err, results) => {
                    if (err){
                        console.log('Error: ' + err);
                        res.status(500).send('Error fetching data from database');
                    }else{
                        res.json(results)
                    }
                })
            }
        })
      }
      */
});

module.exports = router;
